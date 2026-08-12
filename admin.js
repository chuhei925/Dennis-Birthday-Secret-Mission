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

    // =====================================================
    // ELEMENTS
    // =====================================================

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


    // =====================================================
    // ADMIN EMAIL
    // =====================================================

    const ADMIN_EMAIL =
        "chuhei925@gmail.com";


    // =====================================================
    // MISSION OVERRIDES
    //
    // null / missing = FOLLOW SCHEDULE
    // true           = FORCE UNLOCK
    // false          = FORCE LOCK
    // =====================================================

    let missionOverrides = {};


    const missionControlRef =
        doc(
            db,
            "missionControl",
            "status"
        );


    // =====================================================
    // FIREBASE REAL-TIME SYNC
    // =====================================================

    onSnapshot(
        missionControlRef,

        function (snapshot) {

            missionOverrides =
                snapshot.exists()
                    ? snapshot.data()
                    : {};

            console.log(
                "Mission Control:",
                missionOverrides
            );


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


    // =====================================================
    // AUTH STATE
    // =====================================================

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


    // =====================================================
    // LOGIN
    // =====================================================

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


            if (
                ADMIN_EMAIL ===
                "YOUR_ADMIN_EMAIL_HERE"
            ) {

                loginError.innerText =
                    "請先設定 Admin Email";

                return;

            }


            loginButton.disabled =
                true;

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

                console.error(
                    error
                );

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


    // =====================================================
    // GET OVERRIDE
    // =====================================================

    function getOverride(
        missionId
    ) {

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


    // =====================================================
    // LOAD ADMIN
    // =====================================================

    function loadAdmin() {

        const list =
            document.getElementById(
                "adminMissionList"
            );


        if (!list) {

            return;

        }


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
                // STATUS
                // =================================================

                let statusText =
                    "🕐 FOLLOW SCHEDULE";

                let buttonText =
                    "🔓 Unlock";


                // Force Unlock
                if (
                    override === true
                ) {

                    statusText =
                        "🔓 MANUALLY UNLOCKED";

                    buttonText =
                        "🔒 Lock";

                }


                // Force Lock
                else if (
                    override === false
                ) {

                    statusText =
                        "🔒 MANUALLY LOCKED";

                    buttonText =
                        "🔄 Schedule";

                }


                item.innerHTML = `

                    <div class="admin-mission-info">

                        <div class="admin-mission-number">

                            ${String(
                                mission.id
                            ).padStart(
                                2,
                                "0"
                            )}

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


        // =====================================================
        // BUTTON EVENTS
        // =====================================================

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


                            const key =
                                "mission" +
                                id;


                            const current =
                                getOverride(
                                    id
                                );


                            try {

                                // =========================================
                                // CURRENTLY FORCE UNLOCKED
                                //
                                // Unlock → Lock
                                //
                                // IMPORTANT:
                                // DELETE override
                                // so Mission goes back to Schedule
                                // =========================================

                                if (
                                    current === true
                                ) {

                                    await setDoc(
                                        missionControlRef,

                                        {
                                            [key]:
                                                deleteField()
                                        },

                                        {
                                            merge:
                                                true
                                        }
                                    );


                                    console.log(
                                        "Mission " +
                                        id +
                                        " → FOLLOW SCHEDULE"
                                    );

                                }


                                // =========================================
                                // CURRENTLY FORCE LOCKED
                                //
                                // Lock → Schedule
                                // =========================================

                                else if (
                                    current === false
                                ) {

                                    await setDoc(
                                        missionControlRef,

                                        {
                                            [key]:
                                                deleteField()
                                        },

                                        {
                                            merge:
                                                true
                                        }
                                    );


                                    console.log(
                                        "Mission " +
                                        id +
                                        " → FOLLOW SCHEDULE"
                                    );

                                }


                                // =========================================
                                // FOLLOW SCHEDULE
                                //
                                // Schedule → Force Unlock
                                // =========================================

                                else {

                                    await setDoc(
                                        missionControlRef,

                                        {
                                            [key]:
                                                true
                                        },

                                        {
                                            merge:
                                                true
                                        }
                                    );


                                    console.log(
                                        "Mission " +
                                        id +
                                        " → FORCE UNLOCK"
                                    );

                                }


                            } catch (error) {

                                console.error(
                                    "Mission update error:",
                                    error
                                );


                                alert(
                                    "更新失敗，請檢查 Firebase。"
                                );

                            }

                        }
                    );

                }
            );

    }


    // =====================================================
    // RESET ALL LOCKS
    //
    // Keep your current Reset All Locks behaviour.
    // This version clears ALL overrides and returns
    // EVERY Mission to its original Schedule.
    // =====================================================

    if (resetLockButton) {

        resetLockButton.addEventListener(
            "click",

            async function () {

                const confirmed =
                    confirm(
                        "確定要 Reset ALL Missions？\n\nReset 後所有 Mission 會重新按照原本指定時間開啟。"
                    );


                if (!confirmed) {

                    return;

                }


                if (
                    typeof missions ===
                    "undefined"
                ) {

                    alert(
                        "找不到 missions.js"
                    );

                    return;

                }


                try {

                    const update =
                        {};


                    missions.forEach(
                        function (mission) {

                            update[
                                "mission" +
                                mission.id
                            ] =
                                deleteField();

                        }
                    );


                    await setDoc(
                        missionControlRef,

                        update,

                        {
                            merge:
                                true
                        }
                    );


                    alert(
                        "🔄 Reset 完成！\n\n所有 Mission 已恢復按照 Schedule 自動開啟。"
                    );


                } catch (error) {

                    console.error(
                        "Reset error:",
                        error
                    );


                    alert(
                        "Reset 失敗，請檢查 Firebase 設定。"
                    );

                }

            }
        );

    }


    // =====================================================
    // LOGOUT
    // =====================================================

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",

            async function () {

                try {

                    await signOut(
                        auth
                    );

                } catch (error) {

                    console.error(
                        error
                    );

                }


                location.reload();

            }
        );

    }

});