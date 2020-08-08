// 导入组件
import myLink from '@/components/myLink.vue'
import myButton from '@/components/myButton.vue'
import myInput from '@/components/myInput.vue'
import mySwitch from '@/components/mySwitch.vue'
import myFormItem from '@/components/myFormItem.vue'
import myForm from '@/components/myForm.vue'
import myContainer from '@/components/myContainer.vue'
import myDialog from '@/components/myDialog.vue'

// Vue构造函数
export default function (Vue) {
  // 注册组件 my-link
  Vue.component(myLink.name, myLink)
  // 注册组件 my-button
  Vue.component(myButton.name, myButton)
  // 注册组件 my-input
  Vue.component(myInput.name, myInput)
  // 注册组件 my-switch
  Vue.component(mySwitch.name, mySwitch)
  // 注册组件 my-form-item
  Vue.component(myFormItem.name, myFormItem)
  // 注册组件 my-form
  Vue.component(myForm.name, myForm)
  // 注册组件 my-container
  Vue.component(myContainer.name, myContainer)
  // 注册组件 my-dialog
  Vue.component(myDialog.name, myDialog)
}
