<template>

	<view class="mr-auto text-black text-26">
		<text>这里是login{{msg}}</text>
		<view id="wxlogin" class=""></view>
	</view>
</template>

<script setup name="login" lang="ts">
	import { onMounted, ref } from 'vue';
	onMounted(() => {
		const wxloginDom = document.getElementById("wxlogin")
		var obj = new WxLogin({
			self_redirect: true,
			id: "wxlogin",
			appid: "wx37cfd0fd981447d9",
			scope: "snsapi_login",
			redirect_uri: encodeURI("https://ct.xmze.net/"),
			state: "state",
			style: "black",//二维码黑白风格
			href: ""
		});
	})
	const msg = ref('登录中')
	defineOptions({
		name: 'login'
	})
</script>

<style lang="less">
</style>