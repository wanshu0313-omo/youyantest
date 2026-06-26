/* 全站最基础的状态与工具。 */
const $ = (selector) => document.querySelector(selector);
const state = { lesson: "today", language: "en", phraseIndex: 0, builders: {}, quiz: {}, openGrammar: null, openSlot: null, calendarOpen: false };
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}
