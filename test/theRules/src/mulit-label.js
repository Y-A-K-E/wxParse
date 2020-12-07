const HtmlToJson = require('../../../components/wxParse/utils/html2json')

function parseMultiLabel(html) {
  const startTag = /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/
  // const match = html.match(startTag)
  const res = HtmlToJson.html2json(html)
  debugger
}


const html = '  <p>链接测试,尖括号(异常) --&gt; &lt;<a href=\"https:\/\/www.yge.me\/show\/45.html\" target=\"_blank\" rel=\"noopener\">AS:RD 16人同时游戏补丁【客户端\/服务端】<\/a>&gt;<\/p><br><br>'
const html1 = '<<a href=\"https:\/\/www.yge.me\/show\/45.html\" target=\"_blank\" rel=\"noopener\">AS:RD 16人同时游戏补丁【客户端\/服务端】<\/a>><br><br>'
const html2 = '<<p>测试用</p>'
parseMultiLabel(html)

module.exports = parseMultiLabel
