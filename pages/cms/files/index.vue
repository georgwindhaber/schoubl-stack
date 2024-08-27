<script setup lang="ts">
definePageMeta({
  layout: "cms",
});

// handleFileInput can handle multiple files
const { handleFileInput, files } = useFileStorage();

const fileDb = ref(await $fetch("/api/files"));

const submit = async () => {
  await $fetch("/api/files", {
    method: "POST",
    body: {
      files: files.value,
    },
  });
};

const handleDeleteFile = async (fileId: string) => {
  await $fetch(`/api/files/${fileId}`, {
    method: "DELETE",
  });
  fileDb.value = fileDb.value.filter((file) => file.fileId !== fileId);
};
</script>

<template>
  <main class="w-full">
    <section class="flex flex-col bg-slate-200 rounded-2xl m-3 p-3 gap-3">
      <h2 class="font-bold text-xl">Upload</h2>

      <div class="flex justify-between">
        <input
          type="file"
          @input="handleFileInput"
          class="bg-slate-100 rounded-lg"
        />
        <cms-button @click="submit">submit</cms-button>
      </div>
    </section>

    <section class="flex flex-col bg-slate-200 rounded-2xl m-3 p-3 gap-3">
      <h2 class="font-bold text-xl">Files</h2>

      <ul class="flex flex-col gap-3">
        <li v-for="file in fileDb" :key="file.id">
          <div class="flex flex-col justify-between">
            <div>{{ file.displayName }} - {{ file.fileId }}</div>
            <div class="border border-slate-400">{{ file.localPath }}</div>
            <img :src="file.fileUrl" class="max-w-12" />
            <cms-button @click="handleDeleteFile(file.fileId)">
              delete
            </cms-button>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
