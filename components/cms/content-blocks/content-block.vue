<script setup lang="ts">
import type { ContentBlock, ContentBlockTypes } from '~/types/cms/content-block';

defineProps<{
	content: ContentBlock,
}>()

defineEmits<{
	(e: 'delete'): void
}>()

const activeType: ContentBlockTypes = "text"

</script>

<template>
	<div>
		<cms-button @click="$emit('delete')">Delete</cms-button>

		<select v-model="activeType">
			<option value="text">Text</option>
			<option value="image">Image</option>
		</select>

		{{ activeType }}
	</div>
</template>