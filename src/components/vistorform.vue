<template>
    <div>
        <div class="card bg-light mb-3" style="">
                        <div class="card-header text-white bg-primary p-2">BOOK 1</div>
                        <div class="card-body">
                            <div class="form-group">
                            <label for="exampleInputEmail1">Booked By:</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Contact:</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="phone">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="email">
                        </div>
                </div>
        </div>

    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
    name:'VisitorForm',
    setup(){
     
      
     
    }

}
</script>