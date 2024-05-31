<script setup lang="ts">
definePageMeta({
	layout: 'cms'
})

const route = useRoute()
const post = useState<{ title: string, body: string }>(`post-${route.params.id}`)

await callOnce(`post-${route.params.id}`, async () => {
	post.value = (await $fetch(`/api/posts/${route.params.id}`))[0]
})

const savePost = async () => {
	await $fetch(`/api/posts/${route.params.id}`, {
		method: 'POST', body: post.value
	})
}

</script>

<template>
	<cms-form @save="savePost">
		{{ post }}
		<label>
			Title
			<input v-if="post" type="text" v-model="post.title" placeholder="title" />
		</label>
		<label>
			Body
			<input v-if="post" type="text" v-model="post.body" />
		</label>
	</cms-form>
</template>