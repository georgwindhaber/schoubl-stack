import { defineStore } from "pinia";
import { files } from "~/server/database/schema";

export const useFilesStore = () => {
  const innerStore = defineStore({
    id: "files",
    state: () => ({
      files: null as (typeof files.$inferSelect)[] | null,
    }),
    actions: {
      async fetchFiles() {
        this.files = await $fetch(`/api/files`);
      },
    },
  });

  const store = innerStore();
  if (!store.files) {
    store.fetchFiles();
  }

  return store;
};
