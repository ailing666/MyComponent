<template>
  <!-- 
   跳转链接href:在子组件标签上直接传入
   后备插槽:传入文字就用传入的文字,否则显示默认文字
   颜色:通过切换拼接类名实现
   下划线:通过boolean值切换显示或隐藏
  -->
  <a
    href="#"
    class="my-link my-link--primary "
    :class="[{ 'is-underline': underline }, `my-link--${type}`]"
  >
    <span class="my-link--inner">
      <slot>默认链接</slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'my-link',
  props: {
    // 是否显示下滑线,boolean类型,默认为true
    underline: {
      type: Boolean,
      default: true
    },
    // 样式
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'danger',
          'info'
        ].includes(value)
      }
    }
  }
}
</script>

<style lang="less">
.my-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  // 底部线段
  &.is-underline:hover:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid #409eff;
  }
  // 默认链接样式
  &.my-link--default {
    color: #606266;
    //   hover的 效果
    &:hover {
      color: #409eff;
    }
  }
  // 主要链接样式
  &.my-link--primary {
    color: #409eff;
    &:hover {
      color: #66b1ff;
    }
    &.is-underline:after {
      border-color: #409eff;
    }
  }
  // 成功链接样式
  &.my-link--success {
    color: #67c23a;
    &:hover {
      color: #85ce61;
    }
    &.is-underline:after {
      border-color: #67c23a;
    }
  }
  // 警告链接样式
  &.my-link--warning {
    color: #e6a23c;
    &:hover {
      color: #ebb563;
    }
    &.is-underline:after {
      border-color: #e6a23c;
    }
  }
  // 危险链接
  &.my-link--danger {
    color: #f56c6c;
    &:hover {
      color: #f78989;
    }
    &.is-underline:after {
      border-color: #f56c6c;
    }
  }
  // 信息链接
  &.my-link--info {
    color: #909399;
    &:hover {
      color: #a6a9ad;
    }
    &.is-underline:after {
      border-color: #909399;
    }
  }
  // 兄弟 my-link 设置间隙
  & + .my-link {
    margin-left: 5px;
  }
}
</style>
