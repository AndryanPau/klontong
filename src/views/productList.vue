<script setup>
  import { ref, onMounted } from 'vue';
  import { useConfirm } from "primevue/useconfirm";
  import { useToast } from "primevue/usetoast";

  let selectedProduct = ref();
  let products = ref();
  let modalAddEdit = ref(false);
  let modalDetail = ref(false);
  let flag = ref();
  let dataEdit = {
    category:'',
    name:'',
    description:'',
    price:0
  };
  let dataDetail = [];

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits:0 });
  };

  const confirm = useConfirm();
  const toast = useToast();

  const deleteRow = () => {
    confirm.require({
        message: 'Are you sure you want to delete?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Delete Success', life: 3000 });
        }
    });
  };

  const handleAdd = () =>{
    flag = 'add';
    modalAddEdit.value = true;
  }

  const handleEdit = (data) =>{
    flag = 'edit'
    dataEdit.category = data.categoryName;
    dataEdit.name = data.name;
    dataEdit.description = data.description;
    dataEdit.price = parseInt(data.harga.replace(/\D/g,''));
    modalAddEdit.value = true;
  }

  const handleClose = () =>{
    if(!modalAddEdit.value){
      dataEdit.category = '';
      dataEdit.name = '';
      dataEdit.description = '';
      dataEdit.price = 0;
    }
  }

  const handleSubmit = () =>{
    toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Save Success', life: 3000 });
    modalAddEdit.value = false;
  }

  const handleDetail = (index, data) =>{
    if(data.data.id !== 3){
      dataDetail = products.value[index];
    }else{
      dataDetail = products.value[2];
    }
    modalDetail.value = true;
  }

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
        "image": "https://w7.pngwing.com/pngs/580/115/png-transparent-sweet-candy-candy-pretty-good-to-eat-thumbnail.png",
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
        "image": "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-summer-ice-cream-illustration-png-image_6655018.png",
        "harga": formatCurrency(30000)
      }
    ]
  })
</script>

<template>
  <div class="container">
    <Button label="Add Product" severity="primary" @click="handleAdd()" style="margin-bottom:1rem;"/>
    <DataTable v-model:selection="selectedProduct" :value="products" paginator :rows="2" removableSort dataKey="id">
      <Column selectionMode="multiple"></Column>
      <Column field="categoryName" header="Category" sortable></Column>
      <Column field="name" header="Name" sortable></Column>
      <Column field="description" header="Description" sortable></Column>
      <Column field="harga" header="Price" sortable></Column>
      <Column field="" header="Action">
        <template #body="slotProps">
          <i class="pi pi-pencil iconAction" @click="handleEdit(slotProps.data)"></i>
          <i class="pi pi-eraser iconAction" @click="deleteRow()"></i>
          <i class="pi pi-info iconAction" @click="handleDetail(slotProps.index, slotProps)"></i>
        </template>
      </Column>
    </DataTable>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <Dialog v-model:visible="modalAddEdit" modal :header="flag == 'add' ? 'Add Data' : 'Edit Data'" :style="{ width: '50rem' }" 
      :hide="handleClose()">
      <InputGroup style="margin-bottom:1rem;">
        <InputGroupAddon style="width:110px;">Category</InputGroupAddon>
        <InputText placeholder="Category" v-model="dataEdit.category"/>
      </InputGroup>
      <InputGroup style="margin-bottom:1rem;">
        <InputGroupAddon style="width:110px;">Name</InputGroupAddon>
        <InputText placeholder="Name" v-model="dataEdit.name"/>
      </InputGroup>
      <InputGroup style="margin-bottom:1rem;">
        <InputGroupAddon style="width:110px;">Description</InputGroupAddon>
        <InputText placeholder="Description" v-model="dataEdit.description"/>
      </InputGroup>
      <InputGroup style="margin-bottom:1rem;">
        <InputGroupAddon style="width:110px;">Price</InputGroupAddon>
        <InputNumber placeholder="Price" v-model="dataEdit.price"/>
      </InputGroup>
      <div class="submitContainer">
        <Button label="Submit" severity="primary" @click="handleSubmit()"/>
      </div>
    </Dialog>
    <Dialog v-model:visible="modalDetail" modal header="Detail" :style="{ width: '50rem' }">
      <div class="containerDetail">
        <Image :src="dataDetail.image" alt="Image" width="250" preview />
        <div class="containerInfo">
          <p>{{ 'Category' }}: {{ dataDetail.categoryName }}</p>
          <p>{{ 'SKU' }}: {{ dataDetail.sku }}</p>
          <p>{{ 'Name' }}: {{ dataDetail.name }}</p>
          <p>{{ 'Description' }}: {{ dataDetail.description }}</p>
          <p>{{ 'Weight' }}: {{ dataDetail.weight }}</p>
          <p>{{ 'Width' }}: {{ dataDetail.width }}</p>
          <p>{{ 'Length' }}: {{ dataDetail.length }}</p>
          <p>{{ 'Height' }}: {{ dataDetail.height }}</p>
          <p>{{ 'Price' }}: {{ dataDetail.harga }}</p>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
  .container{
    margin:30px 0;
    .iconAction{
      font-size:1rem;
      margin-right:5px;
      cursor:pointer;
    }
  }
  .submitContainer{
    width:100%;
    margin-top:1rem;
    text-align:center;
  }
</style>
