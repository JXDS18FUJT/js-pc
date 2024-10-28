import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import type { RouteRecordInfo, ParamValue } from 'vue-router'


routes.push({
  path: '/',
  redirect: '/home',
})
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
if (import.meta.hot) {
	handleHotUpdate(router)
}

// manual extension of route types
declare module 'vue-router/auto-routes' {
	export interface RouteNamedMap {
		'custom-dynamic-name' : RouteRecordInfo<
			'custom-dynamic-name',
			'/added-during-runtime/[...path]',
			{ path : ParamValue<true> },
			{ path : ParamValue<false> }
		>
	}
}

export default router