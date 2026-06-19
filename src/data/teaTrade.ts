export interface TeaTrade {
  id: string;
  teaName: string;
  origin: string;
  destination: string;
  priceEra: string;
  tradeVolume: string;
  description: string;
  image: string;
  iconColor: string;
}

export const teaTrades: TeaTrade[] = [
  {
    id: "kangzhuan",
    teaName: "康砖茶",
    origin: "四川雅安 · 名山",
    destination: "康定 · 理塘 · 巴塘",
    priceEra: "清末每引（100斤）价银 3.5 两",
    tradeVolume: "清代年销 8 万引，约 800 万斤",
    description:
      "康砖是川边黑茶的代表，蒸压成型后用篾条包裹成方砖形，每块重约五斤。制作须经过杀青、揉捻、渥堆、蒸压四道工序，渥堆期长达三十天，故色泽深褐，久存不坏。康砖是康巴地区藏民熬制酥油茶的主要原料，其味厚重浓烈，与酥油、盐巴相融后产生独特的脂香。雅安南路边茶厂所产『金尖』与『康砖』至今仍是藏区首选。",
    image: "/images/tea-assortment.svg",
    iconColor: "#3E2723",
  },
  {
    id: "yaxi",
    teaName: "雅细茶",
    origin: "四川雅安 · 周公山",
    destination: "打箭炉（康定）锅庄",
    priceEra: "民国每包（10斤）价银 1.2 两",
    tradeVolume: "年销约 300 万斤",
    description:
      "雅细选用细嫩芽叶，条索紧细，色泽乌润，属南路边茶中的上品。因其用料精细、价格较高，专供藏区上层贵族与寺院活佛饮用。雅细不压砖，而是散茶装入牛皮包，每包十斤，运输时比砖茶更需防潮。据说十三世达赖喇嘛认定雅安周公山所产雅细为『茶中之冠』，每年遣人专程来雅置办。",
    image: "/images/tea-assortment.svg",
    iconColor: "#5D4037",
  },
  {
    id: "xiaoguan",
    teaName: "小沱茶",
    origin: "云南大理 · 下关",
    destination: "拉萨 · 日喀则 · 印度噶伦堡",
    priceEra: "清末每百沱价银 2.8 两",
    tradeVolume: "滇藏线年销约 2 万担",
    description:
      "下关沱茶创制于清光绪二十八年（1902年），由云南思茅一带的团茶演变而来。每沱重约二两，形如碗臼，便于马帮驮运时层层叠放。沱茶选料以临沧、普洱的晒青毛茶为主，经蒸压定型后白毫显露。由于马帮走滇藏线需经怒江、澜沧江大峡谷，气候湿热，沱茶紧压的形状反而使其品质更稳定，运输中自然陈化。",
    image: "/images/tea-assortment.svg",
    iconColor: "#6D4C41",
  },
  {
    id: "jincha",
    teaName: "紧茶（班禅沱）",
    origin: "云南佛海（勐海）",
    destination: "拉萨 · 青海 · 蒙古",
    priceEra: "民国每条（7沱）卢比 4 枚",
    tradeVolume: "年销约 500 吨",
    description:
      "紧茶是专为藏区设计的茶品，又名『班禅沱』，因九世班禅曲吉尼玛最爱饮用而得名。其形如蘑菇，底部有柄，七个紧茶串成一条，便于牦牛驮运。紧茶茶性温和，回甘明显，最适合雪域高寒气侯。由云南佛海茶厂（今大益集团前身）创制，经大理、丽江、中甸运往藏区，全程约四个月。",
    image: "/images/tea-assortment.svg",
    iconColor: "#4E342E",
  },
];

export const tradeFacts = [
  {
    title: "茶引制度",
    content:
      "宋熙宁七年（1074年）始行『茶马法』，官营垄断茶马交易。商人须向官府领取『茶引』（购销凭证），每引百斤，无引者以私茶论罪，发配三千里。",
  },
  {
    title: "比价换算",
    content:
      "明代鼎盛时期，上等马一匹换茶 120 斤（约 1 引 2 包），中等马换 70 斤，下等马换 50 斤。清中期后茶价上涨，一匹马仅换茶 50-80 斤。",
  },
  {
    title: "茶课税收",
    content:
      "雍正年间四川边茶年收茶课银 2.8 万两，占全省盐茶课税总额的 47%。光绪年间年收茶课达 12 万两，为川省财政第一大来源。",
  },
];
