import { defineStore } from "pinia";
import axios from "../plugins/axios.js";

export const useSprayingStore = defineStore("sprayingsitem", {
    state: () => ({
        items: [],
    }),
    actions: {
        async fetchItems() {
            const response = await axios.get("/api/sprayings");
            return response.data.data;
        },
        async createItem(data) {
            await axios.post("/api/sprayings", data);
        },
        async updateItem(id, data) {
            await axios.put(`/api/sprayings/${id}`, data);
        },
        async deleteItem(item) {
            await axios.delete(`/api/sprayings/delete`,
                {
                    data:
                        {
                            id: item.id,
                            comment: item.comment,
                            date: item.date
                        }
            });
        },
    },
});
