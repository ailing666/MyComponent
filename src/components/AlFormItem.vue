<template>
  <div class="my-form-item">
    <label class="my-form-item__label" style="width: 80px;">文本</label>
    <div class="my-form-item__content" style="margin-left: 80px;">
      内容
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-form-item'
}
</script>
<style lang="less">
.my-form-item {
  margin-bottom: 22px;
  &::before {
    display: table;
    content: '';
  }
  // 文本
  .my-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  // 内容
  .my-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before {
      display: table;
      content: '';
    }
  }
}
</style>
