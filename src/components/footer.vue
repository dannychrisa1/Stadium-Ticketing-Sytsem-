<template>
    <div>
        <div class="footer-section">
           <div class="contain">
             <div class="row d-lg-flex justify-content-between">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-5">
                  <div class="footer-left">
                    <img src="@/assets/fstslogo.png" style="width:100px" class="mb-1 fsts-footer"/>
                   <p>FSTS is a stadium ticketing software for ticket acquisition that can be used by any stadium to facilitate easy booking and management of ticket based on available seat and provide a secure system for issuing tickets.</p>
                    <div class="social pt-1">
                      <a href=""><i class="fab fa-twitter-square"></i></a>
                      <a href=""><i class="fab fa-facebook-square"></i></a>
                      <a href=""><i class="fab fa-instagram-square"></i></a>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-5">
                  <div class="footer-center">
                    <h4 class="mb-3">LINKS</h4>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-5">
                   <div class="footer-right">
                     <h4 class="mb-3">CONTACT</h4>
                     <div class="conn">
                      <p><i class="fa fa-phone me-2"></i> +234 812 466 6392</p>
                      <p><i class="fa fa-envelope me-2"></i> <a href="mailto:fstssystem@gmail.com">fstssystem@gmail.com</a></p>
                     </div>
                   </div>
                </div>
             </div> 
           </div>
            <hr class="f-r">
        <div class="copyright">
              <div class="contain p-4 text-center">
                    Copyright &copy; All rights reserved
              </div>		
        </div>
           
        </div>
       
        
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goToCourses = () => {
        router.push('/blockchain-development')
    }

    return {
      goToCourses
    }
  }
}
</script>


