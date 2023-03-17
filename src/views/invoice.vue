<template>
  <div class="bg-dark background-invoice">
    <div class="invoice-section">
      <div class="invoice">
        <div class="curve p-4 d-flex align-items-center">
          <h3 class="text-white"><b>FSTS TICKET INFO</b></h3>
        </div>
        <div class="p-4 ticket">
          <div class="a">
            <h2 class="mt-4 text-black mb-4">
              <b>{{ booking.match.teamA }} vs {{ booking.match.teamB }}</b>
            </h2>
            <div class="info pe-4">
              <div class="left">
                <h5 class="mt-2 mb-3">Date</h5>
                <h5 class="text-black">
                  <b>{{ booking.match.date }}</b>
                </h5>
              </div>
              <div class="center">
                <h5 class="mt-2 mb-3">Time</h5>
                <h5 class="text-black">
                  <b>{{ booking.match.time }}</b>
                </h5>
              </div>
              <div class="right">
                <h5 class="mt-2 mb-3">Seat</h5>
                <h5 class="text-black">
                  <b>{{ booking.seat.type }}</b>
                </h5>
              </div>
            </div>
            <div class="info2 mt-4 pe-4 mb-4">
              <div class="left">
                <h5 class="mt-2 mb-3">Booked by:</h5>
                <h5 class="text-black">
                  <b>{{ booking.booker.fullName }}</b>
                </h5>
              </div>
              <div class="center">
                <h5 class="mt-2 mb-3">Contact:</h5>
                <h5 class="text-black">
                  <b>{{ booking.booker.contact }}</b>
                </h5>
              </div>
              <div class="right">
                <h5 class="mt-2 mb-3">Email:</h5>
                <h5 class="text-black">
                  <b>{{ booking.booker.email }}</b>
                </h5>
              </div>
            </div>
            <div class="info3">
              <div class="left">
                <h5 class="mt-2 mb-3">Booked Id:</h5>
                <h5 class="text-black">
                  <b>{{ booking.invoiceNumber }}</b>
                </h5>
              </div>
              <div class="right">
                <h5 class="mt-2 mb-3">Total Price:</h5>
                <h5 class="text-black">
                  <b>&#8358;{{ totalPrice }}</b>
                </h5>
              </div>
            </div>
          </div>
          <div class="b p-3">
            <div class="visitors">
              <h5 class="mb-2"><b>VISITORS</b></h5>
              <div
                v-for="(passenger, index) in booking.passengers"
                :key="index"
                class="mb-3"
              >
                <p>{{ passenger.fullName }}</p>
                <span style="font-size: 10px !important"
                  >{{ passenger.age }}, {{ passenger.gender }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-section d-flex justify-end">
      <button class="btn btn-success p-3" @click="confirm" :disabled="confirmed">Confirm</button>
      <button class="btn btn-danger p-3" :disabled="!confirmed && !canPrint" @click="handlePrint">Print</button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "Contact",
  components: {},
  setup() {
    const booking = ref({
      match: {
        _id: "",
        teamA: "",
        teamB: "",
        date: "",
        time: "",
      },
      seat: {
        _id: "",
        type: "",
        price: 0,
      },
      booker: {
        fullName: "",
        contact: "",
        email: "",
      },
      invoiceNumber: "",
      passengersCount: 0,
      passengers: [],
    });

    const confirmed = ref(false);
    const canPrint = ref(false);
    const hasError = ref(false);

    onMounted(async () => {
      let db = localStorage.getItem("booking");

      if (db) {
        booking.value = JSON.parse(db);
        booking.value.invoiceNumber = generateInvoiceNumber();
      }
    });

    let totalPrice = computed(
      () => booking.value.passengers.length * booking.value.seat.price
    );

    const generateInvoiceNumber = () => {
      return Math.ceil(Math.random() * 1000000);
    };

    const confirm = async () => {
      let matchId = booking.value.match._id;
      let seatId = booking.value.seat._id;
      let invoiceNumber = ""+booking.value.invoiceNumber;
      let booker = booking.value.booker;
      let passengers = booking.value.passengers;

      if (!matchId) {
        hasError.value = true;
        return;
      }

      if (!seatId) {
        hasError.value = true;
        return;
      }

      if (!invoiceNumber) {
        hasError.value = true;
        return;
      }

      if (!booker.fullName || !booker.contact || !booker.email) {
        hasError.value = true;
        return;
      }

      for (let i = 0; i < passengers.length; i++) {
        if (
          !passengers[i].fullName ||
          !passengers[i].age ||
          !passengers[i].gender
        ) {
          hasError.value = true;
          return;
        }
      }

      const data = {
        matchId,
        seatId,
        invoiceNumber,
        booker,
        passengers,
      };

      var handler = PaystackPop.setup({
        key: "pk_test_6b28a0a394da79d85f0824ee2b9b366744dd9966",
        email: data.booker.email,
        amount: totalPrice.value * 100,
        currency: "NGN",
        ref: `${Math.ceil(Math.random() * 1000000000)}`,
        callback: async (response) => {
          let reference = response.reference;
          try {
            let response = await axios.post(
              "https://fsts-api.herokuapp.com/api/v1/bookings",
              data
            );
            confirmed.value = true;
            canPrint.value = true;
            console.log(response);
            window.alert("Reserved successfully");
          } catch (e) {
            window.alert(e.message);
          }
        },
        onClose: () => {
          alert("Transaction was not completed, window closed.");
        },
      });

      handler.openIframe();
    };

    const handlePrint = () => {
      window.print()
    }

    return {
      booking,
      totalPrice,
      hasError,
      confirmed,
      canPrint,
      confirm,
      handlePrint
    };
  },
};
</script>