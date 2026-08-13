/* Review · 2026-08-12 · 周三：复习 8月10日和8月11日内容。 */
window.LESSONS = window.LESSONS || {};
window.QUIZ_BANKS = window.QUIZ_BANKS || {};

window.QUIZ_BANKS.aug12Review = [
  {
    id: "aug12-zhongyu-liangkuai-le",
    hanzi: "终于凉快了。",
    pinyin: "Zhōngyú liángkuai le.",
    audio: "audio/words/8.10/终于凉快了.m4a",
    meaning: { en:"It finally cooled down.", ja:"やっと涼しくなった。", ko:"드디어 시원해졌다.", zh:"终于凉快了。" }
  },
  {
    id: "aug12-zhongyu-xiake-le",
    hanzi: "终于下课了。",
    pinyin: "Zhōngyú xià kè le.",
    audio: "audio/words/8.10/终于下课了.m4a",
    meaning: { en:"Class is finally over.", ja:"やっと授業が終わった。", ko:"드디어 수업이 끝났다.", zh:"终于下课了。" }
  },
  {
    id: "aug12-yulanpenjie",
    hanzi: "盂兰盆节",
    pinyin: "Yúlánpén jié",
    audio: "audio/words/8.11/盂兰盆节.m4a",
    meaning: { en:"Ullambana / Obon festival", ja:"盂蘭盆節・お盆", ko:"우란분절 / 오봉", zh:"盂兰盆节" }
  },
  {
    id: "aug12-zhongguo-ye-you-yulanpenjie",
    hanzi: "中国也有盂兰盆节。",
    pinyin: "Zhōngguó yě yǒu yúlánpén jié.",
    audio: "audio/words/8.11/中国也有盂兰盆节.m4a",
    meaning: { en:"China also has 盂兰盆节.", ja:"中国にも盂蘭盆節がある。", ko:"중국에도 우란분절이 있다.", zh:"中国也有盂兰盆节。" }
  },
  {
    id: "aug12-zhongyu",
    hanzi: "终于",
    pinyin: "zhōngyú",
    audio: "audio/words/8.10/终于.m4a",
    meaning: { en:"finally", ja:"やっと / ついに", ko:"드디어 / 마침내", zh:"终于" }
  },
  {
    id: "aug12-ye-you",
    hanzi: "也有",
    pinyin: "yě yǒu",
    audio: "audio/words/8.11/也有.m4a",
    meaning: { en:"also has / also exists", ja:"〜もある", ko:"~도 있다", zh:"也有" }
  }
];

window.LESSONS.lesson20260812 = {
  dateISO: "2026-08-12",
  calendar: { day: "12", month: "AUG" },
  summary: {
    en:"Midweek review: finally + Obon/盂兰盆节. Listen and choose the correct Japanese meaning.",
    ja:"半週の復習：终于と盂兰盆节。音声を聞いて正しい日本語の意味を選びましょう。",
    ko:"반주 복습: 终于와 盂兰盆节. 듣고 맞는 일본어 뜻을 고르세요.",
    zh:"半周回顾：复习8月10日和8月11日，听录音选择正确的日语意思。"
  },
  date: { en:"AUG 12 WED · MIDWEEK REVIEW", ja:"8月12日（水）· 半週の復習", ko:"8월 12일 수요일 · 반주 복습", zh:"8月12日（周三）· 半周回顾" },
  title: { en:"Midweek review: finally and Obon", ja:"半週の復習：终于とお盆", ko:"반주 복습: 终于와 오봉", zh:"半周回顾：终于和盂兰盆节" },
  tag: { en:"Midweek", ja:"半週復習", ko:"반주 복습", zh:"半周回顾" },
  quiz: { bank:"aug12Review", count:3, meaningLanguage:"ja" },
  pinyin: {
    intro: { en:"Listen first, then choose the Japanese meaning.", ja:"まず聞いて、それから日本語の意味を選びましょう。", ko:"먼저 듣고 일본어 뜻을 고르세요.", zh:"先听，再选日语意思。" },
    groups: [
      { title:{ en:"review sounds", ja:"復習の音", ko:"복습 소리", zh:"复习声音" }, items:["zhōng", "yú", "liáng", "xià", "yě", "yǒu"] }
    ],
    tip: { en:"Three questions per round. New rounds try not to repeat until the bank is used.", ja:"一回三問。題庫を使い切るまで、なるべく重複しません。", ko:"한 번에 세 문제. 문제를 다 쓰기 전까지 최대한 반복하지 않아요.", zh:"每轮三题，题库用完前尽量不重复。" }
  }
};
