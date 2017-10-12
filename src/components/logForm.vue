<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
         v-model="userNameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
           v-model="userPasswordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onlogin">登录</a>
        </div>
      </div>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
      return {
          userNameModel: '',
          userPasswordModel: '',
          errorText: ''
      }
  },
  computed: {
      userErrors: function(){
          let errorText,status,re
          re = /\w+@[0-9a-z]+(\.[a-z]+){1,3}/;
          if(re.test(this.userNameModel)){
                  status = true;
                  errorText = '邮箱输入正确';
          }else{
             status = false;
             errorText = '邮箱格式错误';
          }
          if(!this.userFlag){
            errorText = '';
            this.userFlag = true;
          }
          return {
              status,
              errorText 
          }
      },
      passwordError: function(){
          let errorText,status,re
          re = /\w{6,}/;
          if(re.test(this.userPasswordModel)){
            status = true;
            errorText = '密码格式正确';
          }else{
            status = false;
            errorText = '密码格式错误';
          }
          if(!this.passwordFlag){
            errorText = '';
            this.passwordFlag = true;
          }
          return {
            status,
            errorText
          }
      }
  },
  methods: {
      onlogin: function(){
          if(this.userErrors.status && this.passwordError.status){
            this.errorText = '';
            this.$http.get('api/login').
            then((res)=>{
              this.$emit('on-login',res.data);
            },(error)=>{
              console.log(error);
            })
          }else{
            this.errorText = '邮箱或密码输入错误';
          }
      }
  }
}
</script>

<style>

</style>
