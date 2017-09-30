<template>
  <div class="slide-show" @mouseover="clearInt" @mouseout="runInt">
      <div class="slide-img">
          <a :href="slides[nowIndex].href">
              <transition name="slide-trans">
                  <img v-if="isShow" :src="slides[nowIndex].src" alt="">
              </transition>
              <transition name="slide-trans-old">
                   <img v-if="!isShow" :src="slides[nowIndex].src" alt="">
              </transition>
          </a>
      </div>
      <h2>{{slides[nowIndex].title}}</h2>
      <ul class="slide-pages">
          <li @click="prev">&lt;</li>
          <li v-for="(item,index) in slides" @click="go(index)">
              <span :class="{on:index === nowIndex}">{{index}}</span>
          </li>
          <li @click="next">&gt;</li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        slides: {
        type: Array,
        default: []
        },
        inv:{
            type: Number
        }
    },
    data: function(){
        return {
            nowIndex: 0,
            isShow: true
        }
    },
    computed:{
        prevIndex: function(){
            if(this.nowIndex === 0) {
                return this.slides.length -1;
            }else{
                return this.nowIndex - 1;
            }
        },
        nextIndex: function(){
            if(this.nowIndex === this.slides.length - 1) {
                return 0;
            }else{
                return this.nowIndex + 1;
            }
        }
    },
    methods: {
        go: function(index){
            this.isShow = false;
            setTimeout(()=> {
                this.isShow = true;
                this.nowIndex = index;
            }, 10);
        },
        next: function(){
            this.go(this.nextIndex);
        },
        prev: function(){
            this.go(this.prevIndex);
        },
        runInt: function(){
            var that = this;
            this.timer = setInterval(function(){
                that.go(that.nextIndex);
            },this.inv)
        },
        clearInt: function(){
            clearInterval(this.timer);
        }
    },
    mounted:function(){
        this.runInt();
    }

 }
    
</script>

<style>
.slide-trans-enter-active{
    transition: all .5s;
}
.slide-trans-enter{
    transform: translateX(900px);
}
.slide-trans-old-leave-active{
    transition: all .5s;
}
.slide-trans-old-leave-to{
    transform: translateX(-900px);
}
    .slide-show{
        position: relative;
        margin: 15px 15px 15px 0;
        width: 900px;
        height: 500px;
        overflow: hidden;
    }
    .slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>

