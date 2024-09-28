<script setup lang="ts">
const emit = defineEmits<{
  (e: "change", url: string): void;
}>();

const files = useFilesStore();
</script>

<template>
  <select @change="$emit('change', ($event.target as HTMLSelectElement).value)">
    <option value="none">Please choose an image</option>
    <option
      v-for="file in files.files"
      :key="file.id"
      :value="file.displayName"
    >
      {{ file.displayName }}
    </option>
  </select>
</template>
