/* Devtools-detect */
// https://github.com/sindresorhus/devtools-detect
(function () {
	'use strict';

	const devtools = {
		isOpen: false,
		orientation: undefined
	};

	const threshold = 160;

	const emitEvent = (isOpen, orientation) => {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				isOpen,
				orientation
			}
		}));
	};

	const main = ({emitEvents = true} = {}) => {
		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		const orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (
			!(heightThreshold && widthThreshold) &&
			((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
		) {
			if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
				emitEvent(true, orientation);
			}

			devtools.isOpen = true;
			devtools.orientation = orientation;
		} else {
			if (devtools.isOpen && emitEvents) {
				emitEvent(false, undefined);
			}

			devtools.isOpen = false;
			devtools.orientation = undefined;
		}
	};

	main({emitEvents: false});
	setInterval(main, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();

/* No-self-xss */
const nsxss = { 
    defaultLanguage: "en" 
}

nsxss.translations = {
    ar: {
        title: "قف!",
        subtitle: "إذا أخبرك شخص ما بنسخ شيء ما ولصقه هنا ، فهناك فرصة بنسبة 101٪ لتضليلك.",
        warn: "يمكن أن يؤدي لصق شيء ما هنا إلى منح المهاجمين حق الوصول إلى حسابك.",
        info: "ما لم تكن تفهم بالضبط ما تفعله ، أغلق هذه النافذة وكن آمنًا. \n\n لمزيد من المعلومات ، تفضل بزيارة https://ar.wikipedia.org/wiki/الهجمة_الذاتية-إكس-أس-أس"
    },

    bn: {
        title: "থামো!",
        subtitle: "যদি কেউ আপনাকে এখানে কিছু অনুলিপি করে আটকে দিতে বলে থাকে তবে 101% সুযোগ রয়েছে যে আপনাকে বিভ্রান্ত করা হয়েছে।",
        warn: "এখানে কিছু আটকানো আক্রমণকারীদের আপনার অ্যাকাউন্টে অ্যাক্সেস দিতে পারে।",
        info: "আপনি কী করছেন ঠিক বুঝতে না পারলে এই উইন্ডোটি বন্ধ করুন এবং সুরক্ষিত থাকুন।\n\nআরও তথ্যের জন্য, https://en.wikedia.org/wiki/Self-XSS দেখুন"
    },

    cn: {
        title: "停止！",
        subtitle: "如果有人告诉您在此处复制并粘贴某些内容，那么您被误导的可能性为101％。",
        warn: "在此处粘贴内容可以使攻击者访问您的帐户。",
        info: "除非您确切了解自己在做什么，否则请关闭此窗口并确保安全。\n\n有关更多信息，请访问 https://en.wikipedia.org/wiki/Self-XSS"
    },

    de: {
        title: "Halt!",
        subtitle: "Wenn Ihnen jemand gesagt hat, dass Sie hier etwas kopieren und einfügen sollen, besteht eine 101% ige Wahrscheinlichkeit, dass Sie irregeführt wurden.",
        warn: "Wenn Sie hier etwas einfügen, können Angreifer auf Ihr Konto zugreifen.",
        info: "Wenn Sie nicht genau verstehen, was Sie tun, schließen Sie dieses Fenster und bleiben Sie sicher. \n\nWeitere Informationen finden Sie unter https://en.wikipedia.org/wiki/Self-XSS"
    },
    
    en: {
        title: "Stop!",
        subtitle: "If someone has told you to copy and paste something here, there is a 101% chance that you have been misled.",
        warn: "Pasting something here can give attackers access to your account.",
        info: "Unless you understand exactly what you are doing, close this window and stay safe.\n\nFor more information, visit https://en.wikipedia.org/wiki/Self-XSS"
    },

    es: {
        title: "¡Detente!",
        subtitle: "Si alguien te ha dicho que copies y pegues algo aquí, hay una probabilidad del 101% de que te hayan engañado.",
        warn: "Pegar algo aquí puede dar acceso a atacantes a tu cuenta.",
        info: "A menos que entiendas exactamente lo que estás haciendo, cierra esta ventana y mantente a salvo.\n\nPara mas información, visita https://es.wikipedia.org/wiki/Self-XSS"
    },

    fil: {
        title: "Tigilan mo na!",
        subtitle: "Kung may nagsabi sa iyo na kopyahin at i-paste ang isang bagay dito, mayroong isang 101% na pagkakataon na na-misle ka.",
        warn: "Ang paglagay ng isang bagay dito ay maaaring magbigay sa mga umaatake ng access sa iyong account.",
        info: "Maliban kung naiintindihan mo nang eksakto kung ano ang iyong ginagawa, isara ang window na ito at manatiling ligtas. \n\n Para sa karagdagang impormasyon, bisitahin ang https://en.wikipedia.org/wiki/Self-XSS"
    },

    fr: {
        title: "Arrêtez!",
        subtitle: "Si quelqu'un vous a dit de copier et coller quelque chose ici, il y a 101% de chances que vous ayez été induit en erreur.",
        warn: "Coller quelque chose ici peut permettre aux attaquants d'accéder à votre compte.",
        info: "À moins que vous ne compreniez exactement ce que vous faites, fermez cette fenêtre et restez en sécurité. \n\nPour plus d'informations, visitez https://en.wikipedia.org/wiki/Self-XSS"
    },

    id: {
        title: "Berhenti!",
        subtitle: "Jika seseorang menyuruh Anda menyalin dan menempelkan sesuatu di sini, ada kemungkinan 101% Anda telah disesatkan.",
        warn: "Menempelkan sesuatu di sini dapat memberi penyerang akses ke akun Anda.",
        info: "Kecuali Anda benar-benar memahami apa yang Anda lakukan, tutup jendela ini dan tetap aman.\n\nUntuk informasi lebih lanjut, kunjungi https://en.wikipedia.org/wiki/Self-XSS"
    },
    
    it: {
        title: "Stop!",
        subtitle: "Se qualcuno ti ha detto di copiare e incollare qualcosa qui, c'è una probabilità del 101% che tu sia stato ingannato.",
        warn: "Incollare qualcosa qui può consentire agli aggressori di accedere al tuo account.",
        info: "A meno che tu non capisca esattamente cosa stai facendo, chiudi questa finestra e rimani al sicuro.\n\nPer ulteriori informazioni, visita https://it.wikipedia.org/wiki/Self-XSS"
    },

    hi: {
        title: "रुकें!",
        subtitle: "यदि किसी ने आपको यहां कुछ कॉपी और पेस्ट करने के लिए कहा है, तो 101% संभावना है कि आपको गुमराह किया गया है।",
        warn: "यहां कुछ चखने से हमलावरों को आपके खाते तक पहुंच मिल सकती है।",
        info: "जब तक आप वास्तव में समझ नहीं पाते कि आप क्या कर रहे हैं, इस विंडो को बंद करें और सुरक्षित रहें।\n\nअधिक जानकारी के लिए, https://en.wikipedia.org/wiki/Self-XSS पर जाएं"
    },

    ja: {
        title: "やめる！",
        subtitle: "誰かがここに何かをコピーして貼り付けるように言った場合、あなたが誤解されている可能性は101％です。",
        warn: "ここに何かを貼り付けると、攻撃者があなたのアカウントにアクセスできるようになる可能性があります。",
        info: "自分がしていることを正確に理解していない限り、このウィンドウを閉じて安全を確保してください\n\n詳細については、https://en.wikipedia.org/wiki/Self-XSS にアクセスしてください。"
    },

    ko: {
        title: "중지!",
        subtitle: "누군가 여기에 무언가를 복사하여 붙여 넣으라고했다면 오해를 당했을 가능성이 101 %입니다.",
        warn: "여기에 무언가를 붙여 넣으면 공격자가 귀하의 계정에 액세스 할 수 있습니다.",
        info: "수행중인 작업을 정확히 이해하지 못한 경우이 창을 닫고 안전을 유지하십시오.\n\n자세한 내용은 https://en.wikipedia.org/wiki/Self-XSS 를참조하십시오."
    },

    nl: {
        title: "Hou op!",
        subtitle: "Als iemand je heeft gezegd hier iets te kopiëren en te plakken, is er een kans van 101% dat je bent misleid.",
        warn: "Als u hier iets plakt, kunnen aanvallers toegang krijgen tot uw account.",
        info: "Sluit dit venster en blijf veilig, tenzij u precies begrijpt wat u doet.\n\nGa voor meer informatie naar https://en.wikipedia.org/wiki/Self-XSS"
    },

    pt: {
        title: "Pare!",
        subtitle: "Se alguém lhe disse para copiar e colar algo aqui, há 101% de chance de você ter sido enganado.",
        warn: "Colar algo aqui pode dar aos invasores acesso à sua conta.",
        info: "A menos que você entenda exatamente o que está fazendo, feche esta janela e fique seguro. \n\nPara obter mais informações, visite https://en.wikipedia.org/wiki/Self-XSS"
    },

    ru: {
        title: "Стоп!",
        subtitle: "Если кто-то сказал вам скопировать и вставить что-то сюда, существует 101% шанс, что вас ввели в заблуждение.",
        warn: "Вставив что-то сюда, злоумышленники могут получить доступ к вашей учетной записи.",
        info: "Если вы точно не понимаете, что делаете, закройте это окно и оставайтесь в безопасности.\n\nДля получения дополнительной информации посетите https://en.wikipedia.org/wiki/Self-XSS"
    },

    tr: {
        title: "Dur!",
        subtitle: "Biri size buraya bir şeyi kopyalayıp yapıştırmanızı söylediyse,% 101 olasılıkla yanıltılmışsınızdır.",
        warn: "Buraya bir şey yapıştırmak saldırganların hesabınıza erişmesini sağlayabilir.",
        info: "Tam olarak ne yaptığınızı anlamadıkça, bu pencereyi kapatın ve güvende kalın.\n\nDaha fazla bilgi için https://en.wikipedia.org/wiki/Self-XSS adresini ziyaret edin."
    }
}

nsxss.getBrowserLanguage = () => {
    let lang = navigator.language || navigator.userLanguage || "en";
    if (lang.includes("-")) {
        lang = lang.split("-")[1];
    }
    return lang.toLowerCase()
}

nsxss.getTranslation = () => {
    let lang = nsxss.getBrowserLanguage();
    let translation = nsxss.translations[lang] || nsxss.translations[nsxss.defaultLanguage];
    if (!nsxss.translations[lang]) {
        console.log("Unknown language " + lang + ", displaying message in default language " + nsxss.defaultLanguage);
    }
    return translation;
}

nsxss.printWarn = () => {
    let { title, subtitle, warn, info } = nsxss.getTranslation();

    console.log(
        "%c" + title,
        "color:#7289da;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );

    console.log(
        "%c" + subtitle,
        "color:#FFFFFF;font-family:arial;font-size:16px;padding-top: 10px;font-weight:bold;"
    )

    console.log(
        "%c" + warn,
        "color:#FF0000;font-family:arial;font-size:18px;font-weight:bold;padding-top: 10px;"
    )

    console.log(
        "%c" + info,
        "color:#FFFFFF;font-family:arial;font-size:16px;padding-top: 10px;"
    )
}

window.addEventListener('devtoolschange', event => {
    if (event.detail.isOpen) {
        nsxss.printWarn();
    }
});

window.addEventListener("load", () => {
    if (window.devtools.isOpen) {
        nsxss.printWarn();
    }
})