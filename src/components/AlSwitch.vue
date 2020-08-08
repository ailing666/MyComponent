<template>
  <div role="switch" class="my-switch" aria-checked="true">
    <span class="my-switch__core"></span>
  </div>
</template>
<script>
export default {
  name: 'my-switch'
}
</script>
<style lang="less">
.my-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  &.is-disabled {
    opacity: 0.6;
    .my-switch__core {
      cursor: not-allowed;
    }
  }
  .my-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .my-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    border-color: #13ce66;
    background-color: #13ce66;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked .my-switch__core:after {
    left: 100%;
    margin-left: -17px;
  }
}
</style>
