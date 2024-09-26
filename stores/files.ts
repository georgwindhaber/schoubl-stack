import { defineStore } from "pinia";
import { files } from "~/server/database/schema";

export const useFilesStore = defineStore({
  id: "files",
  state: () => ({
    files: [] as (typeof files.$inferSelect)[],
  }),
  actions: {
    async fetchFiles() {
      this.files = await $fetch(`/api/files`);
    },
  },
});
