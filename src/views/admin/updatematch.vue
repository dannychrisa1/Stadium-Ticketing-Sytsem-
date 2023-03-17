<template>
  <div>
    <div>
      <adminnav />
    </div>
    <div class="contain addMatch-form">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form @submit.prevent="handleUpdateMatch" class="addMatch">
            <h1 class="mb-3">Update Match</h1>
            <div class="form-group">
              <label for="teamA">teamA:</label>
              <input
                type="text"
                class="form-control"
                placeholder="team A"
                v-model="match.teamA"
                required
              />
            </div>
            <div class="form-group">
              <label for="team B">teamB:</label>
              <input
                type="text"
                class="form-control"
                placeholder="team B"
                v-model="match.teamB"
                required
              />
            </div>
            <div class="form-group">
              <label for="date">Date:</label>
              <input
                type="date"
                class="form-control"
                id="date"
                placeholder="Date"
                v-model="match.date"
                required
              />
            </div>
            <div class="form-group">
              <label for="time">Time:</label>
              <input
                type="time"
                class="form-control"
                id="time"
                placeholder="Password"
                v-model="match.time"
                required
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
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  name: "AddMatch",
  components: {
    adminnav,
  },
  setup() {
    const matchId = ref("");
    const match = ref({
      _id: "",
      teamA: "",
      teamB: "",
      date: "",
      time: "",
    });

    const route = useRoute();
    const router = useRouter();
    const errorMessage = ref("");
    const requesting = ref(false);

    onMounted(async () => {
      let mId = (matchId.value = route.params.matchId
        ? route.params.matchId
        : "");

      if (mId) {
        let response = await axios.get(
          "https://fsts-api.herokuapp.com/api/v1/matches"
        );
        match.value = response.data.matches.find((m) => m._id === mId);
      } else {
        window.alert("No match ID was found in path");
      }
    });

    const handleUpdateMatch = async () => {
      requesting.value = true;

      errorMessage.value = "";

      let authToken = localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      };

      const data = {
        teamA: match.value.teamA,
        teamB: match.value.teamB,
        date: match.value.date,
        time: match.value.time,
      };

      try {
        let response = await axios.patch(
          `https://fsts-api.herokuapp.com/api/v1/matches/${match.value._id}`,
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
      match,
      errorMessage,
      requesting,
      handleUpdateMatch,
    };
  },
};
</script>