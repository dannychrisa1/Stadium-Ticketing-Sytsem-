<template>
  <div>
    <div>
      <adminnav />
    </div>
    <div class="contain addMatch-form">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form @submit.prevent="handleAddMatch" class="addMatch">
            <h1 class="mb-3">Add Match</h1>
            <div class="form-group">
              <label for="teamA">teamA:</label>
              <input
                type="text"
                class="form-control"
                placeholder="team A"
                v-model="teamA"
              />
            </div>
            <div class="form-group">
              <label for="team B">teamB:</label>
              <input
                type="text"
                class="form-control"
                placeholder="team B"
                v-model="teamB"
              />
            </div>
            <div class="form-group">
              <label for="date">Date:</label>
              <input
                type="date"
                class="form-control"
                id="date"
                placeholder="Date"
                v-model="date"
              />
            </div>
            <div class="form-group">
              <label for="time">Time:</label>
              <input
                type="time"
                class="form-control"
                id="time"
                placeholder="Password"
                v-model="time"
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="requesting"
            >
              Submit
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
import adminnav from "../../components/adminnav.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "AddMatch",
  components: {
    adminnav,
  },
  setup() {
    const teamA = ref("");
    const teamB = ref("");
    const date = ref("");
    const time = ref("");

    const router = useRouter();
    const errorMessage = ref("");
    const requesting = ref(false);

    const handleAddMatch = async () => {
      requesting.value = true;

      errorMessage.value = "";

      let authToken = localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      };

      const data = {
        teamA: teamA.value,
        teamB: teamB.value,
        date: date.value,
        time: time.value,
      };

      try {
        let response = await axios.post(
          "https://fsts-api.herokuapp.com/api/v1/matches",
          data,
          { headers }
        );
        router.push("/admin/matches");
      } catch (error) {
        errorMessage.value = error.message;
      }

      requesting.value = false;
    };

    return {
      teamA,
      teamB,
      date,
      time,
      errorMessage,
      requesting,
      handleAddMatch,
    };
  },
};
</script>