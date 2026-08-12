import { db, auth } from "./firebase.js";

import {
    doc,
    setDoc,
    onSnapshot,
    deleteField
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // BASIC ELEMENTS
    // =========================================================

    const loginButton =
        document.getElementById("loginBtn");

    const resetLockButton =
        document.getElementById("resetLockBtn");

    const logoutButton =
        document.getElementById("logoutBtn");

    const adminPinInput =
        document.getElementById("adminPin");

    const loginError =
        document.getElementById("loginError");

    const adminLogin =
        document.getElementById("adminLogin");

    const adminPanel =
        document.getElementById("adminPanel");


    // =========================================================
    // DENNIS ADMIN EMAIL
    // =========================================================

    const ADMIN_EMAIL =
        "chuhei925@gmail.com";


    // =========================================================
    // FIREBASE MISSION STATUS
    // =========================================================

    let missionOverrides = {};

    const missionControlRef =
        doc(
            db,
            "missionControl",
            "status"
        );


    // =========================================================
    // LISTEN TO FIREBASE
    // =========================================================

    onSnapshot(
        missionControlRef,

        function (snapshot) {

            if (snapshot.exists()) {

                missionOverrides =
                    snapshot.data();

            } else {

                missionOverrides = {};

            }


            if (auth.currentUser) {

                loadAdmin();

            }

        },

        function (error) {

            console.error(
                "Firebase mission sync error:",
                error
            );

        }
    );


    // =========================================================
    // CHECK LOGIN STATUS
    // =========================================================

    onAuthStateChanged(
        auth,

        function (user) {

            if (user) {

                adminLogin.style.display =
                    "none";

                adminPanel.style.display =
                    "block";

                loadAdmin();

            } else {

                adminLogin.style.display =
                    "block";

                adminPanel.style.display =
                    "none";

            }

        }
    );


    // =========================================================
    // LOGIN
    // =========================================================

    loginButton.addEventListener(
        "click",

        async function () {

            const password =
                adminPinInput.value.trim();


            if (!password) {

                loginError.innerText =
                    "請輸入 Admin Password";

                return;

            }


            loginButton.disabled = true;

            loginButton.innerText =
                "LOGIN...";


            try {

                await signInWithEmailAndPassword(
                    auth,
                    ADMIN_EMAIL,
                    password
                );


                loginError.innerText =
                    "";

                adminPinInput.value =
                    "";


            } catch (error) {

                console.error(error);

                loginError.innerText =
                    "登入失敗：請檢查 Email / Password";

            } finally {

                loginButton.disabled =
                    false;

                loginButton.innerText =
                    "ENTER";

            }

        }
    );


    // =========================================================
    // GET MISSION OVERRIDE
    //
    // null = Follow Schedule
    // true = Force Unlock
    // false = Force Lock
    // =========================================================

    function getOverride(missionId) {

        const key =
            "mission" + missionId;


        if (
            Object.prototype.hasOwnProperty.call(
                missionOverrides,
                key
            )
        ) {

            return missionOverrides[key];

        }


        return null;

    }


    // =========================================================
    // LOAD ADMIN MISSION LIST
    // =========================================================

    function loadAdmin() {

        const list =
            document.getElementById(
                "adminMissionList"
            );


        if (!list) return;


        list.innerHTML =
            "";


        if (
            typeof missions ===
            "undefined"
        ) {

            list.innerHTML = `
                <div class="admin-info">
                    ⚠️ 找不到 missions.js
                </div>
            `;

            return;

        }


        missions.forEach(
            function (mission) {

                const override =
                    getOverride(
                        mission.id
                    );


                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "admin-mission-card";


                // =================================================
                // FOLLOW SCHEDULE
                // =================================================

                let statusText =
                    "FOLLOW SCHEDULE";

                let buttonText =
                    "🔓 Unlock";


                // =================================================
                // MANUALLY UNLOCKED
                // =================================================

                if (
                    override === true
                ) {

                    statusText =
                        "🔓 MANUALLY UNLOCKED";

                    buttonText =
                        "🔒 Lock";

                }


                // =================================================
                // MANUALLY LOCKED
                // =================================================

                if (
                    override === false
                ) {

                    statusText =
                        "🔒 MANUALLY LOCKED";

                    buttonText =
                        "🔓 Unlock";

                }


                item.innerHTML = `

                    <div class="admin-mission-info">

                        <div class="admin-mission-number">
                            ${String(
                                mission.id
                            ).padStart(2, "0")}
                        </div>


                        <div>

                            <div class="admin-mission-title">
                                ${mission.title}
                            </div>


                            <div class="admin-mission-subtitle">
                                ${mission.shortTitle}
                            </div>


                            <div class="admin-unlocked">
                                ${statusText}
                            </div>

                        </div>

                    </div>


                    <div class="admin-mission-action">

                        <button
                            class="unlock-btn"
                            data-id="${mission.id}"
                        >
                            ${buttonText}
                        </button>

                    </div>

                `;


                list.appendChild(
                    item
                );

            }
        );


        // =========================================================
        // UNLOCK / LOCK BUTTONS
        // =========================================================

        document
            .querySelectorAll(
                ".unlock-btn"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",

                        async function () {

                            const id =
                                Number(
                                    this.dataset.id
                                );


                            const current =
                                getOverride(id);


                            /*
                                Behaviour:

                                FOLLOW SCHEDULE
                                ↓
                                Unlock

                                MANUALLY UNLOCKED
                                ↓
                                Lock

                                MANUALLY LOCKED
                                ↓
                                Unlock
                            */


                            const newValue =
                                current === true
                                    ? false
                                    : true;


                            try {

                                await setDoc(
                                    missionControlRef,

                                    {
                                        [
                                            "mission" +
                                            id
                                        ]:
                                            newValue
                                    },

                                    {
                                        merge:
                                            true
                                    }
                                );


                            } catch (error) {

                                console.error(
                                    "Mission update error:",
                                    error
                                );


                                alert(
                                    "❌ 更新失敗，請檢查 Firebase。"
                                );

                            }

                        }
                    );

                }
            );

    }


    // =========================================================
    // RESET ALL LOCKS
    //
    // IMPORTANT:
    // DO NOT WRITE FALSE.
    //
    // DELETE ALL OVERRIDES.
    //
    // After reset:
    //
    // Firebase Override
    //        ↓
    //      NONE
    //        ↓
    // Index follows missions.js Schedule
    // =========================================================

    resetLockButton.addEventListener(
        "click",

        async function () {

            const confirmed =
                confirm(
                    "確定要 Reset 所有 Mission？\n\n" +
                    "Reset 後會清除所有 Admin 手動 Lock / Unlock。\n\n" +
                    "之後所有 Mission 會重新按照原本 Schedule 自動開啟。"
                );


            if (!confirmed) {

                return;

            }


            try {

                // =================================================
                // CREATE DELETE COMMANDS
                // =================================================

                const resetData =
                    {};


                missions.forEach(
                    function (mission) {

                        resetData[
                            "mission" +
                            mission.id
                        ] =
                            deleteField();

                    }
                );


                // =================================================
                // DELETE ALL MANUAL OVERRIDES
                // =================================================

                await setDoc(
                    missionControlRef,

                    resetData,

                    {
                        merge:
                            true
                    }
                );


                // =================================================
                // SUCCESS
                // =================================================

                alert(
                    "✅ Reset All Locks 完成！\n\n" +
                    "所有 Admin 手動 Lock / Unlock 已清除。\n\n" +
                    "Mission 現在會重新按照原本 Schedule 自動開啟。"
                );


            } catch (error) {

                console.error(
                    "Reset All Locks error:",
                    error
                );


                alert(
                    "❌ Reset 失敗。\n\n" +
                    "請檢查 Firebase Console / Browser Console。"
                );

            }

        }
    );


    // =========================================================
    // LOGOUT
    // =========================================================

    logoutButton.addEventListener(
        "click",

        async function () {

            try {

                await signOut(
                    auth
                );

            } catch (error) {

                console.error(
                    "Logout error:",
                    error
                );

            }


            location.reload();

        }
    );

});