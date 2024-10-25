<template>

	<view class="mr-auto">
		这里是login{{msg}}
		<hello></hello>
		<hex></hex>
		<hex1></hex1>
	</view>
</template>

<script setup name="login" lang="ts">
	import { ref } from 'vue';

	const msg = ref('登录中')
</script>

<style>
</style>