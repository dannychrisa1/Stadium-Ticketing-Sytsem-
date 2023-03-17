<template>
  <div>
    <div>
      <adminnav class="" />
    </div>
    <div class="matches">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-2">
          <div class="contain">
            <h3 class="mb-4 mt-4"><b>BOOKINGS</b></h3>
            <input
              class="search-input mb-4 form-control-md py-2 px-3"
              type="search"
              placeholder="Search by booking ID"
              v-model="filter"
            />
            <table
              class="table table-striped table-bordered"
              style="width: 100%"
            >
              <tr>
                <th class="p-3">Booking ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Visitors Count</th>
              </tr>
              <tr v-for="(booking, index) in bookings" :key="index">
                <td class="p-2">{{ booking.invoiceNumber }}</td>
                <td>{{ booking.booker.fullName }}</td>
                <td>{{ booking.booker.email }}</td>
                <td>{{ booking.passengers.length }}</td>
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
import { onMounted, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "Matches",
  components: {
    adminnav,
  },
  setup() {
    const router = useRouter();
    const filter = ref("");
    const uBookings = ref([]);
    const bookings = ref([]);

    watchEffect(() => {
      let filterStr = filter.value;
      if(filterStr){
        bookings.value = uBookings.value.filter(booking => booking.invoiceNumber.includes(filterStr));
      }else{
        bookings.value = uBookings.value;
      }
    });

    onMounted(async () => {
      let response = await axios.get(
        "https://fsts-api.herokuapp.com/api/v1/bookings"
      );
      uBookings.value = bookings.value = response.data.bookings;

      console.log(uBookings.value)
    });

    return {
      bookings,
      filter
    };
  },
};
</script>