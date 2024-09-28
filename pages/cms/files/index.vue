<script setup lang="ts">
import { useFilesStore } from "~/stores/files";

definePageMeta({
  layout: "cms",
});

// handleFileInput can handle multiple files
const { handleFileInput, files } = useFileStorage();

const filesStore = useFilesStore();

const fileDb = ref(await $fetch("/api/files"));

const submit = async () => {
  fileDb.value = await $fetch("/api/files", {
    method: "POST",
    body: {
      files: files.value,
    },
  });

  filesStore.fetchFiles();
};

const handleDeleteFile = async (fileId: string) => {
  fileDb.value = fileDb.value.filter((file) => file.fileId !== fileId);
  fileDb.value = await $fetch(`/api/files/${fileId}`, {
    method: "DELETE",
  });
};
</script>

<template>
  <main class="w-full">
    <section class="flex flex-col bg-slate-200 rounded-2xl m-3 p-3 gap-3">
      <h2 class="font-bold text-xl">Upload</h2>

      <div class="flex justify-between">
        <input
          type="file"
          class="bg-slate-100 rounded-lg"
          @input="handleFileInput"
        />
        <cms-button @click="submit">submit</cms-button>
      </div>
    </section>

    <section class="flex flex-col bg-slate-200 rounded-2xl m-3 gap-3">
      <h2 class="font-bold text-xl p-3">Files</h2>

      <ul class="flex flex-col gap-3">
        <li
          v-for="file in fileDb"
          :key="file.id"
          class="flex justify-between items-center hover:bg-slate-300 p-3 rounded-xl"
        >
          <img :src="file.fileUrl" class="max-w-12" />
          {{ file.displayName }}
          <cms-button @click="handleDeleteFile(file.fileId)">
            delete
          </cms-button>
        </li>
      </ul>
    </section>
  </main>
</template>
