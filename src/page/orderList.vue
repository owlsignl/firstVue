<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
<<<<<<< HEAD
        <v-selection :selections="products" @on-change="getProduct"></v-selection>
=======
        <v-selection :selections="products"></v-selection>
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
      </div>

      <div class="order-list-option">
        开始日期：
<<<<<<< HEAD
        <v-date-picker @on-change="timeStart"></v-date-picker>
=======
        <v-date-picker v-model="timeStart"></v-date-picker>
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
      </div>

      <div class="order-list-option">
        结束日期：
<<<<<<< HEAD
        <v-date-picker @on-change="timeEnd"></v-date-picker>
=======
        <v-date-picker v-model="timeEnd"></v-date-picker>
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
<<<<<<< HEAD
            <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{head.label}}</th>
=======
            <th v-for="head in tableHeads">{{head.label}}</th>
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
        </tr>
        <tr v-for="item in tableData">
            <td v-for="head in tableHeads">{{item[head.key]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '../components/base/selection'
<<<<<<< HEAD
import VDatePicker from '../components/base/datepicker'
=======
import VDatePicker from 'vue-datepicker-local'
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
export default {
  components: {
      VSelection,
      VDatePicker
  },
  data: function(){
      return {
          query: '',
          tableData: [],
<<<<<<< HEAD
          startDate: '',
          endDate: '',
          productId: 0,
          onoff: true,
          products: [
              {
                label: '数据统计',
                value: 0
              },
              {
                label: '数据预测',
                value: 1
              },
              {
                label: '流量分析',
                value: 2
              },
              {
                label: '广告发布',
                value: 3
              }
          ],
          tableHeads: [
            {
              label: '订单号',
              key: 'orderId'
            },
            {
              label: '购买产品',
              key: 'product'
            },
            {
              label: '版本类型',
              key: 'version'
            },
            {
              label: '有效时间',
              key: 'period'
            },
            {
              label: '购买日期',
              key: 'date'
            },
            {
              label: '数量',
              key: 'buyNum'
            },
            {
              label: '总价',
              key: 'amount'
            }
          ],
      }
  },
  watch:{
    query: function(){
      this.getTableData();
    }
  },
  methods: {
      timeStart: function(date){
        this.startDate = date;
        this.getTableData();
      },
      timeEnd: function(date){
        this.endDate = date;
        this.getTableData();
      },
      getProduct: function(data){
        this.productId = data.value;
        this.getTableData();
      },
      getTableData: function(){
          let data = {
            query: this.query,
            startDate: this.startDate,
            endDate: this.endDate,
            productId: this.productId
          };
          this.$http.post('/api/getOrderList',data)
          .then((res)=>{
            this.tableData = res.data.list;
          },(err)=>{
              console.log(err);
          })
      },
      changeOrderType: function(head) {
        console.log(head.active)
        if(head.active){
          this.tableData.sort((obj1,obj2)=>{
            if(obj1[head.key] < obj2[head.key]){
                return -1;
            }else{
              return 1;
            }
          });
          head.active = false;
        }else{
           this.tableData.sort((obj1,obj2)=>{
            if(obj1[head.key] > obj2[head.key]){
                return -1;
            }else{
              return 1;
            }
          });
          head.active = true;
          }
        
      }
  },
  mounted: function(){
     this.getTableData();
=======
          timeStart: new Date(),
          timeEnd: new Date(),
          products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      }
  },
  methods: {
      getTableData: function(){
          this.$http.get('/api/getOrderList')
          .then((res)=>{
            this.tableData = res.data.list;
            console.log(this.tableData)
          },(err)=>{
              console.log(err);
          })
      }
  },
  mounted: function(){
      this.getTableData();
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
  }
}
</script>

<style>
<<<<<<< HEAD
      .order-wrap {
        width: 1200px;
        min-height: 800px;
        margin: 20px auto;
        overflow: hidden;
      }
      .order-wrap h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .order-query {
        height: 25px;
        line-height: 25px;
        border: 1px solid #e3e3e3;
        outline: none;
        text-indent: 10px;
      }
      .order-list-option {
        display: inline-block;
        padding-left: 15px;
      }
      .order-list-option:first-child {
        padding-left: 0;
      }
      .order-list-table {
        margin-top: 20px;
      }
      .order-list-table table {
        width: 100%;
        background: #fff;
      }
      .order-list-table td,
      .order-list-table th {
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 10px 0;
      }
      .order-list-table th {
        background: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
        cursor: pointer;
      }
      .order-list-table th.active {
        background: #35495e;
      }
=======
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
>>>>>>> dab2736b7111ee909a8773fa4ee22719f95ead65
</style>
