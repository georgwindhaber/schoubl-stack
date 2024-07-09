<script setup lang="ts">
import type { ContentBlock as ContentBlockType } from '~/types/cms/content-block';
import contentBlock from "./content-block.vue"
import { v4 as uuid } from 'uuid'

const postStore = usePostStore()
const { content } = storeToRefs(postStore)


const addBlock = () => {
	content.value.push({
		id: uuid(),
		type: 'none'
	})
}

const deleteBlock = (index: number) => {
	content.value = [...content.value.slice(0, index), ...content.value.slice(index + 1, content.value.length)]
}

</script>

<template>
	<div>
		<cms-button @click="addBlock">Add content</cms-button>
		<content-block v-for="(block, index) in content" :content="block" :key="block.id" :id="block.id"
			@change="content[index] = $event" @delete="deleteBlock(index)" />

		{{ content }}
	</div>
</template>