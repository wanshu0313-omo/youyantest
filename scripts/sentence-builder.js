/* 句子下划线下拉菜单与词语选择。 */
function renderRuby(text, pinyin, className = "") {
  return `<ruby class="${className}"><rb>${escapeHTML(text)}</rb><rt>${escapeHTML(pinyin || "")}</rt></ruby>`;
}

function optionDisplayText(option) {
  return textFor(option.label || option.text || "");
}

function renderOptionRuby(option, className = "") {
  return renderRuby(optionDisplayText(option), option.pinyin, className);
}

function renderFixedSegment(text) {
  const map = {
    "大家好！我是在": [
      { text: "大家", pinyin: "Dàjiā", audio: "大家" },
      { text: "好！", pinyin: "hǎo" },
      { text: "我", pinyin: "wǒ", audio: "我" },
      { text: "是", pinyin: "shì" },
      { text: "在", pinyin: "zài" }
    ],
    "大家好！我是": [
      { text: "大家", pinyin: "Dàjiā", audio: "大家" },
      { text: "好！", pinyin: "hǎo" },
      { text: "我", pinyin: "wǒ", audio: "我" },
      { text: "是", pinyin: "shì" }
    ],
    "我叫": [
      { text: "我", pinyin: "Wǒ" },
      { text: "叫", pinyin: "jiào" }
    ],
    "来自": [
      { text: "来", pinyin: "Lái" },
      { text: "自", pinyin: "zì" }
    ],
    "的": [
      { text: "的", pinyin: "de" }
    ],
    "。": [
      { text: "。" }
    ]
  };
  return (map[text] || [{ text }]).map(unit => {
    if (!unit.pinyin) return `<span class="punctuation">${escapeHTML(unit.text)}</span>`;
    const label = unit.audio || unit.text.replace(/[！。，,.!]/g, "");
    return `<button class="fixed-token" data-audio="${audioPathFor(label)}" data-label="${escapeHTML(unit.text)}">${renderRuby(unit.text, unit.pinyin, "sentence-ruby")}</button>`;
  }).join("");
}

function builderKey(index, id) {
  return `${state.lesson}-${index}-${id}`;
}

function builderSlotKey(index, item, slot) {
  return `${builderKey(index, item.id)}-${slot}`;
}

function builderState(index, item) {
  const key = builderKey(index, item.id);
  if (!state.builders[key]) state.builders[key] = {};
  return state.builders[key];
}

function optionGroupFor(item, slot) {
  return item.optionGroups.find(group => group.slot === slot);
}

function addBuilderOption(index, item, option, slot) {
  const build = builderState(index, item);
  const group = optionGroupFor(item, slot);
  const selected = build[slot] || [];
  const maxSelect = group?.maxSelect || 1;
  if (selected.some(existing => existing.text === option.text)) return;
  if (maxSelect === 1) {
    build[slot] = [option];
  } else if (selected.length < maxSelect) {
    build[slot] = [...selected, option];
  } else {
    return;
  }
  state.phraseIndex = index;
  state.openSlot = null;
  renderLesson();
  if (!option.skip) playAudio(option.audio || audioPathFor(option.text), option.text);
}

function cleanAudioText(text) {
  return String(text).replace(/[^\p{Script=Han}A-Za-z0-9·'’ -]/gu, "").trim();
}

function selectedText(index, item, slot) {
  return (builderState(index, item)[slot] || []).map(option => cleanAudioText(option.text)).join("");
}

function hasAnyBuilderSelection(index, item) {
  const build = builderState(index, item);
  return Object.values(build).some(value => Array.isArray(value) && value.length > 0);
}

function builtSentenceText(index, item) {
  if (item.id === "work") {
    const workplace = selectedText(index, item, "workplace") || "谏早商高";
    const job = selectedText(index, item, "job") || "英语教师";
    return `大家好！我是${workplace}的${job}`;
  }
  if (item.id === "name") {
    const build = builderState(index, item);
    const surname = Array.isArray(build.surname) ? selectedText(index, item, "surname") : "";
    const givenName = Array.isArray(build.givenName) ? selectedText(index, item, "givenName") : "";
    return `我叫${surname}${givenName}`;
  }
  if (item.id === "country") {
    const home = selectedText(index, item, "home") || "日本";
    return `来自${home}`;
  }
  return cleanAudioText(item.hanzi);
}

function builtSentenceAudioPath(index, item) {
  return `audio/words/6.25Self-introduction/${builtSentenceText(index, item)}.m4a`;
}

function builtSentenceAudioPaths(index, item) {
  const sentence = builtSentenceText(index, item);
  return [
    `audio/words/6.25Self-introduction/${sentence}.m4a`,
    `audio/words/6.25Self-introduction/${sentence}。.m4a`
  ];
}

function removeBuilderToken(index, item, slot, tokenIndex) {
  const build = builderState(index, item);
  build[slot] = (build[slot] || []).filter((_, index) => index !== tokenIndex);
  renderLesson();
}

function renderBuilderSlot(index, item, slot, hint, example) {
  const selected = builderState(index, item)[slot] || [];
  const group = optionGroupFor(item, slot);
  const isFull = group?.maxSelect && selected.length >= group.maxSelect;
  const slotKey = builderSlotKey(index, item, slot);
  const isOpen = state.openSlot === slotKey;
  const optionList = group ? `<div class="slot-menu">
    ${group.options.map(option => {
      const isSelected = selected.some(existing => existing.text === option.text);
      const disabled = isSelected || (isFull && group.maxSelect !== 1);
      return `<button class="slot-option ${isSelected ? "selected" : ""}" ${disabled ? "disabled" : ""} data-builder-option="${index}" data-slot="${slot}" data-option="${encodeURIComponent(JSON.stringify(option))}">
        ${renderOptionRuby(option)}
        ${option.translation ? `<small>${escapeHTML(textFor(option.translation))}</small>` : ""}
      </button>`;
    }).join("")}
  </div>` : "";
  const content = selected.length ? selected.map(option => `
    <button class="built-token fly-in ${option.skip ? "skip-token" : ""}" ${option.skip ? "" : `data-audio="${escapeHTML(option.audio || audioPathFor(option.text))}"`} data-label="${escapeHTML(cleanAudioText(option.text) || optionDisplayText(option))}">
      ${renderOptionRuby(option)}
    </button>`).join("") : `
    <span class="slot-label">${escapeHTML(textFor(hint) || "___")}</span>`;
  return `<span class="slot-wrap ${isOpen ? "open" : ""}">
    <span class="builder-slot ${selected.length ? "filled" : "empty"}">
      ${content}
    </span>
    <button class="slot-caret" type="button" aria-label="${escapeHTML(ui().chooseWords)}" data-slot-toggle="${slotKey}" data-phrase-index="${index}">⌄</button>
    <span class="slot-line"></span>
    ${optionList}
  </span>`;
}

function renderBuilderSentence(item, index) {
  return `<div class="builder-sentence">${item.segments.map(segment => {
    if (typeof segment === "string") {
      return renderFixedSegment(segment);
    }
    return renderBuilderSlot(index, item, segment.slot, segment.hint, segment.example);
  }).join("")}</div>`;
}

function renderBuilderOptions(item, index) {
  if (!item || item.type !== "builder") return "";
  return `<div class="builder-options side-content">
    <div class="builder-actions">
      <span>${ui().chooseWords}</span>
    </div>
    ${item.optionGroups.map(group => `
      <div class="option-group">
        <div class="option-title">${textFor(group.label)}${group.maxSelect ? `<small>${(builderState(index, item)[group.slot] || []).length}/${group.maxSelect}</small>` : ""}</div>
        <div class="word-bank">${group.options.map(option => `
          ${(() => {
            const selected = builderState(index, item)[group.slot] || [];
            const isSelected = selected.some(existing => existing.text === option.text && existing.skip === option.skip);
            const isFull = group.maxSelect && selected.length >= group.maxSelect;
            const disabled = isSelected || (isFull && group.maxSelect !== 1);
            return `<button class="word-chip ${isSelected ? "selected" : ""}" ${disabled ? "disabled" : ""} data-builder-option="${index}" data-slot="${group.slot}" data-option="${encodeURIComponent(JSON.stringify(option))}">`;
          })()}
            ${renderOptionRuby(option)}
            ${option.translation ? `<small>${escapeHTML(textFor(option.translation))}</small>` : ""}
          </button>
        `).join("")}</div>
        ${group.note ? `<p class="option-note">${textFor(group.note)}</p>` : ""}
      </div>
    `).join("")}
  </div>`;
}

function renderSideToolbox() {
  const lesson = window.LESSONS[state.lesson];
  const item = lesson.phrases[state.phraseIndex];
  if (item?.type !== "builder") {
    $("#sideToolbox").innerHTML = `<div class="side-empty">${ui().chooseWords}</div>`;
    return;
  }
  const arrow = `<div class="tool-arrow"><span></span>➜</div>`;
  $("#sideToolbox").innerHTML = `${arrow}${renderBuilderOptions(item, state.phraseIndex)}`;
}
