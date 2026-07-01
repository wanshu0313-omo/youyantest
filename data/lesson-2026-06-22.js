/* Lesson 01 · 2026-06-22 · 问候复习。只改这一天内容时，编辑这个文件。 */
window.LESSONS = window.LESSONS || {};
window.LESSONS.yesterday = {
    dateISO: "2026-06-24",
    calendar: { day: "24", month: "JUN" },
    summary: { en: "Greetings, goodbyes, four tones, and six vowels.", ja: "挨拶、別れの言葉、四声と6つの母音。", ko: "인사와 작별, 네 가지 성조와 여섯 모음.", zh: "学习问候、感谢、告别、四声和六个元音。" },
    date: { en: "REVIEW · LESSON 01", ja: "復習 · レッスン 01", ko: "복습 · 레슨 01", zh: "复习 · 第 01 课" },
    title: { en: "Meet, greet, and say goodbye", ja: "会って、挨拶して、さようなら", ko: "만나서 인사하고 작별하기", zh: "见面，问好，再告别" },
    tag: { en: "First greetings", ja: "はじめての挨拶", ko: "첫인사", zh: "第一次问候" },
    phrases: [
      {
        hanzi: "你好",
        pinyin: "Nǐ hǎo",
        chars: [{h:"你",p:"Nǐ",a:"audio/words/6.24Firstgreetings/你.m4a"},{h:"好",p:"hǎo",a:"audio/words/6.24Firstgreetings/好.m4a"}],
        translation: { ja: "こんにちは", en: "Hello", ko: "안녕하세요", zh: "见面时的问候。" },
        note: {
          zh: "“你 nǐ” = you。“好 hǎo” = good。“你”读 3 声，“好”也读 3 声；但是 3 声 + 3 声，要遵从拼音的音变规则，读成 2 声 + 3 声。",
          en: "“你 nǐ” = you. “好 hǎo” = good. Both are 3rd tone, but 3rd + 3rd follows a tone-change rule: it sounds like 2nd + 3rd.",
          ja: "“你 nǐ” = あなた。“好 hǎo” = よい。どちらも第三声ですが、第三声＋第三声は音変化して、第二声＋第三声のように読みます。",
          ko: "“你 nǐ” = 너/당신. “好 hǎo” = 좋다. 둘 다 3성이지만, 3성 + 3성은 성조 변화 규칙에 따라 2성 + 3성처럼 읽습니다."
        },
        audio: "audio/words/6.24Firstgreetings/你好.m4a"
      },
      {
        hanzi: "大家好",
        pinyin: "Dàjiā hǎo",
        chars: [{h:"大",p:"Dà",a:"audio/words/6.24Firstgreetings/大.m4a"},{h:"家",p:"jiā",a:"audio/words/6.24Firstgreetings/家.m4a"},{h:"好",p:"hǎo",a:"audio/words/6.24Firstgreetings/好.m4a"}],
        translation: { ja: "みなさん、こんにちは", en: "Hello, everyone", ko: "여러분, 안녕하세요", zh: "向大家问好。" },
        note: {
          zh: "“大 dà” = big。“家 jiā” = family / home。“大家 dàjiā” = everyone。“好 hǎo” = good。",
          en: "“大 dà” = big. “家 jiā” = family / home. “大家 dàjiā” = everyone. “好 hǎo” = good.",
          ja: "“大 dà” = 大きい。“家 jiā” = 家・家族。“大家 dàjiā” = みなさん。“好 hǎo” = よい。",
          ko: "“大 dà” = 크다. “家 jiā” = 집/가족. “大家 dàjiā” = 여러분. “好 hǎo” = 좋다."
        },
        audio: "audio/words/6.24Firstgreetings/大家好.m4a"
      },
      {
        hanzi: "谢谢大家",
        pinyin: "Xièxie dàjiā",
        chars: [{h:"谢谢",p:"Xiè xie",a:"audio/words/6.24Firstgreetings/谢谢.m4a"},{h:"大",p:"dà",a:"audio/words/6.24Firstgreetings/大.m4a"},{h:"家",p:"jiā",a:"audio/words/6.24Firstgreetings/家.m4a"}],
        translation: { ja: "みなさん、ありがとう", en: "Thank you, everyone", ko: "여러분, 감사합니다", zh: "感谢大家。" },
        note: {
          zh: "“谢谢 xiè xie” = thank you。“大 dà” = big。“家 jiā” = family / home。“大家 dàjiā” = everyone。",
          en: "“谢谢 xiè xie” = thank you. “大 dà” = big. “家 jiā” = family / home. “大家 dàjiā” = everyone.",
          ja: "“谢谢 xiè xie” = ありがとう。“大 dà” = 大きい。“家 jiā” = 家・家族。“大家 dàjiā” = みなさん。",
          ko: "“谢谢 xiè xie” = 감사합니다. “大 dà” = 크다. “家 jiā” = 집/가족. “大家 dàjiā” = 여러분."
        },
        audio: "audio/words/6.24Firstgreetings/谢谢大家.m4a"
      },
      {
        hanzi: "再见",
        pinyin: "Zàijiàn",
        chars: [{h:"再",p:"Zài",a:"audio/words/6.24Firstgreetings/再.m4a"},{h:"见",p:"jiàn",a:"audio/words/6.24Firstgreetings/见.m4a"}],
        translation: { ja: "さようなら", en: "Goodbye", ko: "안녕히 가세요", zh: "告别时说的话。" },
        note: {
          zh: "“再 zài” = again。“见 jiàn” = see / meet。“再见 zàijiàn” = see you again。",
          en: "“再 zài” = again. “见 jiàn” = see / meet. “再见 zàijiàn” = see you again.",
          ja: "“再 zài” = また。“见 jiàn” = 会う・見る。“再见 zàijiàn” = また会いましょう。",
          ko: "“再 zài” = 다시. “见 jiàn” = 보다/만나다. “再见 zàijiàn” = 또 만나요."
        },
        audio: "audio/words/6.24Firstgreetings/再见.m4a"
      }
    ],
    pinyin: {
      intro: { en: "Relax your mouth and listen for the four melodies of Mandarin.", ja: "口の力を抜いて、中国語の4つのメロディーを聞きましょう。", ko: "입에 힘을 빼고 중국어의 네 가지 멜로디를 들어 보세요.", zh: "先把嘴巴放松，听见汉语的四种旋律。" },
      tones: [
        {mark:"ā",name:{en:"1st tone",ja:"第一声",ko:"1성",zh:"一声"},hint:{en:"high & level",ja:"高く平ら",ko:"높고 평평",zh:"平平的"},audio:"audio/pinyin/a1.m4a"},
        {mark:"á",name:{en:"2nd tone",ja:"第二声",ko:"2성",zh:"二声"},hint:{en:"rising",ja:"上がる",ko:"올라가기",zh:"往上扬"},audio:"audio/pinyin/a2.m4a"},
        {mark:"ǎ",name:{en:"3rd tone",ja:"第三声",ko:"3성",zh:"三声"},hint:{en:"dip & rise",ja:"下げて上げる",ko:"내렸다 올리기",zh:"先低后高"},audio:"audio/pinyin/a3.m4a"},
        {mark:"à",name:{en:"4th tone",ja:"第四声",ko:"4성",zh:"四声"},hint:{en:"falling",ja:"下がる",ko:"내려가기",zh:"往下降"},audio:"audio/pinyin/a4.m4a"}
      ],
      groups: [{ title: { en: "6 basic vowels", ja: "6つの基本母音", ko: "6개 기본 모음", zh: "6 个基础元音" }, items: ["a", "o", "e", "i", "u", "ü"] }],
      tip: { en: "Tone marks sit above vowels. Listen to the melody, then copy it.", ja: "声調記号は母音の上につきます。まず聞いて、まねしましょう。", ko: "성조 기호는 모음 위에 씁니다. 먼저 듣고 따라 해 보세요.", zh: "声调写在元音上。先听旋律，再模仿。" }
    }
};
