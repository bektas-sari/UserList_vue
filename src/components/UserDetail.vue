<template>
    <div class="detail-container">
      <h2>{{ user.name }}</h2>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p>
        <strong>Website:</strong>
        <a :href="'http://' + user.website" target="_blank">{{ user.website }}</a>
      </p>
      <p><strong>Company:</strong> {{ user.company?.name || "N/A" }}</p>
      <router-link to="/" class="back-btn">Listeye Dön</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  
  export default {
    props: ["users"],
    setup(props) {
      const route = useRoute();
      const user = ref(props.users.find((u) => u.id === Number(route.params.id)));
      return { user };
    },
  };
  </script>
  
  <style>
  .detail-container {
    background: #fff;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #007bff;
  }
  
  .back-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .back-btn:hover {
    background-color: #0056b3;
  }
  </style>
  