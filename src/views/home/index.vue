<template>
	<view class="mr-auto">
		这里是home{{msg}}
	</view>
</template>

<script setup name="home" lang="ts">
import { ref } from 'vue';
	
	const msg = ref('hello')

</script>

<style scoped>
</style>