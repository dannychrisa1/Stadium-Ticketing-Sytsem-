<template>
<div>
  <div>
    <navbar :goToCommunity="goToCommunity" />
  </div>
    <div class="h-banner d-none d-md-block">
        <div class="banner-items">
                 <div class="banner-left">
               
                <div class="content"> 
                   <transition name="slide">
                    <h2 class="mb-3" v-if="showP">Welcome to FS<span class="text-danger">T</span>S Online Ticketing System</h2>
                   </transition>
                    <transition name="fade">
                    <p v-if="showP">An online stadium reservation platform</p>
                    </transition>
                    <transition name="spin">
                    <div class="action-butons" v-if="showP">
                        <router-link to="/reserve"><button class="btnB">BOOK NOW</button></router-link>
                    </div>
                    </transition>
                </div>
            </div>
            <transition name="fade">
            <div class="banner-right" v-if="showP">
                
            </div>
            </transition>
        </div>
     
    </div>
       <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L21.8,213.3C43.6,203,87,181,131,170.7C174.5,160,218,160,262,176C305.5,192,349,224,393,234.7C436.4,245,480,235,524,218.7C567.3,203,611,181,655,186.7C698.2,192,742,224,785,245.3C829.1,267,873,277,916,256C960,235,1004,181,1047,160C1090.9,139,1135,149,1178,176C1221.8,203,1265,245,1309,256C1352.7,267,1396,245,1418,234.7L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
   
    <div class="mobile-banner d-block d-md-none">
        <div class="b-top"> 
          <transition name="slide">
           <h1 class="mb-3" v-if="showP">Welcome to FS<span class="text-danger">T</span>S Online Ticketing System</h1>
          </transition>
          <transition name="fade">
            <p v-if="showP">An online stadium reservation platform</p>
          </transition>
          <transition name="spin">
            <div class="action-button" v-if="showP">
                 <router-link to="/reserve"><button class="btnB">BOOK NOW</button></router-link>
              </div>
          </transition>
        </div> 
    </div>

    <!-- Section 2 -->
      <div class="home-section-1">
        <div class="contain">
          <div class="row d-lg-flex align-items-center">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                <div class="left-image">
                     <img src="../assets/fans.png" class="img-fluid"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
               <div class="right-info">
                 <h2>FSTS an Effective  Stadium Ticketing System</h2>
                 <p>Ticketing systems for stadiums need to be robust and be able to scale. Selling tickets to tens of thousands, or even hundreds of thousands, of people in a short period of time will put stress and strain on any person.
                 It’s being able to handle that stress and strain that’s important.</p>
                 <p>People are usually excited to see their favourite sports team play and making sure they can as effortlessly as possible is our goal. </p>
                 <p>That’s why we’ve developed this stadium ticketing system  called <strong> FSTS </strong> "FOOTBALL STADIUM TICKETING SYSTEM" that you can rely on to take care of the entire process. From selling tickets online right through to game day admission, our system does it all. </p>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-section-2">
          <div class="contain">
              <h1 class="text-center feat-title mt-5">Features</h1>
              <div class="row d-lg-flex align-items-center">
                   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5 d-block d-lg-none">
                      <div class="image-right">
                           <img src="../assets/resize.png" class="img-fluid"/>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                    <div class="left-info">
                        <h2>Scalable</h2>
                        <p><strong>FSTS</strong> ticketing software was developed using the extremely powerful and versatile vue js framework and node js. If you have no idea what that is, it’s a coding programming language that developers  use when building high-throughput applications.</p>
                        <p>It reduces the number of requests the server has to deal with which means our system is able to handle thousands of transactions simultaneously. </p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5 d-none d-lg-block">
                      <div class="image-right">
                           <img src="../assets/resize.png" class="img-fluid"/>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2 mb-5">
                      <div class="image-left">
                          <img src="../assets/userfriendly.png" class="img-fluid"/>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2 mb-5">
                       <div class="right-info">
                          <h2>User Friendly</h2>
                          <p>The front-end user interface  that customers will interact with has been designed to be as intuitive and user-friendly as possible. It’s a simple and minimalistic design that presents all of the information customers need in an easy to digest format. </p>
                       </div>
                  </div>
                   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5 d-block d-lg-none">
                      <div class="image-right">
                           <img src="../assets/mo-user.png" class="img-fluid"/>
                      </div>
                  </div>
                   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                    <div class="left-info">
                        <h2>An all-in-one stadium ticketing system that you can rely on</h2>
                        <p>Our ticketing system takes care of the entire ticketing process from selling and issuing tickets, to managing access control on game day. It even helps you to formulate marketing campaigns based on the data it collects about customers. </p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5 d-none d-lg-block">
                      <div class="image-right">
                           <img src="../assets/mo-user.png" class="img-fluid"/>
                      </div>
                  </div>
                   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2 mb-5">
                      <div class="image-left">
                          <img src="../assets/seat.png" class="img-fluid"/>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2 mb-5">
                       <div class="right-info">
                          <h2>Intuitive Seat Reservation</h2>
                          <p>Let users quickly find the best seats in the stadium using our intuitive interactive seat selection feature </p>
                          <p>Our software system is designed to allow users to select and choose their exact seat all from the comfort of their home.</p>
                       </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Section 2 -->
      <Footer></Footer>
   
   
  </div>
    
    
     
      
 
   
  
</template>
<style scoped>
 
  /* .fade-leave-from{
     opacity: 1;
  }
  */
  /* .fade-leave-to{
     transition: all 2s ease-in-out;
  } */

  /* .fade-leave-active{
       
  }  */
</style>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import imageA from '@/assets/pro-im.png'


export default {
  name: 'Home',
  components:{
    Navbar,
    Footer,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup(){
    const router = useRouter()
    const showP = ref(false);
    const information = ref(false)
    const information2 = ref(false)
    const information3 = ref(false)
    const information4 = ref(false)
    const community = ref(null)
     
    const goToCommunity = () => {
        window.scrollTo(0, community.value.getBoundingClientRect().top)
    }
    const items = ref([
        {id:1, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Amadi Patrick", skill:"Fullstack dev", src:imageA},
        {id:2, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Richard", skill:"Mobile dev", src:imageA},
        {id:3, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Beloved Maximus", skill:"Digital marketter", src:imageA},
        {id:3, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Stanley Agu", skill:"Backend dev", src:imageA}
    ])
    const settings = ref({
      itemsToShow: 1,
      snapAlign: 'left',
    })
    const breakpoints = ref({
      480: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
    })
    const showDetails = () => {
        information.value = !information.value
    }
    const showDetails2 = () => {
         information2.value = !information2.value
    }
    const showDetails3 = () => {
         information3.value = !information3.value
    }
    const showDetails4 = () => {
         information4.value = !information4.value
    }
    const getStarted = () => {
      router.push('/blockchain-development')
    }
    onMounted(()=> {
       showP.value = true
    })
    return {
        information,
        information2,
        information3,
        information4,
        showDetails,
        showDetails2,
        showDetails3,
        showDetails4,
        items,
        showP,
        breakpoints,
        settings,
        getStarted,
        community,
        goToCommunity
    }

  }
  
}
</script>