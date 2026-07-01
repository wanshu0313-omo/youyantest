# 给朋友的汉语网站

双击 `index.html` 就可以打开网站。以后放到 GitHub Pages 时，也从 `index.html` 进入。

## 现在的模块结构

- `data/`：只放内容数据，日常更新主要改这里。
  - `lesson-2026-06-23.js`：6月23日这一天的课程。
  - `lesson-2026-06-22.js`：6月22日这一天的课程。
  - `lesson-order.js`：左侧日期栏显示顺序。
  - `curriculum.js`：左下角“系统学拼音”的目录。
  - `wishes.js`：留言板里的后台示例、打勾、讲解日期。
- `scripts/`：网站功能模块。
  - `language.js`：右上角语言栏和界面翻译。
  - `sentence-builder.js`：句子下划线下拉选择。
  - `lesson-renderer.js`：每日课程、日期栏、pinyin tips。
  - `message-board.js`：留言板。
  - `curriculum-drawer.js`：拼音系统学习抽屉。
  - `audio.js`：音频播放和音频路径。
- `styles/`：页面样式模块。
  - `sidebar.css`：左侧日期栏、拼音系统按钮、留言按钮。
  - `sentence-builder.css`：主体句子、拼音、下拉框。
  - `message-board.css`：留言板弹窗。
  - `pinyin.css`：pinyin tips。
- `legacy/`：重构前的大文件备份，平时不用改。

## 每天新增课程

1. 在 `data/` 里复制一份旧课程文件，改名为类似 `lesson-2026-06-24.js`。
2. 打开新文件，把第一行附近的注册名改成一个新的 key，例如：

   ```js
   window.LESSONS.day20260624 = {
   ```

3. 修改这一天的标题、日期、句子、拼音 tips、词库等内容。
4. 打开 `data/lesson-order.js`，把新 key 放到最前面，例如：

   ```js
   window.LESSON_ORDER = ["day20260624", "today", "yesterday"];
   ```

5. 打开 `index.html`，在其他课程文件旁边加一行：

   ```html
   <script src="data/lesson-2026-06-24.js"></script>
   ```

## 修改以前某一天内容

直接找到对应日期文件改就可以。例如修改 6月23日，就只改：

`data/lesson-2026-06-23.js`

不需要读完整个网站代码。

## 音频放哪里

6月23日这课的句子和词语音频放在：

`audio/words/6.23Self-introduction/`

拼音音频放在：

`audio/pinyin/`

文件名和页面里写的 `audio` 路径对应后，播放按钮会自动生效。

## “我想学”留言板

学生点击左下角留言按钮后，会打开留言弹窗。她提交的句子会先保存在她自己的浏览器里。

你如果想预先放入留言、给某条留言打勾、注明哪天讲，只改：

`data/wishes.js`

字段说明：

- `text`：学生想学的句子
- `translationZh`：这条留言下面显示的小字汉语翻译
- `language`：学生使用的语言
- `picked: true`：显示为已选中，并打勾
- `teachDate`：注明哪一天讲
- `example: true`：标记为示例；英语显示 “eg”，其他语言显示“例”
