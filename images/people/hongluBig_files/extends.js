/*
** basic extends for sudy
 */
function runJs(a){var b=document.createElement("script");b.type="text/javascript",b.text=a;var c=document.getElementsByTagName("body");c.length?c[0].appendChild(b):document.documentElement.appendChild(b)}function loadJs(a){var b=document.createElement("script");b.type="text/javascript",b.src=a;var c=document.getElementsByTagName("head");c.length?c[0].appendChild(b):document.documentElement.appendChild(b)}function Imgpd(a,b,c,d){this.title=a,this.url=b,this.text=c,this.src=d}function getImgJson(p){var imgJson=[];if("undefined"!==eval("typeof imgText"+p)){eval("var title = imgText"+p+", url = imgLink"+p+", text = imgContent"+p+", img = imgUrl"+p+";");var i;for(i=1;i<title.length;i++)imgJson[i-1]=new Imgpd(title[i],url[i],text[i],img[i])}else"undefined"!==eval("typeof w"+p+"imgJsons")&&eval("imgJson = w"+p+"imgJsons");return imgJson}

/*
** load jquery and jquery plugins for sudy
 */
var EXTEND_PATH, exScripts = document.getElementsByTagName("script");EXTEND_PATH = exScripts[exScripts.length - 1].getAttribute("src").replace('extends.js','');document.write('<link rel="stylesheet" type="text/css" href="'+EXTEND_PATH+'extends.css" >');var DEFAULT_VERSION = "9.0";var ua = navigator.userAgent.toLowerCase();var sIE = ua.indexOf("msie") > -1;var safariVersion;if(sIE){safariVersion = ua.match(/msie ([\d.]+)/)[1];if(safariVersion < DEFAULT_VERSION ){window.jQuery || document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery.min.js"><\/script>');}
else{window.jQuery || document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery-3.4.1.min.js"><\/script>');window.jQuery || document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery-migrate-3.1.0.min.js"><\/script>');}}else{window.jQuery || document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery-3.4.1.min.js"><\/script>');window.jQuery || document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery-migrate-3.1.0.min.js"><\/script>');}
document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery.sudy.js"><\/script>');


