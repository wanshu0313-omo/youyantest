/* Lesson · 2026-08-14 · 周五：数字和星期。 */
window.LESSONS = window.LESSONS || {};
window.LESSONS.lesson20260814 = {
  dateISO: "2026-08-14",
  calendar: { day: "14", month: "AUG" },
  summary: {
    en:"Numbers 1–10 and weekdays: 星期 + number.",
    ja:"数字1〜10と曜日：「星期＋数字」の言い方。",
    ko:"숫자 1~10과 요일: 星期 + 숫자.",
    zh:"学习数字1–10，以及“星期＋数字”的星期表达。"
  },
  date: { en:"AUG 14 FRI · NUMBERS AND WEEKDAYS", ja:"8月14日（金）· 数字と曜日", ko:"8월 14일 금요일 · 숫자와 요일", zh:"8月14日（周五）· 数字和星期" },
  title: { en:"Numbers and weekdays", ja:"数字と曜日", ko:"숫자와 요일", zh:"数字和星期" },
  tag: { en:"Numbers", ja:"数字・曜日", ko:"숫자/요일", zh:"数字星期" },
  phrases: [
    {
      hanzi: "一 二 三 四 五 六 七 八 九 十",
      translation: {
        en:"Chinese numbers from 1 to 10. Tap each card to hear the sound.",
        ja:"中国語の1から10までの数字。カードを押すと発音を聞けます。",
        ko:"중국어 숫자 1부터 10까지예요. 카드를 누르면 발음을 들을 수 있어요.",
        zh:"中文数字1到10。点击每个小格可以听发音。"
      },
      numberGrid: [
        {hanzi:"一", pinyin:"yī", number:"1", audio:"audio/words/8.14/一.m4a"},
        {hanzi:"二", pinyin:"èr", number:"2", audio:"audio/words/8.14/二.m4a"},
        {hanzi:"三", pinyin:"sān", number:"3", audio:"audio/words/8.14/三.m4a"},
        {hanzi:"四", pinyin:"sì", number:"4", audio:"audio/words/8.14/四.m4a"},
        {hanzi:"五", pinyin:"wǔ", number:"5", audio:"audio/words/8.14/五.m4a"},
        {hanzi:"六", pinyin:"liù", number:"6", audio:"audio/words/8.14/六.m4a"},
        {hanzi:"七", pinyin:"qī", number:"7", audio:"audio/words/8.14/七.m4a"},
        {hanzi:"八", pinyin:"bā", number:"8", audio:"audio/words/8.14/八.m4a"},
        {hanzi:"九", pinyin:"jiǔ", number:"9", audio:"audio/words/8.14/九.m4a"},
        {hanzi:"十", pinyin:"shí", number:"10", audio:"audio/words/8.14/十.m4a"}
      ]
    },
    {
      hanzi: "今天是星期五。",
      pinyin: "Jīntiān shì xīngqīwǔ.",
      audio: "audio/words/8.14/今天是星期五.m4a",
      chars: [
        {h:"今天", p:"Jīntiān", a:"audio/words/8.14/今天.m4a"},
        {h:"是", p:"shì", a:"audio/words/8.14/是.m4a"},
        {h:"星期五", p:"xīngqīwǔ", a:"audio/words/8.14/星期五.m4a"},
        {h:"。"}
      ],
      translation: {
        en:"今天 = today　是 = is　星期五 = Friday (lit. week-five)\n\n“Today is Friday.”\n\nWeekdays are 星期 + number: 星期一 (Mon) through 星期六 (Sat). 「是」 links two equal things (A = B) — different from 「有」 which expresses existence.",
        ja:"今天＝今日　是＝です　星期五＝金曜日\n\n「今日は金曜日です。」\n\n曜日は「星期＋数字」で表す。月〜土は星期一〜星期六。「是」はA＝Bの関係を表す。「有」とは使い分けに注意。",
        ko:"今天 = 오늘　是 = ~이다　星期五 = 금요일\n\n“오늘은 금요일이에요.”\n\n요일은 「星期 + 숫자」로 말해요. 월요일부터 토요일은 星期一~星期六. 「是」는 A=B 관계를 나타내고, 존재를 나타내는 「有」와 달라요.",
        zh:"星期用「星期＋数字」表示，星期一到星期六直接加数字1–6。注意：这里用「是」，不用「有」，因为是描述“今天等于星期五”的等号关系。"
      },
      weekdayTitle: { en:"Weekdays", ja:"曜日一覧", ko:"요일", zh:"星期一览" },
      weekdayGrid: [
        {hanzi:"星期一", pinyin:"xīngqīyī", audio:"audio/words/8.14/星期一.m4a", meaning:{en:"Mon", ja:"月", ko:"월", zh:"一"}},
        {hanzi:"星期二", pinyin:"xīngqīèr", audio:"audio/words/8.14/星期二.m4a", meaning:{en:"Tue", ja:"火", ko:"화", zh:"二"}},
        {hanzi:"星期三", pinyin:"xīngqīsān", audio:"audio/words/8.14/星期三.m4a", meaning:{en:"Wed", ja:"水", ko:"수", zh:"三"}},
        {hanzi:"星期四", pinyin:"xīngqīsì", audio:"audio/words/8.14/星期四.m4a", meaning:{en:"Thu", ja:"木", ko:"목", zh:"四"}},
        {hanzi:"星期五", pinyin:"xīngqīwǔ", audio:"audio/words/8.14/星期五.m4a", meaning:{en:"Fri", ja:"金", ko:"금", zh:"五"}},
        {hanzi:"星期六", pinyin:"xīngqīliù", audio:"audio/words/8.14/星期六.m4a", meaning:{en:"Sat", ja:"土", ko:"토", zh:"六"}},
        {hanzi:"星期天", pinyin:"xīngqītiān", audio:"audio/words/8.14/星期天.m4a", meaning:{en:"Sun · no number", ja:"日 ← 数字を使わない", ko:"일 · 숫자 안 씀", zh:"日 ← 唯一不用数字"}}
      ]
    }
  ],
  pinyin: {
    intro: { en:"Numbers and weekdays: listen for tones in yī, èr, sān, sì, wǔ.", ja:"数字と曜日：yī、èr、sān、sì、wǔ の声調を聞きましょう。", ko:"숫자와 요일: yī, èr, sān, sì, wǔ 성조를 들어요.", zh:"数字和星期：听一听 yī、èr、sān、sì、wǔ 的声调。" },
    groups: [
      { title:{ en:"numbers", ja:"数字", ko:"숫자", zh:"数字" }, items:["yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ", "shí"] },
      { title:{ en:"weekday sound", ja:"曜日の音", ko:"요일 소리", zh:"星期的音" }, items:["xīng", "qī", "wǔ"] }
    ],
    tip: { en:"星期天 is the exception: Sunday does not use a number.", ja:"星期天 は例外。日曜日だけ数字を使いません。", ko:"星期天은 예외예요. 일요일만 숫자를 쓰지 않아요.", zh:"星期天 是例外：星期日不用数字。" }
  }
};
