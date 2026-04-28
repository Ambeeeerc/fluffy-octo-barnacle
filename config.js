// 网页配置文件
// 修改此文件后，需要刷新网页才能生效

const CONFIG = {
  // API 服务器地址
  // 如果网页和API在同一域名，使用相对路径 '/run'
  // 如果API在其他服务器，使用完整URL，例如：'http://192.168.1.100:8000/run'
  apiUrl: window.location.origin + '/run',

  // 网页标题
  title: '王思雨暧昧对象智能识别系统',

  // 页面描述
  description: '输入关键词或描述，快速识别是哪位暧昧对象',

  // 是否启用加载动画
  enableLoadingAnimation: true,

  // 请求超时时间（毫秒）
  timeout: 30000,

  // 快捷示例
  examples: [
    '国旗队的学长是谁？',
    '芜湖影像科的医生',
    'KTV里搂我亲我的人',
    '陈龙池是谁？',
    '汪超是哪个医院的？',
    '丁正在KTV做了什么？',
    '喜欢发长篇大论的学长',
    '安徽省胸科医院'
  ],

  // 已录入的对象信息
  objects: [
    {
      name: '陈龙池',
      title: '骨科学长',
      features: '国旗队成员，分手会打电话'
    },
    {
      name: '汪超',
      title: '长篇大论学长',
      features: '影像科医生，芜湖工作，长篇大论，帮你分析片子'
    },
    {
      name: '丁正',
      title: '杭州回来的朋友',
      features: '从杭州回来，KTV搂亲王思雨'
    }
  ],

  // 主题配置
  theme: {
    // 渐变背景色
    gradientStart: '#667eea',
    gradientEnd: '#764ba2',

    // 主色调
    primaryColor: '#667eea',

    // 错误提示颜色
    errorColor: '#fee',
    errorBorderColor: '#f44',
    errorTextColor: '#c33'
  }
};

// 导出配置（供网页使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
