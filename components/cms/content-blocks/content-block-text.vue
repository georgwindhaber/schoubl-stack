<script setup lang="ts">
const props = defineProps<{
	content: ContentBlock,
}>()

defineEmits<{
	change: [{
		text: string
	}]
}>()
</script>


<template>
	<input type="text" :value="props.content.text" @change="$emit('change', { text: $event.target?.value })" />
</template>