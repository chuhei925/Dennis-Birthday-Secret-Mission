const missions = [

    // ==========================================
    // 20 AUG — SECRET MISSION DAY
    // ==========================================

    {
        id: 1,
        title: "Mission 01",
        shortTitle: "The Beginning",
        unlock: "2026-08-20T10:30:00+08:00",
        type: "normal",

        content: `
            <div class="mission-number">MISSION 01</div>

            <h1>The Beginning 🔐</h1>

            <p>
                今日開始，你會收到幾個神秘任務。
            </p>

            <p>
                每個任務都會喺指定時間解鎖。
            </p>

            <div class="classified">
                ⚠️ 唔好嘗試估。<br>
                ⚠️ 唔好問我。
            </div>

            <p>
                你只需要跟住指示做。
            </p>

            <p>
                <strong>Your first mission starts now.</strong>
            </p>

            <button class="complete-btn">
                I'M READY ❤️
            </button>
        `
    },


    {
        id: 2,
        title: "Mission 02",
        shortTitle: "Fuel Up",
        unlock: "2026-08-20T14:00:00+08:00",
        type: "food",

        content: `
            <div class="mission-number">MISSION 02</div>

            <h1>Fuel Up 🍜</h1>

            <p>
                今日係一場長途 Mission。
            </p>

            <p>
                所以你而家有一個非常重要嘅任務：
            </p>

            <div class="birthday-tasks">

                <div>
                    🍜 食午餐
                </div>

                <div>
                    🥤 飲夠水
                </div>

                <div>
                    ❤️ 唔可以餓住自己
                </div>

            </div>

            <p>
                因為今晚……
            </p>

            <p>
                <strong>你可能會需要好多體力。😏</strong>
            </p>

            <button class="complete-btn">
                MISSION COMPLETE ✓
            </button>
        `
    },


    {
        id: 3,
        title: "Mission 03",
        shortTitle: "Time To Move",
        unlock: "2026-08-20T16:00:00+08:00",
        type: "important",

        content: `
            <div class="mission-number">MISSION 03</div>

            <h1>Time To Move ⏰</h1>

            <p>
                ⚠️ <strong>IMPORTANT</strong>
            </p>

            <p>
                今日手頭上嘅工作，
                請盡快完成。
            </p>

            <p>
                接落來會有其他事情需要你處理。
            </p>

            <div class="classified">

                🎯 今日目標<br><br>

                <strong>
                    盡量喺 18:30 前 Ready
                </strong>

            </div>

            <p>
                詳細安排稍後公布。
            </p>

            <p>
                🧳 📱 👛
            </p>

            <p>
                <strong>DO NOT BE LATE.</strong>
            </p>

            <button class="complete-btn">
                UNDERSTOOD ✓
            </button>
        `
    },


    {
        id: 4,
        title: "Mission 04",
        shortTitle: "The Pickup",
        unlock: "2026-08-20T18:30:00+08:00",
        type: "travel",

        content: `
            <div class="mission-number">MISSION 04</div>

            <h1>The Pickup 🚨</h1>

            <p>
                <strong>THIS IS NOT A DRILL.</strong>
            </p>

            <div class="classified">

                <p>
                    🕖 <strong>19:00</strong>
                </p>

                <p>
                    請到公司對面<br>
                    <strong>常怡道</strong>
                </p>

                <p>
                    尋找指定車牌：
                </p>

                <h2>
                    XXXXXXX
                </h2>

            </div>

            <p>
                找到之後：
            </p>

            <h2>
                上車。 🚗
            </h2>

            <p>
                不需要問司機任何問題。
            </p>

            <p>
                不需要問我去邊。
            </p>

            <p>
                只需要上車。
            </p>

            <div class="mystery-box">

                🔐
                <br><br>

                Your next instruction<br>
                is waiting inside the car.

            </div>

            <button class="complete-btn">
                I'M ON MY WAY 🚗
            </button>
        `
    },


    // ==========================================
    // 20 AUG — CAR / AIRPORT
    // ==========================================

    {
        id: 5,
        title: "Mission 05",
        shortTitle: "The Next Step",
        unlock: "2099-01-01T00:00:00+08:00",
        type: "manual",

        content: `
            <div class="mission-number">MISSION 05</div>

            <h1>You Made It. 🚗</h1>

            <p>
                Congratulations.
            </p>

            <p>
                你已經成功完成第一階段。
            </p>

            <div class="birthday-tasks">

                <div>
                    🚗 車程開始 ✓
                </div>

                <div>
                    🔐 Secret Mission ✓
                </div>

                <div>
                    ❓ Destination Unknown
                </div>

            </div>

            <p>
                現在可以揭曉一件事……
            </p>

            <h2>
                今晚你唔需要自己揸車。
            </h2>

            <p>
                😏
            </p>

            <div class="classified">

                NEXT STOP<br><br>

                <strong>
                    AIRPORT ✈️
                </strong>

                <br><br>

                Destination:<br>

                <strong>
                    CLASSIFIED 🔒
                </strong>

            </div>

            <button class="complete-btn">
                LET'S GO ✈️
            </button>
        `
    },


    // ==========================================
    // AIRPORT — TAIWAN REVEAL
    // ==========================================

    {
        id: 6,
        title: "Mission 06",
        shortTitle: "The Reveal",
        unlock: "2099-01-01T00:00:00+08:00",
        type: "reveal",

        content: `
            <div class="reveal">

                <div class="flag">
                    🇹🇼
                </div>

                <p class="welcome">
                    YOU MADE IT THIS FAR
                </p>

                <h1>
                    TAIWAN
                </h1>

                <p>
                    台北
                </p>

                <div class="trip-info">

                    <div>
                        📍 Taipei
                    </div>

                    <div>
                        🗓 20–24 August 2026
                    </div>

                </div>

                <br>

                <p>
                    你嘅生日旅行<br>
                    正式開始。 ❤️
                </p>

            </div>
        `
    },


    // ==========================================
    // 21 AUG — BIRTHDAY
    // ==========================================

    {
    id: 7,

    title: "Mission 07",

    shortTitle: "Tomorrow Morning",

    unlock: "2026-08-20T23:30:00+08:00",

    type: "birthday",

    content: `
        <div class="mission-number">20 AUGUST · 23:30</div>

        <h1>
            One Last Thing Tonight 🌙
        </h1>

        <p>
            今日嘅 Mission 差唔多完成喇。
        </p>

        <div class="classified">

            🌙 GOOD NIGHT<br><br>

            <strong>
                明天早上 9:30 起身。
            </strong>

        </div>

        <p>
            起身之後，
        </p>

        <h2>
            打開 Mission 08 🔐
        </h2>

        <p>
            唔好偷睇其他 Mission。
        </p>

        <p>
            明天嘅行程……<br>
            <strong>正式開始。</strong> ❤️
        </p>

        <button class="complete-btn">
            GOOD NIGHT 🌙
        </button>
    `
},


    {
    id: 8,

    title: "Mission 08",

    shortTitle: "Morning Mission",

    unlock: "2026-08-21T09:30:00+08:00",

    type: "birthday",

    content: `
        <div class="mission-number">21 AUGUST · 09:30</div>

        <h1>
            Good Morning ☀️
        </h1>

        <p>
            早晨，Birthday Girl。❤️
        </p>

        <p>
            今日早上有一個秘密活動。
        </p>

        <div class="birthday-tasks">

            <div>
                🌸 <strong>不能噴香水</strong>
            </div>

            <div>
                💎 <strong>不能帶耳環</strong>
            </div>

            <div>
                ⏰ <strong>10:30 前準備好</strong>
            </div>

            <div>
                🚪 <strong>10:30 出門口</strong>
            </div>

        </div>

        <div class="classified">

            ⚠️ IMPORTANT ⚠️

            <br><br>

            唔需要問去邊。
            <br>
            唔需要估今日做咩。

            <br><br>

            <strong>
                準時出門口就可以。 ❤️
            </strong>

        </div>

        <p>
            Your morning adventure<br>
            starts now.
        </p>

        <button class="complete-btn">
            I'M READY ❤️
        </button>
    `
},

    {
        id: 9,
        title: "Mission 09",
        shortTitle: "Birthday Dinner Reveal",
        unlock: "2026-08-21T17:45:00+08:00",
        type: "birthday",

        content: `
            <div class="reveal">

                <div class="flag">
                    🎂
                </div>

                <p class="welcome">
                    BIRTHDAY DINNER
                </p>

                <h1>
                    旭集
                </h1>

                <p>
                    台北信義區
                </p>

                <div class="trip-info">

                    <div>
                        🕔 17:45
                    </div>

                    <div>
                        🍣 Buffet
                    </div>

                    <div>
                        ❤️ Birthday Dinner
                    </div>

                </div>

                <br>

                <p>
                    Tonight's mission:
                </p>

                <h2>
                    EAT. EAT. AND EAT. 😋
                </h2>

            </div>
        `
    },


    // ==========================================
    // 22 AUG — FOOD HUNT
    // ==========================================

    {
        id: 10,
        title: "Mission 10",
        shortTitle: "Food Hunt",
        unlock: "2026-08-22T10:00:00+08:00",
        type: "food",

        content: `
            <div class="mission-number">22 AUGUST</div>

            <h1>
                Food Hunt 🍜
            </h1>

            <p>
                Birthday 已經過咗，
                但係食嘢 Mission 仲未完。
            </p>

            <div class="birthday-tasks">

                <div>
                    🍜 台灣小食
                </div>

                <div>
                    🧋 台灣飲品
                </div>

                <div>
                    🍰 甜品
                </div>

                <div>
                    ⭐ 一樣你自己揀嘅食物
                </div>

            </div>

            <div class="photo-mission">

                <h2>
                    📸 FOOD PHOTO MISSION
                </h2>

                <p>
                    揀一樣今日你最鍾意嘅食物，
                    留低一張相。
                </p>

                <button
                    class="photo-btn"
                    data-photo-type="food"
                    type="button"
                >
                    📸 TAKE FOOD PHOTO
                </button>

                <div
                    class="photo-preview"
                    id="photoPreview-10"
                ></div>

            </div>

            <button class="complete-btn">
                MISSION COMPLETE 😋
            </button>
        `
    },


    // ==========================================
    // 23 AUG — COUPLE MISSION
    // ==========================================

    {
        id: 11,
        title: "Mission 11",
        shortTitle: "Couple Mission",
        unlock: "2026-08-23T10:00:00+08:00",
        type: "couple",

        content: `
            <div class="mission-number">23 AUGUST</div>

            <h1>
                Couple Mission ❤️
            </h1>

            <p>
                今日唔係搵食任務。
            </p>

            <p>
                今日要留低一啲
                屬於我哋兩個嘅回憶。
            </p>

            <div class="birthday-tasks">

                <div>
                    📸 Take our favourite photo
                </div>

                <div>
                    👫 去一個未去過嘅地方
                </div>

                <div>
                    💌 留低一個最開心嘅回憶
                </div>

            </div>

            <div class="photo-mission">

                <h2>
                    📸 COUPLE PHOTO MISSION
                </h2>

                <p>
                    一定要影一張我哋兩個嘅合照 ❤️
                </p>

                <button
                    class="photo-btn"
                    data-photo-type="couple"
                    type="button"
                >
                    📸 TAKE COUPLE PHOTO
                </button>

                <div
                    class="photo-preview"
                    id="photoPreview-11"
                ></div>

            </div>

            <button class="complete-btn">
                MISSION COMPLETE ❤️
            </button>
        `
    },


    // ==========================================
    // 24 AUG — FINAL
    // ==========================================

    {
        id: 12,
        title: "FINAL",
        shortTitle: "The End",
        unlock: "2026-08-24T10:00:00+08:00",
        type: "final",

        content: `
            <div class="final-content">

                <div class="heart">
                    ❤️
                </div>

                <h1>
                    Happy Birthday
                </h1>

                <p>
                    5 Days
                    <br>
                    4 Nights
                </p>

                <div class="final-line"></div>

                <h2>
                    Hong Kong → Taiwan
                </h2>

                <p>
                    20–24 August 2026
                </p>

                <p class="signature">
                    Thank you for coming<br>
                    on this little adventure with me.
                </p>

                <p class="signature">
                    I hope you had a really happy birthday.
                </p>

                <div class="photo-mission">

                    <h2>
                        📸 FINAL PHOTO
                    </h2>

                    <p>
                        影一張今次旅程你最鍾意嘅相，
                        留低最後一個回憶。 ❤️
                    </p>

                    <button
                        class="photo-btn"
                        data-photo-type="final"
                        type="button"
                    >
                        📸 TAKE FINAL PHOTO
                    </button>

                    <div
                        class="photo-preview"
                        id="photoPreview-12"
                    ></div>

                </div>

                <p class="from">
                    — Dennis ❤️
                </p>

            </div>
        `
    }

];