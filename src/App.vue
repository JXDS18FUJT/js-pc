<script setup lang="ts">
	console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
	<router-view></router-view>
</template>

<style>
	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	body {

		-webkit-font-smoothing: antialiased;
	}

	picture,
	video,
	svg {
		display: block;
		max-width: 100%;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	#app {
		width: 100%;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;

	}
</style>