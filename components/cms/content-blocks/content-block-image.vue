<script setup lang="ts">
const emit = defineEmits<{
	(e: 'change', url: string): void,
}>()

const files = ref<File[]>([])

</script>

<template>
	<!-- <input type="file" accept="image/*" :v-model="files" /> -->
	<input type="url" v-model="props.content.url" @input="emit('change', props.content)" />
</template>