import { defineStore } from "pinia";
import type { ContentBlock } from "~/types/cms/content-block";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    id: null as number | null,
    title: "",
    content: [] as ContentBlock[],
  }),
  actions: {
    async fetchPost(id: string) {
      const response = await $fetch(`/api/posts/${id}`);

      this.id = response.id;
      this.title = response.title;
      this.content = JSON.parse(response.body) as ContentBlock[];

      return true;
    },
    async savePost() {
      await $fetch(`/api/posts/${this.id}`, {
        method: "POST",
        body: {
          id: this.id,
          title: this.title,
          body: JSON.stringify(this.content),
        },
      });
    },
  },
});
