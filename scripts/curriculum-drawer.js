/* 拼音系统学习抽屉。 */
function renderCurriculum() {
  $("#curriculumList").innerHTML = window.CURRICULUM.map((item, index) => `
    <button class="curriculum-item" data-index="${index}">
      <span class="number">${String(index + 1).padStart(2, "0")}</span>
      <span class="curriculum-name">${textFor(item.title)}${item.hot ? `<i>${ui().hot}</i>` : ""}</span>
      <span class="arrow">→</span>
    </button>
  `).join("");
}

function setDrawer(open) {
  $("#curriculumDrawer").classList.toggle("open", open);
  $("#drawerBackdrop").classList.toggle("open", open);
  $("#curriculumDrawer").setAttribute("aria-hidden", String(!open));
}
