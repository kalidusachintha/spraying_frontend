<template>
  <div>
    <Navigation></Navigation>
    <h2>Items</h2>
    <RouterLink to="/create">Create Sprayings</RouterLink>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Comment</th>
          <th>Products</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.date }}</td>
        <td>{{ item.comment }}</td>
        <td>{{ item.products.join(', ') }}</td>
        <td>
          <RouterLink :to="`/edit/${item.id}`" class="btn btn-edit">Edit</RouterLink>
          <button @click="deleteItem(item)" class="btn btn-delete">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSprayingStore } from "../stores/sprayings";
import Navigation from "@/components/Navigation.vue";

const itemStore = useSprayingStore();
const items = ref();

onMounted(async () => {
  items.value = await itemStore.fetchItems();
});

const deleteItem = async (item) => {
  await itemStore.deleteItem(item);
  items.value = await itemStore.fetchItems();
};
</script>
<style scoped>
.btn {
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 5px;
}

.btn-edit {
  background: #28a745;
  color: white;
  margin-right: 5px;
}

.btn-delete {
  background: #dc3545;
  color: white;
}
</style>
