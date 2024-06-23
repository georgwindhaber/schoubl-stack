<script setup lang="ts">

const props = defineProps<{
	title: string
}>()

const emit = defineEmits<{
	(e: 'save'): void
}>()

</script>

<template>
	<div class="w-full">
		<header class="flex justify-between items-center p-3 bg-slate-100 border-b border-slate-300">
			<h1 class="text-xl font-bold">{{ props.title }}</h1>
			<cms-button @click="emit('save')">Save</cms-button>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>