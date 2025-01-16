import { createRouter, createWebHistory } from "vue-router";
import UserList from "../components/UserList.vue";
import UserDetail from "../components/UserDetail.vue";

const routes = [
  {
    path: "/",
    component: UserList,
    props: true,
  },
  {
    path: "/user/:id",
    component: UserDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
