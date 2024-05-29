<script setup lang="ts">
definePageMeta({
	layout: 'cms'
})
</script>

<template>
	<div>
		{{ $route.params.id }}
	</div>
</template>