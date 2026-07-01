/* 右上角语言栏与界面文字。 */
const UI = {
  en: { pageTitle:"友言 · Chinese for Friends", map:"PINYIN MAP", tagline:"Chinese for my dear friends", progress:"A little Chinese every day", choose:"Choose system language", today:"Today", yesterday:"Yesterday", tomorrow:"Tomorrow", dailyTitle:"Daily lessons", dailyHint:"Yesterday · Today · Tomorrow", previewToday:"TODAY’S LESSON", previewPast:"LESSON PREVIEW", system:"Pinyin course", systemHint:"Start here →", phrases:"Useful phrases", pinyin:"Pinyin tips", todayTheme:"Today’s theme", reviewTheme:"Review theme", tip:"Quick tip", grammar:"Grammar", chooseWords:"Choose words", chooseContent:"Please choose content", drawerTitle:"Pinyin learning path", drawerIntro:"Start with sound, one tiny step at a time.", drawerNote:"More lessons are on the way", hot:"Popular", coming:"This lesson is coming soon ✦", waiting:"Waiting for audio: ", play:"Play", wishNav:"Message", wishTrigger:"I want to learn...", wishEyebrow:"SAY IT IN CHINESE", wishTitle:"I want to learn", wishIntro:"Write any sentence in your own language. I’ll choose some for class.", wishPlaceholder:"Type a sentence you want to learn...", wishSubmit:"Add", wishPicked:"Chosen", wishTeach:"Teach on", wishSaved:"Added to the board ✦", wishDeleted:"Deleted ✦", wishEmpty:"No wishes yet. Be the first one!", example:"eg", deleteWish:"Delete", deletePasswordPrompt:"Please enter the delete password.", deletePasswordWrong:"Wrong password. Not deleted.", autoZh:"Chinese: I want to learn how to say this sentence." },
  ja: { pageTitle:"友言 · 友だちのための中国語", map:"ピンインマップ", tagline:"大切な友だちのための中国語", progress:"今日もちょっとだけ中国語", choose:"システム言語を選択", today:"今日", yesterday:"昨日", tomorrow:"明日", dailyTitle:"毎日のレッスン", dailyHint:"昨日・今日・明日", previewToday:"今日のレッスン", previewPast:"レッスンの内容", system:"ピンイン講座", systemHint:"ここから →", phrases:"今日の実用フレーズ", pinyin:"ピンインTips", todayTheme:"今日のテーマ", reviewTheme:"復習テーマ", tip:"ワンポイント", grammar:"文法", chooseWords:"ことばを選ぶ", chooseContent:"内容を選んでください", drawerTitle:"ピンイン学習コース", drawerIntro:"音から始めて、一歩ずつ進みましょう。", drawerNote:"新しいレッスンを準備中です", hot:"人気", coming:"このレッスンはもうすぐ公開です ✦", waiting:"音声を待っています：", play:"再生", wishNav:"メッセージ", wishTrigger:"これを学びたい…", wishEyebrow:"中国語で言いたい", wishTitle:"学びたいこと", wishIntro:"自分の言語で、学びたい文を自由に書いてください。授業でいくつか選びます。", wishPlaceholder:"学びたい文を入力してください…", wishSubmit:"追加", wishPicked:"選ばれました", wishTeach:"学習日", wishSaved:"ボードに追加しました ✦", wishDeleted:"削除しました ✦", wishEmpty:"まだありません。最初に書いてみましょう！", example:"例", deleteWish:"削除", deletePasswordPrompt:"削除パスワードを入力してください。", deletePasswordWrong:"パスワードが違います。削除しませんでした。", autoZh:"中文：我想学这句话的中文说法。" },
  ko: { pageTitle:"友言 · 친구를 위한 중국어", map:"병음 지도", tagline:"소중한 친구들을 위한 중국어", progress:"오늘도 중국어를 조금씩", choose:"시스템 언어 선택", today:"오늘", yesterday:"어제", tomorrow:"내일", dailyTitle:"매일의 수업", dailyHint:"어제 · 오늘 · 내일", previewToday:"오늘의 수업", previewPast:"수업 미리보기", system:"병음 코스", systemHint:"여기서 시작 →", phrases:"오늘의 실용 문장", pinyin:"병음 Tips", todayTheme:"오늘의 주제", reviewTheme:"복습 주제", tip:"작은 팁", grammar:"문법", chooseWords:"단어 선택", chooseContent:"내용을 선택해 주세요", drawerTitle:"병음 학습 코스", drawerIntro:"소리부터 차근차근 시작해 봐요.", drawerNote:"새로운 수업을 준비하고 있어요", hot:"인기", coming:"이 수업은 곧 공개됩니다 ✦", waiting:"음성을 기다리는 중: ", play:"재생", wishNav:"메시지", wishTrigger:"배우고 싶어요…", wishEyebrow:"중국어로 말하고 싶어요", wishTitle:"배우고 싶어요", wishIntro:"자신의 모국어로 배우고 싶은 문장을 자유롭게 써 주세요. 수업에서 골라 볼게요.", wishPlaceholder:"배우고 싶은 문장을 입력하세요...", wishSubmit:"추가", wishPicked:"선택됨", wishTeach:"수업 날짜", wishSaved:"게시판에 추가했어요 ✦", wishDeleted:"삭제했어요 ✦", wishEmpty:"아직 없어요. 첫 문장을 남겨 보세요!", example:"例", deleteWish:"삭제", deletePasswordPrompt:"삭제 비밀번호를 입력해 주세요.", deletePasswordWrong:"비밀번호가 달라요. 삭제하지 않았어요.", autoZh:"中文：我想学这句话的中文说法。" },
  zh: { pageTitle:"友言 · 给朋友的汉语网站", map:"拼音地图", tagline:"给我亲爱的朋友们", progress:"今天也学一点点汉语", choose:"选择系统语言", today:"今天", yesterday:"昨天", tomorrow:"明天", dailyTitle:"每日课程", dailyHint:"昨天 · 今天 · 明天", previewToday:"今日课程", previewPast:"课程内容预览", system:"系统学拼音", systemHint:"从这里开始 →", phrases:"今天的实用句", pinyin:"Pinyin tips", todayTheme:"今日主题", reviewTheme:"复习主题", tip:"小提示", grammar:"语法", chooseWords:"选择词语", chooseContent:"请选择内容", drawerTitle:"系统学习拼音", drawerIntro:"从声音出发，一小步一小步来。", drawerNote:"更多内容正在准备中", hot:"人气", coming:"这一课的内容很快就来 ✦", waiting:"等待录音：", play:"播放", wishNav:"留言", wishTrigger:"我要学。。。", wishEyebrow:"想用中文说", wishTitle:"我想学", wishIntro:"可以用自己的母语写下任何想学的句子，我会抽选来讲。", wishPlaceholder:"输入你想学的句子……", wishSubmit:"加入", wishPicked:"已选中", wishTeach:"讲解日", wishSaved:"已经放到留言板啦 ✦", wishDeleted:"已删除 ✦", wishEmpty:"还没有留言，来写第一句吧！", example:"例", deleteWish:"删除", deletePasswordPrompt:"请输入删除口令", deletePasswordWrong:"口令不正确，没有删除。", autoZh:"中文：我想学这句话的中文说法。" }
};

const textFor = (value) => typeof value === "object" ? (value[state.language] || value.en) : value;
const ui = () => UI[state.language];
const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[char]));
function renderInterface() {
  const copy = ui();
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  document.title = copy.pageTitle;
  $("#brandTagline").textContent = copy.tagline;
  $("#progressText").innerHTML = `<i></i>${copy.progress}`;
  $("#languageLabel").textContent = copy.choose;
  $("#dailyNavTitle").textContent = copy.dailyTitle;
  $("#dailyNavHint").textContent = copy.dailyHint;
  $("#systemNav").textContent = copy.system;
  $("#systemHint").textContent = copy.systemHint;
  $("#phraseSection").textContent = copy.phrases;
  $("#pinyinSection").textContent = copy.pinyin;
  $("#drawerTitle").textContent = copy.drawerTitle;
  $("#drawerEyebrow").textContent = copy.map;
  $("#drawerIntro").textContent = copy.drawerIntro;
  $("#drawerNote").textContent = copy.drawerNote;
  $("#wishNav").textContent = copy.wishNav;
  $("#wishTrigger").textContent = copy.wishTrigger;
  $("#wishEyebrow").textContent = copy.wishEyebrow;
  $("#wishTitle").textContent = copy.wishTitle;
  $("#wishIntro").textContent = copy.wishIntro;
  $("#wishInput").placeholder = copy.wishPlaceholder;
  $("#wishSubmit").textContent = copy.wishSubmit;
  document.querySelectorAll(".flag").forEach(button => button.classList.toggle("active", button.dataset.language === state.language));
}
