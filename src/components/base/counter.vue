<template>
    <div class="counter-component">
      <div class="counter-btn" @click="minus"> - </div>
      <div class="counter-show">
        <input type="text" v-model="number" @focus="clear" @blur="save" @keyup="fixNumber">
      </div>
      <div class="counter-btn" @click="add"> + </div>
    </div>
</template>

<script>
export default {
  props: {
      max: {
          type: Number,
          default:5
      },
      min: {
          type: Number,
          default: 1
      }
  },
  data: function(){
      return {
          number: this.min,
          sNumber: 0
      }
  },
  watch:{
    number:function(){
      this.$emit('on-change',this.number);
    }
  },
  methods: {
    add: function(){
      if(this.number < this.max){
         this.number++;
      }
    },
    minus: function(){
      if(this.number > this.min){
        this.number--;
      }
    },
    fixNumber: function(){
      let fix;
      if(typeof this.number === 'string') {
        fix = Number(this.number.replace(/\D/g,''));
      }else{
        fix = this.number;
      }
      if(this.number < this.min) {
        fix = this.min;
      }
      if(this.number > this.max) {
        fix = this.max;
      }
    this.number = fix;
    },
    clear: function(){
      this.sNumber = this.number;
      this.number = '';
    },
    save: function(){
      console.log(1);
      let s;
      if(this.number == 0){
        s = this.sNumber;
      }else{
        s = this.number;
      }
      this.number = s;
    }
  }
}
</script>
 
<style>
 .counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>

