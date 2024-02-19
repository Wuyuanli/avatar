描述：  
该项目是一款web端定制头像工具。 推出中秋节、圣诞节、春节等多风格头像定制，内置诸多精美贴纸和头像框可供选择。 用户上传头像即可快速得出专属头像，保存到本地。兼容PC端、移动端。  

技术栈：  
> vue3、typescript、Element UI、fabric.js

# 效果预览
<img src="https://github.com/Wuyuanli/avatar/blob/main/avatar/static/首页.png" width="330px"><img src="https://github.com/Wuyuanli/avatar/blob/main/avatar/static/头像框切换.png" width="330px"><img src="https://github.com/Wuyuanli/avatar/blob/main/avatar/static/添加头像框%26%26贴纸.png" width="330px">  
<img src="https://github.com/Wuyuanli/avatar/blob/main/avatar/static/移动端样式.png" width="210px">

# bug记录
* 画布定位问题：使用绝对定位让画布容器居中时，会出现画布分层的现象  
解决： 使用弹性容器让画布居中显示
* 全局创建canvas对象失败，无法使用全局canvas对象，原因未知  
解决： 曲线救国
```
let canvas: fabric.Canvas
function init() {
if (canvas) {
  canvas.clear();
} else {
  canvas = new fabric.Canvas('c',{
    preserveObjectStacking: true,
    selection: false
  });
}
}
```
* 实现下载定制头像功能时报错，图像跨域问题  
解决： 添加
```
{ crossOrigin: 'Anonymous' }
```
* 获取上传头像图片文件url浏览器兼容问题  
解决：
```
function getObjectURL(file: File){
  let tempUrl = ''
  if (URL.createObjectURL!=undefined) { // basic
        tempUrl = URL.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        tempUrl = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        tempUrl = window.webkitURL.createObjectURL(file) ;
    }
    return tempUrl ;
}
```
* 头像框图层定位问题
解决：通过
```
export const addOrReplaceLayer = (Canvas:any,layer:any)=>{
    const [index, item] = findCanvasItem(Canvas, layer.name)
    if (index === -1) {
        Canvas.insertAt(layer, index).renderAll()
    } else {
        Canvas.insertAt(layer, index)
        Canvas.remove(item)
        Canvas.renderAll()
    }
}
```
函数把头像框图层固定在最下面的层级
