<template>
  <div>
    <h2>Items</h2>
    <RouterLink to="/create">Create New</RouterLink>
    <table>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.date }}</td>
        <td>{{ item.comment }}</td>
        <td>{{ item.products.join(', ') }}</td>
        <td>
          <RouterLink :to="`/edit/${item.id}`">Edit</RouterLink>
          <button @click="deleteItem(item)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSprayingStore } from "../stores/sprayings";

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
