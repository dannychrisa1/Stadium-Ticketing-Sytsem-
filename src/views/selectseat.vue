<template>
<div>
  <div>
    <reservenav />
  </div>
  
  <div class="contain select-form">
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-lg-block">
               <img src="../assets/fans.png" class="img-fluid"/>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <form class="bookform">
                <h3 class="text-center mt-4 mb-4">SELECT SEAT</h3>
                <div v-if="errorMessage" class="alert alert-danger mb-4 p-3" role="alert">
                    {{ errorMessage }}
                  </div>
                <table class="table table-striped" style="width:100%; text-align:left">
                  <tr>
                    <th class="pb-2 pt-2 ps-2">SEAT TYPES</th>
                    <th class="pb-2 pt-2 ps-2">SLOTS</th>
                    <th class="pb-2 pt-2 ps-2">PRICE(&#8358;)</th>
                  </tr>
                   <tr v-for="seat in seats" :key="seat._id">
                    <td class="p-4"><input type="radio" :value="seat._id" name="seatId" @click="seatId = seat._id"> {{ seat.type }}</td>
                    <td class="p-4">{{ seat.slots }}</td>
                    <td class="p-4"> {{ seat.price }}</td>
                  </tr>
                </table>
                <div class="form-group mt-3">
                  <label for="exampleInputPassword1">Total # of Visitors:</label>
                  <input type="number" class="form-control" min="1" max="5" placeholder="" v-model="passengersCount">
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="next">NEXT</button>
              </form>

          </div>
      </div>
    </div>
</div>
  
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { store } from '../utils'
import reservenav from '../components/reservenav.vue'

export default {
  name: 'Contact',
  components:{
    reservenav
  },
  setup(){
    const seats = ref([]);
    const seatId = ref(null);
    const passengersCount = ref(0);
    const router = useRouter();
    const errorMessage = ref("");

    onMounted(async () => {
      let response = await axios.get('https://fsts-api.herokuapp.com/api/v1/seats');
      seats.value = response.data.seats;
    })

    const getSeatFromId = (sId) => {
      return seats.value.find(seat => seat._id === sId);
    };

    const next = () => {
      let sId = seatId.value;
      let pCount = passengersCount.value;

      if(!sId || !pCount){
        errorMessage.value = "You must select a seat and enter number of visitors";
        return;
      }

      if(pCount > 5 || pCount < 1) {
        errorMessage.value = "Visitors must not exceed 5";
        return;
      }

      let seat = getSeatFromId(sId);
      store({seat, passengersCount: +pCount});
      router.push('/selectbook')
    }

    return {
      seats,
      seatId,
      passengersCount,
      errorMessage,
      next
    }
  }
  
}
</script>