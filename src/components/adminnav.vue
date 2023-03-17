<template>
  <div>
    <div class="adminnav">
      <div class="content">
        <b class="logo"><router-link class="admin-home" to="/">FSTS Online Ticketing</router-link></b>
      </div>
      <div class="action-links d-flex align-items-center">
        <router-link to="/admin/matches"> Matches </router-link>
        <router-link to="/admin/addmatch"> Add Match </router-link>
        <button class="btn py-2 px-2 logout" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "adminnav",
  setup() {
    const router = useRouter();
    const logout = () => {
      localStorage.removeItem("authToken");
      router.push("/admin");
    };

    return {
      logout,
    };
  },
};
</script>