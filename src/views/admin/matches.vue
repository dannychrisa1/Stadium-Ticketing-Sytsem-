<template>
  <div>
    <div>
      <adminnav class="" />
    </div>
    <div class="matches">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-2">
          <div class="contain">
            <div class="mb-4 mt-4 d-flex justify-content-between align-items-center">
              <h3><b>MATCHES</b></h3>
              <router-link to="/admin/bookings" class="booking-link">View bookings</router-link>
            </div>
            <table
              class="table table-striped table-bordered"
              style="width: 100%"
            >
              <tr>
                <th>TEAM A</th>
                <th>TEAM B</th>
                <th>DATE</th>
                <th>TIME</th>
                <th></th>
                <th></th>
              </tr>
              <tr v-for="(match, index) in matches" :key="index">
                <td>{{ match.teamA }}</td>
                <td>{{ match.teamB }}</td>
                <td>{{ match.date }}</td>
                <td>{{ match.time }}</td>
                <td>
                  <button
                    style="
                      padding: 4px 6px !important;
                      border: 1px solid #fff;
                      border-radius: 5px;
                      color: #fff;
                      background: #f00;
                    "
                    @click="deleteMatch(match._id)"
                  >
                    DELETE
                  </button>
                </td>
                <td>
                  <button
                    style="
                      padding: 4px 6px !important;
                      border: 1px solid #fff;
                      border-radius: 5px;
                      color: #fff;
                      background: #080;
                    "
                    @click="updateMatch(match._id)"
                  >
                    UPDATE
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import adminnav from "../../components/adminnav.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "Matches",
  components: {
    adminnav,
  },
  setup() {
    const router = useRouter();
    const matches = ref(0);
    const requesting = ref(false);

    onMounted(async () => {
      let response = await axios.get(
        "https://fsts-api.herokuapp.com/api/v1/matches"
      );
      matches.value = response.data.matches;
    });

    const deleteMatch = async (matchId) => {
      let confirmed = window.confirm(
        "Do you really want to delete this match?"
      );
      if (!confirmed) {
        return;
      }

      requesting.value = true;
      let authToken = localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      };

      try {
        let response = await axios.delete(
          `https://fsts-api.herokuapp.com/api/v1/matches/${matchId}`,
          { headers }
        );
        window.location.reload();
      } catch (error) {
        window.alert(error.message);
      }

      requesting.value = false;
    };

    const updateMatch = async (matchId) => {
      router.push(`/admin/updatematch/${matchId}`);
    };

    return {
      matches,
      deleteMatch,
      updateMatch,
    };
  },
};
</script>