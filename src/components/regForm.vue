<template>
    <div class="login-form">
    <div class="g-form">
      <div class="g-form-line" v-for="formLine in formData">
        <span class="g-form-label">{{ formLine.label }}：</span>
        <div class="g-form-input">
          <input type="text" 
          :placeholder="formLine.name">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
      return {
          formData: [
              {
                  label: '用户名',
                  name: '请输入邮箱'
              },
              {
                  label: '密码',
                  name: '请输入密码'
              }
          ]
      }
  }
}
</script>

<style>

</style>
