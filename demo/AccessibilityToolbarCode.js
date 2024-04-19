document.writeln(`
<style>
.tip_box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000bf;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.tip {
  width: 85%;
}
.tip_title {
  font-family: PingFangSC-Medium;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 20px;
  display: inline-block;
}
.tip_content {
  font-family: PingFangSC-SNaNpxibold;
  font-weight: 600;
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 20px;
}
.close {
  width: 48px;
  line-height: 48px;
  background-color: #d9363e;
  margin: 0 auto;
  border-radius: 50%;
  color: #fff;
  font-size: 36px;
  text-align: center;
}
.accessibility {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: none;
}

#hanwebFontSize {
  max-height: 100vh;
}

#audioFile {
  display: none;
}

.showAccessibility {
  display: block !important;
}

.accessibility .accessibility-box {
  background: #ffffff;
  box-shadow: 0px -3px 7.5px 2px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accessibility .accessibility-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.accessibility .accessibility-btn span {
  font-family: PingFangSC-Regular;
  font-size: 19px;
  color: #333333;
  text-align: center;
  font-weight: 400;
}

.accessibility .colorMatching {
  padding: 16.5px 0 16px;
}

.accessibility .colorMatching img {
  width: 33px;
  height: 33px;
  margin-bottom: 8px;
}

.accessibility .fontIcon {
  padding: 15.5px 0 16px;
}

.accessibility .fontIcon img {
  width: 27.5px;
  height: 34px;
  margin-bottom: 8px;
}

.accessibility .readingScreen {
  padding: 20.18px 0 16px;
}

.accessibility .readingScreen img {
  width: 34px;
  height: 26px;
  margin-bottom: 11px;
}

.accessibility .signOut {
  padding: 16px 0 16px;
}

.accessibility .signOut img {
  width: 33px;
  height: 33px;
  margin-bottom: 8px;
}

/*  选中背景色 */
.accessibility .checkboxActive {
  background: #1990ff;
}

.accessibility .checkboxActive span {
  color: #ffffff;
}

.displayShowTools {
  display: flex !important;
}

/* 上方调节工具 */
#colorMatchingTools {
  display: none;
}

#readingTools {
  display: none;
}

#fontSizeTools {
  display: none;
}

.accessibility .accessibility-toolsBox {
  padding: 12px;
  text-align: center;
}

.accessibility-toolsBox .readingScreenTools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}

.accessibility-toolsBox .readingScreenBtn {
  flex: 1;
  padding: 12px 0;
  border: 1px solid rgba(136, 136, 136, 1);
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 19px;
  color: #333333;
  text-align: center;
  font-weight: 400;
  margin-right: 12px;
  background: #ffffff !important;
}

.accessibility-toolsBox .readingScreenBtn:last-child {
  margin-right: 0;
}

/*  选中背景色 */
.accessibility-toolsBox .checkboxActive {
  background: #1990ff !important;
  color: #ffffff !important;
}

.accessibility-toolsBox .default {
  border: 1px solid rgba(136, 136, 136, 1);
  color: #333333;
  background: #ffffff !important;
}

.accessibility-toolsBox .navyBlue {
  background: #003060 !important;
}

.accessibility-toolsBox .chocolate {
  background: #692627 !important;
}

.accessibility-toolsBox .black {
  background: #333333 !important;
}

.accessibility-toolsBox .forest {
  background: #009208 !important;
}

.accessibility-toolsBox .colorBorder {
  border: 2px solid yellow !important;
}

/* 默认选中状态 */
.hanwebcheckDefaultActive {
  /* // text-decoration: underline !important; //下划线
      // text-decoration-style: wavy !important; //波浪线
      // text-decoration-color: red !important; //下划线颜色
      // text-underline-offset: 5px !important; //距离文字距离 */
  outline: 1px solid #ed1941 !important;
}

.formOnlyRead {
  pointer-events: none;
}

.navyBlue {
  background: #003060 !important;
  color: #ffffff !important;
}

.chocolate {
  background: #692627 !important;
  color: #ffffff !important;
}

.black {
  background: #333333 !important;
  color: #ffffff !important;
}

.forest {
  background: #009208 !important;
  color: #ffffff !important;
}
.navyBlue-defaultMode {
  background: #00335c !important;
  color: #ffffff !important;
}
.navyBlue-blackMode {
  background: #000 !important;
  color: #ffffff !important;
}
.navyBlue-softMode {
  background: #34444f !important;
  color: #ffffff !important;
}
.navyBlue-hightlightMode {
  background: #001d67 !important;
  color: #ffffff !important;
}
.navyBlue-highcontrastMode {
  background: #000019 !important;
  color: #ffffff !important;
}
.navyBlue-greyMode {
  background: #01131b !important;
  color: #ffffff !important;
}

.chocolate-defaultMode {
  background: #622b2b !important;
  color: #ffffff !important;
}
.chocolate-blackMode {
  background: #000 !important;
  color: #ffffff !important;
}
.chocolate-softMode {
  background: #5b4540 !important;
  color: #ffffff !important;
}
.chocolate-hightlightMode {
  background: #700000 !important;
  color: #ffffff !important;
}
.chocolate-highcontrastMode {
  background: #210000 !important;
  color: #ffffff !important;
}
.chocolate-greyMode {
  background: #271917 !important;
  color: #ffffff !important;
}

.black-defaultMode {
  background: #000 !important;
  color: #ffffff !important;
}
.black-blackMode {
  background: #000 !important;
  color: #ffffff !important;
}
.black-softMode {
  background: #2b2826 !important;
  color: #ffffff !important;
}
.black-hightlightMode {
  background: #000 !important;
  color: #ffffff !important;
}
.black-highcontrastMode {
  background: #000 !important;
  color: #ffffff !important;
}
.black-greyMode {
  background: #53514d !important;
  color: #ffffff !important;
}

.forest-defaultMode {
  background: #248a22 !important;
  color: #ffffff !important;
}
.forest-blackMode {
  background: #002400 !important;
  color: #ffffff !important;
}
.forest-softMode {
  background: #4f7144 !important;
  color: #ffffff !important;
}
.forest-hightlightMode {
  background: #00ba01 !important;
  color: #ffffff !important;
}
.forest-highcontrastMode {
  background: #026000 !important;
  color: #ffffff !important;
}
.forest-greyMode {
  background: #43583d !important;
  color: #ffffff !important;
}

.pdb100 {
  overflow: auto;
  padding-bottom: 100px !important;
}
.pdb165 {
  padding-bottom: 190px !important;
}
.pdb360 {
  padding-bottom: 380px !important;
}
body #hanwebFontSize .normalFontSize {
  font-size: 18px !important;
}
body #hanwebFontSize .moreFontSize {
  font-size: 20.6px !important;
}
body #hanwebFontSize .mastFontSize {
  font-size: 23.4px !important;
}
</style>
<style id="ariabodyscale">
  .ariafontcontent{
    font-size:18px
  }
</style>
`);

// html

document.writeln(`

<div id="accessibility" class="accessibility">
<audio id="audioFile"></audio>
<div class="accessibility-toolsBox">
  <!-- 配色调节工具 -->
  <div id="colorMatchingTools" style="flex-direction: column">
    <div id="modeMatchingTools">
      <div style="text-align: left">模式</div>
      <div class="readingScreenTools">
        <div
          id="defaultMode"
          class="readingScreenBtn checkboxActive"
          onclick="changeMode('defaultMode')"
        >
          默认
        </div>
        <div
          id="blackMode"
          class="readingScreenBtn"
          onclick="changeMode('blackMode')"
        >
          黑暗
        </div>
        <div
          id="softMode"
          class="readingScreenBtn"
          onclick="changeMode('softMode')"
        >
          柔和
        </div>
      </div>
      <div class="readingScreenTools" style="margin-bottom: 12px">
        <div
          id="hightlightMode"
          class="readingScreenBtn"
          onclick="changeMode('hightlightMode')"
        >
          高亮
        </div>
        <div
          id="highcontrastMode"
          class="readingScreenBtn"
          onclick="changeMode('highcontrastMode')"
        >
          高对比
        </div>
        <div
          id="greyMode"
          class="readingScreenBtn"
          onclick="changeMode('greyMode')"
        >
          灰度
        </div>
      </div>
      <div style="text-align: left">配色</div>
    </div>
    <div class="readingScreenTools">
      <div
        id="default"
        class="readingScreenBtn default colorBorder"
        onclick="changeBackground('default')"
      >
        A
      </div>
      <div
        id="navyBlue"
        class="readingScreenBtn navyBlue"
        onclick="changeBackground('navyBlue')"
      >
        A
      </div>
      <div
        id="chocolate"
        class="readingScreenBtn chocolate"
        onclick="changeBackground('chocolate')"
      >
        A
      </div>
      <div
        id="black"
        class="readingScreenBtn black"
        onclick="changeBackground('black')"
      >
        A
      </div>
      <div
        id="forest"
        class="readingScreenBtn forest"
        onclick="changeBackground('forest')"
      >
        A
      </div>
    </div>
  </div>
  <!-- 读屏调节工具 -->
  <div id="readingTools" class="readingScreenTools">
    <div
      id="normalSpeakRate"
      class="readingScreenBtn checkboxActive"
      onclick="adjustSpeakRate(5,'normalSpeakRate')"
    >
      正常
    </div>
    <div
      id="quickenSpeakRate"
      class="readingScreenBtn"
      onclick="adjustSpeakRate(9,'quickenSpeakRate')"
    >
      加快
    </div>
    <div
      id="SlowSpeakRate"
      class="readingScreenBtn"
      onclick="adjustSpeakRate(1,'SlowSpeakRate')"
    >
      缓慢
    </div>
    <div class="readingScreenBtn" onclick="closeAccessibleReading()">
      关闭读屏
    </div>
  </div>
  <!-- 字体调节工具 -->
  <div id="fontSizeTools" class="readingScreenTools">
    <div
      id="normalFontSize"
      class="readingScreenBtn checkboxActive"
      onclick="adjustFontSize('normalFontSize')"
    >
      原始大小
    </div>
    <div
      id="moreFontSize"
      class="readingScreenBtn"
      onclick="adjustFontSize('moreFontSize')"
    >
      较大
    </div>
    <div
      id="mastFontSize"
      class="readingScreenBtn"
      onclick="adjustFontSize('mastFontSize')"
    >
      特大
    </div>
  </div>
</div>
<div class="accessibility-box">
  <div
    id="colorMatching"
    class="accessibility-btn colorMatching"
    onclick="showTools('colorMatchingTools','colorMatching')"
  >
    <img id="colorMatchingImg" src="../img/colorMatching.svg" />
    <span>配色</span>
  </div>
  <div
    id="readingScreen"
    class="accessibility-btn readingScreen"
    onclick="showTools('readingTools','readingScreen'); openAccessibleReading()"
  >
    <img
      id="readingScreenImg"
      src="../img/readingScreen.svg"
      alt="读屏"
    />
    <span>读屏</span>
  </div>
  <div
    id="fontIcon"
    class="accessibility-btn fontIcon"
    onclick="showTools('fontSizeTools','fontIcon')"
  >
    <img id="fontIconImg" src="../img/fontIcon.svg" alt="字体" />
    <span>字体</span>
  </div>
  <div class="accessibility-btn signOut" onclick="signOut()">
    <img src="../img/signOut.svg" alt="退出" />
    <span>退出</span>
  </div>
</div>
<div id="tip" class="tip_box" onclick="handleClose()">
  <div class="tip">
    <div class="tip_title">友情提示</div>
    <div class="tip_content">
      单击开始语音播报，双击访问链接内容；点击关闭按钮，退出语音服务。
    </div>
    <div class="close">X</div>
  </div>
</div>
</div>
`);

// js
var audio = document.getElementById("audioFile");
var ishowToolbar = localStorage.getItem("ishowToolbar") == "true" || false; //是否展示工具条
var prevShowToolsName = localStorage.getItem("prevShowToolsName") || ""; //上一个工具条显示名称
var domList = getChild(document); //获取页面所有元素
var prevDom = undefined; //上一个选择元素
var clickid = 1; //校验是否双击
var timer = null; //定时器
var isUsing = localStorage.getItem("isUsing") == "true" || false; //读屏是否已启用
var speakText;
var speakRate = localStorage.getItem("speakRate") || 5; //语速
var tipsText = ""; //前置语音提示文字
var htmlFontSizeRate = localStorage.getItem("htmlFontSizeRate") || 1; //原生html字体大小
var currentToolName = localStorage.getItem("currentToolName") || ""; //当前展示工具
var currentColor = localStorage.getItem("currentColor") || "default"; //当前配色
var currentMode = localStorage.getItem("currentMode") || "defaultMode"; //当前模式
var currentSpeakRate =
  localStorage.getItem("currentSpeakRate") || "normalSpeakRate"; //当前语速
var currentHtmlFontSize =
  localStorage.getItem("currentHtmlFontSize") || "normalFontSize"; //当前字体大小
window.onload = function initFunction() {
  //   判断展示
  // 底部工具条是否展示
  if (ishowToolbar) {
    document.getElementById("accessibility").classList.add("showAccessibility");
    document.getElementById("hanwebFontSize").classList.add("pdb100");
  } else {
    document.getElementById("hanwebFontSize").classList.remove("pdb100");
  }
  // 工具条选项是否展示
  if (currentToolName != "") {
    showTools(prevShowToolsName, currentToolName);
    document.getElementById("hanwebFontSize").classList.add("pdb165");
  } else {
    document.getElementById("hanwebFontSize").classList.remove("pdb165");
  }

  // 是否存在配色
  if (currentColor) changeBackground(currentColor, false);
  if (currentMode) changeMode(currentMode, false);
  // 判断是否已开启阅读
  if (isUsing) {
    // window.addEventListener("click", testDblClick);
    openEventListener();
    handleStop(document.title);
    //   window.addEventListener("click", getSectionText);
  }
  // 当前语速
  // console.log(currentSpeakRate);
  if (currentSpeakRate != "normalSpeakRate") {
    document
      .getElementById("normalSpeakRate")
      .classList.remove("checkboxActive");
    document.getElementById(currentSpeakRate).classList.add("checkboxActive");
  } else {
    document
      .getElementById("quickenSpeakRate")
      .classList.remove("checkboxActive");
    document.getElementById("SlowSpeakRate").classList.remove("checkboxActive");
    document.getElementById("normalSpeakRate").classList.add("checkboxActive");
  }
  // 是否需要调整字体大小
  if (currentHtmlFontSize != "normalFontSize") {
    document
      .getElementById("normalFontSize")
      .classList.remove("checkboxActive");
    document
      .getElementById(currentHtmlFontSize)
      .classList.add("checkboxActive");
    for (let i = 0; i < domList.length; i++) {
      domList[i].classList.remove("normalFontSize");
      domList[i].classList.remove("moreFontSize");
      domList[i].classList.remove("mastFontSize");
      // 设置字体
      domList[i].classList.add(currentHtmlFontSize);
    }
  } else {
    for (let i = 0; i < domList.length; i++) {
      domList[i].classList.add("normalFontSize");
    }
  }
};

// 开启监听事件
function openEventListener() {
  document
    .getElementById("hanwebFontSize")
    .addEventListener("click", testDblClick, false);
}
// 关闭监听事件
function closeEventListener() {
  document
    .getElementById("hanwebFontSize")
    .removeEventListener("click", testDblClick);
}

// 展示工具条
function showTools(idName, className) {
  if (event) event.stopPropagation();
  // 清除上一个工具条
  if (prevShowToolsName != "" && prevShowToolsName != idName) {
    document
      .getElementById(prevShowToolsName)
      .classList.remove("displayShowTools");
    document.getElementById(currentToolName).classList.remove("checkboxActive");
    document.getElementById(currentToolName + "Img").src =
      "../img/" + currentToolName + ".svg";
  }
  let classList = document.getElementById(idName).classList;
  if (classList.contains("displayShowTools")) {
    classList.remove("displayShowTools");
    document.getElementById("hanwebFontSize").classList.remove("pdb165");
    document.getElementById(className).classList.remove("checkboxActive");
  } else {
    classList.add("displayShowTools");
    document.getElementById("hanwebFontSize").classList.add("pdb165");
    if (className !== "colorMatching") {
      document.getElementById("hanwebFontSize").classList.remove("pdb360");
    } else {
      if (currentColor !== "default")
        document.getElementById("hanwebFontSize").classList.add("pdb360");
    }
    document.getElementById(className).classList.add("checkboxActive");
    prevShowToolsName = idName;
    localStorage.setItem("prevShowToolsName", prevShowToolsName);
    currentToolName = className;
    localStorage.setItem("currentToolName", currentToolName);
  }
  if (document.getElementById(className).classList.contains("checkboxActive")) {
    document.getElementById(className + "Img").src =
      "../img/" + className + "Ac.svg";
  } else {
    document.getElementById(className + "Img").src =
      "../img/" + className + ".svg";
  }
}
// 调节字体
function adjustFontSize(className, isSpeak = true) {
  if (event) event.stopPropagation();
  document
    .getElementById(currentHtmlFontSize)
    .classList.remove("checkboxActive");
  if (isSpeak) {
    let text;
    if (className == "normalFontSize") {
      text = "字体已恢复原始大小";
      htmlFontSizeRate = 1;
      localStorage.setItem("htmlFontSizeRate", 1);
    } else if (className == "moreFontSize") {
      text = "字体已调整为较大";
      htmlFontSizeRate = 1.2;
      localStorage.setItem("htmlFontSizeRate", 1.2);
    } else {
      text = "字体已调整为特大";
      htmlFontSizeRate = 1.5;
      localStorage.setItem("htmlFontSizeRate", 1.5);
    }
    document
      .getElementById("normalFontSize")
      .classList.remove("checkboxActive");
    document.getElementById("moreFontSize").classList.remove("checkboxActive");
    document.getElementById("mastFontSize").classList.remove("checkboxActive");
    document.getElementById(className).classList.add("checkboxActive");
    currentHtmlFontSize = className;
    localStorage.setItem("currentHtmlFontSize", currentHtmlFontSize);
    if (isUsing) {
      handleStop(text);
    }
    // let dom = document.getElementById("hanwebFontSize");
    // if (dom) {
    //   // dom.style = `transform: scale(${htmlFontSizeRate}); transform-origin: 0px 0px;`;
    //   dom.style = `zoom:${htmlFontSizeRate}`;
    // }
    for (let i = 0; i < domList.length; i++) {
      domList[i].classList.remove("normalFontSize");
      domList[i].classList.remove("moreFontSize");
      domList[i].classList.remove("mastFontSize");
      // 添加配色
      domList[i].classList.add(currentHtmlFontSize);
    }
  } else {
    // 退出无障碍时恢复初始状态
    document.getElementById("normalFontSize").classList.add("checkboxActive");
    for (let i = 0; i < domList.length; i++) {
      domList[i].classList.remove("normalFontSize");
      domList[i].classList.remove("moreFontSize");
      domList[i].classList.remove("mastFontSize");
    }
  }
}
// 更改模式
function changeMode(className, isSpeak = true) {
  if (event) event.stopPropagation();
  document.getElementById("defaultMode").classList.remove("checkboxActive");
  document.getElementById(currentMode).classList.remove("checkboxActive");
  document.getElementById(className).classList.add("checkboxActive");
  for (let i = 0; i < domList.length; i++) {
    if (currentMode != "") {
      // 移除之前的配色
      domList[i].classList.remove(`${currentColor}-${currentMode}`);
    }
    // 添加配色
    domList[i].classList.add(`${currentColor}-${className}`);
  }
  currentMode = className;
  localStorage.setItem("currentMode", currentMode);
  if (isSpeak) {
    let text;
    if (className == "defaultMode") {
      text = "调整为默认模式";
    } else if (className == "blackMode") {
      text = "调整为黑暗模式";
    } else if (className == "softMode") {
      text = "调整为柔和模式";
    } else if (className == "hightlightMode") {
      text = "调整为高亮模式";
    } else if (className == "highcontrastMode") {
      text = "调整为高对比模式";
    } else if (className == "greyMode") {
      text = "调整为灰度模式";
    }
    if (isUsing) {
      handleStop(text);
    }
  }
}
// 更改背景色
function changeBackground(className, isSpeak = true) {
  if (className === "default") {
    document.getElementById("modeMatchingTools").style.display = "none";
    document.getElementById("hanwebFontSize").classList.remove("pdb360");
  } else {
    document.getElementById("modeMatchingTools").style.display = "block";
    document.getElementById("hanwebFontSize").classList.add("pdb360");
    if (currentToolName !== "colorMatching") {
      document.getElementById("hanwebFontSize").classList.remove("pdb360");
    }
  }
  if (event) event.stopPropagation();
  document.getElementById("default").classList.remove("colorBorder");
  document.getElementById(currentColor).classList.remove("colorBorder");
  document.getElementById(className).classList.add("colorBorder");

  for (let i = 0; i < domList.length; i++) {
    if (currentColor != "") {
      // 移除之前的配色
      domList[i].classList.remove(`${currentColor}-${currentMode}`);
    }
    // 添加配色
    domList[i].classList.add(`${className}-${currentMode}`);
  }
  currentColor = className;
  localStorage.setItem("currentColor", currentColor);

  if (isSpeak) {
    let text; //
    if (className == "default") {
      text = "调整为默认颜色";
    } else if (className == "navyBlue") {
      text = "调整为深蓝色";
    } else if (className == "chocolate") {
      text = "调整为巧克力色";
    } else if (className == "black") {
      text = "调整为黑底白字";
    } else if (className == "forest") {
      text = "调整为森林色";
    } else {
    }
    if (isUsing) {
      handleStop(text);
    }
  }
}
// 关闭提示
function handleClose() {
  if (
    event.target.className !== "tip_title" &&
    event.target.className !== "tip_content"
  )
    document.getElementById("tip").style.display = "none";
}
var isFirst = true;
// 开启无障碍阅读
function openAccessibleReading() {
  if (isFirst && !isUsing) {
    function getChildren(parent) {
      // 创建迭代器
      var iterator = document.createNodeIterator(
        parent,
        NodeFilter.SHOW_ELEMENT,
        null,
        false
      );
      // 用循环反复调用节点迭代器对象的nextNode().跳向下一个节点
      var node,
        list = [];
      while ((node = iterator.nextNode()) != null) {
        list.push(node);
      }
      return list;
    }
    getChildren(document.getElementById("tip")).forEach((item) => {
      item.classList.remove(`${currentColor}-${currentMode}`);
    });
    document.getElementById("tip").style.display = "flex";
    isFirst = false;
  }
  // 判断是否已开启
  if (!isUsing) {
    // 监听点击事件并模拟双击
    // window.addEventListener("click", getSectionText);
    // window.addEventListener("click", testDblClick);
    openEventListener();
    // 读屏使用中
    isUsing = true;
    localStorage.setItem("isUsing", true);
    sessionStorage.setItem("isUsingRead", true);
    // 语音播报读音已开启
    handleStop("读屏已开启"); //，双击进行阅读
  }
}
// 调节语速
function adjustSpeakRate(rate, className, isSpeak = true) {
  if (event) event.stopPropagation();
  if (currentSpeakRate != "") {
    document
      .getElementById(currentSpeakRate)
      .classList.remove("checkboxActive");
  }
  let text = "";
  speakRate = rate;
  localStorage.setItem("speakRate", speakRate);
  if (rate == 5) {
    text = "语速已正常";
  } else if (rate == 9) {
    text = "语速已加快";
  } else {
    text = "语速已缓慢";
  }
  document.getElementById(className).classList.add("checkboxActive");
  currentSpeakRate = className;
  localStorage.setItem("currentSpeakRate", currentSpeakRate);
  if (isSpeak) {
    handleStop(text);
  }
}
// 模拟双击事件
function testDblClick(e) {
  // console.log(e);
  e.stopPropagation();
  e.preventDefault();
  if (!isUsing) return;
  var href = "";
  // console.log(e.onclick);
  if (e.target.nodeName == "A" || e.target.parentNode.nodeName == "A") {
    href = e.target.href || e.target.parentNode.href || "";
    e.preventDefault();
  }

  getSectionText(e);
  if (clickid == 2) {
    if (e.target.nodeName == "A" || e.target.parentNode.nodeName == "A") {
      if (href != "") {
        window.location.href = href;
      }
    }
  } else {
    var endTime = new Date().getTime();
    if (endTime - startTime < 300) {
      clickid = 1;
      clearTimeout(timer);
    }
  }
  if (clickid == 1) {
    var startTime = new Date().getTime();
    clickid++;
    timer = setTimeout(function () {
      clickid = 1;
    }, 300);
  }
}
// 提取点击段落文字
function getSectionText(e) {
  //   e.preventDefault(); //阻止默认事件
  // 判断选中标签 添加前置提示语
  let nodeName = e.target.nodeName;
  // 点击空白处时不阅读
  //   if (e.path[1].nodeName == 'BODY'||e.path[2].nodeName == 'BODY') {
  //       return
  //   } else
  //   if (e.path[0].nodeName == "HTML" || e.path[0].nodeName == "BODY") {
  //     return;
  //   } else
  if (nodeName == "A") {
    tipsText = "链接：";
  } else if (nodeName == "IMG") {
    tipsText = "图片：" + e.target.alt;
  } else if (nodeName == "BUTTON") {
    tipsText = "按钮：";
  } else if (nodeName == "INPUT" || nodeName == "TEXTAREA") {
    tipsText = "输入框：" + e.target.placeholder;
  } else if (nodeName == "SELECT") {
    tipsText = "下拉框：";
  } else {
    tipsText = "";
  }

  // 判断前一个元素是否被选中
  if (prevDom != undefined && prevDom != e.target) {
    // 移除class
    prevDom.classList.remove("hanwebcheckDefaultActive");
  }
  // 赋值方便清理
  prevDom = e.target;
  // 获取段落文字
  let text = e.target.innerText;
  //   console.log(text);
  if (!prevDom.classList.contains("hanwebcheckDefaultActive")) {
    // 给选中段落添加样式
    prevDom.classList.add("hanwebcheckDefaultActive");
    // prevDom.classList.add('formOnlyRead');
  }
  handleStop(tipsText + text + (nodeName === "A" ? "，双击访问链接内容" : ""));
}
// 语音停止
function handleStop(text) {
  // text = encodeURI('123');
  // /voice/a/8/a87e862c3d647cea3941fbc550a80646.mp3
  const baseUrl = "https://tts.hanweb.com/txt_to_voice";
  let url = `${baseUrl}/interface/trans/txt2voice.do?text=${text}&download=1&spd=${speakRate}&path=1`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // 将响应解析为 JSON
      return response.text();
    })
    .then((res) => {
      // mp3播放地址
      var audioSrc = baseUrl + res;
      audio.src = audioSrc;
      audio.load();
      audio.play();
    });
}
// 退出无障碍服务
function closeAccessibleReading(isSpeak = true) {
  if (event) event.stopPropagation();
  // 取消监听事件
  //   window.removeEventListener("click", getSectionText);
  window.removeEventListener("click", testDblClick);
  speakRate = 5;
  localStorage.setItem("speakRate", speakRate);
  if (isSpeak) {
    // 语音播报读音已关闭
    handleStop("读屏已关闭");
  }
  adjustSpeakRate(5, "normalSpeakRate", false);
  document.getElementById("readingScreenImg").src = "../img/readingScreen.svg";
  document.getElementById("readingScreen").classList.remove("checkboxActive");
  document.getElementById("readingTools").classList.remove("displayShowTools");
  // 读屏已关闭
  isUsing = false;
  localStorage.setItem("isUsing", false);
  sessionStorage.setItem("isUsingRead", false);
}
// 获取dom下所有子元素
function getChild(dom) {
  var list = []; //与方法一的位置不同，方法二在函数内，为局部变量，方法一是全局变量
  var domChildren = dom.childNodes;
  // console.log(domChildren);
  for (var i = 0; i < domChildren.length; i++) {
    // 检测外部是否有需要不配色区域
    let cure =
      domChildren[i].classList &&
      domChildren[i].classList.contains("refuseColorMatching");
    if (
      domChildren[i].className != "accessibility-toolsBox" &&
      domChildren[i].className != "accessibility-box" &&
      !cure
    ) {
      if (domChildren[i].nodeType === 1) {
        list.push(domChildren[i]);
        var retArr = getChild(domChildren[i]);
        list = list.concat(retArr);
      }
    }
  }
  return list;
}
// 退出
function signOut() {
  if (event) event.stopPropagation();
  if (isUsing) {
    handleStop("退出无障碍服务");
  }

  changeBackground("default", false);
  changeMode("defaultMode", false);
  if (isUsing) {
    closeAccessibleReading(false);
  }
  adjustFontSize("normalFontSize", false);

  // 清除已选中样式
  if (prevDom != undefined) {
    // 移除class
    prevDom.classList.remove("hanwebcheckDefaultActive");
  }
  // 清除缓存
  localStorage.removeItem("ishowToolbar");
  localStorage.removeItem("prevShowToolsName");
  localStorage.removeItem("isUsing");
  localStorage.removeItem("speakRate");
  localStorage.removeItem("htmlFontSizeRate");
  localStorage.removeItem("currentToolName");
  localStorage.removeItem("currentColor");
  localStorage.removeItem("currentMode");
  localStorage.removeItem("currentSpeakRate");
  localStorage.removeItem("currentHtmlFontSize");

  // 退出关闭工具条
  if (prevShowToolsName) {
    document
      .getElementById(prevShowToolsName)
      .classList.remove("displayShowTools");
    document.getElementById(currentToolName).classList.remove("checkboxActive");
    document.getElementById(currentToolName + "Img").src =
      "../img/" + currentToolName + ".svg";
  }

  // 数据重设
  ishowToolbar = false; //
  prevShowToolsName = ""; //上一个工具条显示名称
  isUsing = false; //读屏是否已启用
  speakRate = 5; //语速
  htmlFontSizeRate = 1; //原生html字体大小
  currentToolName = ""; //当前展示工具
  currentColor = "default"; //当前配色
  currentMode = "defaultMode"; //当前模式
  currentSpeakRate = "normalSpeakRate"; //当前语速
  // console.log(currentSpeakRate);
  currentHtmlFontSize = "normalFontSize"; //当前字体大小
  //   document.getElementById("app").style.paddingBottom = "";、

  document
    .getElementById("accessibility")
    .classList.remove("showAccessibility");
  document.getElementById("hanwebFontSize").classList.remove("pdb100");
  document.getElementById("hanwebFontSize").classList.remove("pdb165");
  document.getElementById("hanwebFontSize").classList.remove("pdb360");
}
// 开启无障碍
function openMethod() {
  document.getElementById("accessibility").classList.add("showAccessibility");
  localStorage.setItem("ishowToolbar", true);
  document.getElementById("hanwebFontSize").classList.add("pdb100");
  initFunction();
}
