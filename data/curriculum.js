/* 左下角“系统学拼音”的目录。 */ //这是整个文件的说明注释
window.CURRICULUM = [ //创建一个全局变量 CURRICULUM，它是一个数组，包含课程的各个部分
   //数组里每个{}对象表示一个课程部分，包含标题、是否热门、状态等信息
  { title: { en: "Tones", ja: "声調", ko: "성조", zh: "声调" }, hot: true, status: "可以学习" },//title 是多语言对象，根据用户语言显示对应文字
  //hot： true 表示这个课程部分是热门的，页面上可能会显示🔥或者特殊标记
  //status 控制这节课是否可以点击学习
  { title: "a o e i u ü", status: "可以学习" },//title 直接是字符串，不需要多语言，status 表示已解锁
  { title: "b p m f · d t n l",status:"可以学习" }, 
  { title: "g k h · j q x", status: "可以学习" },
  { title: "ai ei ui · ao ou iu · ie üe er", status: "可以学习" },
  { title: "zh ch sh r · z c s", hot: true, status: "可以学习" },
  { title: "an en in un ün · ang eng ing ong", hot: true, status: "可以学习" }
];
