<template>
<div>
    <div>
        <navbar />
    </div>
    <div class="about-banner">
        <h2 class="text-center text-white">CONTACT US</h2>
    </div>
     <div class="contact-section-full">
      <div class="contain">
        <div class="row d-lg-flex align-items-center">
           
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
               <div class="image-right">
                   <img src="../assets/contact2.png" class="img-fluid"/>
               </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="info-right">
                    <!-- <h2 class="mb-4">CONTACT US </h2> -->
                    <form>
                      <div class="row mb-3">
                        <div class="col">
                          <input type="text" class="form-control pt-4 pb-4 ps-2" placeholder="First name">
                        </div>
                        <div class="col ms-2">
                          <input type="text" class="form-control pt-4 pb-4 ps-2" placeholder="Last name">
                        </div>
                      </div>
                      <div class="form-group mb-3">
                      
                        <input type="email" class="form-control pt-4 pb-4 ps-2" id="inputAddress" placeholder="Email">
                      </div>
                      <div class="form-group mb-3">
                       
                        <textarea class="form-control pt-3 pb-5 ps-2" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                    </div>
                    <button class="btn btn-secondary btn-lg p-3 mt-3">Get in touch</button>
                    </form>
                </div>
              
            </div>
        </div>
      </div>
    </div>
    <Footer></Footer>

      
</div>
    
    
     
      
 
   
  
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import imageA from '@/assets/pro-im.png'


export default {
  name: 'About',
  components:{
    Navbar,
    Footer,
   
  },
  setup(){
    const router = useRouter()

   
  
   
   
  
    return {
       
       
    }

  }
  
}
</script>