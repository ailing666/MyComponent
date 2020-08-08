<template>
  <div class="my-dialog__wrapper">
    <div class="my-dialog">
      <!-- 头部 -->
      <div class="my-dialog__header">
        <span class="my-dialog__title">头部</span>
        <!-- 关闭按钮 -->
        <button type="button" aria-label="Close" class="my-dialog__headerbtn">
          <i class="iconfont icon-close"></i>
        </button>
      </div>
      <!-- 主体 -->
      <div class="my-dialog__body">
        这是一段信息
      </div>
      <!-- 脚部 -->
      <div class="my-dialog__footer">
        底部
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-dialog'
}
</script>
<style lang="less">
.my-dialog__wrapper {
  z-index: 2011;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  .my-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 50%;
    .my-dialog__header {
      padding: 20px 20px 10px;
      .my-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .my-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .iconfont {
          color: #909399;
        }
      }
    }
    .my-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .my-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>
