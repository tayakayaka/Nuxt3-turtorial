<script lang="ts" setup>

</script>

<template>
  <div>トップページです☆</div>
  <AppAlert>
    エラーメッセージです
  </AppAlert>
  <CommonAppPrimary>
    OKです
  </CommonAppPrimary>
  <div class="header">
    My Nuxt App
  </div>
  <img src="/images/symba.png" alt="symba">
</template>

<style lang="scss" scoped>
img {
  width: 200px;
  height: auto; /* アスペクト比を維持 */
}
.header{
  background-color:$primary;
  color:$secondary;
  padding: 20px;
  text-align: center;
}
</style>
