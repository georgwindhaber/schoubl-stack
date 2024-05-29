<script setup lang="ts">
const posts = await useFetch('/api/posts')

const addPost = async () => {
	const post = await $fetch('/api/posts', {
		method: 'POST',
	})

	navigateTo(`/cms/posts/${post[0].id}`)
}

const deletePost = async (id: number) => {
	await $fetch(`/api/posts/${id}`, {
		method: 'DELETE',
	})

	posts.execute()
}

</script>


<template>
	<div class="w-full">
		<header class="flex justify-end p-3 bg-slate-100 border-b border-slate-300">
			<cms-button @click="addPost">Add</cms-button>
		</header>
		<main>
			<ul class="p-5">
				<li v-for="post in posts.data.value" :key="post.id" class="even:bg-slate-50 hover:bg-slate-100  p-3">
					<cms-link :to="`/cms/posts/${post.id}`">
						<span v-if="post.title">{{ post.title }}</span>
						<span v-else class="italic text-slate-800">No title</span>
						<cms-button class="ml-3">Edit</cms-button>
					</cms-link>
					<cms-button class="ml-3" @click="deletePost(post.id)">Delete</cms-button>
				</li>
			</ul>
		</main>
	</div>
</template>