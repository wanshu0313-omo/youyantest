/* 2026-07-06 ~ 2026-07-10 本周听力复习题库。 */
window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS.week3Review = [
  {
    id: "week3-zaoshang-hao",
    hanzi: "早上好！",
    pinyin: "Zǎoshang hǎo",
    audio: "audio/words/7.6/早上好.m4a",
    meaning: { en: "Good morning!", ja: "おはようございます。", ko: "좋은 아침이에요.", zh: "早上好！" }
  },
  {
    id: "week3-zaofan-chile-shenme",
    hanzi: "早饭吃了什么？",
    pinyin: "Zǎofàn chī le shénme",
    audio: "audio/words/7.6/早饭吃了什么.m4a",
    meaning: { en: "What did you have for breakfast?", ja: "朝ごはん何食べた？", ko: "아침밥 뭐 먹었어요?", zh: "早饭吃了什么？" }
  },
  {
    id: "week3-zuotian-zaofan",
    hanzi: "昨天早饭吃了什么？",
    pinyin: "Zuótiān zǎofàn chī le shénme",
    audio: "audio/words/7.7/昨天早饭吃了什么.m4a",
    meaning: { en: "What did you have for breakfast yesterday?", ja: "昨日の朝ごはん、何を食べた？", ko: "어제 아침밥 뭐 먹었어요?", zh: "昨天早饭吃了什么？" }
  },
  {
    id: "week3-jintian-zaofan",
    hanzi: "今天早饭吃了什么？",
    pinyin: "Jīntiān zǎofàn chī le shénme",
    audio: "audio/words/7.7/今天早饭吃了什么.m4a",
    meaning: { en: "What did you have for breakfast today?", ja: "今日の朝ごはん、何を食べた？", ko: "오늘 아침밥 뭐 먹었어요?", zh: "今天早饭吃了什么？" }
  },
  {
    id: "week3-mingtian-zaofan",
    hanzi: "明天早饭吃什么？",
    pinyin: "Míngtiān zǎofàn chī shénme",
    audio: "audio/words/7.7/明天早饭吃什么.m4a",
    meaning: { en: "What will you have for breakfast tomorrow?", ja: "明日の朝ごはん、何を食べる？", ko: "내일 아침밥 뭐 먹을 거예요?", zh: "明天早饭吃什么？" }
  },
  {
    id: "week3-chi-shenme",
    hanzi: "吃什么？",
    pinyin: "Chī shénme",
    audio: "audio/words/7.9/吃什么.m4a",
    meaning: { en: "What should we eat?", ja: "何食べる？", ko: "뭐 먹을까요?", zh: "吃什么？" }
  },
  {
    id: "week3-ni-xiang-chi-shenme",
    hanzi: "你想吃什么？",
    pinyin: "Nǐ xiǎng chī shénme",
    audio: "audio/words/7.9/你想吃什么.m4a",
    meaning: { en: "What do you want to eat?", ja: "何が食べたい？", ko: "뭐 먹고 싶어요?", zh: "你想吃什么？" }
  },
  {
    id: "week3-ni-zai-chi-shenme",
    hanzi: "你在吃什么？",
    pinyin: "Nǐ zài chī shénme",
    audio: "audio/words/7.10/你在吃什么.m4a",
    meaning: { en: "What are you eating right now?", ja: "何を食べているの？", ko: "지금 뭐 먹고 있어요?", zh: "你在吃什么？" }
  },
  {
    id: "week3-ni-zai-gan-shenme",
    hanzi: "你在干什么？",
    pinyin: "Nǐ zài gàn shénme",
    audio: "audio/words/7.10/你在干什么.m4a",
    meaning: { en: "What are you doing?", ja: "何してるの？", ko: "뭐 하고 있어요?", zh: "你在干什么？" }
  }
];

window.QUIZ_BANKS.week3FirstHalfReview = window.QUIZ_BANKS.week3Review.filter(item => [
  "week3-zaoshang-hao",
  "week3-zaofan-chile-shenme",
  "week3-zuotian-zaofan",
  "week3-jintian-zaofan",
  "week3-mingtian-zaofan"
].includes(item.id));

window.QUIZ_BANKS.week3SecondHalfReview = window.QUIZ_BANKS.week3Review.filter(item => [
  "week3-chi-shenme",
  "week3-ni-xiang-chi-shenme",
  "week3-ni-zai-chi-shenme",
  "week3-ni-zai-gan-shenme"
].includes(item.id));
