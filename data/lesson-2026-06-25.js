/* Lesson 02 · 2026-06-25 · 自我介绍。只改这一天内容时，编辑这个文件。 */
window.LESSONS = window.LESSONS || {};
window.LESSONS.today = {
    dateISO: "2026-06-25",
    calendar: { day: "25", month: "JUN" },
    summary: { en: "Introduce yourself and learn compound vowels.", ja: "自己紹介と複合母音を学びます。", ko: "자기소개와 복합 모음을 배워요.", zh: "学习自我介绍、双元音和整体认读。" },
    date: { en: "TODAY · LESSON 02", ja: "今日 · レッスン 02", ko: "오늘 · 레슨 02", zh: "今天 · 第 02 课" },
    title: { en: "Let’s introduce ourselves!", ja: "自己紹介をしましょう！", ko: "자기소개를 해 봐요!", zh: "先认识一下吧！" },
    tag: { en: "Introducing yourself", ja: "自己紹介", ko: "자기소개", zh: "自我介绍" },
    phrases: [
      {
        type: "builder",
        id: "work",
        hanzi: "大家好！我是____的____。",
        sentenceAudio: "audio/words/6.25Self-introduction/大家好，我是谏早商高的英语教师.m4a",
        segments: ["大家好！我是", {slot:"workplace", hint:{zh:"工作地点",en:"workplace",ja:"勤務先",ko:"근무지"}, example:"谏早商高"}, "的", {slot:"job", hint:{zh:"职位",en:"job",ja:"職位",ko:"직위"}, example:"英语教师"}, "。"],
        translation: {
          ja: "みなさん、こんにちは。私は____で____をしています。",
          en: "Hello everyone! I’m working in ____ as a ____.",
          ko: "여러분 안녕하세요! 저는 ____에서 ____로 일하고 있습니다.",
          zh: "介绍自己的工作单位和职业。"
        },
        grammar: {
          zh: "“是”相当于英语的 be 动词；否定是“不是 bú shì”。“的”相当于日语的 の。",
          en: "“是 shì” is like am/is/are. “isn’t” is “不是 bú shì”. “的 de” is like ’s or Japanese の.",
          ja: "“是 shì” は am/is/are のように使います。“isn’t” は “不是 bú shì”。“的 de” は ’s や日本語の「の」に近いです。",
          ko: "“是 shì”는 am/is/are처럼 씁니다. “isn’t”는 “不是 bú shì”. “的 de”는 ’s 또는 일본어 の와 비슷합니다."
        },
        optionGroups: [
          {
            slot: "workplace",
            label: { en: "workplace", ja: "勤務先", ko: "근무지", zh: "工作地点" },
            maxSelect: 1,
            options: [
              {text:"高中", pinyin:"gāozhōng", translation:{en:"high school",ja:"高校",ko:"고등학교",zh:"高中"}},
              {text:"初中", pinyin:"chūzhōng", translation:{en:"junior high",ja:"中学校",ko:"중학교",zh:"初中"}},
              {text:"小学", pinyin:"xiǎoxué", translation:{en:"elementary school",ja:"小学校",ko:"초등학교",zh:"小学"}},
              {text:"谏早商高", pinyin:"Jiànzǎo Shānggāo", translation:"Isahaya Commercial High"}
            ]
          },
          {
            slot: "job",
            label: { en: "job", ja: "職位", ko: "직위", zh: "职位" },
            maxSelect: 1,
            options: [
              {text:"英语教师", pinyin:"Yīngyǔ jiàoshī", translation:{en:"English teacher",ja:"英語教師",ko:"영어 교사",zh:"英语教师"}},
              {text:"学生", pinyin:"xuéshēng", translation:{en:"student",ja:"学生",ko:"학생",zh:"学生"}}
            ]
          }
        ]
      },
      {
        type: "builder",
        id: "name",
        hanzi: "我叫________。",
        sentenceAudio: "audio/words/6.25Self-introduction/我叫西真实.m4a",
        segments: ["我叫", {slot:"surname", hint:{zh:"姓",en:"family name",ja:"姓",ko:"성"}, example:"西"}, {slot:"givenName", hint:{zh:"名",en:"given name",ja:"名",ko:"이름"}, example:"真实"}, "。"],
        translation: { ja: "私の名前は____です。", en: "My name is ____.", ko: "제 이름은 ____입니다.", zh: "介绍自己的名字。" },
        grammar: {
          zh: "“叫”是 be called，后面可以接 full name 或 first name。只说 last name 时用“姓 xìng”，例如：我姓西 Wǒ xìng Xī。",
          en: "“叫 jiào” means “be called”. It can be followed by a full name or first name. For a last name only, use “姓 xìng”: 我姓西 Wǒ xìng Xī.",
          ja: "“叫 jiào” は “be called” の意味で、フルネームまたは名前を続けます。名字だけ言う時は “姓 xìng”：我姓西 Wǒ xìng Xī。",
          ko: "“叫 jiào”는 “be called”입니다. 전체 이름이나 이름을 뒤에 붙입니다. 성만 말할 때는 “姓 xìng”: 我姓西 Wǒ xìng Xī."
        },
        optionGroups: [
          {
            slot: "surname",
            label: { en: "family name", ja: "姓", ko: "성", zh: "姓" },
            maxSelect: 1,
            options: [
              {text:"", pinyin:"", skip:true, label:{zh:"暂不选择",en:"Skip family name",ja:"姓を選ばない",ko:"성 선택 안 함"}},
              {text:"芒茶", pinyin:"Máng chá"}, {text:"西", pinyin:"Xī"}, {text:"沃德", pinyin:"Wò dé"}
            ]
          },
          {
            slot: "givenName",
            label: { en: "given name", ja: "名", ko: "이름", zh: "名" },
            maxSelect: 1,
            note: { en: "Want another name? Leave a message at the lower-left button.", ja: "ほかの名前を読みたい時は、左下の留言から送ってください。", ko: "다른 이름을 읽고 싶으면 왼쪽 아래 메시지로 남겨 주세요.", zh: "还有什么名字想要读，可以在左下角留言。" },
            options: [
              {text:"茉莉", pinyin:"Mòlì"}, {text:"珂蕾", pinyin:"Kēlěi"}, 
              {text:"杰克", pinyin:"Jiékè"}, {text:"真实", pinyin:"Zhēnshí"}, {text:"朱莉", pinyin:"Zhūlì"},
              {text:"天子", pinyin:"Tiānzǐ"}, {text:"米球儿", pinyin:"Mǐqiúr"}
            ]
          }
        ]
      },
      {
        type: "builder",
        id: "country",
        hanzi: "来自____。",
        sentenceAudio: "audio/words/6.25Self-introduction/来自日本.m4a",
        segments: ["来自", {slot:"home", hint:{zh:"老家",en:"hometown",ja:"出身",ko:"고향"}, example:"美国"}, "。"],
        translation: { ja: "____から来ました。", en: "I’m from ____.", ko: "____에서 왔습니다.", zh: "介绍自己来自哪里。" },
        grammar: {
          zh: "“来自”是 come from，后面可以是国家，也可以是更小的地方名称。",
          en: "“来自 láizì” means “come from”. You can use it with countries or smaller places.",
          ja: "“来自 láizì” は “come from” の意味です。国名にも、もっと小さい地名にも使えます。",
          ko: "“来自 láizì”는 “come from”입니다. 국가 이름이나 더 작은 지역 이름에도 쓸 수 있어요."
        },
        optionGroups: [
          {
            slot: "home",
            label: { en: "hometown", ja: "出身", ko: "고향", zh: "老家" },
            maxSelect: 1,
            options: [
              {text:"🇦🇺澳大利亚", pinyin:"Àodàlìyà", translation:{en:"Australia",ja:"オーストラリア",ko:"호주",zh:"澳大利亚"}},
              {text:"🇨🇦加拿大", pinyin:"Jiānádà", translation:{en:"Canada",ja:"カナダ",ko:"캐나다",zh:"加拿大"}},
              {text:"🇨🇳中国", pinyin:"Zhōngguó", translation:{en:"China",ja:"中国",ko:"중국",zh:"中国"}},
              {text:"🇯🇵日本", pinyin:"Rìběn", translation:{en:"Japan",ja:"日本",ko:"일본",zh:"日本"}},
              {text:"🇰🇷韩国", pinyin:"Hánguó", translation:{en:"Korea",ja:"韓国",ko:"한국",zh:"韩国"}},
              {text:"🇬🇧英国", pinyin:"Yīngguó", translation:{en:"the United Kingdom",ja:"イギリス",ko:"영국",zh:"英国"}},
              {text:"🇺🇸美国", pinyin:"Měiguó", translation:{en:"the United States",ja:"アメリカ",ko:"미국",zh:"美国"}}
            ]
          }
        ]
      }
    ],
    pinyin: {
      intro: { en: "Four-tone practice.", ja: "四声の練習。", ko: "네 가지 성조 연습.", zh: "四个声调的练习。" },
      groups: [
        { title: { en: "a", ja: "a", ko: "a", zh: "a" }, items: ["ā", "á", "ǎ", "à"] },
        { title: { en: "o", ja: "o", ko: "o", zh: "o" }, items: ["ō", "ó", "ǒ", "ò"] },
        { title: { en: "e", ja: "e", ko: "e", zh: "e" }, items: ["ē", "é", "ě", "è"] },
        { title: { en: "i", ja: "i", ko: "i", zh: "i" }, items: ["ī", "í", "ǐ", "ì"] },
        { title: { en: "u", ja: "u", ko: "u", zh: "u" }, items: ["ū", "ú", "ǔ", "ù"] },
        { title: { en: "ü", ja: "ü", ko: "ü", zh: "ü" }, items: ["ǖ", "ǘ", "ǚ", "ǜ"] }
      ],
      tip: { en: "Read across: 1st, 2nd, 3rd, 4th tone.", ja: "左から順に：一声、二声、三声、四声。", ko: "왼쪽부터: 1성, 2성, 3성, 4성.", zh: "横着读：一声，二声，三声，四声。" }
    }
  };
