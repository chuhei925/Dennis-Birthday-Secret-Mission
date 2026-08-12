document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ==========================================
        // ELEMENTS
        // ==========================================

        const home =
            document.getElementById("home");


        const missionsScreen =
            document.getElementById("missions");


        const missionDetail =
            document.getElementById("missionDetail");


        const missionList =
            document.getElementById("missionList");


        const missionContent =
            document.getElementById("missionContent");


        const startBtn =
            document.getElementById("startBtn");


        const backBtn =
            document.getElementById("backBtn");



        // ==========================================
        // ADMIN MANUAL UNLOCK
        // ==========================================

        function isAdminUnlocked(
            missionId
        ) {

            return (
                localStorage.getItem(
                    "admin_unlock_" +
                    missionId
                ) === "true"
            );

        }



        // ==========================================
        // TIME UNLOCK
        // ==========================================

        function isTimeUnlocked(
            mission
        ) {

            const now =
                new Date();


            const unlockTime =
                new Date(
                    mission.unlock
                );


            return now >= unlockTime;

        }



        // ==========================================
        // FINAL UNLOCK CHECK
        // ==========================================

        function isUnlocked(
            mission
        ) {

            if (
                isAdminUnlocked(
                    mission.id
                )
            ) {

                return true;

            }


            return isTimeUnlocked(
                mission
            );

        }



        // ==========================================
        // SHOW SCREEN
        // ==========================================

        function showScreen(
            screen
        ) {

            document
                .querySelectorAll(
                    ".screen"
                )
                .forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


            screen.classList.add(
                "active"
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }



        // ==========================================
        // START MISSION
        // ==========================================

        if (startBtn) {

            startBtn.addEventListener(
                "click",
                function () {

                    showScreen(
                        missionsScreen
                    );


                    renderMissions();

                }
            );

        }



        // ==========================================
        // RENDER MISSION LIST
        // ==========================================

        function renderMissions() {

            if (!missionList) {

                console.error(
                    "missionList not found"
                );

                return;

            }


            missionList.innerHTML =
                "";


            missions.forEach(
                function (mission) {


                    const unlocked =
                        isUnlocked(
                            mission
                        );


                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "mission-card " +
                        (
                            unlocked
                                ? "unlocked"
                                : "locked"
                        );


                    card.innerHTML = `

                        <div class="mission-left">

                            <div class="mission-id">

                                ${String(
                                    mission.id
                                ).padStart(
                                    2,
                                    "0"
                                )}

                            </div>


                            <div>

                                <div class="mission-title">

                                    ${mission.title}

                                </div>


                                <div class="mission-subtitle">

                                    ${mission.shortTitle}

                                </div>

                            </div>

                        </div>


                        <div class="status">

                            ${
                                unlocked
                                ? "🔓"
                                : "🔒"
                            }

                        </div>


                        <div class="unlock-time">

                            ${
                                unlocked
                                ? "Mission available"
                                : formatUnlockTime(
                                    mission.unlock
                                )
                            }

                        </div>

                    `;



                    // ==================================
                    // CLICK UNLOCKED MISSION
                    // ==================================

                    if (unlocked) {

                        card.addEventListener(
                            "click",
                            function () {

                                openMission(
                                    mission
                                );

                            }
                        );

                    }


                    missionList.appendChild(
                        card
                    );

                }
            );

        }



        // ==========================================
        // OPEN MISSION
        // ==========================================

        function openMission(
            mission
        ) {

            if (
                !isUnlocked(
                    mission
                )
            ) {

                return;

            }


            missionContent.innerHTML =
                mission.content;


            showScreen(
                missionDetail
            );


            // PHOTO MISSION SETUP

            setupPhotoMission();

        }



        // ==========================================
        // PHOTO MISSION SETUP
        // ==========================================

        function setupPhotoMission() {

            const photoButtons =
                missionContent.querySelectorAll(
                    ".photo-btn"
                );


            photoButtons.forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const inputId =
                                button.dataset.input;


                            const input =
                                document.getElementById(
                                    inputId
                                );


                            if (input) {

                                input.click();

                            }

                        }
                    );

                }
            );



            // PHOTO INPUT

            const photoInputs =
                missionContent.querySelectorAll(
                    'input[type="file"]'
                );


            photoInputs.forEach(
                function (input) {

                    input.addEventListener(
                        "change",
                        function () {

                            const file =
                                input.files[0];


                            if (!file) {

                                return;

                            }


                            const reader =
                                new FileReader();


                            reader.onload =
                                function (event) {


                                    const missionId =
                                        input.id.replace(
                                            "photoInput",
                                            ""
                                        );


                                    const preview =
                                        document.getElementById(
                                            "photoPreview" +
                                            missionId
                                        );


                                    const completeButton =
                                        document.getElementById(
                                            "completePhoto" +
                                            missionId
                                        );


                                    if (preview) {

                                        preview.innerHTML = `

                                            <img
                                                src="${event.target.result}"
                                                alt="Mission Photo"
                                            >

                                            <div
                                                class="photo-success"
                                            >
                                                📸 PHOTO READY
                                            </div>

                                        `;

                                    }


                                    if (
                                        completeButton
                                    ) {

                                        completeButton.disabled =
                                            false;

                                    }

                                };


                            reader.readAsDataURL(
                                file
                            );

                        }
                    );

                }
            );

        }



        // ==========================================
        // MISSION CONTENT BUTTONS
        // ==========================================

        missionContent.addEventListener(
            "click",
            function (event) {


                const button =
                    event.target.closest(
                        "button"
                    );


                if (!button) {

                    return;

                }



                // PHOTO BUTTON
                //
                // 已經由 setupPhotoMission()
                // 處理，所以唔返回 Your Missions

                if (
                    button.classList.contains(
                        "photo-btn"
                    )
                ) {

                    return;

                }



                // COMPLETE BUTTON
                //
                // 返回 Your Missions

                if (
                    button.classList.contains(
                        "complete-btn"
                    )
                ) {


                    // 如果係 Photo Mission
                    // 但未影相，不允許完成

                    if (
                        button.classList.contains(
                            "photo-complete"
                        ) &&
                        button.disabled
                    ) {

                        return;

                    }


                    showScreen(
                        missionsScreen
                    );


                    renderMissions();


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }

            }
        );



        // ==========================================
        // BACK BUTTON
        // ==========================================

        if (backBtn) {

            backBtn.addEventListener(
                "click",
                function () {

                    showScreen(
                        missionsScreen
                    );


                    renderMissions();

                }
            );

        }



        // ==========================================
        // FORMAT UNLOCK TIME
        // ==========================================

        function formatUnlockTime(
            unlock
        ) {

            const date =
                new Date(
                    unlock
                );


            // 2099 = manual unlock

            if (
                date.getFullYear() >=
                2099
            ) {

                return "Locked";

            }


            const month =
                date.getMonth() + 1;


            const day =
                date.getDate();


            const hours =
                String(
                    date.getHours()
                ).padStart(
                    2,
                    "0"
                );


            const minutes =
                String(
                    date.getMinutes()
                ).padStart(
                    2,
                    "0"
                );


            return (
                `${month}/${day} ` +
                `${hours}:${minutes}`
            );

        }



        // ==========================================
        // INITIAL STATE
        // ==========================================

        showScreen(
            home
        );



        // ==========================================
        // AUTO REFRESH
        // ==========================================

        setInterval(
            function () {


                if (
                    missionsScreen.classList.contains(
                        "active"
                    )
                ) {

                    renderMissions();

                }

            },
            1000
        );


    }
);