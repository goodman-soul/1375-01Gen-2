export interface Station {
  id: string;
  chineseName: string;
  altitude: number;
  location: { lat: number; lng: number };
  mapPosition: { x: number; y: number };
  story: string;
  photo: string;
  transportTip: string;
  era: string;
  isOnRoute: boolean;
  order: number;
}

export const stations: Station[] = [
  {
    id: "yaan",
    chineseName: "雅安·新店",
    altitude: 627,
    location: { lat: 29.98, lng: 103.0 },
    mapPosition: { x: 12, y: 72 },
    story:
      "雅安是川藏茶马古道的起点，素有『川西咽喉』之称。青衣江畔的新店镇，早在唐代便是边茶集散中心。每年清明前后，来自名山、邛崃的茶包在这里汇集，等待背夫们踏上漫长的西路。清乾隆年间，仅雅安一县年产边茶就达八万引，每引百斤，总计八百万斤之巨。",
    photo: "/images/tea-warehouse.svg",
    transportTip:
      "成都新南门汽车站每日有多班客车发往雅安（约1.5小时），自驾走成雅高速约140公里。新店古镇位于雅安市区西北约10公里处，可乘当地公交或打车前往。",
    era: "唐贞观年间 — 清末",
    isOnRoute: true,
    order: 1,
  },
  {
    id: "tianquan",
    chineseName: "天全·禁门关",
    altitude: 780,
    location: { lat: 30.07, lng: 102.83 },
    mapPosition: { x: 18, y: 66 },
    story:
      "禁门关是茶马古道从雅安入藏的第一道险关，两侧峭壁夹峙，天全河在谷底咆哮。史载这里曾设『茶马司』盘查茶引，无引者以私茶论罪。关隘上原有清代所建『镇西关楼』，楼上驻兵二十名，日夜盘查过往商旅。背夫过此，须卸下背篓侧身而过，人称『背夫难过禁门关』。",
    photo: "/images/mountain-pass.svg",
    transportTip:
      "雅安汽车站乘天全县班车（约40分钟），禁门关位于县城西3公里处。自驾沿G318西行过天全县即见。",
    era: "宋 — 民国",
    isOnRoute: true,
    order: 2,
  },
  {
    id: "luding",
    chineseName: "泸定·冷碛",
    altitude: 1321,
    location: { lat: 29.91, lng: 102.24 },
    mapPosition: { x: 28, y: 58 },
    story:
      "大渡河畔的冷碛镇，是茶马古道上重要的渡河枢纽。清康熙四十五年（1706年）泸定桥建成前，商旅多在此乘牛皮筏渡河，每筏载茶不过二十引。桥建成后，冷碛愈发繁华，街道两旁茶馆、马店、银楼多达百余家。以冷碛为界，自此以西，马帮渐多，背夫渐少；以东则全凭人力背负。",
    photo: "/images/river-bridge.svg",
    transportTip:
      "天全县沿G318西行翻越二郎山（约2小时）至泸定。冷碛镇在泸定桥以南约20公里，有乡村客车往返。自驾注意二郎山隧道前后的盘山路段。",
    era: "清康熙 — 民国",
    isOnRoute: true,
    order: 3,
  },
  {
    id: "kangding",
    chineseName: "康定·打箭炉",
    altitude: 2560,
    location: { lat: 30.05, lng: 101.96 },
    mapPosition: { x: 38, y: 50 },
    story:
      "打箭炉即今日康定，是茶马古道最重要的交易枢纽。藏商携马匹、麝香、虫草、酥油来此换茶，汉商则从四川运茶销往卫藏。最盛时炉城有锅庄四十八家，每家接待固定的藏区商帮，称『主客关系』。折多河穿城而过，河北为汉商街市，河南为藏商锅庄，河上的公主桥便是汉藏贸易的分界线。",
    photo: "/images/station-town.svg",
    transportTip:
      "成都新南门车站有直达康定客车（约7小时）；也可乘飞机至康定机场（海拔4238米，注意高反）再转车进城（约40公里）。城内可乘出租车或步行。",
    era: "元 — 今",
    isOnRoute: true,
    order: 4,
  },
  {
    id: "zheduo",
    chineseName: "折多山口",
    altitude: 4298,
    location: { lat: 30.05, lng: 101.8 },
    mapPosition: { x: 45, y: 44 },
    story:
      "折多山是汉藏地理与文化的分界线，有『康巴第一关』之称。山口常年积雪，垭口风大如吼。旧时代背夫翻此山，须在日出前启程，午后风雪骤起便再难通过。民谣云：『折多山，四千三，鸟飞不过鬼门关。』民国时期每年冻死在折多山上的背夫不下数十人。至今垭口仍可见累累玛尼堆，上面压着茶包碎片——那是当年背夫祭山神的遗留。",
    photo: "/images/caravan-snow.svg",
    transportTip:
      "康定出城沿G318西行约40公里即到折多山垭口，有大巴和顺风车可达。自驾冬季须备防滑链。翻山后即为新都桥，可继续西行或南下稻城。",
    era: "唐 — 今",
    isOnRoute: true,
    order: 5,
  },
  {
    id: "xinduqiao",
    chineseName: "新都桥·营官寨",
    altitude: 3300,
    location: { lat: 30.05, lng: 101.49 },
    mapPosition: { x: 54, y: 46 },
    story:
      "新都桥旧称营官寨，因清代设有粮务营游击衙门而得名。这里是茶马古道的重要分岔点：一路西北走道孚、炉霍去德格入藏；一路南下经理塘、巴塘过金沙江入藏。寨内原有高大的土筑围墙，四角设有碉楼，驻兵防守。每年入夏，川藏线上成千上万的驮马在此汇集换料，人称『万马归槽』。",
    photo: "/images/grassland-village.svg",
    transportTip:
      "折多山下山约20公里到新都桥镇，有康定方向班车经过。镇上有多家客栈和租车点，可租车去塔公草原（约30公里）或继续西行。",
    era: "清乾隆 — 今",
    isOnRoute: true,
    order: 6,
  },
  {
    id: "yajiang",
    chineseName: "雅江·河口",
    altitude: 2530,
    location: { lat: 30.03, lng: 101.0 },
    mapPosition: { x: 62, y: 50 },
    story:
      "雅江旧名河口，因位于雅砻江畔而得名。清代在此设有『里塘粮务府』，专司茶粮转运。雅砻江水流湍急，旧时尚无桥，商旅乘溜索渡江，将茶包一箱箱滑送对岸。光绪二十年（1894年）建铁索桥『雅江桥』，才结束了溜索渡茶的历史。江岸的石砌阶梯保存至今，当年每级台阶上都有背夫歇脚时磨出的圆窝。",
    photo: "/images/station-town.svg",
    transportTip:
      "新都桥沿G318西行约80公里（2小时）即到雅江。县城位于峡谷之中，住宿餐饮齐全。继续西行需翻越高尔寺山（海拔4412米）。",
    era: "清 — 民国",
    isOnRoute: true,
    order: 7,
  },
  {
    id: "litang",
    chineseName: "理塘·濯桑",
    altitude: 4014,
    location: { lat: 30.0, lng: 100.28 },
    mapPosition: { x: 74, y: 42 },
    story:
      "理塘是世界高城，也是茶马古道南路第一重镇。七世达赖喇嘛格桑嘉措出生于此，因此理塘又是藏传佛教圣地。城内的濯桑坝子原为茶马互市的大市场，每年藏历五月举行『赛马会』期间，蒙藏各族商人带着马牛羊与汉商交易茶布丝绸。鼎盛时期，理塘有茶号二十余家，每年转销茶叶达一万六千引，合一百六十万斤。",
    photo: "/images/grassland-village.svg",
    transportTip:
      "雅江沿G318西行约130公里（3.5小时）翻卡子拉山至理塘。海拔较高，建议行动缓慢并备抗高反药。有发往巴塘、稻城、乡城的班车。",
    era: "元 — 今",
    isOnRoute: true,
    order: 8,
  },
  {
    id: "batang",
    chineseName: "巴塘·茶雪",
    altitude: 2580,
    location: { lat: 30.0, lng: 99.1 },
    mapPosition: { x: 86, y: 48 },
    story:
      "巴塘位于川滇藏三省交界，是茶马古道南路出川的最后一站。『巴安』一名取『巴塘安康』之意。城西的竹巴笼渡口是金沙江入藏的重要口岸，清代设『巴塘粮台』统管全藏茶粮事务。巴塘所产苹果闻名康区，旧时藏商入藏前常在巴塘置办新鲜果品，与茶包一道驮往拉萨。宣统二年（1910年）川滇边务大臣赵尔丰曾在此改土归流，推动兴办茶务学堂。",
    photo: "/images/river-bridge.svg",
    transportTip:
      "理塘沿G318西行约170公里（4小时）至巴塘。竹巴笼金沙江大桥在城西北约50公里，过桥即进入西藏芒康境。巴塘气候较好，适宜休整补给。",
    era: "清康熙 — 今",
    isOnRoute: true,
    order: 9,
  },
  {
    id: "mangkang",
    chineseName: "芒康·盐井",
    altitude: 3870,
    location: { lat: 29.68, lng: 98.65 },
    mapPosition: { x: 92, y: 56 },
    story:
      "芒康是茶马古道入藏第一站，也是藏东唯一产盐地。澜沧江两岸的盐井古盐田已有1300年历史，白盐供食用，红盐多用于喂牲畜。背夫到此往往将部分茶叶换成盐巴，再往西走既卖茶又卖盐，获利更丰。纳西族和藏族居民在此共处，藏传佛教与东巴教并存，是古道上独特的文化交汇点。",
    photo: "/images/canyon-village.svg",
    transportTip:
      "巴塘过金沙江大桥后约100公里（3小时）到芒康。盐井古盐田在城南约110公里（2.5小时），可包车前往。从芒康可沿G318继续去拉萨（约1300公里）或南下云南德钦。",
    era: "唐 — 今",
    isOnRoute: true,
    order: 10,
  },
];
