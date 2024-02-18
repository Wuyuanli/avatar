<template>

  <div class="outer" >
    <div class="wrap" style="border: 1px solid #ccc;" :class="isRound ? 'circle' : ''">
      <canvas width="300" height="300" id="c" :class="isRound ? 'circle' : ''"  ></canvas>
    </div>
  </div>

  <div class="input">
    <button id="change-style" @click="isRound = !isRound">更改样式</button>
    <button id="upload-button" @click="upload">上传头像
      <input id="upload-input" type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changepic($event)">
    </button>
  </div>

  <div class="format">
    <div class="tags" v-for="(item,index) in styleList" :key="index" :class="styleIndex === index ? 'active' : ''" @click="styleIndex = index">{{ item.name }}</div>
  </div>

  <div class="frame">
    <p>头像框</p>
    <div class="effect-list">
      <div v-for="(item, index) in styleList[styleIndex].frameList" :key="index" @click="addFrame(index)">
        <img :src= "item" crossorigin="anonymous">
      </div>
    </div>
  </div>

  <div class="frame">
    <p>贴纸</p>
    <div class="effect-list">
      <div v-for="(item,index) in styleList[styleIndex].markList" :key="index" @click="addMark(index)">
        <img :src="item" crossorigin="anonymous">
      </div>
    </div>
  </div>

  <div class="download">
    <button @click="downloadImage(canvas)">立即下载</button>
  </div>

</template>

<script setup lang="ts">
import {fabric} from 'fabric'
import { onMounted, ref } from 'vue';
import {styleList} from '@/tools/picLists'
import {addOrReplaceLayer,downloadImage} from '@/tools/common'
import {deleteControl} from '@/components/canvas/config'

// const text = new fabric.Text('上传头像')
const isRound = ref(false)
const styleIndex = ref(1)

function upload() {
  let uploadInput = document.getElementById("upload-input")
  uploadInput!.click();
}

  let url = ''
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
  //canvas.add(text)
  }

function drawBackground(){
  // canvas.remove(text)
  fabric.Image.fromURL(
  url,
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEslOn5MqyIs_lH7CFWt9rienrjoEU0VaVwB73zwHFw&s",
  (img: any)=>{
    console.log(img)
    console.log(canvas)
    canvas.setBackgroundImage(
      img,
      canvas.renderAll.bind(canvas),
      {
        scaleX: canvas.width! / img.width, // 计算出图片要拉伸的宽度
        scaleY: canvas.height! / img.height // 计算出图片要拉伸的高度
      }
    )
    canvas.renderAll();
  },{ crossOrigin: 'Anonymous' }
  )
}

function changepic(event:any){
  url = getObjectURL(event.target.files[0]);
  // url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEslOn5MqyIs_lH7CFWt9rienrjoEU0VaVwB73zwHFw&s'
  console.log(url)
  drawBackground()
}

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

function addFrame(idx: number){
  let url = styleList[styleIndex.value].frameList[idx]
  fabric.Image.fromURL(
    url,
    (frameLayer)=>{
      // frameLayer.set({
      // left: canvas.width! / 2,
      // top: canvas.height! / 2
    // })
    frameLayer.setControlVisible('deleteControl', false)
    frameLayer.scaleToWidth(canvas.width!, true)
    frameLayer.name = 'frame'
      //canvas.add(frameLayer)
    addOrReplaceLayer(canvas,frameLayer)
    },{ crossOrigin: 'Anonymous' }
  )
}

function addMark(index: number){
  let url = styleList[styleIndex.value].markList[index]
  fabric.Image.fromURL(
  url,
  (markLayer)=>{
    markLayer.set({
    left: canvas.width! / 2,
    top: canvas.height! / 2
  })
  markLayer.scaleToWidth(canvas.width!, true)
  canvas.add(markLayer)
  },{ crossOrigin: 'Anonymous' }
)
}

onMounted(() => {
  init() // 执行初始化函数
  deleteControl()
})

</script>

<style scoped>
.outer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;

  .wrap{
    box-shadow: 2px 2px 12px 2px rgb(26 94 109 / 30%), 16px 16px 24px 4px rgb(151 219 233 / 40%);
    transition: all 0.24s;

    &.circle {
      border-radius: 50%;
    }
  }

  #c {
    transition: all 0.24s;
    &.circle {
      border-radius: 50%;
    }
  }
}
 .input{
  margin-top: 2%;
  text-align: center;

  #change-style{
    width: 70px;
    height: 40px;
    border-radius: 10px;
    color: cadetblue;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    margin-right: 20px;
  }

  #upload-button{
    width: 70px;
    height: 40px;
    border-radius: 10px;
    color: cadetblue;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
  }
  #upload-input{
   display: none;
  }
 }

 .format{
  display: flex;
  justify-content: center;
  margin: 10px auto;
  > div {
      position: relative;
      padding: 10px 0;
      margin: 0 16px;
      font-size: 20px;
      color: #333;
      transition: all 0.24s;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover {
          color: #ff8f1f;
      }
      &.active {
          color: #ff8f1f;
          font-weight: 600;
      }
      &.active::after {
          position: absolute;
          right: 0;
          bottom: -2px;
          left: 0;
          display: block;
          margin: 0 auto;
          width: 90%;
          height: 3px;
          background: #ff8f1f;
          border-radius: 2px;
          content: "";
      }
    }
}

.tags{
 margin-left: 5px;
}
.frame{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  > p {
    margin-right: 20px;
    font-size: 14px;
    text-align: right;
    flex-shrink: 0;
    font-weight: 600;
  }

  .effect-list {
    /* flex: 1; */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    padding: 8px 0;

    > div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin-right: 12px;
        width: 68px;
        height: 68px;
        background: #ffffff80;
        border-radius: 6px;
        box-shadow: 1px 1px 2px #0000001f;
        transition: all 0.24s;
        flex-shrink: 0;
        cursor: pointer;
        &:hover,
        &.active {
            transform: translateY(-6px);
            box-shadow: 2px 2px 8px 1px #0000001f;
        }
        > img {
            width: 100%;
            object-fit: cover;
        }
      }
      p {
          line-height: 68px;
          font-size: 14px;
          color: #606262;
      }
      /* 隐藏浏览器默认滚动条 */
      &::-webkit-scrollbar {
          height: 6px;
      }
      /* 自定义滑块样式 */
      &::-webkit-scrollbar-thumb {
          background-color: #ff8f1f20;
          border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb:hover,
      &::-webkit-scrollbar-thumb:active {
          background-color: #ff8f1faa;
      }
  }
}
.download{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button{
    width: 70px;
    height: 40px;
    border-radius: 10px;
    color: cadetblue;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
  }
}

</style>