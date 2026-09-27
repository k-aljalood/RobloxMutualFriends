// made by: @k_aljalood

(async () => {
    try {
        const ICON_BROKEN = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA5MCA5MCI+PHN0eWxlPi5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxnIGlkPSJib3JrZW4iPjxwYXRoIGlkPSJiZyIgZD0iTTAgMGg5MHY5MEgweiIgc3R5bGU9ImZpbGw6IzY1NjY2OCIvPjxnIGlkPSJicm9rZW4iIHN0eWxlPSJvcGFjaXR5Oi4zIj48cGF0aCBkPSJNNTEuMiAyMy41djEwLjNoMTAuM00yOC41IDQ4Ljl2MTcuNmgzM1Y1My44bC0xMS01LTExIDUtMTEtNXoiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJNNjEuNSAzMy44IDUxLjIgMjMuNUgyOC41VjQxbDExIDUgMTEtNSAxMSA1eiIgY2xhc3M9InN0MiIvPjwvZz48L2c+PC9zdmc+";
        const ICON_BLOCKED = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA5MCA5MCI+PHN0eWxlPi5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxnIGlkPSJ1bmFwcHJvdmVkXzFfIj48cGF0aCBpZD0iYmdfMl8iIGQ9Ik0wIDBoOTB2OTBIMHoiIHN0eWxlPSJmaWxsOiM2NTY2NjgiLz48ZyBpZD0idW5hcHByb3ZlZCIgc3R5bGU9Im9wYWNpdHk6LjMiPjxjaXJjbGUgY3g9IjQ1IiBjeT0iNDguOCIgcj0iMTAiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJtMzggNDEuNyAxNCAxNC4xTTMyLjUgMjMuNWgtNHY0TTI4LjUgNjIuNXY0aDRNMjguNSAzMS44djZNMjguNSA0MnY2TTI4LjUgNTIuMnY2TTU3LjUgNjYuNWg0di00TTYxLjUgNTguMnYtNk02MS41IDQ4di02TTYxLjUgMzcuOHYtNE0zNi44IDY2LjVoNk00Ny4yIDY2LjVoNk0zNi44IDIzLjVoNk00Ny4yIDIzLjVoNE01MS40IDIzLjZsMy41IDMuNU01Ny45IDMwLjFsMy41IDMuNU01MS4yIDIzLjh2M001OC41IDMzLjhoM001MS4yIDMwLjJ2My42aDMuNiIgY2xhc3M9InN0MiIvPjwvZz48L2c+PC9zdmc+";

        let style = document.getElementById("custom-mutual-styles");
        if (!style) {
            style = document.createElement('style');
            style.id = "custom-mutual-styles";
            style.innerHTML = `
                .custom-mutual-loading {
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    user-select: none;
                    animation: fadeIn 0.2s ease-in-out;
                }
                .custom-mutual-loading .foundation-web-progress-circle {
                    width: 14px !important;
                    height: 14px !important;
                    flex-shrink: 0 !important;
                }
                .custom-mutual-loading .foundation-web-progress-circle svg {
                    width: 14px !important;
                    height: 14px !important;
                    display: block !important;
                }
                @keyframes progress-circle-rotate {
                    0% { transform: rotate(0deg) }
                    to { transform: rotate(1turn) }
                }
                .foundation-web-progress-circle-indeterminate {
                    animation: progress-circle-rotate 1.4s linear infinite !important;
                    transform-origin: 50% 50% !important;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                #mutual-friends-list-container {
                    scrollbar-width: none !important;
                }
                #mutual-friends-list-container::-webkit-scrollbar {
                    display: none !important;
                }
                #custom-mCSB-scrollbar {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    top: 0 !important;
                    bottom: 0 !important;
                }
                #custom-mCSB-scrollbar .mCSB_draggerContainer {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                #custom-mCSB-scrollbar .mCSB_dragger_bar {
                    background-color: rgba(255, 255, 255, 0.35) !important;
                }
                #custom-mCSB-scrollbar .mCSB_dragger:hover .mCSB_dragger_bar {
                    background-color: rgba(255, 255, 255, 0.5) !important;
                }
                .light-theme #custom-mCSB-scrollbar .mCSB_dragger_bar {
                    background-color: rgba(0, 0, 0, 0.25) !important;
                }
                .light-theme #custom-mCSB-scrollbar .mCSB_dragger:hover .mCSB_dragger_bar {
                    background-color: rgba(0, 0, 0, 0.4) !important;
                }
                .custom-account-item {
                    position: relative !important;
                    border-radius: 8px !important;
                    margin: 2px 12px !important;
                    overflow: hidden !important;
                }
                .custom-account-item .avatar-status {
                    position: absolute !important;
                    bottom: 0px !important;
                    right: 0px !important;
                    width: 28px !important;
                    height: 28px !important;
                    transform: scale(0.5) !important;
                    transform-origin: bottom right !important;
                    display: block !important;
                    z-index: 2 !important;
                    pointer-events: auto !important;
                }
                .custom-account-item [data-testid="presence-icon"] {
                    width: 28px !important;
                    height: 28px !important;
                    display: block !important;
                    max-width: none !important;
                    max-height: none !important;
                }
                [data-status-user-id] {
                    position: absolute !important;
                    width: 100% !important;
                    height: 100% !important;
                    top: 0 !important;
                    left: 0 !important;
                    pointer-events: none !important;
                    overflow: visible !important;
                }
                .custom-mutual-tooltip {
                    position: absolute !important;
                    z-index: 1000000 !important;
                    pointer-events: none !important;
                    animation: fadeIn 0.15s ease-in-out;
                }
            `;
            document.head.appendChild(style);
        }

        const BUTTON_TEXTS = {
            en: { singular: "1 Mutual", plural: "{count} Mutuals" },
            ar: { singular: "1 مشترك", plural: "{count} مشتركين" },
            id: { singular: "1 Saling Kenal", plural: "{count} Saling Kenal" },
            de: { singular: "1 gemeinsam", plural: "{count} gemeinsame" },
            es: { singular: "1 en común", plural: "{count} en común" },
            fr: { singular: "1 en commun", plural: "{count} en commun" },
            it: { singular: "1 in comune", plural: "{count} in comune" },
            pl: { singular: "1 wspólny", plural: "{count} wspólnych" },
            pt: { singular: "1 em comum", plural: "{count} em comum" },
            vi: { singular: "1 chung", plural: "{count} chung" },
            tr: { singular: "1 Ortak", plural: "{count} Ortak" },
            hi: { singular: "1 आपसी", plural: "{count} आपसी" },
            th: { singular: "ร่วมกัน 1 คน", plural: "ร่วมกัน {count} คน" },
            zh: { singular: "1 个共同好友", plural: "{count} 个共同好友" },
            zh_cn: { singular: "1 个共同好友", plural: "{count} 个共同好友" },
            zh_tw: { singular: "1 個共同好友", plural: "{count} 個共同好友" },
            zh_hans: { singular: "1 个共同好友", plural: "{count} 个共同好友" },
            zh_hant: { singular: "1 個共同好友", plural: "{count} 個共同好友" },
            ja: { singular: "1人の共通のフレンド", plural: "{count}人の共通のフレンド" },
            ko: { singular: "1명의 함께 아는 친구", plural: "{count}명의 함께 아는 친구" },
            ms: { singular: "1 Mutual", plural: "{count} Mutual" },
            nb: { singular: "1 felles", plural: "{count} felles" },
            no: { singular: "1 felles", plural: "{count} felles" },
            sr: { singular: "1 заједнички", plural: "{count} заједничких" },
            da: { singular: "1 fælles", plural: "{count} fælles" },
            et: { singular: "1 ühine", plural: "{count} ühist" },
            fil: { singular: "1 Mutual", plural: "{count} Mutual" },
            tl: { singular: "1 Mutual", plural: "{count} Mutual" },
            hr: { singular: "1 zajednički", plural: "{count} zajedničkih" },
            lv: { singular: "1 kopīgs", plural: "{count} kopīgi" },
            lt: { singular: "1 bendras", plural: "{count} bendri" },
            hu: { singular: "1 közös", plural: "{count} közös" },
            nl: { singular: "1 gemeenschappelijke vriend", plural: "{count} gemeenschappelijk" },
            ro: { singular: "1 comun", plural: "{count} comuni" },
            sq: { singular: "1 i përbashkët", plural: "{count} të përbashkët" },
            sl: { singular: "1 skupni", plural: "{count} skupnih" },
            sk: { singular: "1 spoločných", plural: "{count} spoločných" },
            fi: { singular: "1 yhteinen", plural: "{count} yhteistä" },
            sv: { singular: "1 gemensam", plural: "{count} gemensamma" },
            uk: { singular: "1 спільний", plural: "{count} спільних" },
            cs: { singular: "1 společný", plural: "{count} společných" },
            el: { singular: "1 κοινός", plural: "{count} κοινοί" },
            bs: { singular: "1 zajednički", plural: "{count} zajedničkih" },
            bg: { singular: "1 общ", plural: "{count} общи" },
            ru: { singular: "1 общий", plural: "{count} общих" },
            kk: { singular: "1 ортақ", plural: "{count} ортақ" },
            bn: { singular: "1 জন পারস্পরিক", plural: "{count} জন পারস্পরিক" },
            si: { singular: "1 පාරස්පරික", plural: "{count} පාරස්පරික" },
            my: { singular: "1 မိတ်ဆွေအပြန်အလှန်", plural: "{count} မိတ်ဆွေအပြန်အလှန်" },
            ka: { singular: "1 საერთო", plural: "{count} საერთო" },
            km: { singular: "1 រួមគ្នា", plural: "{count} រួមគ្នា" }
        };

        const TITLE_TEXTS = {
            en: { singular: "1 mutual friend", plural: "{count} mutual friends" },
            ar: { singular: "صديق مشترك واحد", plural: "{count} أصدقاء مشتركين" },
            id: { singular: "1 teman saling kenal", plural: "{count} teman saling kenal" },
            de: { singular: "1 gemeinsamer Freund", plural: "{count} gemeinsame Freunde" },
            es: { singular: "1 amigo en común", plural: "{count} amigos en común" },
            fr: { singular: "1 ami en commun", plural: "{count} amis en commun" },
            it: { singular: "1 amico in comune", plural: "{count} amici in comune" },
            pl: { singular: "1 wspólny znajomy", plural: "{count} wspólnych znajomych" },
            pt: { singular: "1 amigo em comum", plural: "{count} amigos em comum" },
            vi: { singular: "1 bạn chung", plural: "{count} bạn chung" },
            tr: { singular: "1 ortak arkadaş", plural: "{count} ortak arkadaş" },
            hi: { singular: "1 आपसी मित्र", plural: "{count} आपसी मित्र" },
            th: { singular: "เพื่อนร่วมกัน 1 คน", plural: "เพื่อนร่วมกัน {count} คน" },
            zh: { singular: "1 个共同好友", plural: "{count} 个共同好友" },
            zh_cn: { singular: "1 个共同好友", plural: "{count} 个共同好友" },
            zh_tw: { singular: "1 個共同好友", plural: "{count} 個共同好友" },
            zh_hans: { singular: "1 个共同好友", plural: "{count} 个共同好友" },
            zh_hant: { singular: "1 個共同好友", plural: "{count} 個共同好友" },
            ja: { singular: "1人の共通のフレンド", plural: "{count}人の共通のフレンド" },
            ko: { singular: "1명의 함께 아는 친구", plural: "{count}명의 함께 아는 친구" },
            ms: { singular: "1 rakan mutual", plural: "{count} rakan mutual" },
            nb: { singular: "1 felles venn", plural: "{count} felles venner" },
            no: { singular: "1 felles venn", plural: "{count} felles venner" },
            sr: { singular: "1 заједнички пријатељ", plural: "{count} заједничких пријатеља" },
            da: { singular: "1 fælles ven", plural: "{count} fælles venner" },
            et: { singular: "1 ühine sõber", plural: "{count} ühist sõpra" },
            fil: { singular: "1 mutual friend", plural: "{count} mutual friends" },
            tl: { singular: "1 mutual friend", plural: "{count} mutual friends" },
            hr: { singular: "1 zajednički prijatelj", plural: "{count} zajedničkih prijatelja" },
            lv: { singular: "1 kopīgs draugs", plural: "{count} kopīgi draugi" },
            lt: { singular: "1 bendras draugas", plural: "{count} bendri draugai" },
            hu: { singular: "1 közös ismerős", plural: "{count} közös ismerős" },
            nl: { singular: "1 gemeenschappelijke vriend", plural: "{count} gemeenschappelijke vrienden" },
            ro: { singular: "1 prieten comun", plural: "{count} prieteni comuni" },
            sq: { singular: "1 mik i përbashkët", plural: "{count} miq të përbashkët" },
            sl: { singular: "1 skupni prijatelj", plural: "{count} skupnih prijateljev" },
            sk: { singular: "1 spoločného priateľa", plural: "{count} spoločných priateľov" },
            fi: { singular: "1 yhteinen kaveri", plural: "{count} yhteistä kaveria" },
            sv: { singular: "1 gemensam vän", plural: "{count} gemensamma vänner" },
            uk: { singular: "1 спільний друг", plural: "{count} спільних друзів" },
            cs: { singular: "1 společný přítel", plural: "{count} společných přátel" },
            el: { singular: "1 κοινός φίλος", plural: "{count} κοινοί φίλοι" },
            bs: { singular: "1 zajednički prijatelj", plural: "{count} zajedničkih prijatelja" },
            bg: { singular: "1 общ приятел", plural: "{count} общи приятели" },
            ru: { singular: "1 общий друг", plural: "{count} общих друзей" },
            kk: { singular: "1 ортақ дос", plural: "{count} ортақ дос" },
            bn: { singular: "1 জন পারস্পরিক বন্ধু", plural: "{count} জন পারস্পরিক বন্ধু" },
            si: { singular: "1 පාරස්පරික මිතුරා", plural: "{count} පාරස්පරික මිතුරන්" },
            my: { singular: "1 မိတ်ဆွေအပြန်အလှန် မိတ်ဆွေ", plural: "{count} မိတ်ဆွေအပြန်အလှန် မိတ်ဆွေများ" },
            ka: { singular: "1 საერთო მეგობარი", plural: "{count} საერთო მეგობარი" },
            km: { singular: "មិត្តរួមគ្នា 1 នាក់", plural: "មិត្តរួមគ្នា {count} នាក់" }
        };

        const JOIN_TEXTS = {
            en: "Join",
            ar: "الانضمام",
            id: "Bergabung",
            de: "Beitreten",
            es: "Unirse",
            fr: "Rejoindre",
            it: "Partecipa",
            pl: "Dołącz",
            pt: "Entrar",
            vi: "Tham gia",
            tr: "Katıl",
            hi: "शामिल हों",
            th: "เข้าร่วม",
            zh: "加入",
            zh_cn: "加入",
            zh_tw: "加入",
            zh_hans: "加入",
            zh_hant: "加入",
            ja: "参加",
            ko: "참여",
            ms: "Sertai",
            nb: "Bli med",
            no: "Bli med",
            sr: "Придружи се",
            da: "Deltag",
            et: "Liitu",
            fil: "Sumali",
            tl: "Sumali",
            hr: "Pridruži se",
            lv: "Pievienoties",
            lt: "Prisijungti",
            hu: "Csatlakozás",
            nl: "Deelnemen",
            ro: "Alătură-te",
            sq: "Bashkohu",
            sl: "Pridruži se",
            sk: "Pripojiť sa",
            fi: "Liity",
            sv: "Gå med",
            uk: "Приєднатися",
            cs: "Připojit se",
            el: "Συμμετοχή",
            bs: "Pridruži se",
            bg: "Присъединяване",
            ru: "Присоединиться",
            kk: "Қосылу",
            bn: "যোগ দিন",
            si: "සම්බන්ධ වන්න",
            my: "ဝင်ရောက်ပါ",
            ka: "შეუერთდი",
            km: "ចូលរួម"
        };

        const MATURITY_LABEL_TEXTS = {
            en: "Maturity",
            ar: "المحتوى الخاص بالبالغين",
            id: "Maturitas",
            de: "Altersempfehlung",
            es: "Madurez",
            fr: "Maturité",
            it: "Maturità",
            pl: "Dojrzałość",
            pt: "Maturidade",
            vi: "Mức độ phù hợp",
            tr: "Olgunluk",
            hi: "परिपक्वता",
            th: "ระดับความเหมาะสม",
            zh: "分级",
            zh_cn: "分级",
            zh_tw: "分級",
            zh_hans: "分级",
            zh_hant: "分級",
            ja: "対象年齢",
            ko: "연령 등급",
            ms: "Kematangan",
            nb: "Aldersgrense",
            no: "Aldersgrense",
            sr: "Зрелост",
            da: "Aldersgrænse",
            et: "Küpsus",
            fil: "Kagulangang-isip",
            tl: "Kagulangang-isip",
            hr: "Zrelost",
            lv: "Nobriedums",
            lt: "Brandumas",
            hu: "Korhatár",
            nl: "Geschiktheid",
            ro: "Maturitate",
            sq: "Pjekuria",
            sl: "Zrelost",
            sk: "Vekové obmedzenie",
            fi: "Ikäraja",
            sv: "Åldersgräns",
            uk: "Віковий рейтинг",
            cs: "Věková přístupnost",
            el: "Καταλληλότητα",
            bs: "Zrelost",
            bg: "Зрялост",
            ru: "Возрастной рейтинг",
            kk: "Жас санаты",
            bn: "বয়সের স্তর",
            si: "පරිණතභාවය",
            my: "အသက်အရွယ် သတ်မှတ်ချက်",
            ka: "ასაკობრივი ზღვარი",
            km: "កម្រិតអាយុ"
        };

        const MATURITY_VALUE_TEXTS = {
            Minimal: {
                en: "Minimal", ar: "محدود للغاية", id: "Minimal", de: "Minimal", es: "Mínima",
                fr: "Minimale", it: "Minima", pl: "Minimalna", pt: "Mínima", vi: "Rất nhẹ",
                tr: "En az", hi: "न्यूनतम", th: "น้อยที่สุด", zh: "极轻微", zh_cn: "极轻微",
                zh_tw: "極輕微", zh_hans: "极轻微", zh_hant: "極輕微", ja: "極めて軽微",
                ko: "매우 낮음", ms: "Minimal", nb: "Minimal", no: "Minimal", sr: "Минимално",
                da: "Minimal", et: "Minimaalne", fil: "Napakababa", tl: "Napakababa", hr: "Minimalno",
                lv: "Minimāls", lt: "Minimalus", hu: "Minimális", nl: "Minimaal", ro: "Minimă",
                sq: "Minimale", sl: "Minimalno", sk: "Minimálna", fi: "Vähäinen", sv: "Minimal",
                uk: "Мінімальний", cs: "Minimální", el: "Ελάχιστη", bs: "Minimalno", bg: "Минимална",
                ru: "Минимальный", kk: "Минималды", bn: "ন্যূনতম", si: "අවම", my: "အနည်းဆုံး",
                ka: "მინიმალური", km: "តិចតួចបំផុត"
            },
            Mild: {
                en: "Mild", ar: "بسيط", id: "Ringan", de: "Gering", es: "Leve",
                fr: "Légère", it: "Lieve", pl: "Niska", pt: "Leve", vi: "Nhẹ",
                tr: "Hafif", hi: "हल्का", th: "เบาบาง", zh: "轻微", zh_cn: "轻微",
                zh_tw: "輕微", zh_hans: "轻微", zh_hant: "輕微", ja: "軽微",
                ko: "낮음", ms: "Ringan", nb: "Mild", no: "Mild", sr: "Blago",
                da: "Mild", et: "Kerge", fil: "Bahagya", tl: "Bahagya", hr: "Blago",
                lv: "Mērens", lt: "Švelnus", hu: "Enyhe", nl: "Licht", ro: "Ușoară",
                sq: "E lehtë", sl: "Blago", sk: "Mierna", fi: "Lievä", sv: "Mild",
                uk: "Помірний", cs: "Mírná", el: "Ήπια", bs: "Blago", bg: "Лека",
                ru: "Умеренный", kk: "Жеңіл", bn: "হালকা", si: "සහනශීලී", my: "သာမန်",
                ka: "მსუბუქი", km: "ស្រាល"
            },
            Moderate: {
                en: "Moderate", ar: "معتدل", id: "Sedang", de: "Mäßig", es: "Moderada",
                fr: "Modérée", it: "Moderata", pl: "Umiarkowana", pt: "Moderada", vi: "Vừa phải",
                tr: "Orta", hi: "मध्यम", th: "ปานกลาง", zh: "中等", zh_cn: "中等",
                zh_tw: "中等", zh_hans: "中等", zh_hant: "中等", ja: "中度",
                ko: "보통", ms: "Sederhana", nb: "Moderat", no: "Moderat", sr: "Умерено",
                da: "Moderat", et: "Mõõdukas", fil: "Katamtaman", tl: "Katamtaman", hr: "Umjereno",
                lv: "Vidējs", lt: "Vidutinis", hu: "Közepes", nl: "Matig", ro: "Moderată",
                sq: "E mesme", sl: "Zmerno", sk: "Stredná", fi: "Kohtalainen", sv: "Moderat",
                uk: "Середній", cs: "Střední", el: "Μεσαία", bs: "Umjereno", bg: "Умерена",
                ru: "Средний", kk: "Орташа", bn: "মাঝারি", si: "මධ්‍යස්ථ", my: "အသင့်အတင့်",
                ka: "საშუალო", km: "មធ្យម"
            },
            Restricted: {
                en: "Restricted", ar: "مقيد", id: "Dibatasi", de: "Eingeschränkt", es: "Restringida",
                fr: "Restreinte", it: "Ristretta", pl: "Ograniczona", pt: "Restrita", vi: "Bị giới hạn",
                tr: "Kısıtlı", hi: "प्रतिबंधित", th: "จำกัด", zh: "受限", zh_cn: "受限",
                zh_tw: "受限", zh_hans: "受限", zh_hant: "受限", ja: "制限あり",
                ko: "제한됨", ms: "Dihadkan", nb: "Begrenset", no: "Begrenset", sr: "Ограничено",
                da: "Begrænset", et: "Piiratud", fil: "Limitado", tl: "Limitado", hr: "Ograničeno",
                lv: "Ierobežots", lt: "Ribotas", hu: "Korlátozott", nl: "Beperkt", ro: "Restricționată",
                sq: "E kufizuar", sl: "Omejeno", sk: "Obmedzená", fi: "Rajoitettu", sv: "Begränsad",
                uk: "Обмежений", cs: "Omezená", el: "Περιορισμένη", bs: "Ograničeno", bg: "Ограничена",
                ru: "Ограниченный", kk: "Шектеулі", bn: "সীমিত", si: "සීමිත", my: "ကန့်သတ်ထားသော",
                ka: "შეზღუდული", km: "ត្រូវបានកម្រិត"
            },
            Unrated: {
                en: "Unrated", ar: "غير مصنف", id: "Tidak Dinilai", de: "Nicht bewertet", es: "Sin clasificar",
                fr: "Non évalué", it: "Non valutato", pl: "Brak oceny", pt: "Sem classificação", vi: "Chưa xếp loại",
                tr: "Derecelendirilmemiş", hi: "अनरेटेड", th: "ยังไม่จัดประเภท", zh: "未分级", zh_cn: "未分级",
                zh_tw: "未分級", zh_hans: "未分级", zh_hant: "未分級", ja: "未評価",
                ko: "등급 미พิจารณา", ms: "Tidak Dinilai", nb: "Uvurdert", no: "Uvurdert", sr: "Неоцењено",
                da: "Ikke vurderet", et: "Hindamata", fil: "Hindi Na-rate", tl: "Hindi Na-rate", hr: "Neocijenjeno",
                lv: "Nav novērtēts", lt: "Neįvertinta", hu: "Besorolatlan", nl: "Niet beoordeeld", ro: "Neevaluat",
                sq: "I pavlerësuar", sl: "Neocenjeno", sk: "Nehodnotené", fi: "Arvioimaton", sv: "Ej bedömd",
                uk: "Без рейтингу", cs: "Nehodnoceno", el: "Χωρίς αξιολόγηση", bs: "Neocijenjeno", bg: "Без оценка",
                ru: "Без рейтинга", kk: "Бағаланбаған", bn: "রেটিং ছাড়া", si: "වර්ගීකරණය කර නැත", my: "အဆင့်မသတ်မှတ်ရသေးပါ",
                ka: "შეუფასებელი", km: "មិនទាន់បានវាយតម្លៃ"
            }
        };
        MATURITY_VALUE_TEXTS.AllAges = MATURITY_VALUE_TEXTS.Minimal;
        MATURITY_VALUE_TEXTS["All Ages"] = MATURITY_VALUE_TEXTS.Minimal;
        MATURITY_VALUE_TEXTS["All-Ages"] = MATURITY_VALUE_TEXTS.Minimal;
        MATURITY_VALUE_TEXTS["9+"] = MATURITY_VALUE_TEXTS.Mild;
        MATURITY_VALUE_TEXTS["13+"] = MATURITY_VALUE_TEXTS.Moderate;
        MATURITY_VALUE_TEXTS["17+"] = MATURITY_VALUE_TEXTS.Restricted;

        let currentRunId = 0;

        const getLangCode = () => {
            let code = "";
            const htmlLang = document.documentElement.lang;
            if (htmlLang) {
                code = htmlLang.toLowerCase().replace("-", "_");
            } else {
                const meta = document.querySelector('meta[name="locale-data"]');
                if (meta) {
                    code = (meta.getAttribute("data-language-code") || "").toLowerCase().replace("-", "_");
                }
            }
            return code;
        };

        const getSimpleTranslation = (dict) => {
            const fullCode = getLangCode();
            const baseCode = fullCode.split("_")[0];
            return dict[fullCode] || dict[baseCode] || dict.en;
        };

        const getTranslation = (dict, count) => {
            const fullCode = getLangCode();
            const baseCode = fullCode.split("_")[0];
            const langEntry = dict[fullCode] || dict[baseCode] || dict.en;
            const template = count === 1 ? langEntry.singular : langEntry.plural;
            return template.replace("{count}", count);
        };

        const getMaturityTranslation = (value) => {
            if (!value) return getSimpleTranslation(MATURITY_VALUE_TEXTS.Unrated);
            const valStr = String(value).trim().toLowerCase();
            if (valStr.includes("mild") || valStr.includes("9+")) {
                return getSimpleTranslation(MATURITY_VALUE_TEXTS.Mild);
            }
            if (valStr.includes("moderate") || valStr.includes("13+")) {
                return getSimpleTranslation(MATURITY_VALUE_TEXTS.Moderate);
            }
            if (valStr.includes("restricted") || valStr.includes("17+") || valStr.includes("18+")) {
                return getSimpleTranslation(MATURITY_VALUE_TEXTS.Restricted);
            }
            if (valStr.includes("minimal") || valStr.includes("all") || valStr.includes("0+")) {
                return getSimpleTranslation(MATURITY_VALUE_TEXTS.Minimal);
            }
            const key = Object.keys(MATURITY_VALUE_TEXTS).find(k => k.toLowerCase() === valStr) || value;
            const dict = MATURITY_VALUE_TEXTS[key];
            if (!dict) return value;
            return getSimpleTranslation(dict);
        };

        const fetchWithRetry = async (url, options = {}, delay = 1500, runId = null) => {
            let currentDelay = delay;
            while (true) {
                if (runId && runId !== currentRunId) return null;
                try {
                    const res = await fetch(url, options);
                    if (runId && runId !== currentRunId) return null;
                    if (res.ok) return res;
                    if (res.status === 429) {
                        const retryAfter = res.headers.get("Retry-After");
                        const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : currentDelay;
                        await new Promise(resolve => setTimeout(resolve, waitTime));
                        currentDelay = Math.min(currentDelay * 1.5, 10000);
                        continue;
                    }
                    if (res.status < 500) return res;
                } catch {}
                if (runId && runId !== currentRunId) return null;
                await new Promise(resolve => setTimeout(resolve, currentDelay));
                currentDelay = Math.min(currentDelay * 1.5, 10000);
            }
        };

        const getCsrfToken = () => {
            const meta = document.querySelector('meta[name="csrf-token"]');
            return meta ? meta.getAttribute('data-token') : '';
        };

        const pollPendingThumbnails = async (userIds, friendsList = null, runId = null) => {
            if (userIds.length === 0) return;
            if (runId && runId !== currentRunId) return;
            await new Promise(resolve => setTimeout(resolve, 3000));
            if (runId && runId !== currentRunId) return;
            try {
                const thumbRes = await fetchWithRetry(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userIds.join(',')}&size=150x150&format=Png&isCircular=false&includeBackground=true&includeProfileFrame=true`, {}, 1500, runId);
                if (runId && runId !== currentRunId) return;
                if (!thumbRes || !thumbRes.ok) {
                    pollPendingThumbnails(userIds, friendsList, runId);
                    return;
                }
                const thumbData = await thumbRes.json();
                const thumbs = thumbData.data || [];
                const remainingIds = [];

                thumbs.forEach(t => {
                    if (t.state === "Completed" && t.imageUrl) {
                        if (friendsList) {
                            const friend = friendsList.find(f => f.id === t.targetId);
                            if (friend) friend.avatarUrl = t.imageUrl;
                        }
                        const idx = userIds.indexOf(t.targetId);
                        if (idx !== -1) userIds.splice(idx, 1);
                        const img = document.querySelector(`img[data-user-id="${t.targetId}"]`);
                        if (img) img.src = t.imageUrl;
                    } else if (t.state === "Blocked") {
                        if (friendsList) {
                            const friend = friendsList.find(f => f.id === t.targetId);
                            if (friend) friend.avatarUrl = ICON_BLOCKED;
                        }
                        const idx = userIds.indexOf(t.targetId);
                        if (idx !== -1) userIds.splice(idx, 1);
                        const img = document.querySelector(`img[data-user-id="${t.targetId}"]`);
                        if (img) img.src = ICON_BLOCKED;
                    } else if (t.state === "Error") {
                        if (friendsList) {
                            const friend = friendsList.find(f => f.id === t.targetId);
                            if (friend) friend.avatarUrl = ICON_BROKEN;
                        }
                        const idx = userIds.indexOf(t.targetId);
                        if (idx !== -1) userIds.splice(idx, 1);
                        const img = document.querySelector(`img[data-user-id="${t.targetId}"]`);
                        if (img) img.src = ICON_BROKEN;
                    } else {
                        remainingIds.push(t.targetId);
                    }
                });
                if (remainingIds.length > 0) {
                    pollPendingThumbnails(remainingIds, friendsList, runId);
                }
            } catch {
                if (runId && runId !== currentRunId) return;
                pollPendingThumbnails(userIds, friendsList, runId);
            }
        };

        const fetchUserFriendIds = async (userId, runId) => {
            try {
                const friends = [];
                let cursor = "";
                while (true) {
                    if (runId && runId !== currentRunId) return [];
                    const url = `https://friends.roblox.com/v1/users/${userId}/friends/find?limit=50${cursor ? `&cursor=${cursor}` : ""}`;
                    const res = await fetchWithRetry(url, { credentials: "include" }, 1500, runId);
                    if (!res || !res.ok) break;
                    const data = await res.json();
                    const items = data.PageItems || [];
                    friends.push(...items.map(f => f.id));
                    cursor = data.NextCursor;
                    if (!cursor) break;
                }
                return friends;
            } catch {
                return [];
            }
        };

        const chunkArray = (arr, size) => {
            const chunks = [];
            for (let i = 0; i < arr.length; i += size) {
                chunks.push(arr.slice(i, i + size));
            }
            return chunks;
        };

        const gameDetailsCache = {};
        let activeTooltip = null;

        const fetchGameDetails = async (universeId, userId) => {
            const cacheKey = `${universeId}_${userId}`;
            if (gameDetailsCache[cacheKey]) return gameDetailsCache[cacheKey];
            if (gameDetailsCache[universeId]) return gameDetailsCache[universeId];
            try {
                const langCode = getLangCode();
                const csrf = getCsrfToken();

                const results = await Promise.all([
                    fetchWithRetry(`https://games.roblox.com/v1/games?universeIds=${universeId}`, {
                        credentials: "include",
                        headers: { "Accept-Language": langCode }
                    }),
                    fetchWithRetry(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&size=150x150&format=Png&isCircular=false`),
                    fetchWithRetry(`https://apis.roblox.com/profile-platform-api/v1/profiles/get`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": csrf,
                            "Accept-Language": langCode
                        },
                        body: JSON.stringify({
                            profileId: String(userId),
                            profileType: "User",
                            components: [{ component: "CurrentlyPlaying" }]
                        }),
                        credentials: "include"
                    })
                ]);

                const detailsRes = results[0];
                const thumbRes = results[1];
                const maturityRes = results[2];

                let rawMaturity = null;

                if (maturityRes && maturityRes.ok) {
                    try {
                        const matData = await maturityRes.json();
                        const playing = matData.components?.CurrentlyPlaying;
                        const summary = playing?.ageRecommendation?.ageRecommendationSummary?.ageRecommendation;
                        if (summary) {
                            rawMaturity = summary.contentMaturity || summary.displayName;
                        }
                    } catch {}
                }

                const detailsData = (detailsRes && detailsRes.ok) ? await detailsRes.json() : {};
                const thumbData = (thumbRes && thumbRes.ok) ? await thumbRes.json() : {};
                const gameInfo = detailsData.data?.[0] || {};
                const thumbInfo = thumbData.data?.[0] || {};

                if (!rawMaturity) {
                    rawMaturity = gameInfo.ageGuidelines?.ageRecommendationType || gameInfo.ageRating || "Unrated";
                }

                const details = {
                    name: gameInfo.name || "Unknown Game",
                    maturity: getMaturityTranslation(rawMaturity),
                    iconUrl: thumbInfo.imageUrl || "https://tr.rbxcdn.com/30day-item-150x150-png/150/150/Decal/Png"
                };
                gameDetailsCache[cacheKey] = details;
                gameDetailsCache[universeId] = details;
                return details;
            } catch {
                return null;
            }
        };

        const showTooltip = async (btn, universeId) => {
            const userId = btn.getAttribute("data-user-id");
            const details = await fetchGameDetails(universeId, userId);
            if (!details) return;
            if (!btn.matches(':hover')) return;

            if (activeTooltip) activeTooltip.remove();
            const tooltip = document.createElement("div");
            tooltip.className = "custom-mutual-tooltip";
            const maturityLabel = getSimpleTranslation(MATURITY_LABEL_TEXTS);
            tooltip.innerHTML = `
                <div class="currently-playing-card flex items-center gap-small padding-y-small padding-x-medium radius-medium bg-surface-100 stroke-standard stroke-default" style="box-shadow: 0 4px 12px rgba(0,0,0,0.15); background-color: var(--color-surface-100);">
                    <span class="thumbnail-2d-container currently-playing-card-thumbnail width-[48px] height-[48px] shrink-0 radius-small overflow-hidden">
                        <img src="${details.iconUrl}" alt="${details.name}" style="width: 48px; height: 48px; object-fit: cover; display: block;" />
                    </span>
                    <div class="flex flex-col min-width-0">
                        <span dir="auto" class="text-title-medium content-emphasis text-truncate-end text-no-wrap max-width-[200px]">${details.name}</span>
                        <span dir="auto" class="text-body-medium content-default text-truncate-end text-no-wrap max-width-[200px]">${maturityLabel}: ${details.maturity}</span>
                    </div>
                </div>
            `;
            document.body.appendChild(tooltip);
            activeTooltip = tooltip;

            const positionTooltip = () => {
                const rect = btn.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX}px`;
                tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 8}px`;
            };
            positionTooltip();
            window.addEventListener("resize", hideTooltip);
            window.addEventListener("scroll", hideTooltip, true);
        };

        const hideTooltip = () => {
            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }
            window.removeEventListener("resize", hideTooltip);
            window.removeEventListener("scroll", hideTooltip, true);
        };

        const getPresenceHTML = (p) => {
            if (!p || p.userPresenceType <= 0) return '';
            let title = "Online";
            let presenceClass = "";

            if (p.userPresenceType === 1) {
                title = "Website";
                presenceClass = "game icon-online";
            } else if (p.userPresenceType === 2) {
                title = p.lastLocation || "Playing";
                presenceClass = "game icon-game";
            } else if (p.userPresenceType === 3) {
                title = "Studio";
                presenceClass = "studio icon-studio";
            }

            return `
                <div class="avatar-status">
                    <span dir="auto" data-testid="presence-icon" title="${title}" class="${presenceClass}"></span>
                </div>
            `;
        };

        const runMutualFriends = async (targetId) => {
            const runId = ++currentRunId;
            try {
                const authRes = await fetchWithRetry("https://users.roblox.com/v1/users/authenticated", { credentials: "include" }, 1500, runId);
                if (!authRes || !authRes.ok) return;
                const authData = await authRes.json();
                const currentId = authData.id;

                if (currentId === targetId) return;

                const usernameSpan = document.querySelector(".stylistic-alts-username");
                if (!usernameSpan) return;

                const buttonsContainer = document.querySelector(".user-profile-header .flex-nowrap.gap-small.flex") || document.querySelector(".flex-nowrap.gap-small.flex");
                if (!buttonsContainer) return;

                const csrf = getCsrfToken();

                const existingPill = buttonsContainer.querySelector(".custom-mutual-button");
                if (existingPill) existingPill.remove();

                const existingLoader = buttonsContainer.querySelector(".custom-mutual-loading");
                if (existingLoader) existingLoader.remove();

                const loadingIndicator = document.createElement("div");
                loadingIndicator.className = "custom-mutual-loading";
                loadingIndicator.innerHTML = `
                    <div class="foundation-web-progress-circle inline-flex items-center justify-center" role="progressbar" aria-label="Loading" style="width: 14px; height: 14px;">
                        <svg width="14" height="14" viewBox="0 0 32 32" class="relative">
                            <circle cx="16" cy="16" r="14.5" fill="none" stroke-width="3" style="stroke: var(--color-shift-200);"></circle>
                            <circle cx="16" cy="16" r="14.5" fill="none" stroke-width="3" stroke-dasharray="68.329640215578 22.776546738526" stroke-dashoffset="0" stroke-linecap="round" class="foundation-web-progress-circle-indeterminate" style="stroke: currentColor; transform-origin: 50% 50%;"></circle>
                        </svg>
                    </div>
                `;
                buttonsContainer.appendChild(loadingIndicator);

                const [ownFriendIds, targetFriendIds] = await Promise.all([
                    fetchUserFriendIds(currentId, runId),
                    fetchUserFriendIds(targetId, runId)
                ]);

                if (runId !== currentRunId) {
                    loadingIndicator.remove();
                    return;
                }

                const mutualIds = ownFriendIds.filter(id => targetFriendIds.includes(id));

                if (mutualIds.length === 0) {
                    loadingIndicator.remove();
                    return;
                }

                const mutualChunks = chunkArray(mutualIds, 100);

                const detailsPromises = mutualChunks.map(async (chunk) => {
                    const detailsRes = await fetchWithRetry("https://apis.roblox.com/user-profile-api/v1/user/profiles/get-profiles", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            userIds: chunk,
                            fields: ["names.displayName", "names.username", "isVerified"]
                        })
                    }, 1500, runId);
                    if (!detailsRes || !detailsRes.ok) return [];
                    const detailsData = await detailsRes.json();
                    const profiles = detailsData.profileDetails || [];
                    return profiles.map(p => ({
                        id: p.userId,
                        name: p.names?.username || "",
                        displayName: p.names?.displayName || p.names?.combinedName || p.names?.username || "",
                        hasVerifiedBadge: p.isVerified || false
                    }));
                });

                const thumbPromises = mutualChunks.map(async (chunk) => {
                    const thumbRes = await fetchWithRetry(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${chunk.join(',')}&size=150x150&format=Png&isCircular=false&includeBackground=true&includeProfileFrame=true`, {}, 1500, runId);
                    if (!thumbRes || !thumbRes.ok) return [];
                    const thumbData = await thumbRes.json();
                    return thumbData.data || [];
                });

                const [detailsChunks, thumbChunks] = await Promise.all([
                    Promise.all(detailsPromises),
                    Promise.all(thumbPromises)
                ]);

                if (runId !== currentRunId) {
                    loadingIndicator.remove();
                    return;
                }

                const friends = detailsChunks.flat();
                const thumbs = thumbChunks.flat();

                if (friends.length === 0) {
                    loadingIndicator.remove();
                    return;
                }

                const pendingThumbnails = [];
                const friendsWithThumbs = friends.map(f => {
                    const t = thumbs.find(item => item.targetId === f.id);
                    let avatarUrl = "https://tr.rbxcdn.com/30day-avatarheadshot-75x75-png/150/150/AvatarHeadshot/Png/noFilter";

                    if (t) {
                        if (t.state === "Completed" && t.imageUrl) {
                            avatarUrl = t.imageUrl;
                        } else if (t.state === "Blocked") {
                            avatarUrl = ICON_BLOCKED;
                        } else if (t.state === "Error") {
                            avatarUrl = ICON_BROKEN;
                        } else {
                            pendingThumbnails.push(f.id);
                        }
                    } else {
                        pendingThumbnails.push(f.id);
                    }

                    return {
                        ...f,
                        avatarUrl: avatarUrl,
                        hasVerifiedBadge: f.hasVerifiedBadge || false,
                        presence: { userPresenceType: 0 }
                    };
                });

                loadingIndicator.remove();

                const pill = document.createElement("a");
                pill.className = "custom-mutual-button relative clip group/interactable focus-visible:outline-focus disabled:outline-none cursor-pointer relative flex justify-center items-center radius-circle stroke-none padding-left-medium padding-right-medium height-800 text-label-medium bg-shift-300 content-action-utility";
                pill.style.textDecoration = "none";
                pill.innerHTML = `
                    <div role="presentation" class="absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"></div>
                    <span class="padding-y-xsmall text-no-wrap text-truncate-end">${getTranslation(BUTTON_TEXTS, friends.length)}</span>
                `;

                pill.addEventListener("click", (e) => {
                    e.preventDefault();

                    if (document.getElementById("custom-mutual-overlay")) return;

                    const overlay = document.createElement("div");
                    overlay.id = "custom-mutual-overlay";
                    overlay.setAttribute("data-state", "open");
                    overlay.className = "foundation-web-dialog-overlay padding-medium foundation-web-portal-zindex bg-common-backdrop";
                    overlay.style.pointerEvents = "auto";
                    overlay.style.position = "fixed";
                    overlay.style.top = "0";
                    overlay.style.left = "0";
                    overlay.style.width = "100vw";
                    overlay.style.height = "100vh";
                    overlay.style.display = "flex";
                    overlay.style.alignItems = "center";
                    overlay.style.justifyContent = "center";

                    const modal = document.createElement("div");
                    modal.setAttribute("role", "dialog");
                    modal.setAttribute("id", "radix-mutual");
                    modal.setAttribute("aria-labelledby", "radix-mutual-title");
                    modal.setAttribute("data-state", "open");
                    modal.className = "relative radius-large bg-surface-100 stroke-muted stroke-standard foundation-web-dialog-content shadow-transient-high";
                    modal.setAttribute("data-size", "Large");
                    modal.setAttribute("tabindex", "-1");
                    modal.style.pointerEvents = "auto";
                    modal.style.maxHeight = "90vh";
                    modal.style.height = "auto";
                    modal.style.display = "flex";
                    modal.style.flexDirection = "column";
                    modal.style.overflow = "hidden";
                    modal.style.width = "max-content";
                    modal.style.minWidth = "0";
                    modal.style.maxWidth = "min(650px, 95vw)";

                    const closeContainer = document.createElement("div");
                    closeContainer.className = "absolute foundation-web-dialog-close-container";

                    const closeBtn = document.createElement("button");
                    closeBtn.setAttribute("type", "button");
                    closeBtn.className = "foundation-web-close-affordance flex stroke-none bg-none cursor-pointer relative clip group/interactable focus-visible:outline-focus disabled:outline-none bg-over-media-100 padding-medium radius-circle";
                    closeBtn.setAttribute("aria-label", "Close");
                    closeBtn.innerHTML = `
                        <div role="presentation" class="absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"></div>
                        <span role="presentation" class="grow-0 shrink-0 basis-auto icon icon-regular-x size-[var(--icon-size-large)]"></span>
                    `;
                    closeContainer.appendChild(closeBtn);

                    const dialogBody = document.createElement("div");
                    dialogBody.className = "padding-top-xlarge padding-bottom-xlarge gap-xxlarge flex flex-col";
                    dialogBody.style.width = "100%";
                    dialogBody.style.maxHeight = "100%";
                    dialogBody.style.overflow = "hidden";

                    const modalTitleText = getTranslation(TITLE_TEXTS, friendsWithThumbs.length);

                    dialogBody.innerHTML = `
                        <span style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
                            <h2 id="radix-mutual-title">${modalTitleText}</h2>
                        </span>
                        <div class="gap-large flex flex-col" style="flex: 1; min-height: 0; position: relative; width: 100%;">
                            <span class="group-description-dialog-body-header text-heading-small block padding-x-xlarge" style="padding-right: 78px; white-space: nowrap;">${modalTitleText}</span>
                            <div class="rbx-scrollbar mCustomScrollbar" style="position: relative; overflow: hidden; max-height: 310px; height: auto; width: 100%;">
                                <div class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style="max-height: 310px; height: auto; position: relative; overflow: hidden; width: 100%;">
                                    <div class="mCSB_container" style="position: relative; top: 0px; left: 0px; overflow-y: scroll; max-height: 310px; height: auto; width: 100%;" id="mutual-friends-list-container">
                                    </div>
                                    <div id="custom-mCSB-scrollbar" class="mCSB_scrollTools mCS-light mCSB_scrollTools_vertical" style="display: none; position: absolute; top: 0; right: 0; height: 100%; width: 16px; pointer-events: auto;">
                                        <div class="mCSB_draggerContainer" style="position: relative; height: 100%;">
                                            <div id="custom-mCSB-dragger" class="mCSB_dragger" style="position: absolute; min-height: 30px; top: 0px; width: 100%;">
                                                <div class="mCSB_dragger_bar" style="line-height: 30px; margin: 0 auto;"></div>
                                            </div>
                                            <div class="mCSB_draggerRail" style="height: 100%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    modal.appendChild(closeContainer);
                    modal.appendChild(dialogBody);
                    overlay.appendChild(modal);
                    document.body.appendChild(overlay);

                    const listContainer = dialogBody.querySelector("#mutual-friends-list-container");
                    const customScrollbar = dialogBody.querySelector("#custom-mCSB-scrollbar");
                    const customDragger = dialogBody.querySelector("#custom-mCSB-dragger");
                    const draggerContainer = dialogBody.querySelector(".mCSB_draggerContainer");
                    const scrollbarWrapper = dialogBody.querySelector(".mCustomScrollbar");
                    const scrollBox = dialogBody.querySelector(".mCustomScrollBox");

                    const adjustModalHeight = () => {
                        const availableHeight = window.innerHeight * 0.9 - 160;
                        const maxAccounts = Math.max(1, Math.min(5, Math.floor(availableHeight / 62)));
                        const computedMaxHeight = `${maxAccounts * 62}px`;
                        
                        if (scrollbarWrapper) scrollbarWrapper.style.maxHeight = computedMaxHeight;
                        if (scrollBox) scrollBox.style.maxHeight = computedMaxHeight;
                        if (listContainer) listContainer.style.maxHeight = computedMaxHeight;
                    };

                    const updateScrollbar = () => {
                        const scrollHeight = listContainer.scrollHeight;
                        const clientHeight = listContainer.clientHeight;
                        if (scrollHeight - clientHeight <= 3) {
                            customScrollbar.style.display = "none";
                            listContainer.style.overflowY = "hidden";
                            listContainer.scrollTop = 0;
                            return;
                        }
                        customScrollbar.style.display = "block";
                        listContainer.style.overflowY = "scroll";
                        const trackHeight = draggerContainer.clientHeight || clientHeight;
                        const ratio = clientHeight / scrollHeight;
                        const draggerHeight = Math.max(30, trackHeight * ratio);
                        customDragger.style.height = `${draggerHeight}px`;
                        const maxScrollTop = scrollHeight - clientHeight;
                        const maxDraggerTop = trackHeight - draggerHeight;
                        const scrollTop = listContainer.scrollTop;
                        const draggerTop = (scrollTop / maxScrollTop) * maxDraggerTop;
                        customDragger.style.top = `${draggerTop}px`;
                    };

                    const resizeObserver = new ResizeObserver(() => {
                        updateScrollbar();
                    });
                    resizeObserver.observe(listContainer);

                    window.addEventListener("resize", adjustModalHeight);
                    adjustModalHeight();

                    friendsWithThumbs.forEach(f => {
                        let badgesHTML = '';
                        if (f.hasVerifiedBadge) {
                            badgesHTML = `
                                <span class="items-center gap-xxsmall inline-flex shrink-0 [--icon-size-small:1em]">
                                    <span class="relative flex items-center justify-center">
                                        <span role="presentation" class="grow-0 shrink-0 basis-auto icon icon-filled-verified-backplate size-[var(--icon-size-small)] content-system-emphasis"></span>
                                        <span role="presentation" class="grow-0 shrink-0 basis-auto icon icon-filled-verified-check size-[var(--icon-size-small)] absolute" style="color: white;"></span>
                                    </span>
                                </span>
                            `;
                        }

                        const item = document.createElement("a");
                        item.className = "flex items-center gap-medium padding-y-small padding-x-large custom-account-item clip group/interactable bg-over-media-100";
                        item.href = `/users/${f.id}/profile`;
                        item.style.textDecoration = "none";
                        item.style.color = "inherit";

                        item.innerHTML = `
                            <div role="presentation" class="absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"></div>
                            <div class="avatar flex-shrink-0" style="width: 44px; height: 44px; position: relative;">
                                <span class="thumbnail-2d-container avatar-card-image" style="width: 44px; height: 44px; display: block; border-radius: 50%; overflow: hidden;">
                                    <img class="bg-surface-200" data-user-id="${f.id}" src="${f.avatarUrl}" onerror="this.onerror=null;this.src='${ICON_BROKEN}';" style="width: 44px; height: 44px; object-fit: cover; display: block;" />
                                </span>
                                <div data-status-user-id="${f.id}">${getPresenceHTML(f.presence)}</div>
                            </div>
                            <div class="flex flex-col relative" style="flex: 1; white-space: nowrap; margin-right: 12px; min-width: max-content;">
                                <span class="text-label-large items-center gap-xsmall flex" style="color: inherit; white-space: nowrap;">
                                    <span dir="auto" class="text-truncate-end" style="padding-bottom: 2px; margin-bottom: -2px;">${f.displayName}</span>
                                    ${badgesHTML}
                                </span>
                                <span class="text-body-small content-secondary text-truncate-end" style="white-space: nowrap;">@${f.name}</span>
                            </div>
                            <div data-join-container-id="${f.id}" style="min-width: 68px; flex-shrink: 0; margin-left: auto; display: flex; justify-content: flex-end;"></div>
                        `;
                        listContainer.appendChild(item);
                    });

                    (async () => {
                        try {
                            const presencePromises = mutualChunks.map(async (chunk) => {
                                try {
                                    const presenceRes = await fetchWithRetry("https://presence.roblox.com/v1/presence/users", {
                                        method: "POST",
                                        headers: { 
                                            "Content-Type": "application/json",
                                            "X-CSRF-TOKEN": csrf
                                        },
                                        body: JSON.stringify({ userIds: chunk }),
                                        credentials: "include"
                                    }, 1500, runId);
                                    if (!presenceRes || !presenceRes.ok) return [];
                                    const presenceData = await presenceRes.json();
                                    return presenceData.userPresences || [];
                                } catch {
                                    return [];
                                }
                            });
                            const presenceChunks = await Promise.all(presencePromises);
                            const freshPresences = presenceChunks.flat();

                            if (runId !== currentRunId) return;

                            friendsWithThumbs.forEach(f => {
                                const p = freshPresences.find(item => item.userId === f.id) || { userPresenceType: 0 };
                                f.presence = p;

                                const statusContainer = listContainer.querySelector(`[data-status-user-id="${f.id}"]`);
                                if (statusContainer) {
                                    statusContainer.innerHTML = getPresenceHTML(p);
                                }

                                if (p.userPresenceType === 2 && p.gameId) {
                                    const joinContainer = listContainer.querySelector(`[data-join-container-id="${f.id}"]`);
                                    if (joinContainer && !joinContainer.querySelector('.custom-mutual-join-btn')) {
                                        const joinText = getSimpleTranslation(JOIN_TEXTS);
                                        joinContainer.innerHTML = `
                                            <button type="button" class="foundation-web-button relative clip group/interactable focus-visible:outline-focus disabled:outline-none cursor-pointer relative flex items-center justify-center stroke-none padding-y-none select-none radius-medium text-label-medium height-800 padding-x-medium bg-action-emphasis content-action-emphasis custom-mutual-join-btn" style="text-decoration: none; width: 100%;" data-place-id="${p.placeId}" data-game-id="${p.gameId}" data-universe-id="${p.universeId}" data-user-id="${f.id}">
                                                <div role="presentation" class="absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"></div>
                                                <span class="flex items-center min-width-0 gap-small">
                                                    <span class="padding-y-xsmall text-truncate-end text-no-wrap">${joinText}</span>
                                                </span>
                                            </button>
                                        `;
                                    }
                                }
                            });
                        } catch {}
                    })();

                    listContainer.addEventListener("click", (e) => {
                        const btn = e.target.closest(".custom-mutual-join-btn");
                        if (btn) {
                            e.preventDefault();
                            e.stopPropagation();
                            const placeId = btn.getAttribute("data-place-id");
                            const gameId = btn.getAttribute("data-game-id");
                            const userId = btn.getAttribute("data-user-id");
                            
                            const robloxObj = window.Roblox;

                            if (robloxObj && robloxObj.GameLauncher) {
                                if (placeId && gameId) {
                                    robloxObj.GameLauncher.joinGameInstance(parseInt(placeId, 10), gameId);
                                } else if (userId) {
                                    robloxObj.GameLauncher.followPlayer(parseInt(userId, 10));
                                }
                            } else {
                                if (placeId && gameId) {
                                    window.location.href = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${gameId}`;
                                }
                            }
                        }
                    });

                    listContainer.addEventListener("mouseover", (e) => {
                        const btn = e.target.closest(".custom-mutual-join-btn");
                        if (btn) {
                            const universeId = btn.getAttribute("data-universe-id");
                            if (universeId) {
                                showTooltip(btn, universeId);
                            }
                        }
                    });

                    listContainer.addEventListener("mouseout", (e) => {
                        const btn = e.target.closest(".custom-mutual-join-btn");
                        if (btn) {
                            hideTooltip();
                        }
                    });

                    listContainer.addEventListener("scroll", updateScrollbar);

                    let isDragging = false;
                    let startY = 0;
                    let startScrollTop = 0;

                    customDragger.addEventListener("mousedown", (e) => {
                        isDragging = true;
                        startY = e.clientY;
                        startScrollTop = listContainer.scrollTop;
                        document.body.style.userSelect = "none";
                    });

                    document.addEventListener("mousemove", (e) => {
                        if (!isDragging) return;
                        const deltaY = e.clientY - startY;
                        const scrollHeight = listContainer.scrollHeight;
                        const clientHeight = listContainer.clientHeight;
                        const trackHeight = draggerContainer.clientHeight || clientHeight;
                        const ratio = clientHeight / scrollHeight;
                        const draggerHeight = Math.max(30, trackHeight * ratio);
                        const maxDraggerTop = trackHeight - draggerHeight;
                        const scrollPerPixel = (scrollHeight - clientHeight) / maxDraggerTop;
                        listContainer.scrollTop = startScrollTop + (deltaY * scrollPerPixel);
                    });

                    document.addEventListener("mouseup", () => {
                        if (isDragging) {
                            isDragging = false;
                            document.body.style.userSelect = "";
                        }
                    });

                    const closeModal = () => {
                        hideTooltip();
                        resizeObserver.disconnect();
                        window.removeEventListener("resize", adjustModalHeight);
                        overlay.remove();
                    };

                    closeBtn.addEventListener("click", closeModal);

                    let overlayMouseDown = false;
                    overlay.addEventListener("mousedown", (e) => {
                        if (e.target === overlay) {
                            overlayMouseDown = true;
                        }
                    });
                    overlay.addEventListener("mouseup", (e) => {
                        if (e.target === overlay && overlayMouseDown) {
                            closeModal();
                        }
                        overlayMouseDown = false;
                    });

                    pollPendingThumbnails(pendingThumbnails, friendsWithThumbs, runId);
                });

                buttonsContainer.appendChild(pill);
            } catch {}
        };

        let lastUserId = null;
        const checkPage = () => {
            const match = window.location.pathname.match(/\/users\/(\d+)/);
            if (!match) {
                lastUserId = null;
                return;
            }
            const targetId = match[1];
            if (targetId === lastUserId) return;

            const usernameSpan = document.querySelector(".stylistic-alts-username");
            if (!usernameSpan) return;

            lastUserId = targetId;
            runMutualFriends(parseInt(targetId, 10));
        };

        const observer = new MutationObserver(checkPage);
        observer.observe(document.body, { childList: true, subtree: true });
        checkPage();

    } catch {}
})();