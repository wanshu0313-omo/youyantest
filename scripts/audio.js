/* 音频播放与音频路径规则。 */
const audioPlayer = new Audio();
function playAudio(path, label) {
  playAudioCandidates([path], label);
}

function playAudioCandidates(paths, label) {
  const candidates = Array.isArray(paths) ? paths.filter(Boolean) : [paths];
  let index = 0;
  const tryNext = () => {
    if (index >= candidates.length) {
      showToast(`${ui().waiting}${label}`);
      return;
    }
    audioPlayer.pause();
    audioPlayer.onerror = () => {
      index += 1;
      tryNext();
    };
    audioPlayer.src = encodeURI(candidates[index]);
    audioPlayer.play().catch(() => {
      index += 1;
      tryNext();
    });
  };
  tryNext();
}

function soundButton(path, label, compact = false) {
  return `<button class="sound ${compact ? "compact" : ""}" data-audio="${path}" data-label="${label}" aria-label="${ui().play} ${label}">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v6h4l5 4V5L9 9H5zm12.5 3a4.5 4.5 0 0 0-2-3.87v7.74A4.5 4.5 0 0 0 17.5 12z"/></svg>
  </button>`;
}

function sentenceSoundButton(index, item, compact = true) {
  return `<button class="sound ${compact ? "compact" : ""}" data-sentence-audio="${index}" data-label="${item.hanzi}" aria-label="${ui().play} ${item.hanzi}">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v6h4l5 4V5L9 9H5zm12.5 3a4.5 4.5 0 0 0-2-3.87v7.74A4.5 4.5 0 0 0 17.5 12z"/></svg>
  </button>`;
}

function audioPathFor(text) {
  const audioName = String(text).replace(/[^\p{Script=Han}A-Za-z0-9·'’ -]/gu, "").trim();
  return `audio/words/6.25Self-introduction/${audioName}.m4a`;
}

function fixedAudioPathFor(text) {
  const clean = text.replace(/[！。，,.!]/g, "");
  if (clean === "大家好我是在") return "audio/words/6.25Self-introduction/大家好，我是谏早商高的英语教师.m4a";
  if (clean === "大家好我是") return "audio/words/6.25Self-introduction/大家好，我是谏早商高的英语教师.m4a";
  if (clean === "我叫") return "audio/words/6.25Self-introduction/我叫.m4a";
  if (clean === "来自") return "audio/words/6.25Self-introduction/来自.m4a";
  return audioPathFor(clean);
}
