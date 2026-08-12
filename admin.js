document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ======================================
        // ELEMENTS
        // ======================================

        const loginButton =
            document.getElementById(
                "loginBtn"
            );


        const resetLockButton =
            document.getElementById(
                "resetLockBtn"
            );


        const logoutButton =
            document.getElementById(
                "logoutBtn"
            );



        // ======================================
        // LOGIN
        // ======================================

        loginButton.addEventListener(
            "click",
            function () {

                const pin =
                    document.getElementById(
                        "adminPin"
                    ).value;


                if (pin === "2026") {

                    document.getElementById(
                        "adminLogin"
                    ).style.display =
                        "none";


                    document.getElementById(
                        "adminPanel"
                    ).style.display =
                        "block";


                    loadAdmin();

                } else {

                    document.getElementById(
                        "loginError"
                    ).innerText =
                        "PIN 不正確";

                }

            }
        );



        // ======================================
        // LOAD ADMIN
        // ======================================

        function loadAdmin() {

            const list =
                document.getElementById(
                    "adminMissionList"
                );


            list.innerHTML = "";


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


                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "admin-mission-card";


                    // 檢查 Admin 是否手動 Unlock

                    const unlocked =
                        localStorage.getItem(
                            "admin_unlock_" +
                            mission.id
                        ) === "true";



                    item.innerHTML = `

                        <div>

                            <strong>
                                ${mission.title}
                            </strong>

                            <br>

                            <small>
                                ${mission.shortTitle}
                            </small>

                        </div>


                        <button
                            class="unlock-btn"
                            data-id="${mission.id}"
                        >

                            ${
                                unlocked
                                ? "🔒 Lock"
                                : "🔓 Unlock"
                            }

                        </button>

                    `;


                    list.appendChild(
                        item
                    );

                }
            );



            // ==================================
            // UNLOCK / LOCK
            // ==================================

            document
                .querySelectorAll(
                    ".unlock-btn"
                )
                .forEach(
                    function (button) {


                        button.addEventListener(
                            "click",
                            function () {


                                const id =
                                    this.dataset.id;


                                const key =
                                    "admin_unlock_" +
                                    id;


                                const unlocked =
                                    localStorage.getItem(
                                        key
                                    ) === "true";



                                if (unlocked) {

                                    // =================
                                    // LOCK
                                    // =================

                                    localStorage.removeItem(
                                        key
                                    );


                                } else {

                                    // =================
                                    // UNLOCK
                                    // =================

                                    localStorage.setItem(
                                        key,
                                        "true"
                                    );

                                }


                                // 重新顯示狀態

                                loadAdmin();

                            }
                        );

                    }
                );

        }



        // ======================================
        // RESET ALL LOCKS
        // ======================================

        resetLockButton.addEventListener(
            "click",
            function () {


                const confirmed =
                    confirm(
                        "確定要將所有 Mission Lock 返住嗎？\n\nReset 後，所有 Mission 會重新按照原本指定時間解鎖。"
                    );


                if (!confirmed) {

                    return;

                }



                if (
                    typeof missions !==
                    "undefined"
                ) {


                    missions.forEach(
                        function (mission) {

                            localStorage.removeItem(
                                "admin_unlock_" +
                                mission.id
                            );

                        }
                    );

                }



                // 更新 Admin 畫面

                loadAdmin();



                alert(
                    "🔒 所有 Mission 已重新 Lock。\n\n之後會按照指定時間自動解鎖。"
                );

            }
        );



        // ======================================
        // LOGOUT
        // ======================================

        logoutButton.addEventListener(
            "click",
            function () {

                location.reload();

            }
        );


    }
);