(()=>{"use strict";const e=document.createElement("div"),s=document.createElement("h1"),t=document.createElement("textarea"),c=document.createElement("h3"),a=document.createElement("div"),o=[[{caseDown:"`",caseUp:"~",caps:"`",shiftCaps:"~",keyCode:192,code:"Backquote",description:"symbol"},{caseDown:"1",caseUp:"!",caps:"1",shiftCaps:"!",keyCode:49,code:"Digit1",description:"digit"},{caseDown:"2",caseUp:"@",caps:"2",shiftCaps:"@",keyCode:50,code:"Digit2",description:"digit"},{caseDown:"3",caseUp:"#",caps:"3",shiftCaps:"#",keyCode:51,code:"Digit3",description:"digit"},{caseDown:"4",caseUp:"$",caps:"4",shiftCaps:"$",keyCode:52,code:"Digit4",description:"digit"},{caseDown:"5",caseUp:"%",caps:"5",shiftCaps:"%",keyCode:53,code:"Digit5",description:"digit"},{caseDown:"6",caseUp:"^",caps:"6",shiftCaps:"^",keyCode:54,code:"Digit6",description:"digit"},{caseDown:"7",caseUp:"&",caps:"7",shiftCaps:"&",keyCode:55,code:"Digit7",description:"digit"},{caseDown:"8",caseUp:"*",caps:"8",shiftCaps:"*",keyCode:56,code:"Digit8",description:"digit"},{caseDown:"9",caseUp:"(",caps:"9",shiftCaps:"(",keyCode:57,code:"Digit9",description:"digit"},{caseDown:"0",caseUp:")",caps:"0",shiftCaps:")",keyCode:48,code:"Digit0",description:"digit"},{caseDown:"-",caseUp:"_",caps:"-",shiftCaps:"_",keyCode:109,code:"Minus",description:"symbol"},{caseDown:"=",caseUp:"+",caps:"=",shiftCaps:"+",keyCode:61,code:"Equal",description:"symbol"},{caseDown:"Backspace",caseUp:"Backspace",caps:"Backspace",shiftCaps:"Backspace",keyCode:8,code:"Backspace",description:"function"}],[{caseDown:"Tab",caseUp:"Tab",caps:"Tab",shiftCaps:"Tab",keyCode:9,code:"Tab",description:"function"},{caseDown:"q",caseUp:"Q",caps:"Q",shiftCaps:"q",keyCode:81,code:"KeyQ",description:"letter"},{caseDown:"w",caseUp:"W",caps:"W",shiftCaps:"w",keyCode:87,code:"KeyW",description:"letter"},{caseDown:"e",caseUp:"E",caps:"E",shiftCaps:"e",keyCode:69,code:"KeyE",description:"letter"},{caseDown:"r",caseUp:"R",caps:"R",shiftCaps:"r",keyCode:82,code:"KeyR",description:"letter"},{caseDown:"t",caseUp:"T",caps:"T",shiftCaps:"t",keyCode:84,code:"KeyT",description:"letter"},{caseDown:"y",caseUp:"Y",caps:"Y",shiftCaps:"y",keyCode:89,code:"KeyY",description:"letter"},{caseDown:"u",caseUp:"U",caps:"U",shiftCaps:"u",keyCode:85,code:"KeyU",description:"letter"},{caseDown:"i",caseUp:"I",caps:"I",shiftCaps:"i",keyCode:73,code:"KeyI",description:"letter"},{caseDown:"o",caseUp:"O",caps:"O",shiftCaps:"o",keyCode:79,code:"KeyO",description:"letter"},{caseDown:"p",caseUp:"P",caps:"P",shiftCaps:"p",keyCode:80,code:"KeyP",description:"letter"},{caseDown:"[",caseUp:"{",caps:"[",shiftCaps:"{",keyCode:160,code:"BracketLeft",description:"symbol"},{caseDown:"]",caseUp:"}",caps:"]",shiftCaps:"}",keyCode:221,code:"BracketRight",description:"symbol"},{caseDown:"\\",caseUp:"|",caps:"\\",shiftCaps:"|",keyCode:220,code:"Backslash",description:"symbol"},{caseDown:"Delete",caseUp:"Delete",caps:"Delete",shiftCaps:"Delete",keyCode:46,code:"Delete",description:"function"}],[{caseDown:"CapsLock",caseUp:"CapsLock",caps:"CapsLock",shiftCaps:"CapsLock",keyCode:20,code:"CapsLock",description:"function"},{caseDown:"a",caseUp:"A",caps:"A",shiftCaps:"a",keyCode:65,code:"KeyA",description:"letter"},{caseDown:"s",caseUp:"S",caps:"S",shiftCaps:"s",keyCode:83,code:"KeyS",description:"letter"},{caseDown:"d",caseUp:"D",caps:"D",shiftCaps:"d",keyCode:68,code:"KeyD",description:"letter"},{caseDown:"f",caseUp:"F",caps:"F",shiftCaps:"f",keyCode:70,code:"KeyF",description:"letter"},{caseDown:"g",caseUp:"G",caps:"G",shiftCaps:"g",keyCode:71,code:"KeyG",description:"letter"},{caseDown:"h",caseUp:"H",caps:"H",shiftCaps:"h",keyCode:72,code:"KeyH",description:"letter"},{caseDown:"j",caseUp:"J",caps:"J",shiftCaps:"j",keyCode:74,code:"KeyJ",description:"letter"},{caseDown:"k",caseUp:"K",caps:"K",shiftCaps:"k",keyCode:75,code:"KeyK",description:"letter"},{caseDown:"l",caseUp:"L",caps:"L",shiftCaps:"l",keyCode:76,code:"KeyL",description:"letter"},{caseDown:";",caseUp:":",caps:";",shiftCaps:":",keyCode:59,code:"Semicolon",description:"symbol"},{caseDown:"'",caseUp:'"',caps:"'",shiftCaps:'"',keyCode:222,code:"Quote",description:"symbol"},{caseDown:"Enter",caseUp:"Enter",caps:"Enter",shiftCaps:"Enter",keyCode:13,code:"Enter",description:"function"}],[{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift",keyCode:16,code:"ShiftLeft",description:"function"},{caseDown:"z",caseUp:"Z",caps:"Z",shiftCaps:"z",keyCode:90,code:"KeyZ",description:"letter"},{caseDown:"x",caseUp:"X",caps:"X",shiftCaps:"x",keyCode:88,code:"KeyX",description:"letter"},{caseDown:"c",caseUp:"C",caps:"C",shiftCaps:"c",keyCode:67,code:"KeyC",description:"letter"},{caseDown:"v",caseUp:"V",caps:"V",shiftCaps:"v",keyCode:86,code:"KeyV",description:"letter"},{caseDown:"b",caseUp:"B",caps:"B",shiftCaps:"b",keyCode:66,code:"KeyB",description:"letter"},{caseDown:"n",caseUp:"N",caps:"N",shiftCaps:"n",keyCode:78,code:"KeyN",description:"letter"},{caseDown:"m",caseUp:"M",caps:"M",shiftCaps:"m",keyCode:77,code:"KeyM",description:"letter"},{caseDown:",",caseUp:"<",caps:",",shiftCaps:"<",keyCode:108,code:"Comma",description:"symbol"},{caseDown:".",caseUp:">",caps:".",shiftCaps:">",keyCode:190,code:"Period",description:"symbol"},{caseDown:"/",caseUp:"?",caps:"/",shiftCaps:"?",keyCode:191,code:"Slash",description:"symbol"},{caseDown:"▲",caseUp:"▲",caps:"▲",shiftCaps:"▲",keyCode:38,code:"ArrowUp",description:"symbol"},{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift",keyCode:16,code:"ShiftRight",description:"function"}],[{caseDown:"CTRL",caseUp:"CTRL",caps:"CTRL",shiftCaps:"CTRL",keyCode:17,code:"ControlLeft",description:"function"},{caseDown:"Win",caseUp:"Win",caps:"Win",shiftCaps:"Win",keyCode:91,code:"MetaLeft",description:"function"},{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt",keyCode:18,code:"AltLeft",description:"function"},{caseDown:" ",caseUp:" ",caps:" ",shiftCaps:" ",keyCode:32,code:"Space",description:"symbol"},{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt",keyCode:18,code:"AltRight",description:"function"},{caseDown:"◄",caseUp:"◄",caps:"◄",shiftCaps:"◄",keyCode:37,code:"ArrowLeft",description:"symbol"},{caseDown:"▼",caseUp:"▼",caps:"▼",shiftCaps:"▼",keyCode:40,code:"ArrowDown",description:"symbol"},{caseDown:"►",caseUp:"►",caps:"►",shiftCaps:"►",keyCode:39,code:"ArrowRight",description:"symbol"},{caseDown:"CTRL",caseUp:"CTRL",caps:"CTRL",shiftCaps:"CTRL",keyCode:17,code:"ControlRight",description:"function"}]],i=[[{caseDown:"ё",caseUp:"Ё",caps:"Ё",shiftCaps:"ё",keyCode:192,code:"Backquote",description:"letter"},{caseDown:"1",caseUp:"!",caps:"1",shiftCaps:"!",keyCode:49,code:"Digit1",description:"digit"},{caseDown:"2",caseUp:'"',caps:"2",shiftCaps:'"',keyCode:50,code:"Digit2",description:"digit"},{caseDown:"3",caseUp:"№",caps:"3",shiftCaps:"№",keyCode:51,code:"Digit3",description:"digit"},{caseDown:"4",caseUp:";",caps:"4",shiftCaps:";",keyCode:52,code:"Digit4",description:"digit"},{caseDown:"5",caseUp:"%",caps:"5",shiftCaps:"%",keyCode:53,code:"Digit5",description:"digit"},{caseDown:"6",caseUp:":",caps:"6",shiftCaps:":",keyCode:54,code:"Digit6",description:"digit"},{caseDown:"7",caseUp:"?",caps:"7",shiftCaps:"?",keyCode:55,code:"Digit7",description:"digit"},{caseDown:"8",caseUp:"*",caps:"8",shiftCaps:"*",keyCode:56,code:"Digit8",description:"digit"},{caseDown:"9",caseUp:"(",caps:"9",shiftCaps:"(",keyCode:57,code:"Digit9",description:"digit"},{caseDown:"0",caseUp:")",caps:"0",shiftCaps:")",keyCode:48,code:"Digit0",description:"digit"},{caseDown:"-",caseUp:"_",caps:"-",shiftCaps:"_",keyCode:109,code:"Minus",description:"simbol"},{caseDown:"=",caseUp:"+",caps:"=",shiftCaps:"+",keyCode:61,code:"Equal",description:"simbol"},{caseDown:"Backspace",caseUp:"Backspace",caps:"Backspace",shiftCaps:"Backspace",keyCode:8,code:"Backspace",description:"function"}],[{caseDown:"Tab",caseUp:"Tab",caps:"Tab",shiftCaps:"Tab",keyCode:9,code:"Tab",description:"function"},{caseDown:"й",caseUp:"Й",caps:"Й",shiftCaps:"й",keyCode:81,code:"KeyQ",description:"letter"},{caseDown:"ц",caseUp:"Ц",caps:"Ц",shiftCaps:"ц",keyCode:87,code:"KeyW",description:"letter"},{caseDown:"у",caseUp:"У",caps:"У",shiftCaps:"у",keyCode:69,code:"KeyE",description:"letter"},{caseDown:"к",caseUp:"К",caps:"К",shiftCaps:"к",keyCode:82,code:"KeyR",description:"letter"},{caseDown:"е",caseUp:"Е",caps:"Е",shiftCaps:"е",keyCode:84,code:"KeyT",description:"letter"},{caseDown:"н",caseUp:"Н",caps:"Н",shiftCaps:"н",keyCode:89,code:"KeyY",description:"letter"},{caseDown:"г",caseUp:"Г",caps:"Г",shiftCaps:"г",keyCode:85,code:"KeyU",description:"letter"},{caseDown:"ш",caseUp:"Ш",caps:"Ш",shiftCaps:"ш",keyCode:73,code:"KeyI",description:"letter"},{caseDown:"щ",caseUp:"Щ",caps:"Щ",shiftCaps:"щ",keyCode:79,code:"KeyO",description:"letter"},{caseDown:"з",caseUp:"З",caps:"З",shiftCaps:"з",keyCode:80,code:"KeyP",description:"letter"},{caseDown:"х",caseUp:"Х",caps:"Х",shiftCaps:"х",keyCode:160,code:"BracketLeft",description:"letter"},{caseDown:"ъ",caseUp:"Ъ",caps:"Ъ",shiftCaps:"ъ",keyCode:221,code:"BracketRight",description:"letter"},{caseDown:"\\",caseUp:"/",caps:"\\",shiftCaps:"/",keyCode:220,code:"Backslash",description:"symbol"},{caseDown:"Delete",caseUp:"Delete",caps:"Delete",shiftCaps:"Delete",keyCode:46,code:"Delete",description:"function"}],[{caseDown:"CapsLock",caseUp:"CapsLock",caps:"CapsLock",shiftCaps:"CapsLock",keyCode:20,code:"CapsLock",description:"function"},{caseDown:"ф",caseUp:"Ф",caps:"Ф",shiftCaps:"ф",keyCode:65,code:"KeyA",description:"letter"},{caseDown:"ы",caseUp:"Ы",caps:"Ы",shiftCaps:"ы",keyCode:83,code:"KeyS",description:"letter"},{caseDown:"в",caseUp:"В",caps:"В",shiftCaps:"в",keyCode:68,code:"KeyD",description:"letter"},{caseDown:"а",caseUp:"А",caps:"А",shiftCaps:"а",keyCode:70,code:"KeyF",description:"letter"},{caseDown:"п",caseUp:"П",caps:"П",shiftCaps:"п",keyCode:71,code:"KeyG",description:"letter"},{caseDown:"р",caseUp:"Р",caps:"Р",shiftCaps:"р",keyCode:72,code:"KeyH",description:"letter"},{caseDown:"о",caseUp:"О",caps:"О",shiftCaps:"о",keyCode:74,code:"KeyJ",description:"letter"},{caseDown:"л",caseUp:"Л",caps:"Л",shiftCaps:"л",keyCode:75,code:"KeyK",description:"letter"},{caseDown:"д",caseUp:"Д",caps:"Д",shiftCaps:"д",keyCode:76,code:"KeyL",description:"letter"},{caseDown:"ж",caseUp:"Ж",caps:"Ж",shiftCaps:"ж",keyCode:59,code:"Semicolon",description:"letter"},{caseDown:"э",caseUp:"Э",caps:"Э",shiftCaps:"э",keyCode:222,code:"Quote",description:"letter"},{caseDown:"Enter",caseUp:"Enter",caps:"Enter",shiftCaps:"Enter",keyCode:13,code:"Enter",description:"function"}],[{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift",keyCode:16,code:"ShiftLeft",description:"function"},{caseDown:"я",caseUp:"Я",caps:"Я",shiftCaps:"я",keyCode:90,code:"KeyZ",description:"letter"},{caseDown:"ч",caseUp:"Ч",caps:"Ч",shiftCaps:"ч",keyCode:88,code:"KeyX",description:"letter"},{caseDown:"с",caseUp:"С",caps:"С",shiftCaps:"с",keyCode:67,code:"KeyC",description:"letter"},{caseDown:"м",caseUp:"М",caps:"М",shiftCaps:"м",keyCode:86,code:"KeyV",description:"letter"},{caseDown:"и",caseUp:"И",caps:"И",shiftCaps:"и",keyCode:66,code:"KeyB",description:"letter"},{caseDown:"т",caseUp:"Т",caps:"Т",shiftCaps:"т",keyCode:78,code:"KeyN",description:"letter"},{caseDown:"ь",caseUp:"Ь",caps:"Ь",shiftCaps:"ь",keyCode:77,code:"KeyM",description:"letter"},{caseDown:"б",caseUp:"Б",caps:"Б",shiftCaps:"б",keyCode:108,code:"Comma",description:"letter"},{caseDown:"ю",caseUp:"Ю",caps:"Ю",shiftCaps:"ю",keyCode:190,code:"Period",description:"letter"},{caseDown:".",caseUp:",",caps:".",shiftCaps:",",keyCode:191,code:"Slash",description:"symbol"},{caseDown:"▲",caseUp:"▲",caps:"▲",shiftCaps:"▲",keyCode:38,code:"ArrowUp",description:"symbol"},{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift",keyCode:16,code:"ShiftRight",description:"function"}],[{caseDown:"CTRL",caseUp:"CTRL",caps:"CTRL",shiftCaps:"CTRL",keyCode:17,code:"ControlLeft",description:"function"},{caseDown:"Win",caseUp:"Win",caps:"Win",shiftCaps:"Win",keyCode:91,code:"MetaLeft",description:"function"},{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt",keyCode:18,code:"AltLeft",description:"function"},{caseDown:" ",caseUp:" ",caps:" ",shiftCaps:" ",keyCode:32,code:"Space",description:"symbol"},{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt",keyCode:18,code:"AltRight",description:"function"},{caseDown:"◄",caseUp:"◄",caps:"◄",shiftCaps:"◄",keyCode:37,code:"ArrowLeft",description:"symbol"},{caseDown:"▼",caseUp:"▼",caps:"▼",shiftCaps:"▼",keyCode:40,code:"ArrowDown",description:"symbol"},{caseDown:"►",caseUp:"►",caps:"►",shiftCaps:"►",keyCode:39,code:"ArrowRight",description:"symbol"},{caseDown:"CTRL",caseUp:"CTRL",caps:"CTRL",shiftCaps:"CTRL",keyCode:17,code:"ControlRight",description:"function"}]],p=document.createElement("div");const d=new class{constructor(e,s){this.keyboard=e,this.textarea=s,this.layout="rus"===localStorage.getItem("language")?"rus":"eng",this.keys=[],this.flagKey=!1,this.flagMouse=!1}getKey(){for(let e=0;e<o.length;e+=1)for(let s=0;s<o[e].length;s+=1){const t=document.createElement("div");t.classList.add("keyboard__key","key",o[e][s].code),t.id=o[e][s].code,t.setAttribute("caseDown-eng",o[e][s].caseDown),t.setAttribute("caseDown-rus",i[e][s].caseDown),t.setAttribute("caseUp-eng",o[e][s].caseUp),t.setAttribute("caseUp-rus",i[e][s].caseUp),t.setAttribute("description-eng",o[e][s].description),t.setAttribute("description-rus",i[e][s].description),t.textContent="eng"===this.layout?o[e][s].caseDown:i[e][s].caseDown,p.append(t),this.keys.push(t)}}insertText(e,s){let t=this.textarea.selectionStart,c=this.textarea.selectionEnd;this.textarea.selectionStart===this.textarea.selectionEnd&&("Delete"===s?c+=1:"Backspace"===s&&(t=Math.max(0,t-1))),"Delete"===s||"Backspace"===s?this.textarea.setRangeText("",t,c):this.textarea.setRangeText(e),this.textarea.selectionStart=t+e.length,this.textarea.selectionEnd=this.textarea.selectionStart}upText(e){this.keys.forEach((s=>{const t=s;if(e||"letter"===t.getAttribute("description-eng")){const e=t.getAttribute("caseDown-eng");t.setAttribute("caseDown-eng",t.getAttribute("caseUp-eng")),t.setAttribute("caseUp-eng",e)}if(e||"letter"===t.getAttribute("description-rus")){const e=t.getAttribute("caseDown-rus");t.setAttribute("caseDown-rus",t.getAttribute("caseUp-rus")),t.setAttribute("caseUp-rus",e)}t.innerText="eng"===this.layout?t.getAttribute("caseDown-eng"):t.getAttribute("caseDown-rus")}))}keyEventListener(){document.addEventListener("keydown",(e=>{const s=document.getElementById(e.code);if(s){s.classList.add("active"),e.preventDefault();const t=s.getAttribute("description-eng");"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||e.repeat?"CapsLock"!==e.code||e.repeat?e.ctrlKey&&e.altKey?(this.layout="rus"===this.layout?"eng":"rus",localStorage.setItem("language",this.layout),this.keys.forEach((e=>{if("eng"===this.layout){e.innerText=e.getAttribute("caseDown-eng")}else if("rus"===this.layout){e.innerText=e.getAttribute("caseDown-rus")}}))):"Tab"===e.code?this.insertText("    "):"Backspace"===e.code?this.insertText("","Backspace"):"Enter"===e.code?this.insertText("\n"):"Delete"===e.code?this.insertText("","Delete"):"function"!==t&&this.insertText(s.textContent):(this.upText(!1),this.flagKey&&s.classList.remove("active"),this.flagKey=!this.flagKey):this.upText(!0)}})),document.addEventListener("keyup",(e=>{const s=document.getElementById(e.code);s&&("CapsLock"!==e.code&&s.classList.remove("active"),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||this.upText(!0))}))}mouseEventListener(){this.keyboard.addEventListener("mousedown",(e=>{if(!e.target.classList.contains("keyboard__body")){const s=new KeyboardEvent("keydown",{code:e.target.id});document.dispatchEvent(s),this.flagMouse=!0}})),this.keyboard.addEventListener("mouseup",(e=>{const s=new KeyboardEvent("keyup",{code:e.target.id});document.dispatchEvent(s),this.flagMouse=!1})),this.keyboard.addEventListener("mouseout",(e=>{if(this.flagMouse){const s=new KeyboardEvent("keyup",{code:e.target.id});document.dispatchEvent(s)}}))}}(p,t);t.classList.add("keyboard__text-area"),t.id="textarea",t.rows=5,t.cols=50,p.classList.add("keyboard__body"),p.classList.add("keyboard"),p.id="keyboard",e.classList.add("wrapper"),s.innerText="RSS Virtual Keybord for Windows",s.classList.add("keyboard__title"),t.classList.add("keyboard__text-area"),t.id="textarea",t.rows=5,t.cols=50,a.textContent="To change the language press the left ctrl + alt combination",a.classList.add("keyboard__language"),document.body.prepend(e),e.append(s),e.append(t),e.append(p),e.append(c),e.append(a),d.getKey(),d.keyEventListener(),d.mouseEventListener(),changeColor(),t.onblur=()=>t.focus(),t.focus()})();