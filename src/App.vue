<template>
  <div id="app">
    <router-view :users="users" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      })
      .catch((error) => console.error("API Hatası:", error));
  },
};
</script>

<style>
/* Genel Stil */
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
