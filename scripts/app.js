/* 页面事件绑定与启动。 */
function revealOpenSlotMenu() {
  requestAnimationFrame(() => {
    const menu = document.querySelector(".slot-wrap.open .slot-menu");
    if (!menu) return;
    const bounds = menu.getBoundingClientRect();
    const compactNavigation = window.matchMedia("(max-width: 800px), (max-aspect-ratio: 4/5)").matches;
    const safeTop = compactNavigation ? 96 : 18;
    const safeBottom = window.innerHeight - 18;
    if (bounds.top >= safeTop && bounds.bottom <= safeBottom) return;

    const desiredTop = Math.max(safeTop, Math.min(bounds.top, safeBottom - bounds.height));
    window.scrollBy({ top: bounds.top - desiredTop, behavior: "smooth" });
  });
}

document.addEventListener("click", (event) => {
  const quizAudio = event.target.closest("[data-quiz-audio]");
  if (quizAudio) {
    const lesson = window.LESSONS[state.lesson];
    const session = getQuizSession(lesson);
    const current = session.questions[session.index];
    playQuizQuestionAudio(current.question);
    return;
  }
  if (event.target.closest("[data-quiz-toggle-hanzi]")) {
    toggleQuizHanzi();
    return;
  }
  const quizOption = event.target.closest("[data-quiz-option]");
  if (quizOption) {
    answerQuizOption(quizOption.dataset.quizOption);
    return;
  }
  if (event.target.closest("[data-quiz-next]")) {
    nextQuizQuestion();
    return;
  }
  if (event.target.closest("[data-quiz-submit]")) {
    submitQuiz();
    return;
  }
  if (event.target.closest("[data-quiz-restart]")) {
    resetQuizSession(window.LESSONS[state.lesson]);
    renderLesson();
    return;
  }
  if (event.target.closest("[data-quiz-home]")) {
    initializeCurrentLesson();
    resetQuizSession(window.LESSONS[state.lesson]);
    renderLesson();
    return;
  }
  const sentenceAudio = event.target.closest("[data-sentence-audio]");
  if (sentenceAudio) {
    const index = Number(sentenceAudio.dataset.sentenceAudio);
    const item = window.LESSONS[state.lesson].phrases[index];
    if (!hasAnyBuilderSelection(index, item)) {
      showToast(ui().chooseContent);
      return;
    }
    const sentenceText = builtSentenceText(index, item);
    playAudioCandidates(builtSentenceAudioPaths(index, item), sentenceText);
    return;
  }
  const audioCandidates = event.target.closest("[data-audio-candidates]");
  if (audioCandidates) {
    playAudioCandidates(audioCandidates.dataset.audioCandidates.split("|"), audioCandidates.dataset.label);
    return;
  }
  const audio = event.target.closest("[data-audio]");
  if (audio) {
    playAudio(audio.dataset.audio, audio.dataset.label);
    return;
  }
  const builderOption = event.target.closest("[data-builder-option]");
  if (builderOption) {
    const index = Number(builderOption.dataset.builderOption);
    addBuilderOption(index, window.LESSONS[state.lesson].phrases[index], JSON.parse(decodeURIComponent(builderOption.dataset.option)), builderOption.dataset.slot);
    return;
  }
  const removeToken = event.target.closest("[data-remove-token]");
  if (removeToken) {
    const index = Number(removeToken.dataset.phraseIndex);
    removeBuilderToken(index, window.LESSONS[state.lesson].phrases[index], removeToken.dataset.removeSlot, Number(removeToken.dataset.removeToken));
    return;
  }
  const slotToggle = event.target.closest("[data-slot-toggle]");
  if (slotToggle) {
    state.phraseIndex = Number(slotToggle.dataset.phraseIndex);
    state.openSlot = state.openSlot === slotToggle.dataset.slotToggle ? null : slotToggle.dataset.slotToggle;
    renderLesson();
    if (state.openSlot) revealOpenSlotMenu();
    return;
  }
  const deleteButton = event.target.closest("[data-delete-wish]");
  if (deleteButton) {
    deleteWish(deleteButton.dataset.wishSource, deleteButton.dataset.deleteWish);
    return;
  }
  if (event.target.closest(".day-nav-head") && !event.target.closest("#calendarMenu")) {
    state.calendarMonth = state.calendarMonth || localISODate(0);
    state.calendarOpen = !state.calendarOpen;
    renderDayRail();
    return;
  }
  const calendarMonth = event.target.closest("[data-calendar-month]");
  if (calendarMonth) {
    state.calendarMonth = calendarMonth.dataset.calendarMonth;
    state.calendarOpen = true;
    renderDayRail();
    return;
  }
  const calendarLesson = event.target.closest("[data-calendar-lesson]");
  if (calendarLesson) {
    state.lesson = calendarLesson.dataset.calendarLesson;
    state.phraseIndex = 0;
    state.calendarOpen = false;
    renderLesson();
    return;
  }
  const lesson = event.target.closest("[data-lesson]");
  if (lesson) { state.lesson = lesson.dataset.lesson; state.phraseIndex = 0; state.calendarOpen = false; renderLesson(); }
  const phrase = event.target.closest("[data-phrase-index]");
  if (phrase) { state.phraseIndex = Number(phrase.dataset.phraseIndex); renderLesson(); }
  if (event.target.closest("#openCurriculum")) setDrawer(true);
  if (event.target.closest("#closeCurriculum") || event.target.id === "drawerBackdrop") setDrawer(false);
  if (event.target.closest("#openWishBoard")) setWishModal(true);
  if (event.target.closest("#closeWishBoard") || event.target.id === "wishBackdrop") setWishModal(false);
  if (event.target.closest("#closeGrammar") || event.target.id === "grammarBackdrop") setGrammarModal(false);
  const curriculum = event.target.closest(".curriculum-item");
  if (curriculum) showToast(ui().coming);
});

document.addEventListener("click", (event) => {
  if (!state.openSlot || event.target.closest(".slot-wrap")) return;
  state.openSlot = null;
  renderLesson();
});

$("#wishForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = $("#wishInput");
  const text = input.value.trim();
  if (!text) return;
  $("#wishSubmit").disabled = true;
  try {
    await addWish(text);
    input.value = "";
    setWishModal(true);
    showToast(ui().wishSaved);
  } catch (error) {
    showToast("留言没有提交成功，请稍后再试。");
  } finally {
    $("#wishSubmit").disabled = false;
  }
});

$("#languageSelect").addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button) return;
  state.language = button.dataset.language;
  renderInterface();
  renderCurriculum();
  renderLesson();
  renderWishes();
});
$("#homeButton").addEventListener("click", () => { initializeCurrentLesson(); state.phraseIndex = 0; renderLesson(); });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setDrawer(false);
    setWishModal(false);
    setGrammarModal(false);
  }
});
window.addEventListener("resize", fitCalendarMenuToViewport);

initializeCurrentLesson();
renderCurriculum();
renderInterface();
renderLesson();
renderWishes();
try {
  startWishRealtime();
  loadRemoteWishes();
} catch (error) {
  console.warn("Wish board sync skipped:", error);
}
