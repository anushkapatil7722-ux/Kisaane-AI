// ----------------------------------------------------
// TRANSLATION DICTIONARY
// ----------------------------------------------------
const translations = {
    en: {
        greeting: "Hello, Ramesh Patel",
        location: "Nashik, MH",
        weather_cond: "Partly Cloudy",
        humidity: "Humidity",
        wind_speed: "Wind",
        alert_title: "Heavy Rain Expected",
        alert_desc: "Tomorrow afternoon. Delay irrigation schedules.",
        quick_actions: "Quick Actions",
        act_scan_title: "Detect Disease",
        act_scan_desc: "Scan leaf using AI camera",
        act_fert_title: "Fertilizer Calculator",
        act_fert_desc: "Get exact N-P-K ratios",
        act_mkt_title: "Mandi Prices",
        act_mkt_desc: "Check crop selling rates",
        tip_title: "Smart Tip of the Day",
        tip_desc: "Spray Neem Oil early morning or late evening to prevent sucking pests without harming beneficial insects.",
        scan_header: "AI Crop Scanner",
        scan_subheader: "Point camera at infected plant leaves",
        analyzing_text: "AI is analyzing your crop...",
        test_sample_label: "Select leaf sample to simulate capture:",
        sample_blight: "Tomato Blight",
        sample_rust: "Wheat Rust",
        sample_healthy: "Healthy Rice",
        gallery_btn: "Gallery",
        flash_btn: "Flash",
        fert_header: "Fertilizer Guide",
        fert_subheader: "Select details to calculate exact soil nutrition needs",
        lbl_select_crop: "Select Crop",
        crop_wheat: "🌾 Wheat (गेहूं)",
        crop_rice: "🌾 Rice (धान)",
        crop_cotton: "☁️ Cotton (कपास)",
        lbl_soil_type: "Soil Type",
        soil_alluvial: "Alluvial (जलोढ़ मिट्टी)",
        soil_black: "Black (काली मिट्टी)",
        soil_red: "Red (लाल मिट्टी)",
        soil_sandy: "Sandy (बलुआ मिट्टी)",
        rec_label: "RECOMMENDED RATIO",
        nitrogen: "Nitrogen",
        phosphorus: "Phosphorus",
        potassium: "Potassium",
        tbl_nutrient: "Nutrient",
        tbl_dosage: "Qty (Per Acre)",
        tbl_timing: "Best Application Time",
        urea_time: "Split: Sowing & Tillering",
        p_time: "Basal dose during sowing",
        k_time: "Basal dose or with first watering",
        warn_title: "Warning:",
        wheat_warn: "Over-usage of Nitrogen can cause crop lodging and increase pest vulnerability. Do not exceed 120 kg/ha.",
        rice_warn: "Ensure water logging is controlled before applying nitrogen fertilizer to prevent run-off.",
        cotton_warn: "Apply potash in split doses if soil is sandy to minimize leaching losses.",
        market_title: "Live Mandi Prices",
        showing_gps: "Showing prices near your GPS location",
        nav_home: "Home",
        nav_fert: "Fertilizers",
        nav_scan: "Scan",
        nav_market: "Market",
        nav_help: "Help",
        confidence_lbl: "Confidence:",
        treatment_title: "Recommended Treatment:",
        buy_pesticide: "Buy Recommended Pesticide",
        voice_title: "AI Voice Assistant",
        voice_listening: "Listening... Ask me anything in English or Hindi",
        suggested_questions: "Try clicking a sample question:",
        q_weather: "\"Will it rain today?\"",
        q_fertilizer: "\"How much fertilizer for wheat in alluvial soil?\"",
        q_disease: "\"How to treat Leaf Blight?\"",
        help_title: "Welcome to Smart Farmer!",
        help_desc1: "This app is designed to help farmers use artificial intelligence for better crop management.",
        help_home_desc: "Get immediate weather notifications and access actions quickly.",
        help_scan_desc: "Use AI to scan plant leaves and diagnose crop disease details instantly.",
        help_fert_desc: "Input your soil type and target crop to retrieve the exact scientific N-P-K recommendation.",
        help_market_desc: "Monitor daily crop prices from local wholesale markets (mandis).",
    },
    hi: {
        greeting: "नमस्ते, रमेश पटेल",
        location: "नाशिक, महाराष्ट्र",
        weather_cond: "आंशिक रूप से बादल",
        humidity: "आर्द्रता",
        wind_speed: "हवा",
        alert_title: "भारी बारिश की चेतावनी",
        alert_desc: "कल दोपहर। सिंचाई कार्यक्रम स्थगित करें।",
        quick_actions: "त्वरित विकल्प",
        act_scan_title: "बीमारी का पता लगाएं",
        act_scan_desc: "एआई कैमरे से पत्ती को स्कैन करें",
        act_fert_title: "उर्वरक कैलकुलेटर",
        act_fert_desc: "सटीक N-P-K अनुपात प्राप्त करें",
        act_mkt_title: "मंडी भाव",
        act_mkt_desc: "फसलों के बिक्री मूल्य की जांच करें",
        tip_title: "आज का स्मार्ट सुझाव",
        tip_desc: "हानिकारक कीटों से बचाव के लिए सुबह जल्दी या शाम को नीम के तेल का छिड़काव करें।",
        scan_header: "एआई फसल स्कैनर",
        scan_subheader: "कैमरे को संक्रमित पौधे की पत्तियों पर केंद्रित करें",
        analyzing_text: "एआई आपकी फसल का विश्लेषण कर रहा है...",
        test_sample_label: "सत्यापन के लिए पत्ती का नमूना चुनें:",
        sample_blight: "टमाटर झुलसा (ब्लाइट)",
        sample_rust: "गेहूं गेरुआ (रस्ट)",
        sample_healthy: "स्वस्थ धान",
        gallery_btn: "गैलरी",
        flash_btn: "फ्लैश",
        fert_header: "उर्वरक गाइड",
        fert_subheader: "मिट्टी की पोषण आवश्यकताओं की गणना के लिए विवरण चुनें",
        lbl_select_crop: "फसल चुनें",
        crop_wheat: "🌾 गेहूं",
        crop_rice: "🌾 धान",
        crop_cotton: "☁️ कपास",
        lbl_soil_type: "मिट्टी का प्रकार",
        soil_alluvial: "जलोढ़ मिट्टी",
        soil_black: "काली मिट्टी",
        soil_red: "लाल मिट्टी",
        soil_sandy: "बलुआ मिट्टी",
        rec_label: "अनुशंसित अनुपात",
        nitrogen: "नाइट्रोजन",
        phosphorus: "फास्फोरस",
        potassium: "पोटेशियम",
        tbl_nutrient: "पोषक तत्व",
        tbl_dosage: "मात्रा (प्रति एकड़)",
        tbl_timing: "छिड़काव का सही समय",
        urea_time: "विभाजन: बुवाई और कल्ले निकलते समय",
        p_time: "बुवाई के दौरान आधार खुराक",
        k_time: "आधार खुराक या पहली सिंचाई के साथ",
        warn_title: "चेतावनी:",
        wheat_warn: "नाइट्रोजन के अत्यधिक उपयोग से फसल गिर सकती है और कीटों का खतरा बढ़ सकता है। 120 किग्रा/हेक्टेयर से अधिक न लें।",
        rice_warn: "पानी बहने से रोकने के लिए नाइट्रोजन उर्वरक डालने से पहले जलभराव को नियंत्रित करें।",
        cotton_warn: "लीचिंग नुकसान को कम करने के लिए यदि मिट्टी बलुआ है तो पोटाश को विभाजित खुराकों में डालें।",
        market_title: "ताजा मंडी भाव",
        showing_gps: "आपके जीपीएस स्थान के पास के भाव दिखाए जा रहे हैं",
        nav_home: "होम",
        nav_fert: "उर्वरक",
        nav_scan: "स्कैन",
        nav_market: "मंडी",
        nav_help: "सहायता",
        confidence_lbl: "सटीकता दर:",
        treatment_title: "अनुशंसित उपचार:",
        buy_pesticide: "कीटनाशक खरीदें",
        voice_title: "एआई वॉयस असिस्टेंट",
        voice_listening: "सुन रहा हूँ... मुझसे अंग्रेजी या हिंदी में कुछ भी पूछें",
        suggested_questions: "एक नमूना प्रश्न पर क्लिक करें:",
        q_weather: "\"क्या आज बारिश होगी?\"",
        q_fertilizer: "\"जलोढ़ मिट्टी में गेहूं के लिए कितना उर्वरक चाहिए?\"",
        q_disease: "\"झुलसा रोग का उपचार कैसे करें?\"",
        help_title: "स्मार्ट किसान ऐप में आपका स्वागत है!",
        help_desc1: "यह ऐप किसानों को बेहतर फसल प्रबंधन के लिए कृत्रिम बुद्धिमत्ता (AI) का उपयोग करने में मदद करने के लिए डिज़ाइन किया गया है।",
        help_home_desc: "तत्काल मौसम सूचनाएं प्राप्त करें और त्वरित कार्यों तक पहुंचें।",
        help_scan_desc: "पौधों की पत्तियों को स्कैन करने और फसल की बीमारी का तुरंत निदान करने के लिए एआई का उपयोग करें।",
        help_fert_desc: "सटीक वैज्ञानिक N-P-K सिफारिश प्राप्त करने के लिए अपनी मिट्टी का प्रकार और लक्षित फसल दर्ज करें।",
        help_market_desc: "स्थानीय थोक बाजारों (मंडियों) से दैनिक फसल की कीमतों की निगरानी करें।",
    }
};

// ----------------------------------------------------
// STATE VARIABLES & DOM ELEMENTS
// ----------------------------------------------------
let currentLanguage = 'en';
let selectedLeafSample = 'blight'; // 'blight', 'rust', or 'healthy'
let flashEnabled = false;

// Simulated leaf image databases (Base64 SVG strings for mockup graphics)
const leafImages = {
    blight: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23E8F5E9'/><path d='M10,80 C40,40 50,20 80,45 C70,75 40,85 10,80 Z' fill='%2366BB6A' stroke='%232E7D32' stroke-width='2'/><path d='M10,80 L80,45' stroke='%231B5E20' stroke-width='1.5'/><path d='M30,68 L40,75' stroke='%231B5E20' stroke-width='1'/><path d='M40,63 L55,70' stroke='%231B5E20' stroke-width='1'/><path d='M50,57 L62,62' stroke='%231B5E20' stroke-width='1'/><path d='M60,52 L72,55' stroke='%231B5E20' stroke-width='1'/><circle cx='45' cy='50' r='9' fill='%237D6B42' opacity='0.85'/><circle cx='43' cy='48' r='5' fill='%233E2723' opacity='0.9'/><circle cx='60' cy='42' r='6' fill='%237D6B42' opacity='0.85'/><circle cx='59' cy='41' r='3.5' fill='%233E2723' opacity='0.9'/><path d='M20,75 C25,70 28,78 26,76' stroke='%235D4037' stroke-width='3' fill='none'/><circle cx='32' cy='70' r='5' fill='%237D6B42' opacity='0.85'/><text x='15' y='20' font-family='sans-serif' font-size='5' fill='%23C62828' font-weight='bold'>SIMULATED: TOMATO BLIGHT</text></svg>`,
    
    rust: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F1F8E9'/><path d='M50,90 C30,70 30,30 50,10 C70,30 70,70 50,90 Z' fill='%2381C784' stroke='%232E7D32' stroke-width='2'/><path d='M50,10 L50,90' stroke='%231B5E20' stroke-width='1.5'/><circle cx='45' cy='30' r='1.5' fill='%23E65100'/><circle cx='55' cy='35' r='2' fill='%23EF6C00'/><circle cx='48' cy='45' r='1.2' fill='%23F57C00'/><circle cx='53' cy='55' r='2.5' fill='%23E65100'/><circle cx='44' cy='60' r='1.5' fill='%23EF6C00'/><circle cx='52' cy='70' r='1.8' fill='%23F57C00'/><circle cx='47' cy='75' r='2' fill='%23E65100'/><circle cx='54' cy='25' r='1.5' fill='%23E65100'/><text x='15' y='20' font-family='sans-serif' font-size='5' fill='%23D84315' font-weight='bold'>SIMULATED: WHEAT RUST</text></svg>`,
    
    healthy: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23E8F5E9'/><path d='M20,85 C15,55 35,25 50,15 C65,25 85,55 80,85 C50,90 50,90 20,85 Z' fill='%234CAF50' stroke='%231B5E20' stroke-width='2'/><path d='M50,15 L50,88' stroke='%231B5E20' stroke-width='1.5'/><path d='M50,35 Q65,40 68,36' stroke='%231B5E20' stroke-width='1'/><path d='M50,48 Q32,52 30,48' stroke='%231B5E20' stroke-width='1'/><path d='M50,60 Q70,65 72,60' stroke='%231B5E20' stroke-width='1'/><path d='M50,72 Q30,76 28,72' stroke='%231B5E20' stroke-width='1'/><text x='15' y='20' font-family='sans-serif' font-size='5' fill='%232E7D32' font-weight='bold'>SIMULATED: HEALTHY RICE</text></svg>`
};

// Mandi Price Listings Database (different prices per Mandi selection)
const mandiPricesDB = {
    nashik: [
        { name_en: "Wheat (Lokwan)", name_hi: "गेहूं (लोकवान)", price: "2,250", change: "+25", up: true, icon: "🌾" },
        { name_en: "Rice (Basmati)", name_hi: "धान (बासमती)", price: "4,600", change: "+120", up: true, icon: "🌾" },
        { name_en: "Tomato (Local)", name_hi: "टमाटर (देसी)", price: "1,800", change: "-40", up: false, icon: "🍅" },
        { name_en: "Onion (Red)", name_hi: "प्याज (लाल)", price: "1,550", change: "-30", up: false, icon: "🧅" },
        { name_en: "Cotton (Long)", name_hi: "कपास (लंबा)", price: "7,100", change: "+150", up: true, icon: "☁️" },
        { name_en: "Soybean (Yellow)", name_hi: "सोयाबीन (पीला)", price: "4,650", change: "+10", up: true, icon: "🫘" }
    ],
    nagpur: [
        { name_en: "Wheat (Lokwan)", name_hi: "गेहूं (लोकवान)", price: "2,180", change: "-10", up: false, icon: "🌾" },
        { name_en: "Rice (Sonamasuri)", name_hi: "धान (सोनामसूरी)", price: "3,200", change: "+45", up: true, icon: "🌾" },
        { name_en: "Oranges (Grade A)", name_hi: "संतरा (ग्रेड ए)", price: "5,500", change: "+250", up: true, icon: "🍊" },
        { name_en: "Cotton (Medium)", name_hi: "कपास (मध्यम)", price: "6,800", change: "-80", up: false, icon: "☁️" },
        { name_en: "Tur (Arhar)", name_hi: "अरहर (तुअर)", price: "9,200", change: "+110", up: true, icon: "🫘" }
    ],
    indore: [
        { name_en: "Wheat (Malavraj)", name_hi: "गेहूं (मालवराज)", price: "2,310", change: "+35", up: true, icon: "🌾" },
        { name_en: "Potato (Jyoti)", name_hi: "आलू (ज्योति)", price: "1,200", change: "+20", up: true, icon: "🥔" },
        { name_en: "Onion (White)", name_hi: "प्याज (सफेद)", price: "1,600", change: "-15", up: false, icon: "🧅" },
        { name_en: "Soybean (Yellow)", name_hi: "सोयाबीन (पीला)", price: "4,780", change: "+60", up: true, icon: "🫘" },
        { name_en: "Garlic (Desi)", name_hi: "लहसुन (देसी)", price: "12,000", change: "-300", up: false, icon: "🧄" }
    ]
};

// ----------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Initial UI Elements Initialization
    lucide.createIcons();
    initClock();
    initNewsTicker();
    updateMandiPrices();
    calculateFertilizer();
    
    // Bind Event Listeners
    document.getElementById('lang-selector').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    document.getElementById('voice-trigger-btn').addEventListener('click', openVoiceModal);
});

// ----------------------------------------------------
// CLOCK LOGIC
// ----------------------------------------------------
function initClock() {
    const timeElement = document.getElementById('current-time');
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12
        minutes = minutes < 10 ? '0'+minutes : minutes;
        timeElement.textContent = `${hours}:${minutes} ${ampm}`;
    };
    updateTime();
    setInterval(updateTime, 30000); // Update every 30 seconds
}

// ----------------------------------------------------
// NAVIGATION ROUTER
// ----------------------------------------------------
function navigateTo(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show selected screen
    const targetScreen = document.getElementById(`screen-${screenId}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Update Bottom Nav active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Handle special float Scan FAB vs Standard Items
    const scanFab = document.getElementById('nav-scan');
    if (screenId === 'scan') {
        scanFab.classList.add('active');
        // Pre-fill viewfinder with selected sample leaf
        updateViewfinderImage();
    } else {
        scanFab.classList.remove('active');
        const activeNav = document.getElementById(`nav-${screenId}`);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    }
}

// ----------------------------------------------------
// LANGUAGE TOGGLE LOGIC
// ----------------------------------------------------
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Sync language selector value
    document.getElementById('lang-selector').value = lang;

    // Update all DOM elements with data-key
    const translateElements = document.querySelectorAll('[data-key]');
    translateElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Re-trigger dynamic element updates for translations
    updateMandiPrices();
    calculateFertilizer();
    initNewsTicker();

    // Show helpful toast
    const msg = lang === 'hi' ? 'भाषा बदलकर हिन्दी कर दी गई है।' : 'Language changed to English.';
    showToast(msg, true);
}

// ----------------------------------------------------
// NEWS TICKER LOGIC (Crop Prices)
// ----------------------------------------------------
function initNewsTicker() {
    const tickerItems = document.getElementById('ticker-items');
    // Fetch prices from primary APMC (Nashik)
    const list = mandiPricesDB.nashik;
    
    let html = '';
    // Duplicate items to ensure smooth loop wrap
    const items = [...list, ...list];
    items.forEach(crop => {
        const cropName = currentLanguage === 'hi' ? crop.name_hi : crop.name_en;
        const trendClass = crop.up ? 'ticker-price-up' : 'ticker-price-down';
        const trendSymbol = crop.up ? '▲' : '▼';
        html += `<span class="ticker-item">${crop.icon} ${cropName}: ₹${crop.price}/q (<span class="${trendClass}">${trendSymbol} ${crop.change}</span>) &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
    });
    
    tickerItems.innerHTML = html;
}

// ----------------------------------------------------
// AI SCANNER FLOW
// ----------------------------------------------------
function selectSample(sampleType) {
    selectedLeafSample = sampleType;
    
    // Update active class on buttons
    const buttons = document.querySelectorAll('.sample-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`[data-sample="${sampleType}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    updateViewfinderImage();
}

function updateViewfinderImage() {
    const feed = document.getElementById('camera-feed-img');
    if (feed && leafImages[selectedLeafSample]) {
        feed.src = leafImages[selectedLeafSample];
    }
}

function startScanningFlow() {
    const viewfinder = document.getElementById('camera-viewfinder');
    
    // Switch UI state to scanning mode
    viewfinder.classList.add('scanning');
    
    // Disable shutter button during process
    const shutter = document.getElementById('shutter-btn');
    shutter.disabled = true;
    
    // Sound beep simulation
    playCameraSound();

    // After 2.2 seconds display the Results Modal
    setTimeout(() => {
        viewfinder.classList.remove('scanning');
        shutter.disabled = false;
        
        displayScanResults(selectedLeafSample);
    }, 2200);
}

function displayScanResults(type) {
    const modal = document.getElementById('results-modal');
    const title = document.getElementById('results-title');
    const confidenceVal = document.getElementById('results-conf-value');
    const treatmentList = document.getElementById('results-treatment');
    const buyBtn = document.getElementById('buy-pesticide-btn');
    const resultsIcon = document.getElementById('results-icon-container');

    let treatments = [];
    
    if (type === 'blight') {
        title.textContent = currentLanguage === 'hi' ? 'टमाटर झुलसा (Leaf Blight)' : 'Tomato Leaf Blight';
        confidenceVal.textContent = '94%';
        resultsIcon.innerHTML = '<i data-lucide="alert-triangle" style="color: #D32F2F;"></i>';
        buyBtn.style.display = 'flex';
        
        treatments = currentLanguage === 'hi' ? [
            "संक्रमित पत्तियों को तुरंत काटकर नष्ट करें।",
            "तांबे के फफूंदनाशी (Copper Oxychloride) 2.5 ग्राम/लीटर का छिड़काव करें।",
            "हवा का संचार बढ़ाएं और पत्तों के ऊपर पानी डालने से बचें।"
        ] : [
            "Prune infected bottom leaves immediately to prevent upward spread.",
            "Spray Copper Oxychloride fungicide at 2.5g per liter of water.",
            "Improve field aeration and avoid overhead sprinkler watering."
        ];
    } else if (type === 'rust') {
        title.textContent = currentLanguage === 'hi' ? 'गेहूं गेरुआ (Wheat Rust)' : 'Wheat Rust Disease';
        confidenceVal.textContent = '89%';
        resultsIcon.innerHTML = '<i data-lucide="alert-triangle" style="color: #EF6C00;"></i>';
        buyBtn.style.display = 'flex';

        treatments = currentLanguage === 'hi' ? [
            "खेतों की निगरानी करें और संक्रामकता दिखने पर प्रोपिकोनाज़ोल (Propiconazole) का छिड़काव करें।",
            "पोटेशियम उर्वरकों का उचित संतुलन बनाए रखें जो प्राकृतिक प्रतिरोध को बढ़ाता है।",
            "भविष्य की बुवाई के लिए जंग-प्रतिरोधी गेहूं की किस्मों का चयन करें।"
        ] : [
            "Spray Propiconazole (Tilt 25 EC) @ 1 ml/liter at the first sign of pustules.",
            "Maintain balanced Potash levels in soil to build natural leaf immunity.",
            "Use rust-resistant seeds for the next crop cycle."
        ];
    } else {
        // Healthy leaf
        title.textContent = currentLanguage === 'hi' ? 'स्वस्थ पत्ता (Healthy Leaf)' : 'Healthy Plant Leaf';
        confidenceVal.textContent = '98%';
        resultsIcon.innerHTML = '<i data-lucide="check-circle" style="color: #2E7D32;"></i>';
        buyBtn.style.display = 'none';

        treatments = currentLanguage === 'hi' ? [
            "कोई रोग नहीं मिला! आपकी धान की फसल स्वस्थ स्थिति में है।",
            "समान अंतराल पर सिंचाई जारी रखें।",
            "पोषक तत्वों की कमी से बचने के लिए उर्वरक गाइड का पालन करें।"
        ] : [
            "No disease detected! Your rice crop is in healthy condition.",
            "Continue standard crop care and irrigation schedule.",
            "Monitor periodically and apply recommended balanced fertilizers."
        ];
    }

    // Populate steps
    treatmentList.innerHTML = treatments.map(step => `<li>${step}</li>`).join('');
    
    // Buy pesticide btn labels
    const btnText = document.getElementById('buy-btn-text');
    btnText.textContent = currentLanguage === 'hi' ? 'अनुशंसित कीटनाशक खरीदें' : 'Buy Recommended Pesticide';

    // Show modal
    modal.classList.add('active');
    lucide.createIcons();
}

function closeResultsModal() {
    document.getElementById('results-modal').classList.remove('active');
}

function buyPesticide() {
    closeResultsModal();
    const successMsg = currentLanguage === 'hi' 
        ? '🛒 कीटनाशक कार्ट में जोड़ा गया! 24 घंटे में नाशिक में डिलीवरी हो जाएगी।' 
        : '🛒 Pesticide added to cart! Will be delivered to your location in 24 hours.';
    showToast(successMsg, true);
}

// Simulated Flash toggle
function toggleFlash() {
    flashEnabled = !flashEnabled;
    const flashIcon = document.getElementById('flash-icon');
    if (flashEnabled) {
        flashIcon.style.color = '#FBC02D';
        showToast(currentLanguage === 'hi' ? 'फ्लैश चालू' : 'Flash turned ON', true);
    } else {
        flashIcon.style.color = 'var(--text-secondary)';
        showToast(currentLanguage === 'hi' ? 'फ्लैश बंद' : 'Flash turned OFF', true);
    }
}

// simulated camera click noise
function playCameraSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    } catch(e) {
        // AudioContext browser restrictions block this occasionally, ignore silently
    }
}

// Simulated upload from gallery
function triggerGalleryUpload() {
    document.getElementById('gallery-file-input').click();
}

function handleGalleryFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Update viewfinder background
            const img = document.getElementById('camera-feed-img');
            img.src = e.target.result;
            
            // Randomly assign disease result for custom uploaded image to simulate scanner
            const options = ['blight', 'rust', 'healthy'];
            selectedLeafSample = options[Math.floor(Math.random() * options.length)];
            
            showToast(currentLanguage === 'hi' ? 'छवि सफलतापूर्वक अपलोड की गई' : 'Image uploaded successfully', true);
            startScanningFlow();
        };
        reader.readAsDataURL(file);
    }
}

// ----------------------------------------------------
// FERTILIZER ENGINE CALCULATIONS
// ----------------------------------------------------
const fertilizerCalculations = {
    wheat: {
        alluvial: { n: 120, p: 60, k: 40, urea: 104, ssp: 130, mop: 27 },
        black: { n: 100, p: 50, k: 30, urea: 87, ssp: 110, mop: 20 },
        red: { n: 110, p: 55, k: 35, urea: 95, ssp: 120, mop: 23 },
        sandy: { n: 90, p: 40, k: 40, urea: 78, ssp: 88, mop: 27 }
    },
    rice: {
        alluvial: { n: 100, p: 50, k: 50, urea: 87, ssp: 110, mop: 34 },
        black: { n: 120, p: 60, k: 40, urea: 104, ssp: 130, mop: 27 },
        red: { n: 90, p: 45, k: 30, urea: 78, ssp: 98, mop: 20 },
        sandy: { n: 80, p: 40, k: 40, urea: 69, ssp: 88, mop: 27 }
    },
    cotton: {
        alluvial: { n: 80, p: 40, k: 40, urea: 69, ssp: 88, mop: 27 },
        black: { n: 100, p: 50, k: 50, urea: 87, ssp: 110, mop: 34 },
        red: { n: 90, p: 45, k: 30, urea: 78, ssp: 98, mop: 20 },
        sandy: { n: 70, p: 35, k: 35, urea: 60, ssp: 77, mop: 23 }
    }
};

function calculateFertilizer() {
    const crop = document.getElementById('fert-crop').value;
    const soil = document.getElementById('fert-soil').value;
    
    const data = fertilizerCalculations[crop][soil];
    if (!data) return;

    // Set N-P-K elements
    document.getElementById('npk-n').textContent = data.n;
    document.getElementById('npk-p').textContent = data.p;
    document.getElementById('npk-k').textContent = data.k;

    // Set table rows Qty (Assuming local conversion: Per Acre)
    // 1 Hectare = 2.47 Acres, calculations converted accordingly
    const ureaPerAcre = Math.round(data.urea * 0.4);
    const sspPerAcre = Math.round(data.ssp * 0.4);
    const mopPerAcre = Math.round(data.mop * 0.4);

    document.getElementById('urea-dosage').textContent = `${ureaPerAcre} kg`;
    document.getElementById('p-dosage').textContent = `${sspPerAcre} kg`;
    document.getElementById('k-dosage').textContent = `${mopPerAcre} kg`;

    // Warnings updates
    const warningText = document.getElementById('fert-warning-text');
    if (crop === 'wheat') {
        warningText.innerHTML = currentLanguage === 'hi' ? translations.hi.wheat_warn : translations.en.wheat_warn;
    } else if (crop === 'rice') {
        warningText.innerHTML = currentLanguage === 'hi' ? translations.hi.rice_warn : translations.en.rice_warn;
    } else if (crop === 'cotton') {
        warningText.innerHTML = currentLanguage === 'hi' ? translations.hi.cotton_warn : translations.en.cotton_warn;
    }
}

// ----------------------------------------------------
// MARKET HUB APMC FILTERING
// ----------------------------------------------------
function updateMandiPrices() {
    const location = document.getElementById('mandi-location').value;
    const cropListContainer = document.getElementById('crop-price-list');
    const cropData = mandiPricesDB[location];

    if (!cropData) return;

    let html = '';
    cropData.forEach(crop => {
        const cropName = currentLanguage === 'hi' ? crop.name_hi : crop.name_en;
        const trendClass = crop.up ? 'trend-up' : 'trend-down';
        const trendIcon = crop.up ? 'arrow-up-right' : 'arrow-down-right';
        const trendText = crop.up ? (currentLanguage === 'hi' ? 'तेज' : 'Up') : (currentLanguage === 'hi' ? 'मंदी' : 'Down');
        
        html += `
        <div class="crop-listing-card">
            <div class="crop-main-info">
                <div class="crop-avatar">${crop.icon}</div>
                <div class="crop-name-container">
                    <span class="crop-name">${cropName}</span>
                    <span class="crop-mandi">${location.toUpperCase()} APMC</span>
                </div>
            </div>
            <div class="crop-pricing-side">
                <span class="crop-price">₹${crop.price}/q</span>
                <div class="crop-price-trend ${trendClass}">
                    <i data-lucide="${trendIcon}" style="width: 10px; height: 10px;"></i>
                    <span>₹${crop.change} (${trendText})</span>
                </div>
            </div>
        </div>
        `;
    });

    cropListContainer.innerHTML = html;
    lucide.createIcons();
}

// ----------------------------------------------------
// VOICE ASSISTANT SIMULATOR
// ----------------------------------------------------
function openVoiceModal() {
    const modal = document.getElementById('voice-modal');
    modal.classList.add('active');

    // Reset Dialogue
    document.getElementById('user-speech').style.display = 'none';
    document.getElementById('ai-speech').style.display = 'none';
    document.getElementById('wave-container').classList.add('active-voice-mode');
    
    // Reset Status
    const status = document.getElementById('voice-status');
    status.innerHTML = currentLanguage === 'hi' ? translations.hi.voice_listening : translations.en.voice_listening;
}

function closeVoiceModal() {
    document.getElementById('voice-modal').classList.remove('active');
    document.getElementById('wave-container').classList.remove('active-voice-mode');
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
}

const voiceResponses = {
    weather: {
        en: {
            user: "Will it rain today?",
            ai: "Partly cloudy today. However, heavy rain is expected tomorrow afternoon. I suggest delaying any major watering or pesticide applications until tomorrow evening.",
            speak: "Partly cloudy today. However, heavy rain is expected tomorrow afternoon. I suggest delaying irrigation."
        },
        hi: {
            user: "क्या आज बारिश होगी?",
            ai: "आज आंशिक रूप से बादल छाए रहेंगे। हालांकि, कल दोपहर भारी बारिश की आशंका है। मैं सुझाव देता हूं कि सिंचाई या छिड़काव का काम कल शाम तक टाल दें।",
            speak: "आज आंशिक रूप से बादल छाए रहेंगे। हालांकि कल दोपहर भारी बारिश होने की संभावना है। कृपया सिंचाई रोक दें।"
        }
    },
    fertilizer: {
        en: {
            user: "How much fertilizer for wheat in alluvial soil?",
            ai: "For wheat in alluvial soil, the recommended N-P-K ratio is 120:60:40 kg per hectare. Per acre, this translates to about 42 kg of Urea, 52 kg of Single Super Phosphate, and 11 kg of Muriate of Potash.",
            speak: "For wheat in alluvial soil, recommend 42 kilograms of Urea, 52 kilograms of SSP and 11 kilograms of MOP per acre."
        },
        hi: {
            user: "जलोढ़ मिट्टी में गेहूं के लिए कितना उर्वरक चाहिए?",
            ai: "जलोढ़ मिट्टी में गेहूं के लिए अनुशंसित N-P-K अनुपात 120:60:40 किग्रा प्रति हेक्टेयर है। प्रति एकड़ के हिसाब से यह लगभग 42 किग्रा यूरिया, 52 किग्रा एसएसपी और 11 किग्रा एमओपी होगा।",
            speak: "जलोढ़ मिट्टी में गेहूं के लिए प्रति एकड़ 42 किलो यूरिया, 52 किलो एसएसपी और 11 किलो एमओपी डालने की सिफारिश की जाती है।"
        }
    },
    disease: {
        en: {
            user: "How to treat Leaf Blight?",
            ai: "To treat Leaf Blight, you should prune bottom infected leaves immediately to prevent upward spread, then spray Copper Oxychloride fungicide at 2.5 grams per liter of water. You can buy the chemical directly in the Scan tab.",
            speak: "Prune infected bottom leaves immediately, then spray Copper Oxychloride fungicide at 2.5 grams per liter."
        },
        hi: {
            user: "झुलसा रोग का उपचार कैसे करें?",
            ai: "पत्ती झुलसा (लीफ़ ब्लाइट) के इलाज के लिए, संक्रमण फैलने से रोकने के लिए नीचे की संक्रमित पत्तियों को तुरंत हटा दें, फिर कॉपर ऑक्सीक्लोराइड फफूंदनाशी का 2.5 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें।",
            speak: "संक्रमित पत्तियों को तुरंत हटा दें, फिर कॉपर ऑक्सीक्लोराइड फफूंदनाशी 2.5 ग्राम प्रति लीटर पानी में मिलाकर छिड़कें।"
        }
    }
};

function simulateVoiceQuery(queryKey) {
    const data = voiceResponses[queryKey][currentLanguage];
    if (!data) return;

    // Show User Speech Bubble
    const userSpeech = document.getElementById('user-speech');
    userSpeech.textContent = `"${data.user}"`;
    userSpeech.style.display = 'block';

    // Set waves to thinking state (turn off active bounce slightly)
    const wave = document.getElementById('wave-container');
    wave.classList.remove('active-voice-mode');
    
    // Status text updates
    const status = document.getElementById('voice-status');
    status.innerHTML = currentLanguage === 'hi' ? 'एआई सोच रहा है...' : 'AI is processing...';

    // Hide previous response
    const aiSpeech = document.getElementById('ai-speech');
    aiSpeech.style.display = 'none';

    // Speech synthesis reset
    window.speechSynthesis.cancel();

    // After brief delay show AI Speech Bubble
    setTimeout(() => {
        aiSpeech.textContent = data.ai;
        aiSpeech.style.display = 'block';
        status.innerHTML = currentLanguage === 'hi' ? 'बोल रहा है...' : 'Speaking...';
        wave.classList.add('active-voice-mode');

        // Speak response out loud using Web Speech Synthesis API
        speakAIResponse(data.speak);
    }, 1200);
}

function speakAIResponse(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Choose locale voice
        if (currentLanguage === 'hi') {
            utterance.lang = 'hi-IN';
        } else {
            utterance.lang = 'en-IN'; // Standard Indian English accent for accessibility
        }
        
        utterance.rate = 0.95; // Slightly slower for better farm comprehension
        
        // Change status back once finished speaking
        utterance.onend = () => {
            const status = document.getElementById('voice-status');
            status.innerHTML = currentLanguage === 'hi' ? translations.hi.voice_listening : translations.en.voice_listening;
            document.getElementById('wave-container').classList.remove('active-voice-mode');
        };
        
        window.speechSynthesis.speak(utterance);
    } else {
        // Speech not supported, reset statuses instantly
        setTimeout(() => {
            const status = document.getElementById('voice-status');
            status.innerHTML = currentLanguage === 'hi' ? translations.hi.voice_listening : translations.en.voice_listening;
            document.getElementById('wave-container').classList.remove('active-voice-mode');
        }, 3000);
    }
}

// ----------------------------------------------------
// HELP DIALOGUE LOGIC
// ----------------------------------------------------
function showHelpModal() {
    document.getElementById('help-modal').classList.add('active');
}

function closeHelpModal() {
    document.getElementById('help-modal').classList.remove('active');
}

// ----------------------------------------------------
// DYNAMIC TOAST NOTIFICATION UTILITIES
// ----------------------------------------------------
function showToast(message, isSuccess = true) {
    const toast = document.getElementById('app-toast');
    const toastText = document.getElementById('toast-message-text');
    const toastIcon = document.getElementById('toast-icon-type');

    toastText.textContent = message;

    if (isSuccess) {
        toastIcon.setAttribute('data-key', 'check');
        toastIcon.innerHTML = '<i data-lucide="check-circle" style="color: #4CAF50;"></i>';
    } else {
        toastIcon.innerHTML = '<i data-lucide="alert-circle" style="color: #D32F2F;"></i>';
    }
    lucide.createIcons();

    // Show Toast
    toast.classList.add('show');

    // Auto-hide after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}
