// 网页配置文件
// 修改此文件后，需要刷新网页才能生效
// ⚠️ 注意：此文件由 sync_data.py 自动生成，手动修改会被覆盖

const CONFIG = {
  "apiUrl": "http://localhost:5000/run",
  "title": "WSY暧昧对象智能识别系统",
  "description": "输入关键词或描述，快速识别是哪位暧昧对象",
  "enableLoadingAnimation": true,
  "timeout": 30000,
  "examples": [
    "国旗队的学长是谁？",
    "芜湖影像科的医生",
    "KTV里搂我亲我的人",
    "陈龙池是谁？",
    "汪超是哪个医院的？",
    "丁正在KTV做了什么？",
    "喜欢发长篇大论的学长",
    "安徽省胸科医院"
  ],
  "objects": [
    {
      "name": "陈龙池",
      "title": "骨科学长",
      "features": [
        "是国旗队成员",
        "在分手时会打电话沟通",
        "与WSY有过感情经历",
        "专业是骨科"
      ]
    },
    {
      "name": "汪超",
      "title": "长篇大论学长",
      "features": [
        "职业是影像科医生",
        "工作地点在芜湖",
        "WSY曾经追求但他没追上",
        "就职于安徽省胸科医院",
        "与WSY所在的医院有合作关系",
        "经常来帮忙分析片子并进行审核",
        "特点是喜欢发长篇大论的消息"
      ]
    },
    {
      "name": "丁正",
      "title": "杭州回来的朋友",
      "features": [
        "刚从杭州回来",
        "在KTV场合有亲密行为(搂和亲)",
        "名字叫丁正",
        "与WSY关系较为亲密",
        "[列出匹配到的关键词和特征]",
        "[其他相关信息或判断理由]"
      ]
    }
  ],
  "theme": {
    "gradientStart": "#667eea",
    "gradientEnd": "#764ba2",
    "primaryColor": "#667eea",
    "errorColor": "#fee",
    "errorBorderColor": "#f44",
    "errorTextColor": "#c33"
  }
};

// 导出配置（供网页使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}