<template>
	
	<view class="mr-auto">
		这里是login{{msg}}
	</view>
</template>

<script setup name="login" lang="ts">
	import { ref } from 'vue';
	
	const msg = ref('登录中')
</script>

<style>
</style>