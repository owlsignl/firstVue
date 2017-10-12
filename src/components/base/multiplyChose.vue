<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item,index) in selections"
          :title="item.label"
          :class="{active:check(index)}"
          @click="chosenSelection(index)"
          >{{item.label}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props:{
      selections: {
          type: Array,
          default: [{
              label: 'test',
              value: 0
          }]
      }
  },
  data:function(){
      return {
          nowIndexs: [0]
      }
  },
  methods:{
      check:function(index){
          return this.nowIndexs.indexOf(index) !== -1;
      },
      chosenSelection: function(index){
          var that = this;
          if(this.nowIndexs.indexOf(index) === -1){
              this.nowIndexs.push(index);
          }else{
              this.nowIndexs.splice(this.nowIndexs.indexOf(index),1);
          }
          let nowArray = this.nowIndexs.map(function(item){
              return that.selections[item];
          });
      }
  }
}
</script>

<style>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
