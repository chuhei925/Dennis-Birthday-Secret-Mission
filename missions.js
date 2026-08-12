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

                <div>🍜 食午餐</div>

                <div>🥤 飲夠水</div>

                <div>❤️ 唔可以餓住自己</div>

            </div>

            <p>
                因為今晚……
            </p>

            <p>
                <strong>
                    你可能會需要好多體力。😏
                </strong>
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

                <div>🚗 車程開始 ✓</div>

                <div>🔐 Secret Mission ✓</div>

                <div>❓ Destination Unknown</div>

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
        shortTitle: "Birthday Morning",
        unlock: "2026-08-21T10:00:00+08:00",
        type: "birthday",

        content: `
            <div class="mission-number">
                21 AUGUST
            </div>

            <h1>
                Birthday Morning 🎂
            </h1>

            <p>
                Good morning, Birthday Girl. ❤️
            </p>

            <p>
                今日係屬於你嘅一日。
            </p>

            <div class="birthday-tasks">

                <div>☀️ 好好享受今日</div>

                <div>🍜 食啲好食嘅嘢</div>

                <div>📸 留低一啲回憶</div>

            </div>

            <p>
                不過今晚……
            </p>

            <p>
                <strong>
                    仲有一個重要 Mission。
                </strong>
            </p>

            <button class="complete-btn">
                LET'S START ❤️
            </button>
        `
    },


    {
        id: 8,
        title: "Mission 08",
        shortTitle: "Birthday Dinner",
        unlock: "2026-08-21T17:15:00+08:00",
        type: "birthday",

        content: `
            <div class="mission-number">
                MISSION 08
            </div>

            <h1>
                Birthday Dinner 🎂
            </h1>

            <p>
                今晚有一個地方，
                我諗你應該會鍾意。
            </p>

            <p>
                Hint #1 🍽️
            </p>

            <p>
                Hint #2 👀
            </p>

            <p>
                Hint #3
                <br>
                <strong>
                    今晚唔需要你決定食咩。
                </strong>
            </p>

            <div class="classified">

                🕔 17:45

                <br><br>

                Birthday Dinner

            </div>

            <button class="complete-btn">
                SHOW ME ❤️
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
    // 22 AUG — PHOTO MISSION
    // ==========================================

    {
        id: 10,
        title: "Mission 10",
        shortTitle: "First Taipei Photo",
        unlock: "2026-08-22T10:00:00+08:00",
        type: "photo",

        content: `
            <div class="mission-number">
                22 AUGUST
            </div>

            <h1>
                First Taipei Photo 🇹🇼
            </h1>

            <p>
                Birthday 已經過咗，
                但係台北之旅仲未完。
            </p>

            <p>
                第一個影相任務：
            </p>

            <div class="classified">

                📸 找一個你覺得
                <br><br>

                <strong>
                    「呢度真係好似台灣」
                </strong>

                <br><br>

                嘅地方。

            </div>

            <p>
                可以係街景、招牌、夜市、
                台北101，甚至一間好食嘅小店。
            </p>

            <p>
                唔需要影人。
                <br>
                純粹記錄你第一眼嘅台北。
            </p>


            <div class="photo-task">

                <input
                    type="file"
                    id="photoInput10"
                    accept="image/*"
                    capture="environment"
                    hidden
                >

                <button
                    class="photo-btn"
                    data-input="photoInput10"
                >
                    📸 TAKE PHOTO
                </button>

                <div
                    id="photoPreview10"
                    class="photo-preview"
                ></div>

            </div>


            <button
                class="complete-btn photo-complete"
                id="completePhoto10"
                disabled
            >
                ✓ COMPLETE MISSION
            </button>

        `
    },


    // ==========================================
    // 23 AUG — FOOD PHOTO
    // ==========================================

    {
        id: 11,
        title: "Mission 11",
        shortTitle: "Food Hunter",
        unlock: "2026-08-23T10:00:00+08:00",
        type: "photo",

        content: `
            <div class="mission-number">
                23 AUGUST
            </div>

            <h1>
                Food Hunter 🍜
            </h1>

            <p>
                今日有一個非常重要嘅任務。
            </p>

            <div class="classified">

                🍜 找一樣你覺得
                <br><br>

                <strong>
                    「一定要食」
                </strong>

                <br><br>

                嘅台灣美食。

            </div>


            <div class="birthday-tasks">

                <div>
                    🥟 小籠包
                </div>

                <div>
                    🍜 牛肉麵
                </div>

                <div>
                    🧋 珍珠奶茶
                </div>

                <div>
                    🍗 雞排
                </div>

                <div>
                    🍧 台灣甜品
                </div>

            </div>


            <p>
                又或者係你自己發現嘅隱藏美食。
            </p>

            <p>
                食之前，
                <strong>
                    影低今日最期待嘅一餐。
                </strong>
            </p>

            <p>
                如果最後覺得超好食，
                記住幫佢留一張相。😋
            </p>


            <div class="photo-task">

                <input
                    type="file"
                    id="photoInput11"
                    accept="image/*"
                    capture="environment"
                    hidden
                >

                <button
                    class="photo-btn"
                    data-input="photoInput11"
                >
                    📸 TAKE FOOD PHOTO
                </button>

                <div
                    id="photoPreview11"
                    class="photo-preview"
                ></div>

            </div>


            <button
                class="complete-btn photo-complete"
                id="completePhoto11"
                disabled
            >
                ✓ COMPLETE FOOD MISSION
            </button>

        `
    },


    // ==========================================
    // 24 AUG — FINAL PHOTO
    // ==========================================

    {
        id: 12,
        title: "FINAL",
        shortTitle: "Birthday Memory",
        unlock: "2026-08-24T10:00:00+08:00",
        type: "photo",

        content: `
            <div class="mission-number">
                FINAL MISSION
            </div>

            <h1>
                Birthday Memory 🎂
            </h1>

            <p>
                今日係台北之旅最後一日。
            </p>

            <p>
                去到最後一個 Mission，
                請你同 Dennis 一齊影一張相。
            </p>

            <div class="classified">

                ❤️ 唔需要擺 Pose

                <br><br>

                ❤️ 唔需要特登準備

                <br><br>

                ❤️ 就係今日最自然、
                最開心嘅一刻

            </div>

            <p>
                📸
                <strong>
                    留低今次生日旅行
                    最後一張回憶。
                </strong>
            </p>

            <p>
                有啲相，
                <br>
                過咗好多年之後再睇，
                <br>
                都會記得當時發生咩事。
            </p>


            <div class="photo-task">

                <input
                    type="file"
                    id="photoInput12"
                    accept="image/*"
                    capture="user"
                    hidden
                >

                <button
                    class="photo-btn"
                    data-input="photoInput12"
                >
                    📸 TAKE BIRTHDAY PHOTO
                </button>

                <div
                    id="photoPreview12"
                    class="photo-preview"
                ></div>

            </div>


            <button
                class="complete-btn photo-complete"
                id="completePhoto12"
                disabled
            >
                ❤️ COMPLETE FINAL MISSION
            </button>

        `
    }

];