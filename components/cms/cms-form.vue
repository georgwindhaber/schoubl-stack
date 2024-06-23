<script setup lang="ts">

const postStore = usePostStore()
const { title } = storeToRefs(postStore)

const emit = defineEmits<{
	(e: 'save'): void
}>()

</script>

<template>
	<div class="w-full">
		<header class="flex justify-between items-center p-3 gap-5 bg-slate-100 border-b border-slate-300">
			<input type="text"
				class="flex-1 text-xl font-bold bg-transparent border border-transparent hover:border-slate-400"
				v-model="title" />
			<cms-button @click="emit('save')">Save</cms-button>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>