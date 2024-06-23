<script setup lang="ts">
import type { ContentBlock as ContentBlockType } from '~/types/cms/content-block';
import contentBlock from "./content-block.vue"
import { v4 as uuid } from 'uuid'

const contents = ref<Array<ContentBlockType>>([])


const addBlock = () => {
	contents.value.push({
		id: uuid(),
		type: 'none'
	})
}

const deleteBlock = (index: number) => {
	contents.value = [...contents.value.slice(0, index), ...contents.value.slice(index + 1, contents.value.length)]
}

</script>

<template>
	<div>
		<h3>Content Editor</h3>
		<cms-button @click="addBlock">Add content</cms-button>
		<content-block v-for="(content, index) in contents" :content="content" :key="content.id" :id="content.id"
			@change="contents[index] = $event" @delete="deleteBlock(index)" />

		{{ contents }}
	</div>
</template>