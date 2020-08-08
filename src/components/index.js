// 导入组件
import AlLink from '@/components/AlLink.vue'
import AlButton from '@/components/AlButton.vue'
import AlInput from '@/components/AlInput.vue'
import AlSwitch from '@/components/AlSwitch.vue'
import AlFormItem from '@/components/AlFormItem.vue'
import AlForm from '@/components/AlForm.vue'
import AlContainer from '@/components/AlContainer.vue'
import AlDialog from '@/components/AlDialog.vue'
// Vue构造函数
export default function (Vue) {
  // 注册组件 Al-link
  Vue.component(AlLink.name, AlLink)
  // 注册组件 Al-button
  Vue.component(AlButton.name, AlButton)
  // 注册组件 Al-input
  Vue.component(AlInput.name, AlInput)
  // 注册组件 Al-switch
  Vue.component(AlSwitch.name, AlSwitch)
  // 注册组件 Al-form-item
  Vue.component(AlFormItem.name, AlFormItem)
  // 注册组件 Al-form
  Vue.component(AlForm.name, AlForm)
  // 注册组件 Al-container
  Vue.component(AlContainer.name, AlContainer)
  // 注册组件 Al-dialog
  Vue.component(AlDialog.name, AlDialog)
}
