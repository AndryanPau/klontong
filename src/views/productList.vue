<script setup>
  import { ref, onMounted } from 'vue';

  const selectedProduct = ref();
  const products = ref();
  onMounted(()=>{
    products.value = [
      {
        "id": 1,
        "CategoryId": 1,
        "categoryName": "Cemilan",
        "sku": "MHZVTK",
        "name": "Ciki ciki",
        "description": "Ciki ciki yang super enak, hanya di toko klontong kami",
        "weight": 500,
        "width": 5,
        "length": 5,
        "height": 5,
        "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
        "harga": formatCurrency(20000)
      },
      {
        "id": 2,
        "CategoryId": 2,
        "categoryName": "Cemilan",
        "sku": "MHZVTK",
        "name": "Permen",
        "description": "Permen yang super enak, hanya di toko klontong kami",
        "weight": 500,
        "width": 5,
        "length": 5,
        "height": 5,
        "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
        "harga": formatCurrency(10000)
      },
      {
        "id": 3,
        "CategoryId": 3,
        "categoryName": "Cemilan",
        "sku": "MHZVTK",
        "name": "Ice Cream",
        "description": "Ice Cream yang super enak, hanya di toko klontong kami",
        "weight": 500,
        "width": 5,
        "length": 5,
        "height": 5,
        "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
        "harga": formatCurrency(30000)
      }
    ]
  })
  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };
</script>
<template>
  <div class="container">
    <DataTable v-model:selection="selectedProduct" :value="products" paginator :rows="2" removableSort dataKey="id">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="categoryName" header="Category" sortable></Column>
      <Column field="name" header="Name" sortable></Column>
      <Column field="description" header="Description" sortable></Column>
      <Column field="harga" header="Price" sortable></Column>
      <Column field="" header="Action"></Column>
    </DataTable>
  </div>
</template>

<style scoped>
  .container{
    margin:30px 0;
  }
</style>
