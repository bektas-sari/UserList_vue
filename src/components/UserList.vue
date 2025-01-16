<template>
    <div class="container">
      <h1>Kullanıcı Listesi</h1>
      <input
        v-model="searchTerm"
        type="text"
        placeholder="İsimle arama yap"
        class="search-box"
      />
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          <router-link :to="'/user/' + user.id" class="user-link">
            <strong>{{ user.name }}</strong>
          </router-link>
          <span>- {{ user.email }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ["users"],
    data() {
      return {
        searchTerm: "",
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter((user) =>
          user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
  };
  </script>
  
  <style>
  .search-box {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 20px auto;
    display: block;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .user-link {
    font-weight: bold;
    color: #007bff;
  }
  
  .user-link:hover {
    text-decoration: underline;
  }
  </style>
  