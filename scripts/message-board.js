/* “我想学”留言板。 */
const WISH_STORAGE_KEY = "youyan-student-wishes";
const HIDDEN_WISH_STORAGE_KEY = "youyan-hidden-example-wishes";
const WISH_DELETE_PASSWORD = "no";
const WISH_TABLE_NAME = "wishes";

let remoteWishes = null;
let wishRemoteLoading = false;
let wishRemoteError = "";
let wishRealtimeStarted = false;

function getSupabaseConfig() {
  const config = window.SUPABASE_CONFIG || {};
  return {
    url: String(config.url || "").trim(),
    anonKey: String(config.anonKey || "").trim()
  };
}

function isSupabaseConfigured() {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(url && anonKey && window.supabase?.createClient);
}

function getWishClient() {
  if (!isSupabaseConfigured()) return null;
  if (!window.youyanWishClient) {
    const { url, anonKey } = getSupabaseConfig();
    window.youyanWishClient = window.supabase.createClient(url, anonKey);
  }
  return window.youyanWishClient;
}

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

function normalizeRemoteWish(row) {
  return {
    id: row.id,
    text: row.text,
    translationZh: row.translation_zh || row.translationZh || ui().autoZh,
    language: row.language || "student",
    picked: Boolean(row.picked),
    teachDate: row.teach_date || row.teachDate || "",
    example: Boolean(row.example),
    source: "remote"
  };
}

function localWishLanguage() {
  if (state.language === "en") return "English";
  if (state.language === "ja") return "日本語";
  if (state.language === "ko") return "한국어";
  return "中文";
}

function getExampleWishes() {
  const hiddenIds = new Set(getHiddenWishIds());
  return (window.WISHES || []).map((wish, index) => ({
    ...wish,
    id: wish.id || `example-${index}`,
    source: "example"
  })).filter(wish => !hiddenIds.has(wish.id));
}

function getAllWishes() {
  if (isSupabaseConfigured()) return remoteWishes || [];

  const local = getLocalWishes().map((wish, index) => ({
    ...wish,
    id: wish.id || `local-${index}`,
    source: "local"
  }));
  return [...getExampleWishes(), ...local];
}

async function loadRemoteWishes() {
  const client = getWishClient();
  if (!client) return;

  wishRemoteLoading = true;
  wishRemoteError = "";
  renderWishes();

  const { data, error } = await client
    .from(WISH_TABLE_NAME)
    .select("id,text,translation_zh,language,picked,teach_date,example,created_at")
    .order("created_at", { ascending: false });

  wishRemoteLoading = false;
  if (error) {
    wishRemoteError = error.message || "sync failed";
    remoteWishes = [];
  } else {
    remoteWishes = (data || []).map(normalizeRemoteWish);
  }
  renderWishes();
}

function startWishRealtime() {
  const client = getWishClient();
  if (!client || wishRealtimeStarted) return;
  wishRealtimeStarted = true;
  client
    .channel("youyan-wishes")
    .on("postgres_changes", { event: "*", schema: "public", table: WISH_TABLE_NAME }, () => loadRemoteWishes())
    .subscribe();
}

async function addWish(text) {
  const client = getWishClient();
  if (client) {
    const { error } = await client.from(WISH_TABLE_NAME).insert({
      text,
      translation_zh: "我想学这句话的中文说法。",
      language: localWishLanguage(),
      picked: false,
      example: false
    });
    if (error) throw error;
    await loadRemoteWishes();
    return;
  }

  const wishes = getLocalWishes();
  wishes.unshift({
    id: `local-${Date.now()}`,
    text,
    translationZh: "我想学这句话的中文说法。",
    language: localWishLanguage(),
    picked: false,
    createdAt: new Date().toISOString()
  });
  saveLocalWishes(wishes);
  renderWishes();
}

function deleteWish(source, id) {
  if (source === "remote") {
    showToast("请在 Supabase 后台删除这条留言。");
    return;
  }

  const password = window.prompt(ui().deletePasswordPrompt);
  if (password === null) return;
  if (password !== WISH_DELETE_PASSWORD) {
    showToast(ui().deletePasswordWrong);
    return;
  }
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

function wishStatusHTML() {
  if (wishRemoteLoading) return `<p class="wish-empty">正在同步留言……</p>`;
  if (wishRemoteError) return `<p class="wish-empty">留言同步失败，请稍后刷新。<br><small>${escapeHTML(wishRemoteError)}</small></p>`;
  return `<p class="wish-empty">${ui().wishEmpty}</p>`;
}

function renderWishes() {
  const wishes = getAllWishes();
  $("#wishList").innerHTML = wishes.length ? wishes.map((wish) => `
    <article class="wish-note ${wish.picked ? "picked" : ""}">
      <div class="wish-item-main">
        ${wish.example ? `<span class="example-badge">${ui().example}</span>` : ""}
        <div class="wish-copy">
          <p>${escapeHTML(wish.text)}</p>
          <small>${escapeHTML(wish.translationZh || ui().autoZh)}</small>
          <div class="wish-meta">
            <span>${escapeHTML(wish.language || "student")}</span>
            ${wish.picked ? `<b>✓ ${ui().wishPicked}${wish.teachDate ? ` · ${ui().wishTeach} ${escapeHTML(wish.teachDate)}` : ""}</b>` : ""}
          </div>
        </div>
      </div>
      ${wish.source === "remote" ? "" : `<button class="delete-wish" data-delete-wish="${wish.id}" data-wish-source="${wish.source}" aria-label="${ui().deleteWish}">🗑</button>`}
    </article>
  `).join("") : wishStatusHTML();
}

function setWishModal(open) {
  $("#wishModal").classList.toggle("open", open);
  $("#wishBackdrop").classList.toggle("open", open);
  $("#wishModal").setAttribute("aria-hidden", String(!open));
  if (open) {
    if (isSupabaseConfigured() && remoteWishes === null && !wishRemoteLoading) loadRemoteWishes();
    requestAnimationFrame(() => $("#wishInput").focus());
  }
}
