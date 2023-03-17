<template>
  <div>
    <div class="contain signin-form">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form @submit.prevent="handleLogin" class="signform">
            <h3 class="text-center mt-2 mb-4">SIGN IN</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">USERNAME:</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                v-model="username"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">PASSWORD:</label>
              <input
                type="password"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter password"
                v-model="password"
                required
              />
            </div>
            <button
              type="submit"
              class="btn-block text-white mt-3"
              :disabled="requesting"
            >
              LOGIN
            </button>
            <div
              v-if="errorMessage"
              class="alert alert-danger mt-4 p-2"
              role="alert"
            >
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "login",
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();
    const errorMessage = ref("");
    const requesting = ref(false);

    const handleLogin = async () => {
      requesting.value = true;

      errorMessage.value = "";

      const headers = {
        "Content-Type": "application/json",
      };

      const data = {
        username: username.value,
        password: password.value,
      };

      try {
        let response = await axios.post(
          "https://fsts-api.herokuapp.com/api/v1/login",
          data,
          { headers }
        );
        let authToken = response.data.token;
        localStorage.setItem("authToken", authToken);
        router.push("/admin/matches");
      } catch (error) {
        errorMessage.value = error.message;
      }

      requesting.value = false;
    };

    return {
      username,
      password,
      errorMessage,
      requesting,
      handleLogin,
    };
  },
};
</script>