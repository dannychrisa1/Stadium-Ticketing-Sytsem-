<template>
  <div>
    <div>
      <reservenav />
    </div>

    <div class="contain seat">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 d-none d-md-block">
          <h3 class="mb-4 mt-4"><b>STEPS FOR BOOKING</b></h3>
          <table class="table table-striped" style="width: 100%">
            <tr>
              <th>MATCH</th>
              <th>SEAT SELECTION</th>
              <th>VISITOR INFO</th>
              <th>PAYMENT INFO</th>
            </tr>
            <tr>
              <td>SCHEDULE OF MATCH</td>
              <td>SEAT TYPE</td>
              <td>VISITORS DETAILS</td>
              <td>TOTAL PAYMENT</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="contain choose-form">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form @submit.prevent="next" class="bookform">
            <h3 class="text-center mt-4 mb-4">CHOOSE MATCH</h3>
            <div v-if="hasError" class="alert alert-danger mb-4" role="alert">
              You must select a match
            </div>
            <div class="form-group mb-3">
              <label for="inputState">MATCH</label>
              <select class="form-control p-2" @change="setMatchId">
                <option selected>Choose...</option>
                <option
                  v-for="match in matches"
                  :key="match._id"
                  :value="match._id"
                >
                  {{ `${match.teamA} vs ${match.teamB}` }}
                </option>
              </select>
            </div>

            <button class="btn-block text-white">NEXT</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reservenav from "../components/reservenav.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { store } from "../utils";

export default {
  name: "Reserve",
  components: {
    reservenav,
  },
  setup() {
    const matches = ref([]);
    const matchId = ref("");
    const router = useRouter();
    const hasError = ref(false);

    onMounted(async () => {
      let response = await axios.get(
        "https://fsts-api.herokuapp.com/api/v1/matches"
      );
      matches.value = response.data.matches;
    });

    const setMatchId = (e) => {
      matchId.value = e.target.value;
    };

    const getMatchFromId = (mId) => {
      return matches.value.find((match) => match._id === mId);
    };

    const next = () => {
      let mId = matchId.value;

      if (mId) {
        let match = getMatchFromId(mId);
        store({ match });
        router.push('/selectseat');
      } else {
        hasError.value = true;
      }
    };

    return {
      matches,
      matchId,
      setMatchId,
      hasError,
      next,
    };
  },
};
</script>