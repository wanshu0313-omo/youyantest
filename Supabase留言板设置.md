# Supabase 留言板设置

这个网站的留言板已经支持 Supabase。  
配置好以后，学生可以留言、所有人可以看到最新留言；你在 Supabase 后台删除、打勾、填写讲解日期。

## 1. 建 Supabase 项目

进入 Supabase，创建一个新项目。免费套餐一般足够这个小网站使用。

## 2. 建留言表

在 Supabase 左侧打开 SQL Editor，运行下面这段：

```sql
create table if not exists public.wishes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  text text not null check (char_length(text) <= 90),
  translation_zh text not null default '我想学这句话的中文说法。',
  language text not null default 'student',
  picked boolean not null default false,
  teach_date text,
  example boolean not null default false
);

alter table public.wishes enable row level security;

create policy "Anyone can read wishes"
on public.wishes
for select
to anon
using (true);

create policy "Anyone can add wishes"
on public.wishes
for insert
to anon
with check (
  char_length(text) > 0
  and char_length(text) <= 90
  and picked = false
  and example = false
  and teach_date is null
);
```

## 3. 填网站配置

打开这个文件：

`data/supabase-config.js`

把里面的两个空值换成 Supabase 项目里的：

```js
window.SUPABASE_CONFIG = {
  url: "你的 Project URL",
  anonKey: "你的 anon public key"
};
```

这两个位置在 Supabase：

- Project Settings → API → Project URL
- Project Settings → API → Project API keys → anon public

## 4. 开启实时刷新

如果希望别人留言后，你和其他学生打开着网页也能自动看到更新：

进入 Supabase 后台，打开 Database → Publications → `supabase_realtime`，把 `wishes` 表加入进去。

如果暂时不打开这个开关，也没关系；网页打开留言板时仍然会读取最新留言。

## 5. 你怎么管理留言

进入 Supabase 后台，打开 Table Editor → `wishes`。

你可以直接修改这些字段：

- `translation_zh`：自动生成的小字汉语翻译，之后可以人工改得更准确
- `picked`：勾选后，网页上会显示“已选中”
- `teach_date`：填写讲解日期，比如 `6月30日`
- 删除某条留言：直接在 Supabase 表格里删除

## 6. 上传到 GitHub 时需要替换哪些文件

这次新增/修改了这些文件：

- `index.html`
- `data/supabase-config.js`
- `scripts/message-board.js`
- `scripts/app.js`
- `scripts/language.js`

注意：`data/supabase-config.js` 里的 anon public key 可以放在网页前端，它本来就是公开用的。真正的管理权限不要放进网页里。
