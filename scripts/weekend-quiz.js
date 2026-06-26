/* 周末听力小测模块。 */
function quizCopy() {
  const copy = {
    en: { listen:"Listen", show:"Show Chinese", hide:"Hide Chinese", choose:"Choose the meaning", next:"Next", submit:"Submit all", correct:"Correct!", wrong:"Not this one. Try again.", done:"Great job! 🎉", home:"Back home", again:"Three more", progress:"Question" },
    ja: { listen:"聞く", show:"漢字を見る", hide:"漢字を隠す", choose:"意味を選びましょう", next:"次へ", submit:"全部提出", correct:"正解！", wrong:"これは違います。もう一度選びましょう。", done:"よくできました！🎉", home:"ホームへ", again:"もう3問", progress:"問題" },
    ko: { listen:"듣기", show:"한자 보기", hide:"한자 숨기기", choose:"뜻을 고르세요", next:"다음", submit:"전체 제출", correct:"정답!", wrong:"이 답은 아니에요. 다시 골라 보세요.", done:"잘했어요! 🎉", home:"홈으로", again:"세 문제 더", progress:"문제" },
    zh: { listen:"听一听", show:"看汉字", hide:"隐藏汉字", choose:"选择正确意思", next:"下一题", submit:"提交所有问题", correct:"答对啦！", wrong:"这题选错啦，再选一次。", done:"恭喜完成！🎉", home:"返回主页", again:"再来三题", progress:"第" }
  };
  return copy[state.language] || copy.en;
}

function quizBankFor(lesson) {
  return (lesson.quiz?.questionIds || []).length
    ? window.WEEKEND_QUIZ_BANK.filter(item => lesson.quiz.questionIds.includes(item.id))
    : [...window.WEEKEND_QUIZ_BANK];
}

function shuffleQuizItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getQuizSession(lesson) {
  const key = state.lesson;
  if (!state.quiz[key]) resetQuizSession(lesson);
  return state.quiz[key];
}

function resetQuizSession(lesson) {
  const bank = quizBankFor(lesson);
  const count = Math.min(lesson.quiz?.count || 3, bank.length);
  state.quiz[state.lesson] = {
    questions: shuffleQuizItems(bank).slice(0, count).map(question => {
      const distractor = shuffleQuizItems(bank.filter(item => item.id !== question.id))[0];
      return {
        question,
        options: shuffleQuizItems([question, distractor]),
        selected: null,
        firstSelected: null,
        correctAnswered: false,
        showHanzi: false
      };
    }),
    index: 0,
    completed: false
  };
}

function playSequentialAudio(paths, label) {
  const queue = paths.filter(Boolean);
  let index = 0;
  const playNext = () => {
    if (index >= queue.length) {
      audioPlayer.onended = null;
      return;
    }
    audioPlayer.pause();
    audioPlayer.onerror = () => {
      index += 1;
      playNext();
    };
    audioPlayer.onended = () => {
      index += 1;
      setTimeout(playNext, 90);
    };
    audioPlayer.src = encodeURI(queue[index]);
    audioPlayer.play().catch(() => {
      index += 1;
      playNext();
    });
  };
  if (!queue.length) showToast(`${ui().waiting}${label}`);
  playNext();
}

function playQuizQuestionAudio(question) {
  if (question.audioParts) {
    playSequentialAudio(question.audioParts, question.hanzi);
    return;
  }
  playAudio(question.audio, question.hanzi);
}

function playQuizEffect(isCorrect) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const now = context.currentTime;
  const notes = isCorrect ? [523, 659, 784] : [220, 185];
  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = isCorrect ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, now + index * 0.11);
    gain.gain.exponentialRampToValueAtTime(0.16, now + index * 0.11 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.11 + 0.18);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + index * 0.11);
    oscillator.stop(now + index * 0.11 + 0.2);
  });
}

function answerQuizOption(optionId) {
  const lesson = window.LESSONS[state.lesson];
  const session = getQuizSession(lesson);
  const current = session.questions[session.index];
  if (!current || current.correctAnswered) return;
  current.selected = optionId;
  if (!current.firstSelected) current.firstSelected = optionId;
  const isCorrect = optionId === current.question.id;
  if (isCorrect) current.correctAnswered = true;
  playQuizEffect(isCorrect);
  renderLesson();
}

function submitQuiz() {
  const lesson = window.LESSONS[state.lesson];
  const session = getQuizSession(lesson);
  if (session.questions.every(question => question.correctAnswered)) {
    session.completed = true;
    renderLesson();
  }
}

function nextQuizQuestion() {
  const lesson = window.LESSONS[state.lesson];
  const session = getQuizSession(lesson);
  if (session.index < session.questions.length - 1) {
    session.index += 1;
    renderLesson();
  }
}

function toggleQuizHanzi() {
  const lesson = window.LESSONS[state.lesson];
  const session = getQuizSession(lesson);
  const current = session.questions[session.index];
  current.showHanzi = !current.showHanzi;
  renderLesson();
}

function renderQuizLesson(lesson) {
  const session = getQuizSession(lesson);
  const current = session.questions[session.index];
  const copy = quizCopy();
  if (!current) return `<div class="quiz-card">${ui().coming}</div>`;
  const selectedCorrect = current.selected === current.question.id;
  const progress = `${copy.progress} ${session.index + 1} / ${session.questions.length}`;
  const isLastQuestion = session.index === session.questions.length - 1;
  const canMoveOn = current.correctAnswered;
  const canSubmit = isLastQuestion && session.questions.every(question => question.correctAnswered);
  return `<div class="quiz-wrap">
    <div class="quiz-card">
      <div class="quiz-top">
        <span>${progress}</span>
        <b>${escapeHTML(copy.choose)}</b>
      </div>
      <button class="quiz-listen" data-quiz-audio="${current.question.id}">
        <span>▶</span>${escapeHTML(copy.listen)}
      </button>
      <button class="quiz-hanzi-toggle" data-quiz-toggle-hanzi="true">${escapeHTML(current.showHanzi ? copy.hide : copy.show)}</button>
      <div class="quiz-hanzi ${current.showHanzi ? "show" : ""}">
        <span class="quiz-hanzi-pinyin">${escapeHTML(current.question.pinyin)}</span>
        <span class="quiz-hanzi-text">${escapeHTML(current.question.hanzi)}</span>
      </div>
      <div class="quiz-options">
        ${current.options.map(option => {
          const isSelected = current.selected === option.id;
          const isCorrect = option.id === current.question.id;
          const stateClass = current.correctAnswered ? (isCorrect ? "correct" : "muted") : isSelected ? "wrong" : "";
          return `<button class="quiz-option ${stateClass}" data-quiz-option="${option.id}" ${current.correctAnswered ? "disabled" : ""}>${escapeHTML(textFor(option.meaning))}</button>`;
        }).join("")}
      </div>
      ${current.selected ? `<div class="quiz-feedback ${selectedCorrect ? "correct" : "wrong"}">${escapeHTML(selectedCorrect ? copy.correct : copy.wrong)}</div>` : ""}
      ${canMoveOn && !isLastQuestion ? `<button class="quiz-next" data-quiz-next="true">${escapeHTML(copy.next)}</button>` : ""}
      ${canSubmit ? `<button class="quiz-next submit" data-quiz-submit="true">${escapeHTML(copy.submit)}</button>` : ""}
    </div>
    ${session.completed ? `<div class="quiz-complete">
      <div class="confetti" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="quiz-complete-card">
        <h2>${escapeHTML(copy.done)}</h2>
        <p>${escapeHTML(textFor(lesson.summary))}</p>
        <div>
          <button data-quiz-home="true">${escapeHTML(copy.home)}</button>
          <button data-quiz-restart="true">${escapeHTML(copy.again)}</button>
        </div>
      </div>
    </div>` : ""}
  </div>`;
}
