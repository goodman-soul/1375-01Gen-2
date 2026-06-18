export interface GearItem {
  category: string;
  items: string[];
  essential: boolean;
}

export interface TransportTip {
  from: string;
  to: string;
  method: string;
  duration: string;
  note: string;
}

export interface HikingRoute {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  difficulty: "easy" | "moderate" | "hard";
  totalDistance: number;
  stations: string[];
  elevationProfile: number[];
  seasonRecommendation: { season: string; desc: string; rating: number }[];
  gearList: GearItem[];
  safetyNotes: string[];
  transportConnections: TransportTip[];
  description: string;
}

export const hikingRoutes: HikingRoute[] = [
  {
    id: "classic",
    name: "川藏南线经典徒步",
    subtitle: "雅安 — 康定 — 理塘 — 巴塘 — 芒康",
    duration: "12–16 天",
    difficulty: "moderate",
    totalDistance: 780,
    stations: [
      "yaan",
      "tianquan",
      "luding",
      "kangding",
      "zheduo",
      "xinduqiao",
      "yajiang",
      "litang",
      "batang",
      "mangkang",
    ],
    elevationProfile: [
      627, 780, 1321, 2560, 4298, 3300, 2530, 4014, 2580, 3870,
    ],
    seasonRecommendation: [
      {
        season: "春季（4–5月）",
        desc: "杜鹃花盛开，气温回升，折多山可能尚有残雪，需防春雪",
        rating: 4,
      },
      {
        season: "夏季（6–8月）",
        desc: "雨季，塌方与泥石流风险较高，但草原最美，避开 7 月下旬",
        rating: 3,
      },
      {
        season: "秋季（9–10月）",
        desc: "天气最稳定，秋色绚烂，杨树金黄，最佳徒步季节",
        rating: 5,
      },
      {
        season: "冬季（11–3月）",
        desc: "大雪封山，多数高海拔路段无法通行，不建议徒步",
        rating: 1,
      },
    ],
    gearList: [
      {
        category: "服装类",
        essential: true,
        items: [
          "冲锋衣裤（Gore-Tex 级别防水）",
          "羽绒服 600+ 蓬松度（备高海拔露营）",
          "速干内衣 3 套以上（避免棉质）",
          "抓绒衣或软壳（中间层保暖）",
          "防水登山鞋（Vibram 底，已磨合）",
          "遮阳帽 + 保暖抓绒帽",
          "防水手套 + 薄手套",
        ],
      },
      {
        category: "背包与睡眠",
        essential: true,
        items: [
          "60–70L 重装背包（带防雨罩）",
          "20L 随身小包（日走时使用）",
          "羽绒睡袋 -10℃ 舒适温标",
          "蛋槽防潮垫或充气垫",
          "帐篷（3–4 人分摊，2KG 以下轻量级）",
        ],
      },
      {
        category: "高反与医药",
        essential: true,
        items: [
          "乙酰唑胺（提前 2 天预防高反）",
          "布洛芬（缓解高原头痛）",
          "葡萄糖粉剂（快速补充能量）",
          "创可贴 + 水泡贴 + 弹性绷带",
          "碘伏 + 医用纱布 + 镊子",
          "肠胃药（诺氟沙星、蒙脱石散）",
          "感冒药 + 润喉片",
          "便携氧气罐 2–4 罐（应急用）",
        ],
      },
      {
        category: "其他装备",
        essential: false,
        items: [
          "头灯 + 备用电池",
          "登山杖 2 根（碳纤维护膝）",
          "防晒霜 SPF50+ + 润唇膏",
          "墨镜（防紫外线 100%）",
          "保温杯 1L（保温保冷）",
          "净水器或净水片",
          "移动电源 20000mAh 以上",
          "卫星定位器或离线地图（高德/奥维互动）",
        ],
      },
    ],
    safetyNotes: [
      "高海拔适应：每天上升不超过 1000 米，出现剧烈头痛、呕吐需立即下降 500 米以上。",
      "雨季注意：7–8 月为川西雨季，出发前查询 318 国道塌方路段通告，避免夜间行车。",
      "尊重风俗：转经筒顺时针转，玛尼堆不要踩踏，拍摄寺院内部需征得同意。",
      "水源安全：高原河流看似清澈，可能含寄生虫，必须煮沸或使用净水器。",
      "野生动物：理塘、巴塘一带偶有狼和黑熊出没，营地不要残留食物，结伴行走。",
      "信号覆盖：折多山以西多数山区无手机信号，出行前告知亲友行程。",
    ],
    transportConnections: [
      {
        from: "成都",
        to: "雅安",
        method: "汽车/自驾",
        duration: "1.5 小时",
        note: "成雅高速直达，班次密集，起点建议住雅安老城区。",
      },
      {
        from: "康定",
        to: "折多山口",
        method: "拼车/自驾",
        duration: "1 小时",
        note: "可从康定打车到垭口（约 100 元），徒步从垭口下山至新都桥。",
      },
      {
        from: "新都桥",
        to: "雅江",
        method: "乡村客车/拼车",
        duration: "2 小时",
        note: "高尔寺山隧道已通，客车无需翻垭口，徒步建议走老 318。",
      },
      {
        from: "理塘",
        to: "巴塘",
        method: "大巴/拼车",
        duration: "4 小时",
        note: "途经毛垭大草原、海子山姊妹湖，中途可下车徒步分段。",
      },
      {
        from: "巴塘",
        to: "芒康",
        method: "跨省班车",
        duration: "3.5 小时",
        note: "竹巴笼金沙江大桥为川藏界，过桥后进入西藏境内检查站。",
      },
    ],
    description:
      "这是最具代表性的茶马古道徒步路线，从雅安茶乡出发，沿国道 318 一路向西，翻越二郎山、折多山、卡子拉山等数座海拔四千米以上的山口，穿越大渡河、雅砻江、金沙江三大河谷，直抵藏东昌都地区。全程十处核心驿站，每一处都保存着丰富的历史痕迹——泸定铁索桥的摇晃、康定锅庄的余温、折多山口的经幡、理塘草原的风声。建议以『徒步+搭车结合』的方式，重点走天全–泸定（约 80 公里）、折多山–新都桥（约 40 公里）、理塘–巴塘（毛垭草原段约 60 公里）这三段最精华路段。",
  },
];
