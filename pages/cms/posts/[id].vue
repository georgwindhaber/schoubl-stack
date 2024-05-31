<script setup lang="ts">
import contentEditor from '~/components/cms/content-blocks/content-editor.vue';

definePageMeta({
	layout: 'cms'
})

const route = useRoute()
const post = useState<{ title: string, body: string }>(`post-${route.params.id}`)

await callOnce(`post-${route.params.id}`, async () => {
	post.value = (await $fetch(`/api/posts/${route.params.id}`))
})

const savePost = async () => {
	await $fetch(`/api/posts/${route.params.id}`, {
		method: 'POST', body: post.value
	})
}

</script>

<template>
	<cms-form @save="savePost">
		<label>
			Title
			<input v-if="post" type="text" v-model="post.title" placeholder="title" />
		</label>
		<content-editor />
	</cms-form>
</template>