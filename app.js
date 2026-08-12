import { db } from "./firebase.js";

import {
    doc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // ELEMENTS
    // =====================================================

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


    // =====================================================
    // START
    // =====================================================

    console.log("Birthday Mission App Started");


    // =====================================================
    // FIREBASE MISSION OVERRIDES
    //
    // null  = follow schedule
    // true  = force unlock
    // false = force lock
    // =====================================================

    let missionOverrides = {};


    const missionControlRef =
        doc(
            db,
            "missionControl",
            "status"
        );


    // =====================================================
    // FIREBASE REAL-TIME LISTENER
    // =====================================================

    onSnapshot(
        missionControlRef,

        function (snapshot) {

            if (snapshot.exists()) {

                missionOverrides =
                    snapshot.data();

            } else {

                missionOverrides = {};

            }


            console.log(
                "Mission Control Updated:",
                missionOverrides
            );


            if (
                missionsScreen &&
                missionsScreen.classList.contains("active")
            ) {

                renderMissions();

            }

        },

        function (error) {

            console.error(
                "Firebase Mission Sync Error:",
                error
            );

        }
    );


    // =====================================================
    // GET ADMIN OVERRIDE
    // =====================================================

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


    // =====================================================
    // CHECK SCHEDULE
    // =====================================================

    function isTimeUnlocked(mission) {

        const now =
            new Date();


        const unlockTime =
            new Date(
                mission.unlock
            );


        return (
            now >= unlockTime
        );

    }


    // =====================================================
    // FINAL UNLOCK CHECK
    // =====================================================

    function isUnlocked(mission) {

        const override =
            getOverride(
                mission.id
            );


        // -----------------------------------------------
        // ADMIN FORCE UNLOCK
        // -----------------------------------------------

        if (
            override === true
        ) {

            return true;

        }


        // -----------------------------------------------
        // ADMIN FORCE LOCK
        // -----------------------------------------------

        if (
            override === false
        ) {

            return false;

        }


        // -----------------------------------------------
        // NORMAL SCHEDULE
        // -----------------------------------------------

        return isTimeUnlocked(
            mission
        );

    }


    // =====================================================
    // CHECK MANUAL MISSION
    // =====================================================

    function isManualMission(mission) {

        const date =
            new Date(
                mission.unlock
            );


        return (
            date.getFullYear() >= 2099
        );

    }


    // =====================================================
    // SHOW SCREEN
    // =====================================================

    function showScreen(screen) {

        if (!screen) {

            console.error(
                "Screen not found"
            );

            return;

        }


        document
            .querySelectorAll(".screen")
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


        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );

    }


    // =====================================================
    // START MISSION
    // =====================================================

    if (startBtn) {

        startBtn.addEventListener(
            "click",

            function () {

                console.log(
                    "START MISSION clicked"
                );


                showScreen(
                    missionsScreen
                );


                renderMissions();

            }
        );

    }


    // =====================================================
    // RENDER MISSIONS
    // =====================================================

    function renderMissions() {

        if (!missionList) {

            console.error(
                "❌ #missionList not found"
            );

            return;

        }


        if (
            typeof missions ===
            "undefined"
        ) {

            console.error(
                "❌ missions.js not loaded"
            );


            missionList.innerHTML = `

                <div class="admin-info">

                    ⚠️ Mission data not found.

                    <br><br>

                    Please check missions.js

                </div>

            `;

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


                // =================================================
                // STATUS
                // =================================================

                let statusIcon =
                    unlocked
                        ? "🔓"
                        : "🔒";


                // =================================================
                // LOWER MESSAGE
                // =================================================

                let unlockMessage =
                    "";


                if (unlocked) {

                    unlockMessage = `

                        <div class="countdown-available">

                            ✨ MISSION AVAILABLE ✨

                        </div>

                    `;

                }

                else if (
                    isManualMission(mission)
                ) {

                    unlockMessage = `

                        <div class="countdown-manual">

                            🔒 LOCKED

                        </div>

                    `;

                }

                else {

                    unlockMessage = `

                        <div
                            class="mission-countdown"
                            data-countdown="${mission.unlock}"
                        >

                            <div class="countdown-label">

                                UNLOCKS IN

                            </div>

                            <div class="countdown-time">

                                -- : -- : --

                            </div>

                        </div>

                    `;

                }


                // =================================================
                // CARD HTML
                // =================================================

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


                        <div class="mission-main-info">

                            <div class="mission-title">

                                ${mission.title}

                            </div>


                            <div class="mission-subtitle">

                                ${mission.shortTitle}

                            </div>

                        </div>

                    </div>


                    <div class="status">

                        ${statusIcon}

                    </div>


                    <div class="unlock-time">

                        ${unlockMessage}

                    </div>

                `;


                // =================================================
                // CLICK ONLY IF UNLOCKED
                // =================================================

                if (unlocked) {

                    card.style.cursor =
                        "pointer";


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


        // =====================================================
        // START COUNTDOWN
        // =====================================================

        updateCountdowns();

    }


    // =====================================================
    // COUNTDOWN
    // =====================================================

    function updateCountdowns() {

        const countdowns =
            document.querySelectorAll(
                ".mission-countdown"
            );


        const now =
            new Date();


        countdowns.forEach(
            function (countdown) {

                const unlockTime =
                    new Date(
                        countdown.dataset.countdown
                    );


                const difference =
                    unlockTime -
                    now;


                // ---------------------------------------------
                // TIME ARRIVED
                // ---------------------------------------------

                if (
                    difference <= 0
                ) {

                    countdown.innerHTML = `

                        <div class="countdown-available">

                            ✨ MISSION AVAILABLE ✨

                        </div>

                    `;

                    return;

                }


                // ---------------------------------------------
                // CALCULATE
                // ---------------------------------------------

                const totalSeconds =
                    Math.floor(
                        difference / 1000
                    );


                const days =
                    Math.floor(
                        totalSeconds /
                        86400
                    );


                const hours =
                    Math.floor(
                        (
                            totalSeconds %
                            86400
                        ) /
                        3600
                    );


                const minutes =
                    Math.floor(
                        (
                            totalSeconds %
                            3600
                        ) /
                        60
                    );


                const seconds =
                    totalSeconds %
                    60;


                // ---------------------------------------------
                // FORMAT
                // ---------------------------------------------

                let timeText;


                if (
                    days > 0
                ) {

                    timeText =

                        String(days)
                            .padStart(2, "0")
                        + " : " +

                        String(hours)
                            .padStart(2, "0")
                        + " : " +

                        String(minutes)
                            .padStart(2, "0")
                        + " : " +

                        String(seconds)
                            .padStart(2, "0");

                }

                else {

                    timeText =

                        String(hours)
                            .padStart(2, "0")
                        + " : " +

                        String(minutes)
                            .padStart(2, "0")
                        + " : " +

                        String(seconds)
                            .padStart(2, "0");

                }


                countdown.innerHTML = `

                    <div class="countdown-label">

                        ${
                            days > 0
                                ? "MISSION UNLOCKS IN"
                                : "UNLOCKS IN"
                        }

                    </div>


                    <div class="countdown-time">

                        ${timeText}

                    </div>

                `;

            }
        );

    }


    // =====================================================
    // OPEN MISSION
    // =====================================================

    function openMission(mission) {

        if (!mission) {

            return;

        }


        if (
            !isUnlocked(
                mission
            )
        ) {

            return;

        }


        if (!missionContent) {

            console.error(
                "❌ #missionContent not found"
            );

            return;

        }


        missionContent.innerHTML =
            mission.content;


        showScreen(
            missionDetail
        );


        setupMissionButtons(
            mission
        );


        setupPhotoButtons(
            mission
        );


        restoreSavedPhoto(
            mission.id
        );

    }


    // =====================================================
    // MISSION COMPLETE BUTTON
    // =====================================================

    function setupMissionButtons(
        mission
    ) {

        const buttons =
            missionContent.querySelectorAll(
                ".complete-btn"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",

                    function (event) {

                        event.stopPropagation();


                        button.innerHTML =
                            "✓ MISSION COMPLETE";


                        button.classList.add(
                            "completed"
                        );


                        setTimeout(
                            function () {

                                showScreen(
                                    missionsScreen
                                );


                                renderMissions();

                            },

                            500
                        );

                    }
                );

            }
        );

    }


    // =====================================================
    // BACK BUTTON
    // =====================================================

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


    // =====================================================
    // PHOTO BUTTONS
    // =====================================================

    function setupPhotoButtons(
        mission
    ) {

        const buttons =
            missionContent.querySelectorAll(
                ".photo-btn"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",

                    function (event) {

                        event.stopPropagation();


                        const photoType =
                            button.dataset.photoType ||
                            "photo";


                        openCamera(
                            mission.id,
                            photoType
                        );

                    }
                );

            }
        );

    }


    // =====================================================
    // OPEN CAMERA
    // =====================================================

    function openCamera(
        missionId,
        photoType
    ) {

        const input =
            document.createElement(
                "input"
            );


        input.type =
            "file";


        input.accept =
            "image/*";


        if (
            photoType ===
            "couple"
        ) {

            input.setAttribute(
                "capture",
                "user"
            );

        }

        else {

            input.setAttribute(
                "capture",
                "environment"
            );

        }


        input.style.display =
            "none";


        document.body.appendChild(
            input
        );


        input.addEventListener(
            "change",

            function () {

                const file =
                    input.files &&
                    input.files[0];


                if (!file) {

                    input.remove();

                    return;

                }


                showPhotoPreview(
                    missionId,
                    photoType,
                    file
                );


                savePhotoLocally(
                    missionId,
                    photoType,
                    file
                );


                input.remove();

            }
        );


        input.click();

    }


    // =====================================================
    // SHOW PHOTO
    // =====================================================

    function showPhotoPreview(
        missionId,
        photoType,
        file
    ) {

        const preview =
            document.getElementById(
                "photoPreview-" +
                missionId
            );


        if (!preview) {

            console.error(
                "Photo preview not found for Mission " +
                missionId
            );

            return;

        }


        const imageURL =
            URL.createObjectURL(
                file
            );


        let message =
            "📸 PHOTO CAPTURED!";


        if (
            photoType ===
            "food"
        ) {

            message =
                "😋 FOOD PHOTO CAPTURED!";

        }


        if (
            photoType ===
            "couple"
        ) {

            message =
                "❤️ COUPLE PHOTO CAPTURED!";

        }


        if (
            photoType ===
            "final"
        ) {

            message =
                "🎂 FINAL PHOTO CAPTURED!";

        }


        preview.innerHTML = `

            <div class="photo-result">

                <img
                    src="${imageURL}"
                    alt="Mission Photo"
                    class="mission-photo"
                >


                <p class="photo-success">

                    ${message}

                </p>


                <button
                    type="button"
                    class="photo-retake-btn"
                >

                    📸 RETAKE PHOTO

                </button>

            </div>

        `;


        const retakeButton =
            preview.querySelector(
                ".photo-retake-btn"
            );


        if (retakeButton) {

            retakeButton.addEventListener(
                "click",

                function (event) {

                    event.stopPropagation();


                    openCamera(
                        missionId,
                        photoType
                    );

                }
            );

        }

    }


    // =====================================================
    // SAVE PHOTO LOCALLY
    // =====================================================

    function savePhotoLocally(
        missionId,
        photoType,
        file
    ) {

        const reader =
            new FileReader();


        reader.onload =
            function () {

                try {

                    localStorage.setItem(

                        "birthdayPhoto_" +
                        missionId,

                        JSON.stringify({

                            type:
                                photoType,

                            image:
                                reader.result,

                            savedAt:
                                new Date().toISOString()

                        })

                    );

                }

                catch (error) {

                    console.warn(
                        "Photo could not be saved:",
                        error
                    );

                }

            };


        reader.readAsDataURL(
            file
        );

    }


    // =====================================================
    // RESTORE PHOTO
    // =====================================================

    function restoreSavedPhoto(
        missionId
    ) {

        const saved =
            localStorage.getItem(
                "birthdayPhoto_" +
                missionId
            );


        if (!saved) {

            return;

        }


        try {

            const photo =
                JSON.parse(
                    saved
                );


            const preview =
                document.getElementById(
                    "photoPreview-" +
                    missionId
                );


            if (!preview) {

                return;

            }


            preview.innerHTML = `

                <div class="photo-result">

                    <img
                        src="${photo.image}"
                        alt="Saved Mission Photo"
                        class="mission-photo"
                    >


                    <p class="photo-success">

                        📸 PHOTO SAVED

                    </p>


                    <button
                        type="button"
                        class="photo-retake-btn"
                    >

                        📸 RETAKE PHOTO

                    </button>

                </div>

            `;


            const retakeButton =
                preview.querySelector(
                    ".photo-retake-btn"
                );


            if (retakeButton) {

                retakeButton.addEventListener(
                    "click",

                    function (event) {

                        event.stopPropagation();


                        openCamera(
                            missionId,
                            photo.type
                        );

                    }
                );

            }

        }

        catch (error) {

            console.warn(
                "Could not restore photo:",
                error
            );

        }

    }


    // =====================================================
    // FORMAT UNLOCK TIME
    // =====================================================

    function formatUnlockTime(
        unlock
    ) {

        const date =
            new Date(
                unlock
            );


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


    // =====================================================
    // AUTO UPDATE
    //
    // 每秒：
    // 1. 更新 Countdown
    // 2. 檢查 Mission 是否到時間
    // =====================================================

    setInterval(
        function () {

            // Countdown
            if (
                missionsScreen &&
                missionsScreen.classList.contains(
                    "active"
                )
            ) {

                updateCountdowns();

            }


            // 每 1 秒檢查 Schedule
            // 如果 Countdown 到 0，
            // renderMissions 會自動變成 Available

            if (
                missionsScreen &&
                missionsScreen.classList.contains(
                    "active"
                )
            ) {

                const hasExpiredCountdown =
                    document.querySelector(
                        ".mission-countdown"
                    );


                if (
                    hasExpiredCountdown
                ) {

                    const unlock =
                        new Date(
                            hasExpiredCountdown
                                .dataset
                                .countdown
                        );


                    if (
                        new Date() >=
                        unlock
                    ) {

                        renderMissions();

                    }

                }

            }

        },

        1000
    );


    // =====================================================
    // INITIAL SCREEN
    // =====================================================

    showScreen(
        home
    );


    // =====================================================
    // INITIAL RENDER
    // =====================================================

    renderMissions();

});