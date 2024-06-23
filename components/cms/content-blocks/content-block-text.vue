<script setup lang="ts">
defineEmits<{
	change: [{
		text: string
	}]
}>()
</script>


<template>
	<input type="text" @change="$emit('change', { text: $event.target?.value })" />
</template>