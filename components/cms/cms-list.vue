<script setup lang="ts">
const posts = await useFetch('/api/posts')
</script>


<template>
	<div class="w-full">
		<header class="flex justify-end p-3 bg-slate-100 border-b border-slate-300">
			<cms-button>Add</cms-button>
		</header>
		<main>
			<ul>
				<li v-for="post in posts.data.value" :key="post.id">
					<cms-link :to="`/cms/posts/${post.id}`"> {{ post.title }}</cms-link>
				</li>
			</ul>
		</main>
	</div>
</template>