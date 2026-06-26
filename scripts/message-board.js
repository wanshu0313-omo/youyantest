/* “我想学”留言板。 */
const WISH_STORAGE_KEY = "youyan-student-wishes";
const HIDDEN_WISH_STORAGE_KEY = "youyan-hidden-example-wishes";
function getLocalWishes() {
  try {
    return JSON.parse(localStorage.getItem(WISH_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveLocalWishes(wishes) {
  localStorage.setItem(WISH_STORAGE_KEY, JSON.stringify(wishes));
}

function getHiddenWishIds() {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_WISH_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveHiddenWishIds(ids) {
  localStorage.setItem(HIDDEN_WISH_STORAGE_KEY, JSON.stringify(ids));
}

function getAllWishes() {
  const hiddenIds = new Set(getHiddenWishIds());
  const examples = (window.WISHES || []).map((wish, index) => ({
    ...wish,
    id: wish.id || `example-${index}`,
    source: "example"
  })).filter(wish => !hiddenIds.has(wish.id));
  const local = getLocalWishes().map((wish, index) => ({
    ...wish,
    id: wish.id || `local-${index}`,
    source: "local"
  }));
  return [...examples, ...local];
}

function deleteWish(source, id) {
  if (source === "local") {
    saveLocalWishes(getLocalWishes().filter((wish, index) => (wish.id || `local-${index}`) !== id));
  } else {
    const hiddenIds = new Set(getHiddenWishIds());
    hiddenIds.add(id);
    saveHiddenWishIds([...hiddenIds]);
  }
  renderWishes();
  showToast(ui().wishDeleted);
}
function renderWishes() {
  const wishes = getAllWishes();
  $("#wishList").innerHTML = wishes.length ? wishes.map((wish, index) => `
    <article class="wish-note ${wish.picked ? "picked" : ""}">
      <div class="wish-item-main">
        ${wish.example ? `<span class="example-badge">${ui().example}</span>` : ""}
        <div class="wish-copy">
          <p>${escapeHTML(wish.text)}</p>
          <small>${escapeHTML(wish.translationZh || ui().autoZh)}</small>
          <div class="wish-meta">
            <span>${wish.language || "student"}</span>
            ${wish.picked ? `<b>✓ ${ui().wishPicked}${wish.teachDate ? ` · ${ui().wishTeach} ${wish.teachDate}` : ""}</b>` : ""}
          </div>
        </div>
      </div>
      <button class="delete-wish" data-delete-wish="${wish.id}" data-wish-source="${wish.source}" aria-label="${ui().deleteWish}">🗑</button>
    </article>
  `).join("") : `<p class="wish-empty">${ui().wishEmpty}</p>`;
}
function setWishModal(open) {
  $("#wishModal").classList.toggle("open", open);
  $("#wishBackdrop").classList.toggle("open", open);
  $("#wishModal").setAttribute("aria-hidden", String(!open));
  if (open) requestAnimationFrame(() => $("#wishInput").focus());
}
