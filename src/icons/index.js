import Vue from 'vue'
import svgIcon from '@/components/svgIcon'// svg component

// register globally
Vue.component('svg-icon', svgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)