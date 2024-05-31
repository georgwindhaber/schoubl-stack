<script setup lang="ts">
const emit = defineEmits<{
	(e: 'save'): void
}>()

</script>

<template>
	<div class="w-full">
		<header class="flex justify-end p-3 bg-slate-100 border-b border-slate-300">
			<cms-button @click="emit('save')">Save</cms-button>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>