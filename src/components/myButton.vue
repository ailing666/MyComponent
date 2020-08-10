<template>
  <button
    class="my-button "
    @click="click"
    :class="[type ? `my-button--${type}` : type, { 'is-disabled': disabled }]"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    type: {
      type: String,
      defaule: '',
      validator (value) {
        return ['', 'primary', 'success', 'warning', 'danger', 'info'].includes(
          value
        )
      }
    },
    disabled: {
      type: Boolean,
      // 默认启用
      default: false
    }
  },
  methods: {
    click (event) {
      this.$emit('btnClick', event)
    }
  }
}
</script>
<style lang="less">
.my-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:focus,
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  // 禁用状态
  &.is-disabled,
  :hover.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  // 朴素按钮的状态
  &.is-plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
  // 主要按钮的样式
  &.my-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    // hover状态
    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    // 禁用状态
    &.is-disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
    // 朴素状态
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
      &.is-disabled {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
      }
    }
  }
  // 成功按钮的样式
  &.my-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    // hover状态
    &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-disabled {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
    // 朴素状态
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
      &.is-disabled {
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;
      }
    }
  }
  // 信息按钮的样式
  &.my-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &.is-disabled {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
    // 朴素状态
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
      &.is-disabled {
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
      }
    }
  }
  // 警告按钮的样式
  &.my-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-disabled {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
    // 朴素状态
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
      }
      &.is-disabled {
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8;
      }
    }
  }
  // 危险按钮的样式
  &.my-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
    // 朴素状态
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
      &.is-disabled {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
      }
    }
  }

  // 圆角按钮
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  // 兄弟的间隙
  & + .my-button {
    margin-left: 10px;
  }
}
</style>
