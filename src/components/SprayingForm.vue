<template>
  <div>
  <Navigation></Navigation>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.comment" placeholder="Comment" required />
    <input type="date" v-model="form.date" required />

    <div class="form-group">
      <label for="product">Product</label>
      <select v-model="newProduct">
        <option value="">Select Product</option>
        <option v-for="product in availableProducts" :key="product" :value="product">
          {{ product }}
        </option>
      </select>
      <button type="button" @click="addProduct" class="btn btn-add">Add New Products</button>
    </div>

    <ul class="product-list">
      <li v-for="(product, index) in form.products" :key="index">
        {{ product }} <button type="button" @click="removeProduct(index)" class="btn btn-remove">Remove</button>
      </li>
    </ul>

    <button type="submit" class="btn btn-save">Save</button>
  </form>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useSprayingStore } from '../stores/sprayings';
import { useRouter } from "vue-router";
import Navigation from "@/components/Navigation.vue";

const store = useSprayingStore();
const router = useRouter();
const form = ref({
  comment: '',
  date: '',
  products: [],
});
const newProduct = ref('');
const availableProducts = ref(['Product A', 'Product B', 'Product C', 'Product D']);

const addProduct = () => {
  if (newProduct.value && !form.value.products.includes(newProduct.value)) {
    form.value.products.push(newProduct.value);
    newProduct.value = '';
  }
};

const removeProduct = (index) => {
  form.value.products.splice(index, 1);
};

const handleSubmit = async () => {
  const data = { ...form.value };
  await store.createItem(data);
  await router.push("/");
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
}

.btn-add {
  background: #28a745;
  color: white;
  border: none;
}

.btn-add:hover {
  background: #218838;
}

.btn-remove {
  background: #dc3545;
  color: white;
  border: none;
}

.btn-remove:hover {
  background: #c82333;
}

.btn-save {
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
}

.btn-save:hover {
  background: #0056b3;
}

.product-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.product-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
}
</style>
