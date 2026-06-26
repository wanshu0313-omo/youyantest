/* 语法弹窗兼容函数；当前语法提示主要显示在句子卡片内。 */
function setGrammarModal(open, text = "") {
  $("#grammarModal").classList.toggle("open", open);
  $("#grammarBackdrop").classList.toggle("open", open);
  $("#grammarModal").setAttribute("aria-hidden", String(!open));
  if (open) {
    $("#grammarTitle").textContent = ui().grammar;
    $("#grammarEyebrow").textContent = "GRAMMAR TIP";
    $("#grammarText").textContent = text;
  }
}
