<script setup lang="ts">
import type { ContentBlock, ContentBlockTypes } from '~/types/cms/content-block';
import contentBlockImage from './content-block-image.vue';
import contentBlockText from './content-block-text.vue';

const props = defineProps<{
	content: ContentBlock,
}>()

const emit = defineEmits<{
	(e: 'change', content: ContentBlock): void,
	(e: 'delete'): void
}>()


const updateContent = (newContent: Partial<ContentBlock>, type: ContentBlockTypes) => {
	emit('change', { ...props.content, ...newContent, type: type })
}

</script>

<template>
	<div>
		<cms-button @click="$emit('delete')">Delete</cms-button>

		<select @change="$emit('change', { ...props.content, type: ($event.target as HTMLSelectElement).value })">
			<option value="none">Please choose a type</option>
			<option value="text">Text</option>
			<option value="image">Image</option>
		</select>

		<content-block-text v-if="props.content.type === 'text'" :content="props.content"
			@change="(event) => updateContent(event, 'text')" />
		<content-block-image v-if="props.content.type === 'image'" :content="props.content"
			@change="(event) => updateContent(event, 'image')" />

		{{ props.content.type }}
	</div>
</template>