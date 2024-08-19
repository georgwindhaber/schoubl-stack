<script setup lang="ts">
definePageMeta({
  layout: "cms",
});

// const files = await useFetch('/api/files')

// handleFileInput can handle multiple files
const { handleFileInput, files } = useFileStorage();

const submit = async () => {
  const response = await $fetch("/api/files", {
    method: "POST",
    body: {
      files: files.value,
    },
  });
};
</script>

<template>
  <div>Files {{ files }}</div>

  <input type="file" @input="handleFileInput" />
  <button @click="submit">submit</button>
</template>
