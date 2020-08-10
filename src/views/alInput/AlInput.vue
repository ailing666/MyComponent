<template>
  <div class="al-input">
    <myTem :obj="inputObj.base">
      <template #title>
        基本使用
      </template>
      <template #body>
        <my-input placeholder="占位符"></my-input>
      </template>
      <template #code> </template>
    </myTem>
    <myTem :obj="inputObj.type">
      <template #title>
        输入框类型
      </template>
      <template #body>
        <my-input placeholder="密码框" type="password"></my-input>
        <my-input placeholder="数字" type="number"></my-input>
      </template>
      <template #code> </template>
    </myTem>
    <!-- 是否禁用 -->
    <myTem :obj="inputObj.disabled">
      <template #title>
        是否禁用
      </template>
      <template #body>
        <my-input placeholder="禁用" disabled></my-input>
      </template>
      <template #code> </template>
    </myTem>
    <!-- 双向绑定 -->
    <myTem :obj="inputObj.model">
      <template #title>
        是否禁用
      </template>
      <template #body>
        <my-input v-model="value"></my-input>
      </template>
      <template #code> </template>
    </myTem>
    <myTem :obj="inputObj.blur">
      <template #title>
        失去焦点
      </template>
      <template #body>
        <my-input @blur="blur"></my-input>
      </template>
      <template #code> </template>
    </myTem>
    <myTem :obj="inputObj.focus">
      <template #title>
        获取焦点
      </template>
      <template #body>
        <my-input @focus="focus"></my-input>
      </template>
      <template #code> </template>
    </myTem>
    <h5>Attributes</h5>
    <table border>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>v-model</td>
        <td>双向绑定的数据</td>
        <td>string/number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>输入框占位文本</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>输入框类型</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>-</td>
        <td>False</td>
      </tr>
    </table>
    <h5>事件</h5>
    <table border>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>事件参数</th>
      </tr>

      <tr>
        <td>blur</td>
        <td>失去焦点触发</td>
        <td>事件参数</td>
      </tr>
      <tr>
        <td>focus</td>
        <td>获得焦点触发</td>
        <td>事件参数</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'al-input',
  data () {
    return {
      value: 'asas',
      inputObj: {
        base: `        <my-input placeholder="占位符"></my-input>`,
        type: `        <my-input placeholder="密码框" type="password"></my-input>
        <my-input placeholder="数字" type="number"></my-input>`,
        disabled: `       <my-input placeholder="禁用" disabled></my-input>`,
        model: `        <my-input v-model="value"></my-input>`,
        blur: ` <my-input @blur="blur"></my-input>`,
        focus: ` <my-input @focus="focus"></my-input>`
      }
    }
  },
  methods: {
    input (value) {
      this.value = value
    },
    blur (event) {
      window.console.log(event)
    },
    focus (event) {
      window.console.log(event)
    }
  }
}
</script>

<style></style>
