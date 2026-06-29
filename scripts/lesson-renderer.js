/* 每日课程主区域、日期侧栏与 pinyin tips 渲染。 */
function renderHanzi(item) {
  if (!item.chars) return `<div class="hanzi">${escapeHTML(item.hanzi)}</div>`;
  return `<div class="hanzi hanzi-clickable">${item.chars.map(char => {
    if (!char.a) return `<span class="hanzi-punctuation">${escapeHTML(char.h)}</span>`;
    return `<button class="hanzi-char" data-audio="${char.a}" data-label="${char.h}" aria-label="${ui().play} ${char.h}">
      <ruby class="hanzi-ruby"><rb>${escapeHTML(char.h)}</rb><rt>${escapeHTML(char.p || "")}</rt></ruby>
    </button>`;
  }).join("")}</div>`;
}

function renderDialogue(item) {
  if (!item.dialogue?.length) return "";
  return `<div class="dialogue-block">
    ${item.dialogue.map(line => `<div class="dialogue-line">
      <span class="dialogue-speaker">${escapeHTML(line.speaker)}：</span>
      ${line.audio ? soundButton(line.audio, `${line.speaker}: ${line.label || line.chars?.map(char => char.h).join("") || ""}`, true) : ""}
      ${renderHanzi({ chars: line.chars })}
    </div>`).join("")}
  </div>`;
}

function renderPhraseExamples(item) {
  if (!item.examples?.length) return "";
  return `<div class="phrase-examples">
    <b>${escapeHTML(textFor(item.examplesTitle || { en: "Example exchanges", ja: "会話例", ko: "대화 예시", zh: "语境示例" }))}</b>
    ${item.examples.map(example => `<div class="phrase-example-line">
      ${soundButton(example.audio, textFor(example.text), true)}
      <span>${escapeHTML(textFor(example.text))}</span>
    </div>`).join("")}
  </div>`;
}

function renderPhrases(phrases) {
  $("#phraseList").innerHTML = phrases.map((item, index) => `
    <div class="phrase-card ${item.type === "builder" ? "builder-card" : ""} ${item.type === "builder" && item.optionGroups?.some(group => state.openSlot === builderSlotKey(index, item, group.slot)) ? "menu-open" : ""} ${index === state.phraseIndex ? "active" : ""}" data-phrase-index="${index}">
      <div class="phrase-main">
        <div class="phrase-copy">
          ${item.type === "builder" ? `<div class="builder-line">${sentenceSoundButton(index, item, true)}${renderBuilderSentence(item, index)}</div>` : item.dialogue ? renderDialogue(item) : renderHanzi(item)}
          <div class="translation">${item.translation[state.language]}</div>
          ${item.note ? `<div class="phrase-note"><span aria-hidden="true">💡</span>${escapeHTML(textFor(item.note))}</div>` : ""}
          ${renderPhraseExamples(item)}
        </div>
        ${item.audio ? soundButton(item.audio, item.hanzi) : ""}
      </div>
      ${item.type === "builder" && item.grammar ? `<div class="grammar-inline in-card"><span aria-hidden="true">💡</span>${escapeHTML(textFor(item.grammar))}</div>` : ""}
    </div>
  `).join("");
}

function renderPinyin(data) {
  const tones = data.tones ? `<div class="tone-row">${data.tones.map(t => `
    <button class="tone" data-audio="${t.audio}" data-label="${textFor(t.name)}">
      <b>${t.mark}</b><span>${textFor(t.name)}</span><small>${textFor(t.hint)}</small>
    </button>`).join("")}</div>` : "";

  const pinyinAudioName = (syllable) => {
    const toneMap = {
      "ā": ["a", "1"], "á": ["a", "2"], "ǎ": ["a", "3"], "à": ["a", "4"],
      "ē": ["e", "1"], "é": ["e", "2"], "ě": ["e", "3"], "è": ["e", "4"],
      "ī": ["i", "1"], "í": ["i", "2"], "ǐ": ["i", "3"], "ì": ["i", "4"],
      "ō": ["o", "1"], "ó": ["o", "2"], "ǒ": ["o", "3"], "ò": ["o", "4"],
      "ū": ["u", "1"], "ú": ["u", "2"], "ǔ": ["u", "3"], "ù": ["u", "4"],
      "ǖ": ["v", "1"], "ǘ": ["v", "2"], "ǚ": ["v", "3"], "ǜ": ["v", "4"],
      "ü": ["v", ""]
    };
    let tone = "";
    const plain = String(syllable).replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/g, mark => {
      const [letter, number] = toneMap[mark];
      if (number) tone = number;
      return letter;
    });
    return `${plain}${tone}`;
  };

  const pinyinAudioBaseName = (syllable) => pinyinAudioName(syllable).replace(/[1-4]$/, "");

  const pinyinAudioCandidates = (syllable) => {
    const names = [...new Set([pinyinAudioName(syllable), pinyinAudioBaseName(syllable)])];
    return names.map(name => `audio/pinyin/${name}.m4a`);
  };

  const groups = data.groups.map(group => `<div class="pinyin-group">
    <div class="group-title">${textFor(group.title)}</div>
    <div class="syllable-grid">${group.items.map(item => item === "vs" ? `<span class="compare-mark">vs</span>` : `<button data-audio-candidates="${escapeHTML(pinyinAudioCandidates(item).join("|"))}" data-label="${item}">${item}<span>↗</span></button>`).join("")}</div>
  </div>`).join("");

  $("#pinyinContent").innerHTML = `<p class="pinyin-intro">${textFor(data.intro)}</p>${tones}${groups}<div class="tip"><span>${ui().tip}</span>${textFor(data.tip)}</div>`;
}
function showDayPreview(button, lessonKey) {
  const lesson = window.LESSONS[lessonKey];
  const preview = $("#dayPreview");
  const rect = button.getBoundingClientRect();
  $("#previewLabel").textContent = lessonDateISO(lesson) === localISODate(0) ? ui().previewToday : ui().previewPast;
  $("#previewTitle").textContent = textFor(lesson.title);
  $("#previewSummary").textContent = textFor(lesson.summary || lesson.tag);
  preview.style.left = `${rect.right + 12}px`;
  preview.style.top = `${Math.max(96, Math.min(rect.top, window.innerHeight - 150))}px`;
  preview.classList.add("show");
  preview.setAttribute("aria-hidden", "false");
}

function hideDayPreview() {
  $("#dayPreview").classList.remove("show");
  $("#dayPreview").setAttribute("aria-hidden", "true");
}

function localISODate(dayOffset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calendarFromISO(iso) {
  const [, month, day] = iso.split("-");
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return { day: String(Number(day)), month: monthNames[Number(month) - 1] || "DAY" };
}

function lessonDateISO(lesson, fallbackIndex = 0) {
  if (lesson?.dateISO) return lesson.dateISO;
  if (!lesson?.calendar) return "";
  const monthMap = { JAN:"01", FEB:"02", MAR:"03", APR:"04", MAY:"05", JUN:"06", JUL:"07", AUG:"08", SEP:"09", OCT:"10", NOV:"11", DEC:"12" };
  return `2026-${monthMap[lesson.calendar.month] || "01"}-${String(lesson.calendar.day || fallbackIndex + 1).padStart(2, "0")}`;
}

function orderedLessonKeys() {
  return (window.LESSON_ORDER || Object.keys(window.LESSONS))
    .filter(key => window.LESSONS[key])
    .sort((a, b) => lessonDateISO(window.LESSONS[a]).localeCompare(lessonDateISO(window.LESSONS[b])));
}

function lessonKeyByISO(iso) {
  return orderedLessonKeys().find(key => lessonDateISO(window.LESSONS[key]) === iso);
}

function initializeCurrentLesson() {
  const todayKey = lessonKeyByISO(localISODate(0));
  if (todayKey) {
    state.lesson = todayKey;
    return;
  }
  const today = localISODate(0);
  const keys = orderedLessonKeys();
  state.lesson = [...keys].reverse().find(key => lessonDateISO(window.LESSONS[key]) <= today) || keys[0] || state.lesson;
}

function relativeDayLabel(offset) {
  if (offset === -1) return ui().yesterday;
  if (offset === 1) return ui().tomorrow;
  return ui().today;
}

function renderDayRail() {
  const days = [-1, 0, 1].map(offset => {
    const iso = localISODate(offset);
    const key = lessonKeyByISO(iso);
    return { offset, iso, key, lesson: key ? window.LESSONS[key] : null, calendar: key ? window.LESSONS[key].calendar : calendarFromISO(iso) };
  });
  $("#dayRail").innerHTML = days.map(({ offset, iso, key, lesson, calendar }) => {
    const label = relativeDayLabel(offset);
    const tag = lesson ? textFor(lesson.tag) : ui().coming;
    return `<button class="day-card ${key === state.lesson ? "active" : ""} ${lesson ? "" : "empty"}" ${lesson ? `data-lesson="${key}"` : "disabled"} data-day-iso="${iso}">
      <span class="day-dot"></span>
      <span class="day-date"><b>${calendar.day}</b><small>${calendar.month}</small></span>
      <span class="day-copy"><b>${label}</b><small>${escapeHTML(tag)}</small></span>
    </button>`;
  }).join("");
  document.querySelectorAll(".day-card[data-lesson]").forEach(button => {
    button.addEventListener("mouseenter", () => showDayPreview(button, button.dataset.lesson));
    button.addEventListener("mouseleave", hideDayPreview);
    button.addEventListener("focus", () => showDayPreview(button, button.dataset.lesson));
    button.addEventListener("blur", hideDayPreview);
  });
  renderCalendarMenu();
}

function renderCalendarMenu(order = orderedLessonKeys()) {
  const menu = $("#calendarMenu");
  if (!menu) return;
  const lessons = order.map((key, index) => {
    const lesson = window.LESSONS[key];
    const calendar = lesson.calendar || { day: String(index + 1).padStart(2, "0"), month: "DAY" };
    return { key, lesson, calendar, dayNumber: Number(calendar.day) };
  });
  const month = lessons[0]?.calendar.month || "JUN";
  const lessonByDay = new Map(lessons.map(item => [item.dayNumber, item]));
  menu.innerHTML = `
    <div class="calendar-mini-head">
      <span class="calendar-rings" aria-hidden="true"><i></i><i></i></span>
      <b>${month} 2026</b>
      <small>${ui().dailyTitle}</small>
    </div>
    <div class="calendar-week-row"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>
    <div class="calendar-day-grid">
      ${Array.from({ length: 30 }, (_, dayIndex) => {
        const day = dayIndex + 1;
        const found = lessonByDay.get(day);
        const title = found ? textFor(found.lesson.tag) : "Soon";
        const attrs = found ? `data-calendar-lesson="${found.key}"` : "";
        return `<button class="calendar-day ${found ? "has-lesson" : "empty"} ${found?.key === state.lesson ? "active" : ""}" ${attrs}>
          <b>${day}</b>
          <small>${escapeHTML(title)}</small>
        </button>`;
      }).join("")}
    </div>
  `;
  menu.classList.toggle("open", state.calendarOpen);
  menu.setAttribute("aria-hidden", String(!state.calendarOpen));
  $("#openCalendar")?.setAttribute("aria-expanded", String(state.calendarOpen));
}

function renderLesson() {
  if (!window.LESSONS[state.lesson]) initializeCurrentLesson();
  const lesson = window.LESSONS[state.lesson];
  if (lesson.phrases && state.phraseIndex >= lesson.phrases.length) state.phraseIndex = 0;
  $("#lessonDate").textContent = textFor(lesson.date);
  $("#lessonTitle").textContent = textFor(lesson.title);
  $("#lessonSwitch").innerHTML = `<span>${lessonDateISO(lesson) === localISODate(0) ? ui().todayTheme : ui().reviewTheme}</span><b>${textFor(lesson.tag)}</b>`;
  if (lesson.quiz) {
    $("#phraseList").innerHTML = renderQuizLesson(lesson);
  } else {
    renderPhrases(lesson.phrases);
  }
  renderPinyin(lesson.pinyin);
  if (lesson.quiz) {
    $("#sideToolbox").innerHTML = `<div class="side-empty">${escapeHTML(textFor(lesson.summary))}</div>`;
  } else {
    renderSideToolbox();
  }
  renderDayRail();
  requestAnimationFrame(() => {
    const dayRail = $("#dayRail");
    const activeDay = document.querySelector(`.day-card[data-lesson="${state.lesson}"]`);
    if (!dayRail || !activeDay) return;

    // 只横向露出当前日期，不能让手机页面因为重绘跳回顶部。
    const left = activeDay.offsetLeft;
    const right = left + activeDay.offsetWidth;
    const visibleLeft = dayRail.scrollLeft;
    const visibleRight = visibleLeft + dayRail.clientWidth;
    if (left < visibleLeft || right > visibleRight) {
      dayRail.scrollTo({
        left: Math.max(0, left - (dayRail.clientWidth - activeDay.offsetWidth) / 2),
        behavior: "smooth"
      });
    }
  });
}
