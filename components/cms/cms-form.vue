<script setup lang="ts">

const postStore = usePostStore()
const { title, id } = storeToRefs(postStore)

</script>

<template>
	<div class="w-full">
		<header class="flex justify-between items-center p-3 gap-5 bg-slate-100 border-b border-slate-300">
			<span class="font-bold rounded-full bg-slate-200 min-w-5 text-center px-2 py-1 aspect-square">{{ id }}</span>
			<input type="text"
				class="flex-1 text-xl font-bold bg-transparent border border-transparent hover:border-slate-400"
				v-model="title" />
			<cms-button @click="postStore.savePost">Save</cms-button>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>