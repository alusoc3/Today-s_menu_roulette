
const fallbackImg = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200";

const mainDishes = [
    { name: "鶏の唐揚げ", img: "karaage.jpg", genre: "japanese" },
    { name: "豚の生姜焼き", img: "bu.jpg", genre: "japanese" },
    { name: "ハンバーグ", img: "han.jpg", genre: "western" },
    { name: "鮭の塩焼き", img: "sha.jpeg", genre: "japanese" },
    { name: "麻婆豆腐", img: "ma.jpg", genre: "chinese" },
    { name: "サバの味噌煮", img: "sab.jpg", genre: "japanese" },
    { name: "オムライス", img: "omu.jpg", genre: "western" },
    { name: "牛丼", img: "gyu.jpg", genre: "japanese" },
    { name: "チキンカツ", img: "chi.png", genre: "western" },
    { name: "豚キムチ炒め", img: "buaa.jpeg", genre: "chinese" },
    { name: "エビチリ", img: "eb.jpg", genre: "chinese" },
    { name: "肉じゃが", img: "niku.jpg", genre: "japanese" },
    { name: "回鍋肉", img: "hoi.jpg", genre: "chinese" },
    { name: "焼き魚（ホッケ）", img: "hok.jpg", genre: "japanese" },
    { name: "ピーマンの肉詰め", img: "pi.jpg", genre: "western" },
    { name: "グラタン", img: "gu.jpg", genre: "western" },
    { name: "チンジャオロース", img: "tinj.jpg", genre: "chinese" },
    { name: "アジフライ", img: "azi.jpg", genre: "japanese" },
    { name: "カレイの煮付け", img: "ka.jpg", genre: "japanese" },
    { name: "ポークチャップ", img: "po.jpeg", genre: "western" }
];

const sideDishes = [
    { name: "ほうれん草のお浸し", img: "hooo.png", genre: "japanese" },
    { name: "きゅうりとタコの酢の物", img: "takiooo.jpg", genre: "japanese" },
    { name: "冷や奴", img: "hi.jpg", genre: "japanese" },
    { name: "ポテトサラダ", img: "pol.jpeg", genre: "western" },
    { name: "ひじきの煮物", img: "hiii.jpg", genre: "japanese" },
    { name: "トマトとモッツァレラのサラダ", img: "tooo.png", genre: "western" },
    { name: "きんぴらごぼう", img: "kin.jpg", genre: "japanese" },
    { name: "かぼちゃの煮物", img: "kab.jpg", genre: "japanese" },
    { name: "ブロッコリーの和え物", img: "but.jpg", genre: "japanese" },
    { name: "もずく酢", img: "mamam.jpeg", genre: "japanese" },
    { name: "冷やしトマト", img: "hiy.jpg", genre: "japanese" },
    { name: "キャベツの千切りサラダ", img: "ky.jpg", genre: "western" },
    { name: "切り干し大根", img: "kiiii.png", genre: "japanese" },
    { name: "ナスビの揚げ浸し", img: "nas.jpeg", genre: "japanese" },
    { name: "コールスロー", img: "koomd.jpeg", genre: "western" },
    { name: "枝豆", img: "ed.jpg", genre: "japanese" },
    { name: "ちくわの磯辺揚げ", img: "tik.jpg", genre: "japanese" },
    { name: "無限ピーマン", img: "mu.jpg", genre: "chinese" },
    { name: "厚揚げのそぼろあんかけ", img: "at.jpg", genre: "japanese" },
    { name: "たたききゅうり", img: "ta.jpg", genre: "chinese" }
];

const desserts = [
    { name: "バニラアイス", img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200", genre: "western" },
    { name: "ヨーグルト", img: "yoguruto.jpg", genre: "western" },
    { name: "プリン", img: "p.jpg", genre: "western" },
    { name: "季節のフルーツ", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200", genre: "japanese" },
    { name: "チーズケーキ", img: "ti.jpg", genre: "western" },
    { name: "シュークリーム", img: "shukuri-mu.jpg", genre: "western" },
    { name: "チョコレートケーキ", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200", genre: "western" },
    { name: "パンナコッタ", img: "pannakotta.jpg", genre: "western" },
    { name: "クッキー", img: "ku.jpg", genre: "western" },
    { name: "水ようかん", img: "mz.jpg", genre: "japanese" },
    { name: "抹茶アイス", img: "m.jpg", genre: "japanese" },
    { name: "エクレア", img: "e.jpg", genre: "western" },
    { name: "アップルパイ", img: "a.jpg", genre: "western" },
    { name: "フルーツゼリー", img: "huru.jpg", genre: "western" },
    { name: "カステラ", img: "kasutera.jpg", genre: "japanese" },
    { name: "ワッフル", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=200", genre: "western" },
    { name: "スイートポテト", img: "sui.jpg", genre: "western" },
    { name: "タルト", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=200", genre: "western" },
    { name: "ティラミス", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200", genre: "western" },
    { name: "杏仁豆腐", img: "annin.jpg", genre: "chinese" }
];

let selectedGenres = { main: [], side: [], dessert: [] };
let keepState = { main: false, side: false, dessert: false };
let displayState = { main: true, side: true, dessert: true };

const dishAllergens = {
    "鶏の唐揚げ": ["chicken", "wheat", "daizu", "egg"],
    "豚の生姜焼き": ["pork", "wheat", "daizu"],
    "ハンバーグ": ["beef", "pork", "egg", "milk", "wheat"],
    "鮭の塩焼き": ["sake"],
    "麻婆豆腐": ["daizu", "pork", "wheat", "goma"],
    "サバの味噌煮": ["saba", "daizu", "wheat"],
    "オムライス": ["egg", "chicken", "milk"],
    "牛丼": ["beef", "wheat", "daizu"],
    "チキンカツ": ["chicken", "egg", "wheat", "milk"],
    "豚キムチ炒め": ["pork", "daizu", "wheat", "goma"],
    "エビチリ": ["ebi", "wheat", "daizu"],
    "肉じゃが": ["beef", "daizu", "wheat"],
    "回鍋肉": ["pork", "daizu", "wheat", "goma"],
    "焼き魚（ホッケ）": [],
    "ピーマンの肉詰め": ["pork", "beef", "egg", "wheat", "milk"],
    "グラタン": ["milk", "wheat", "chicken", "egg"],
    "チンジャオロース": ["beef", "daizu", "wheat"],
    "アジフライ": ["egg", "wheat", "milk"],
    "カレイの煮付け": ["wheat", "daizu"],
    "ポークチャップ": ["pork", "wheat", "daizu"],
    "ほうれん草のお浸し": ["daizu", "wheat"],
    "きゅうりとタコの酢の物": [],
    "冷や奴": ["daizu"],
    "ポテトサラダ": ["egg", "milk"],
    "ひじきの煮物": ["daizu", "wheat"],
    "トマトとモッツァレラのサラダ": ["milk"],
    "きんぴらごぼう": ["daizu", "wheat", "goma"],
    "かぼちゃの煮物": ["daizu", "wheat"],
    "ブロッコリーの和え物": ["egg", "milk", "goma", "daizu"],
    "もずく酢": [],
    "冷やしトマト": [],
    "キャベツの千切りサラダ": ["egg", "milk", "daizu"],
    "切り干し大根": ["daizu", "wheat"],
    "ナスビの揚げ浸し": ["daizu", "wheat"],
    "コールスロー": ["egg", "milk"],
    "枝豆": ["daizu"],
    "ちくわの磯辺揚げ": ["wheat", "egg", "milk"],
    "無限ピーマン": ["goma", "daizu"],
    "厚揚げのそぼろあんかけ": ["daizu", "beef", "pork", "chicken", "wheat"],
    "たたききゅうり": ["goma", "daizu"],
    "バニラアイス": ["milk", "egg"],
    "ヨーグルト": ["milk"],
    "プリン": ["egg", "milk"],
    "季節のフルーツ": [],
    "チーズケーキ": ["milk", "egg", "wheat"],
    "シュークリーム": ["egg", "milk", "wheat"],
    "チョコレートケーキ": ["egg", "milk", "wheat", "daizu"],
    "パンナコッタ": ["milk", "gelatin"],
    "クッキー": ["wheat", "egg", "milk"],
    "水ようかん": [],
    "抹茶アイス": ["milk", "egg"],
    "エクレア": ["egg", "milk", "wheat"],
    "アップルパイ": ["ringo", "wheat", "egg", "milk"],
    "フルーツゼリー": ["gelatin"],
    "カステラ": ["egg", "wheat"],
    "ワッフル": ["wheat", "egg", "milk"],
    "スイートポテト": ["egg", "milk"],
    "タルト": ["wheat", "egg", "milk"],
    "ティラミス": ["egg", "milk", "wheat"],
    "杏仁豆腐": ["milk"]
};

function setImageSrc(imgElement, src) {
    imgElement.onerror = function() {
        this.onerror = null;
        this.src = fallbackImg;
    };
    imgElement.src = src;
}

function toggleGroup() {
    const selectedChoice = document.querySelector('input[name="allergy-choice"]:checked').value;
    const optionsDiv = document.getElementById("allergy-options");

    if (selectedChoice === "exist") {
        optionsDiv.style.display = "block";
    } else {
        optionsDiv.style.display = "none";
        const checkboxes = optionsDiv.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
    }
}

function scrollToRoulette() {
    document.getElementById("roulette-section").scrollIntoView({ behavior: 'smooth' });
}

function toggleGenreBtn(category, genre) {
    const index = selectedGenres[category].indexOf(genre);

    if (index > -1) {
        selectedGenres[category].splice(index, 1);
    } else {
        selectedGenres[category].push(genre);
    }

    updateGenreUI(category);
}

function updateGenreUI(category) {
    const container = document.getElementById(`${category}-genre-group`);
    const buttons = container.querySelectorAll('.genre-btn');

    buttons.forEach(btn => {
        const genre = btn.getAttribute('data-genre');

        if (selectedGenres[category].includes(genre)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function syncAllGenres(genre) {
    ['main', 'side', 'dessert'].forEach(cat => {
        selectedGenres[cat] = genre === 'all' ? [] : [genre];
        updateGenreUI(cat);
    });
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function toggleKeep(type) {
    if (!displayState[type]) return;

    keepState[type] = !keepState[type];

    const container = document.getElementById(`${type}-container`);
    const btn = container.querySelector('.keep-btn');

    if (keepState[type]) {
        container.classList.add('kept');
        btn.innerText = "🔓 解除";
    } else {
        container.classList.remove('kept');
        btn.innerText = "🔒 キープ";
    }
}

function toggleDisplay(type) {
    displayState[type] = !displayState[type];

    const container = document.getElementById(`${type}-container`);
    const toggleBtn = container.querySelector('.toggle-btn');
    const keepBtn = container.querySelector('.keep-btn');
    const resultEl = document.getElementById(`${type}-result`);
    const recipeEl = document.getElementById(`${type}-recipe`);
    const imgEl = document.getElementById(`${type}-img`);

    if (displayState[type]) {
        container.classList.remove('disabled-item');
        toggleBtn.innerText = "表示: ON";
        toggleBtn.classList.add('active');
        resultEl.innerText = "ここに表示されます";
        keepBtn.disabled = true;
    } else {
        container.classList.add('disabled-item');
        toggleBtn.innerText = "表示: OFF";
        toggleBtn.classList.remove('active');

        if (keepState[type]) {
            toggleKeep(type);
        }

        keepBtn.disabled = true;

        const labels = {
            main: "主菜なし",
            side: "副菜なし",
            dessert: "デザートなし"
        };

        resultEl.innerText = labels[type];
        recipeEl.style.display = "none";
        imgEl.src = fallbackImg;
    }
}

function spinRoulette() {
    const btn = document.getElementById("spin-btn");

    if (btn.disabled) return;

    btn.disabled = true;

    const checkedBoxes = document.querySelectorAll('input[name="exclude"]:checked');
    const selectedAllergens = Array.from(checkedBoxes).map(cb => cb.value);

    function filterDishes(dishes, category) {
        const targetGenres = selectedGenres[category];

        return dishes.filter(item => {
            if (targetGenres.length > 0 && !targetGenres.includes(item.genre)) {
                return false;
            }

            const allergens = dishAllergens[item.name] || [];

            return !allergens.some(allergen => selectedAllergens.includes(allergen));
        });
    }

    const availableMain = filterDishes(mainDishes, 'main');
    const availableSide = filterDishes(sideDishes, 'side');
    const availableDessert = filterDishes(desserts, 'dessert');

    const noCandidates =
        (displayState.main && !keepState.main && availableMain.length === 0) ||
        (displayState.side && !keepState.side && availableSide.length === 0) ||
        (displayState.dessert && !keepState.dessert && availableDessert.length === 0);

    if (noCandidates) {
        alert("選択した条件に合う料理がありません。ジャンルやアレルギー設定を調整してください。");
        btn.disabled = false;
        return;
    }

    let counter = 0;

    const interval = setInterval(() => {
        if (displayState.main && !keepState.main) {
            const tempItem = getRandomItem(availableMain);
            document.getElementById("main-result").innerText = tempItem.name;
            setImageSrc(document.getElementById("main-img"), tempItem.img);
        }

        if (displayState.side && !keepState.side) {
            const tempItem = getRandomItem(availableSide);
            document.getElementById("side-result").innerText = tempItem.name;
            setImageSrc(document.getElementById("side-img"), tempItem.img);
        }

        if (displayState.dessert && !keepState.dessert) {
            const tempItem = getRandomItem(availableDessert);
            document.getElementById("dessert-result").innerText = tempItem.name;
            setImageSrc(document.getElementById("dessert-img"), tempItem.img);
        }

        counter++;

        if (counter > 15) {
            clearInterval(interval);
            finalizeSelection(availableMain, availableSide, availableDessert);
            btn.disabled = false;
        }
    }, 100);
}

function finalizeSelection(availableMain, availableSide, availableDessert) {
    const types = [
        {
            type: 'main',
            list: availableMain,
            el: 'main-result',
            img: 'main-img',
            recipe: 'main-recipe',
            keepBtn: '#main-container .keep-btn'
        },
        {
            type: 'side',
            list: availableSide,
            el: 'side-result',
            img: 'side-img',
            recipe: 'side-recipe',
            keepBtn: '#side-container .keep-btn'
        },
        {
            type: 'dessert',
            list: availableDessert,
            el: 'dessert-result',
            img: 'dessert-img',
            recipe: 'dessert-recipe',
            keepBtn: '#dessert-container .keep-btn'
        }
    ];

    types.forEach(item => {
        if (!displayState[item.type] || keepState[item.type]) return;

        const resultEl = document.getElementById(item.el);
        const imgEl = document.getElementById(item.img);
        const recipeEl = document.getElementById(item.recipe);
        const keepBtnEl = document.querySelector(item.keepBtn);

        if (item.list.length === 0) {
            resultEl.innerText = "条件に合う料理がありません";
            recipeEl.style.display = "none";
            imgEl.src = fallbackImg;
            keepBtnEl.disabled = true;
        } else {
            const chosen = getRandomItem(item.list);

            resultEl.innerText = chosen.name;
            setImageSrc(imgEl, chosen.img);

            recipeEl.href = `https://cookpad.com/search/${encodeURIComponent(chosen.name)}`;
            recipeEl.style.display = "inline-block";

            keepBtnEl.disabled = false;
        }
    });
}
