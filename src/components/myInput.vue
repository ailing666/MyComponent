<template>
  <div class="my-input ">
    <input
      :type="$attrs.type"
      :placeholder="$attrs.placeholder"
      autocomplete="off"
      :disabled="$attrs.disabled"
      class="my-input__inner"
      :value="value"
      @input="input"
      @blur="blur"
      @focus="focus"
    />
  </div>
</template>
<script>
export default {
  name: 'my-input',
  inheritAttrs: false,

  props: {
    value: {
      // 支持2中类型
      type: [String, Number]
    }
  },
  methods: {
    input (event) {
      window.console.log(event.target.value)
      this.$emit('input', event.target.value)
    },
    blur (event) {
      this.$emit('blur', event)
    },
    focus (event) {
      this.$emit('focus', event)
    }
  }
}
</script>
<style lang="less">
.my-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  // width: 100%;
  &.my-input-password {
    .my-input__inner {
      padding-right: 30px;
    }
  }
  .my-input__inner {
    -webkit-appearance: none;
    cursor: pointer;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
  &.is-disabled .my-input__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    // placeholder兼容样式处理
    &::-webkit-input-placeholder {
      color: #c0c4cc;
    }
    &::-moz-input-placeholder {
      color: #c0c4cc;
    }
    &::-ms-input-placeholder {
      color: #c0c4cc;
    }
  }
  .iconfont {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    line-height: 40px;
  }
}
</style>
