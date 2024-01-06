<script setup>
  import Menubar from 'primevue/menubar';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter();
  const items = ref([
    {
      label:'List Product',
      icon:'pi pi-book',
      command: () => {
        router.push('/productList');
      }
    }
  ])
  const logout = () =>{
    router.push('/login');
  }
</script>

<template>
  <div class="title">
    <h1>{{ 'Klontong Inventory System' }}</h1>
  </div>
  <Menubar :model="items">
    <template #end>
      <Button label="Logout" severity="danger" @click="logout()"/>
    </template>
  </Menubar>
</template>

<style scoped>
  .title{
    font-size:14px;
    width:100%;
    text-align:left;
  }
</style>
