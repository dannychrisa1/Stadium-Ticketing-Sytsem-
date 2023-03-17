
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import './assets/global.css'
import router from './router'

let INITIALIZED = localStorage.getItem("init");

if(!INITIALIZED){
    localStorage.setItem("init", true);
    
    const booking = {
        match: {
            _id: "",
            teamA: "",
            teamB: "",
            date: "",
            time: ""
        },
        seat: {
            _id: "",
            type: "",
            price: 0
        },
        booker: {
            fullName: "",
            contact: "",
            email: ""
        },
        invoiceNumber: "",
        passengersCount: 0,
        passengers: []
    }
    
    localStorage.setItem("booking", JSON.stringify(booking));
}

createApp(App).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"

