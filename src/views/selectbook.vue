<template>
  <div>
    <div>
      <reservenav />
    </div>

    <div class="contain select-form">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <form @submit.prevent="next" class="bookform">
            <h3 class="text-center mt-4 mb-5">VISITORS INFO</h3>
            <div
              v-if="hasError"
              class="alert alert-danger mb-4 p-3"
              role="alert"
            >
              You must enter all details
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Booked By:</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                v-model="booker.fullName"
              />
              
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contact:</label>
              <input
                type="text"
                class="form-control"
                placeholder="phone"
                v-model="booker.contact"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="email"
                v-model="booker.email"
              />
            </div>

            <div
              class="card bg-light mb-3"
              v-for="index in passengersCount"
              :key="index"
            >
              <div class="card-header text-white bg-primary head-book p-2">
                VISITOR {{ index }}
              </div>
              <div class="card-body p-3">
                <div class="form-group">
                  <label for="exampleInputEmail1">Full Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="emailHelp"
                    v-model="passengers[index - 1].fullName"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Age:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="passengers[index - 1].age"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Gender</label>
                  <select
                    class="form-control p-2"
                    v-model="passengers[index - 1].gender"
                  >
                    <option value="" selected disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">
              NEXT
            </button>
          </form>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-lg-block">
          <img src="../assets/fans.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { store } from "../utils";
import VisitorForm from "../components/vistorform.vue";

export default {
  name: "Contact",
  components: {
    VisitorForm,
  },
  setup() {
    const booker = ref({
      fullName: "",
      contact: "",
      email: "",
    });
    const router = useRouter();
    const passengersCount = ref(0);
    const passengers = ref([]);
    const hasError = ref(false);

    onMounted(async () => {
      let db = localStorage.getItem("booking");

      if (db) {
        passengersCount.value = JSON.parse(db).passengersCount;
        passengers.value = [];
        for (let i = 0; i < passengersCount.value; i++) {
          passengers.value.push({
            fullName: "",
            age: 0,
            gender: "",
          });
        }
      }
    });

    const next = () => {
      let bk = booker.value;
      let ps = passengers.value;

      if (!bk.fullName || !bk.contact || !bk.email) {
        hasError.value = true;
        return;
      }

      for (let i = 0; i < passengersCount.value; i++) {
        if (!ps[i].fullName || !ps[i].age || !ps[i].gender) {
          hasError.value = true;
          return;
        }
      }

      store({ booker: bk, passengers: ps });
      router.push("/invoice");
    };

    return {
      booker,
      passengersCount,
      passengers,
      hasError,
      next,
    };
  },
};
</script>