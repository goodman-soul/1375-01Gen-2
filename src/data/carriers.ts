export interface Carrier {
  id: string;
  name: string;
  nickname: string;
  origin: string;
  portrait: string;
  story: string;
  cargo: string;
  route: string;
  activeYears: string;
}

export const carriers: Carrier[] = [
  {
    id: "chen",
    name: "陈绍清",
    nickname: "茶背陈",
    origin: "四川雅安上里",
    portrait: "/images/portrait-male.svg",
    story:
      "陈绍清十五岁开始背茶，从雅安背到康定，每趟三百二十斤，来回一趟四十天。他的背垫换了二十多个，背心磨出了一寸厚的老茧。他常说：『茶背子背上背的不是茶，是一家人的命。』七十岁那年，他还能背两百斤走三十里山路。晚年他总坐在村口老榕树下，给孩子们讲折多山的风雪故事。",
    cargo: "康砖茶 16 包（320 斤）",
    route: "雅安 — 康定（480 里）",
    activeYears: "1912 — 1956",
  },
  {
    id: "wang",
    name: "王幺妹",
    nickname: "背茶女",
    origin: "四川天全两路",
    portrait: "/images/portrait-female.svg",
    story:
      "旧时代背夫多为男子，但王幺妹十八岁丧夫后毅然背起茶包。她每次背两百四十斤，比许多男子还重。翻越二郎山时遇暴风雪，同行的三名背夫倒在雪地里再也没有起来，是她把他们的茶包分别送到了康定。背夫们都敬重她，称她『幺妹姐』。她的一双脚走过的路，绕地球三圈有余。",
    cargo: "雅细茶 12 包（240 斤）",
    route: "天全 — 泸定 — 康定",
    activeYears: "1921 — 1949",
  },
  {
    id: "norbu",
    name: "罗布扎西",
    nickname: "藏背罗",
    origin: "西藏芒康盐井",
    portrait: "/images/portrait-tibetan.svg",
    story:
      "罗布扎西是少有的藏族背夫，他把巴塘进来的茶背到拉萨，全程两千余里。他精通汉、藏、纳西三种语言，常充当藏汉商人的翻译。有一年他在怒江山口遇到土匪，硬是用藏刀砍伤三人，保住了十五驮茶。他腰上永远系着一个牛皮袋，里面装着妻子亲手做的酥油糌粑——那是他路上唯一的念想。",
    cargo: "紧茶 20 坨（200 斤）",
    route: "芒康 — 林芝 — 拉萨",
    activeYears: "1908 — 1951",
  },
  {
    id: "li",
    name: "李老幺",
    nickname: "拐子李",
    origin: "四川荥经",
    portrait: "/images/portrait-male.svg",
    story:
      "李老幺四十岁时得了严重的风湿病，左腿弯曲变形，从此走路只能靠一根『丁』字形拐棍。可他依然坚持背茶，只是每次改为一百八十斤。他的拐棍底部包了三层铁皮，三十年里磨短了三寸，据说在折多山的石板路上磨出了七道深沟。他说：『人残腿不残，茶包压不垮一个想吃饭的人。』",
    cargo: "金尖茶 9 包（180 斤）",
    route: "荥经 — 天全 — 康定",
    activeYears: "1905 — 1942",
  },
];
