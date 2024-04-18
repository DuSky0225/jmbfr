// css
import "./index.css";
// images
import colorMatchingSvg from "./img/colorMatching.svg";
import colorMatchingAcSvg from "./img/colorMatchingAc.svg";
import readingScreenSvg from "./img/readingScreen.svg";
import readingScreenAcSvg from "./img/readingScreenAc.svg";
import fontIconSvg from "./img/fontIcon.svg";
import fontIconAcSvg from "./img/fontIconAc.svg";
import signOutSvg from "./img/signOut.svg";
import signOutAcSvg from "./img/signOutAc.svg";

let svgs = {
  colorMatchingSvg,
  colorMatchingAcSvg,
  readingScreenSvg,
  readingScreenAcSvg,
  fontIconSvg,
  fontIconAcSvg,
  signOutSvg,
  signOutAcSvg,
};

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
        >
          默认
        </div>
        <div
          id="blackMode"
          class="readingScreenBtn"
        >
          黑暗
        </div>
        <div
          id="softMode"
          class="readingScreenBtn"
        >
          柔和
        </div>
      </div>
      <div class="readingScreenTools" style="margin-bottom: 12px">
        <div
          id="hightlightMode"
          class="readingScreenBtn"
        >
          高亮
        </div>
        <div
          id="highcontrastMode"
          class="readingScreenBtn"
        >
          高对比
        </div>
        <div
          id="greyMode"
          class="readingScreenBtn"
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
      >
        A
      </div>
      <div
        id="navyBlue"
        class="readingScreenBtn navyBlue"
      >
        A
      </div>
      <div
        id="chocolate"
        class="readingScreenBtn chocolate"
      >
        A
      </div>
      <div
        id="black"
        class="readingScreenBtn black"
      >
        A
      </div>
      <div
        id="forest"
        class="readingScreenBtn forest"
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
    >
      正常
    </div>
    <div
      id="quickenSpeakRate"
      class="readingScreenBtn"
    >
      加快
    </div>
    <div
      id="SlowSpeakRate"
      class="readingScreenBtn"
    >
      缓慢
    </div>
    <div id="closeReading" class="readingScreenBtn">
      关闭读屏
    </div>
  </div>
  <!-- 字体调节工具 -->
  <div id="fontSizeTools" class="readingScreenTools">
    <div
      id="normalFontSize"
      class="readingScreenBtn checkboxActive"
    >
      原始大小
    </div>
    <div
      id="moreFontSize"
      class="readingScreenBtn"
    >
      较大
    </div>
    <div
      id="mastFontSize"
      class="readingScreenBtn"
    >
      特大
    </div>
  </div>
</div>
<div class="accessibility-box">
  <div
    id="colorMatching"
    class="accessibility-btn colorMatching"
  >
    <img id="colorMatchingImg"  src="${colorMatchingSvg}" />
    <span>配色</span>
  </div>
  <div
    id="readingScreen"
    class="accessibility-btn readingScreen"
  >
    <img
      id="readingScreenImg"
      src="${readingScreenSvg}"
      alt="读屏"
    />
    <span>读屏</span>
  </div>
  <div
    id="fontIcon"
    class="accessibility-btn fontIcon"
  >
    <img id="fontIconImg" src="${fontIconSvg}" alt="字体" />
    <span>字体</span>
  </div>
  <div id="signOut" class="accessibility-btn signOut">
    <img src="${signOutSvg}" alt="退出" />
    <span>退出</span>
  </div>
</div>
<div id="tip" class="tip_box">
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

// 开启无障碍
document.getElementById("openJmbfr").addEventListener("click", function () {
  document.getElementById("accessibility").classList.add("showAccessibility");
  localStorage.setItem("ishowToolbar", true);
  document.getElementById("hanwebFontSize").classList.add("pdb100");
});
// 关闭阅读
document.getElementById("closeReading").addEventListener("click", function () {
  closeAccessibleReading();
});
// 模式
document.getElementById("defaultMode").addEventListener("click", function () {
  changeMode("defaultMode");
});
document.getElementById("blackMode").addEventListener("click", function () {
  changeMode("blackMode");
});
document.getElementById("softMode").addEventListener("click", function () {
  changeMode("softMode");
});
document
  .getElementById("hightlightMode")
  .addEventListener("click", function () {
    changeMode("hightlightMode");
  });
document
  .getElementById("highcontrastMode")
  .addEventListener("click", function () {
    changeMode("highcontrastMode");
  });
document.getElementById("greyMode").addEventListener("click", function () {
  changeMode("greyMode");
});
// 配色
document.getElementById("colorMatching").addEventListener("click", function () {
  showTools("colorMatchingTools", "colorMatching");
});
document.getElementById("default").addEventListener("click", function () {
  changeBackground("default");
});
document.getElementById("navyBlue").addEventListener("click", function () {
  changeBackground("navyBlue");
});
document.getElementById("chocolate").addEventListener("click", function () {
  changeBackground("chocolate");
});
document.getElementById("black").addEventListener("click", function () {
  changeBackground("black");
});
document.getElementById("forest").addEventListener("click", function () {
  changeBackground("forest");
});
// 读屏
document.getElementById("readingScreen").addEventListener("click", function () {
  showTools("readingTools", "readingScreen");
  openAccessibleReading();
});
document
  .getElementById("normalSpeakRate")
  .addEventListener("click", function () {
    adjustSpeakRate(5, "normalSpeakRate");
  });
document
  .getElementById("quickenSpeakRate")
  .addEventListener("click", function () {
    adjustSpeakRate(9, "quickenSpeakRate");
  });
document.getElementById("SlowSpeakRate").addEventListener("click", function () {
  adjustSpeakRate(1, "SlowSpeakRate");
});
// 字体大小
document.getElementById("fontIcon").addEventListener("click", function () {
  showTools("fontSizeTools", "fontIcon");
});
document
  .getElementById("normalFontSize")
  .addEventListener("click", function () {
    adjustFontSize("normalFontSize");
  });
document.getElementById("moreFontSize").addEventListener("click", function () {
  adjustFontSize("moreFontSize");
});
document.getElementById("mastFontSize").addEventListener("click", function () {
  adjustFontSize("mastFontSize");
});
// 关闭
document.getElementById("signOut").addEventListener("click", function () {
  signOut();
});
// 提示
document.getElementById("tip").addEventListener("click", function () {
  handleClose();
});

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
    document.getElementById(currentToolName + "Img").src = `${
      svgs[currentToolName + "Svg"]
    }`;
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
    document.getElementById(className + "Img").src = `${
      svgs[className + "AcSvg"]
    }`;
  } else {
    document.getElementById(className + "Img").src = `${
      svgs[className + "Svg"]
    }`;
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
  e.stopPropagation();
  e.preventDefault();
  if (!isUsing) return;
  var href = "";
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
  // console.log("text", text);
  text = encodeURI(text);
  if (window.speechSynthesis) {
    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance();
    msg.text = text; // 文字内容
    msg.lang = "zh-CN"; // 使用的语言:中文
    msg.volume = 1; // 声音音量：1 区间范围是0到1
    msg.rate = this.speakRate; // 语速：1 范围是0.1到10
    msg.pitch = 1; // 音高：1 范围从0（最小）到2（最大）
    // msg.voice = this.getWindowVoice()  // 使用本地服务合成语音(若是获取不到 请异步获取, 加一个setTimeout)
    // voiceURI:'Grandpa (法语（法国）)', //指定希望使用的声音和服务，字符串。
    synth.speak(msg); // 播放
  } else {
    // mp3播放地址
    var audioSrc = `https://tts.hanweb.com/txt_to_voice/interface/trans/txt2voice.do?text=${text}&download=1&spd=${speakRate}`;
    audio.src = audioSrc;
    audio.load();
    audio.play();
  }
}
// 退出无障碍服务
function closeAccessibleReading(isSpeak = true) {
  if (event) event.stopPropagation();
  // 取消监听事件
  //   window.removeEventListener("click", getSectionText);
  // window.removeEventListener("click", testDblClick);
  closeEventListener();
  speakRate = 5;
  localStorage.setItem("speakRate", speakRate);
  if (isSpeak) {
    // 语音播报读音已关闭
    handleStop("读屏已关闭");
  }
  adjustSpeakRate(5, "normalSpeakRate", false);
  document.getElementById("readingScreenImg").src = svgs.readingScreenSvg;
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
    document.getElementById(currentToolName + "Img").src = `${
      svgs[currentToolName + "Svg"]
    }`;
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
  currentHtmlFontSize = "normalFontSize"; //当前字体大小

  document
    .getElementById("accessibility")
    .classList.remove("showAccessibility");
  document.getElementById("hanwebFontSize").classList.remove("pdb100");
  document.getElementById("hanwebFontSize").classList.remove("pdb165");
  document.getElementById("hanwebFontSize").classList.remove("pdb360");
}
