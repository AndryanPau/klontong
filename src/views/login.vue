<script setup>
  import { useRouter } from 'vue-router';
  import { useToast } from "primevue/usetoast";
  import { ref } from 'vue';

  const router = useRouter();
  const toast = useToast();

  let modelLogin = {
    username:'',
    password:ref()
  }
  const dataDummyLogin = {
    username:'tes',
    password:123
  }
  const login = () =>{
    if(modelLogin.username == dataDummyLogin.username && modelLogin.password.value == dataDummyLogin.password){
      router.push('/productList');
    }else{
      toast.add({ severity: 'error', summary: 'Warning', detail: 'Login failed', life: 3000 });
    }
  }
</script>

<template>
  <div class="container">
    <h1>Klontong App</h1>
    <div class="loginBox">
      <p>Login</p>
      <InputGroup style="margin-bottom:1rem;">
        <InputGroupAddon>
            <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Username" v-model="modelLogin.username"/>
      </InputGroup>
      <InputGroup style="margin-bottom:1rem;">
        <InputGroupAddon>
            <i class="pi pi-key"></i>
        </InputGroupAddon>
        <Password placeholder="Password" v-model="modelLogin.password.value" :feedback="false" toggleMask />
      </InputGroup>
      <div class="containerButtonLogin">
        <Button label="Login" severity="danger" @click="login()"/>
      </div>
    </div>
    <Toast />
  </div>
</template>

<style scoped>
  .container{
    width:100%;
    text-align:center;
    .loginBox{
      text-align:center;
      background:lightgrey;
      padding:1rem;
      border-radius:3px;
      display:flex;
      flex-wrap:wrap;
      width:500px;
      margin:0 auto;

      p{
        width:100%;
      }

      .containerButtonLogin{
        width:100%;
        text-align:center;
      }
    }
  }
</style>