import Icon from './IconFont.vue'
let installed = false

const install = {
    installed: false,
    install(Vue, options = {}) {
        if (this.installed) return
        this.installed = true
        Vue.component('icon', Icon)
    }
}

Icon.install = install.install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Icon)
}

export default Icon
