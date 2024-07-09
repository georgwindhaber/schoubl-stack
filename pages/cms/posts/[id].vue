<script setup lang="ts">
import contentEditor from '~/components/cms/content-blocks/content-editor.vue';
import { usePostStore } from '~/stores/post';

definePageMeta({
	layout: 'cms'
})

const route = useRoute()
const postStore = usePostStore()

const { title, id } = storeToRefs(postStore)

await useAsyncData(`post-${route.params.id}`, () => postStore.fetchPost(route.params.id as string))

</script>

<template>
	<cms-form>
		<content-editor />
	</cms-form>
</template>