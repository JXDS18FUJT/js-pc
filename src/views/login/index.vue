<template>

	<view class="mr-auto text-black text-26">
		这里是login{{msg}}
	</view>
</template>

<script setup name="login" lang="ts">
	import { ref } from 'vue';

	const msg = ref('登录中')
	defineOptions({
		name:'login'
	})
</script>

<style lang="less">
</style>