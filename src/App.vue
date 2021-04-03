<template>
  <div id="app">
    <div id="logo">
      <img src="../static/logo.png" alt="">
    </div>
    <div class="below">
    <div class="title">
      大宝贝助手
    </div>
    <div class="name">
      {{massage}}
      <span id="cancel" v-if=" !(this.file === '') " @click="cancel">x</span>
    </div>
    <div class="buttonlist">
      <button id="button1" onclick="upload.click()">
        选择文件
      </button>
      <input type="file" name="upload" id="upload" style="display: none" @change="addFile" multiple="multiple" />
      <button id="button2" @click="submit">
        上传文件
      </button>
      <div class="progress" v-if="num&&pro !== 100" >
        正在上传第{{num}}个文件
        <div class="pro2" :style="'width:'+ pro + '%'">
            {{pro}}%
        </div>
      </div>
      <div class="pro2" :style="'width:'+ pro/2 + '%'" v-if="pro === 100" style="margin: 20px">
        上传成功
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      massage:'选择要上传的文件',
      file:'',
      pro:0,
      num:0
    }
  },
  methods:{
    addFile(e){
      let fileList = e.target.files
      this.file = fileList
      this.massage = fileList[0].name
      console.log(this.file)
      if (fileList.length >= 2){
        this.massage = this.massage + ' 等' + fileList.length + '个文件'
      }
    },
    cancel(){
      this.file = ''
      this.massage = '选择要上传的文件'
    },
    submit() {
      for (let i = 0; i <= this.file.length; i++) {
        this.num = i;
        let formData = new FormData()
        formData.append('file', this.file[i])
        let config = {
          onUploadProgress: (progressEvent) => {
            this.pro = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          }
        }
        axios.post('http://localhost:3000/upload', formData, config)
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.below{
  box-shadow: rgb(121, 119, 119) 2px 1px 8px;
  border-radius: 0 0 20px 20px;
}
button{
  outline:none;
}
#cancel{
  color: red;
  left: 5px;
  position: relative;
}
#cancel:hover{
  cursor: pointer;
}
#logo{
  border-radius: 20px 20px 0 0;
}
@media screen and (max-width: 450px) {
  /*logo部分*/
  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(49, 49, 49, 1);
    width: 100vw;
    height: 40vh;
  }
  #logo img {
    width: 25%;
  }
  /*下半部分*/
  .title{
    display: inline-block;
    height: 10vh;
    text-align: center;
    width: 100vw;
    line-height: 10vh;
  }
  .name{
    display: inline-block;
    height: 10vh;
    text-align: center;
    width: 100vw;
    line-height: 8vh;
    color: rgb(95 187 221);
    font-size: 3px;
  }
  .buttonlist{
    height: 40vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #button1{
    width: 50vw;
    height: 9vh;
    background: rgb(96 169 193);
    border-radius: 20px;
    color: white;
    font-size: 6vw;
    margin: 1vh;
  }
  #button1:hover{
    background: skyblue;
  }
  #button2{
    width: 50vw;
    height: 9vh;
    background: rgb(91 193 137);
    border-radius: 20px;
    color: white;
    font-size: 6vw;
  }
  #button2:hover{
    background: lightgreen;
  }
  .progress{
    width: 50%;
  }
  .pro2{
    background: lightskyblue;
    height: 4vh;
    text-align: center;
    line-height: 4vh;
  }
}
@media screen and (min-width: 1400px) {

  /*logo部分*/
  #app {
    width: 25vw;
    height: 600px;
    position: relative;
    left: 35vw;
    top: 10vh;
  }

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(49, 49, 49, 1);
    width: 100%;
    height: 40%;
  }

  #logo img {
    width: 25%;
  }

  /*下半部分*/
  .title {
    display: inline-block;
    height: 60px;
    text-align: center;
    width: 100%;
    line-height: 10vh;
  }

  .name {
    display: inline-block;
    height: 60px;
    text-align: center;
    width: 100%;
    line-height: 8vh;
    color: rgb(95 187 221);
    font-size: 3px;
  }

  .buttonlist {
    height: 252px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #button1 {
    width: 50%;
    height: 55px;
    background: rgb(96 169 193);
    border-radius: 20px;
    color: white;
    font-size: 120%;
    margin: 15px;
  }

  #button1:hover {
    background: skyblue;
  }
  #button2 {
    width: 50%;
    height: 55px;
    background: rgb(91 193 137);
    border-radius: 20px;
    color: white;
    font-size: 120%;
  }
  #button2:hover{
    background: lightgreen;
  }
  .progress{
    width: 50%;
  }
  .pro2{
    background: lightskyblue;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
}
@media screen and (min-width: 450px) and (max-width: 1400px){
  /*logo部分*/
  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(49, 49, 49, 1);
    width: 100vw;
    height: 40vh;
  }
  #logo img {
    height: 60%;
  }
  /*下半部分*/
  .title{
    display: inline-block;
    height: 10vh;
    text-align: center;
    width: 100vw;
    line-height: 10vh;
    font-size: 30px;
  }
  .name{
    display: inline-block;
    height: 10vh;
    text-align: center;
    width: 100vw;
    line-height: 8vh;
    color: rgb(95 187 221);
    font-size: 20px;
  }
  .buttonlist{
    height: 40vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #button1{
    width: 50vw;
    height: 10vh;
    background: rgb(96 169 193);
    border-radius: 20px;
    color: white;
    font-size: 5vw;
    margin: 1vh;
  }
  #button1:hover{
    background: skyblue;
  }
  #button2{
    width: 50vw;
    height: 10vh;
    background: rgb(91 193 137);
    border-radius: 20px;
    color: white;
    font-size: 5vw;
  }
  #button2:hover{
    background: lightgreen;
  }
  .progress{
    width: 50%;
  }
  .pro2{
    background: lightskyblue;
    height: 5vh;
    text-align: center;
    line-height: 5vh;
  }
}
</style>
