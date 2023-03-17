<template>
<div>
    <div>
        <navbar />
    </div>
    <div class="about-banner">
        <h2 class="text-center text-white">ABOUT THE PROJECT </h2>
    </div>
    <div class="about-section-full">
        <div class="contain">
            <div class="row d-lg-flex align-items-center">
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-block d-lg-none mb-3">
                   <div class="image-right">
                        <img src="../assets/team.png" class="img-fluid"/>
                   </div> 
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="about-info">
                         <p class="mb-5 about-content">The aim of this project work is to design and implement a football stadium ticket acquisition system. Stadiums are in the business of reserving seats whenever there is a major event to be held in the stadium. For an effective process of seat allocation, there is need for an automated system that will ensure that tickets sold are recorded for easy confirmation before entry into the stadium to witness the event and also to enable the administrator gain easy access to records of tickets sold. In an attempt to make this possible, an automated football stadium ticket acquisition system has been proposed and developed to facilitate reservation of seats pertaining to the general and VIP categories of a football stadium.</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-lg-block">
                   <div class="image-right">
                        <img src="../assets/team.png" class="img-fluid"/>
                   </div> 
                </div>
            </div>
        </div>
    </div>
    <div class="projects-section">
        <div class="contain">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div class="foot">
                        <img src="@/assets/foot99.jpeg" class="img-fluid"/>
                        <div class="bg-overlay"></div>
                    </div>
                </div>
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                      <div class="ms-lg-2 foot">
                            <img src="@/assets/foot-3.jpg" class="img-fluid"/>
                      </div>
                </div>
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                     <div class="ms-lg-2 foot">
                          <img src="@/assets/foot-6.jpg" class="img-fluid"/>
                     </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mission-section-full">
        <div class="contain">
            <div class="row d-lg-flex align-items-center">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                     <div class="image-left">
                            <img src="../assets/aim.png" class="img-fluid"/>
                     </div>
                </div>
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="right-info">
                          <h2 class="mb-3">AIMS AND OBJECTIVES</h2>
                          <div class="pb-2 mak"><i class="fa fa-check ic"></i> To develop an automated system for ticket acquisition that can be used by any stadium</div>
                          <div class="pb-2 mak"><i class="fa fa-check ic"></i> To facilitate easy booking and management of ticket based on available seats</div>
                          <div class="pb-2 mak"><i class="fa fa-check ic"></i> To provide a secure system for issuing tickets</div>
                          <div class="pb-2 mak"><i class="fa fa-check ic"></i> To develop a system that will help prevent overcrowding of the stadium</div>
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