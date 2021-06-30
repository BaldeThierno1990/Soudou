<template>
  <div class="container-fluid px-4 py-5 mx-auto">
    <!--search-->
    <div class="container">
    <div class="cards">
      
       
        <div class=" d-flex justify-content-center mt-5">
            <div class="input-field"> <input placeholder="search" class="form-control" /> <button class="btn btn1"><i class="fa fa-search"></i></button> </div>
        </div>
      
    </div>
</div>

    <div class="row d-flex justify-content-center">
      <div class="card border-0" v-for="soudou of info" :key="soudou">
        <div class="row set-p justify-content-center">
          <div class="col-sm-4 px-0">
           {{soudou.imageUrl}}
          </div>
          <div class="col-sm-8">
          
            <div class="row px-3">
              <h3 class="font-weight-bold">{{ soudou.title }}</h3>
            </div>
               <div class="line"></div>

            <div class="row px-3">
              <p class="mb-1">{{ soudou.description }}</p>
            </div>
            <div class="row px-3"></div>
            <div class="line"></div>
            <div class="row px-3 mt-3">
              <h5 class="text-secondary mb-1">Prix</h5>
            </div>
              
            <div class="row px-3">
              <h2 class="text-success mb-1 font-weight-bold">{{soudou.price}}GNF</h2>
            </div>
             <div class="row px-3">
              <p class="mb-1">{{ soudou.tel }}</p>
            </div>
             <div class="row px-3">
              <p class="mb-1">{{ soudou.email }}</p>
            </div>
             <div class="row px-3">
              <p class="mb-1">{{ soudou.address }}</p>
            </div>
             <div class="row px-3">
              <p class="mb-1">{{ soudou.cp }}</p>
            </div>
             <div class="row px-3">
              <p class="mb-1">{{ soudou.ville }}</p>
            </div>
             

             <!--<router-link :to="{name: 'Update', params:{ id:soudou.id}}">
                   <button type="button" class="btn btn-dark"><i class="fas fa-pencil">modifier</i></button>
             </router-link>-->
         
           <button type="button" class="btn btn-danger m-5"   @click="deleteData(soudou.id)"><i class="fas fa-pencil">supprimer</i></button>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    
    };
  },

   mounted() {
      
    axios
      .get(`http://localhost:4000/api/stuff`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.info = response.data;
      })
     
     
  },
   //supprimé données Api
           // deleteData(id) {
              //  axios
                 //   .delete("http://localhost:4000/api/stuff/" + id)
                 //  .then(response => {
                    //    this.result.splice(id, 1);
                     //   console.log(this.soudou);
                  //  });
          //  },
};
</script>
<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #e1bee7;
  background-repeat: no-repeat;
}

.card {
  width: 600px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px #4898a1;
  margin-top: 50px;
  margin-bottom: 50px;
  margin: 20px;
}

.set-p {
  padding-left: 15px;
  padding-right: 15px;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.rating {
  background-color: #3d5afe;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.grade {
  font-size: 18px;
}

.line {
  height: 1px;
  background-color: #e0e0e0;
}
/**.
search
 */
* {
    margin: 0;
    padding: 0
}


.cards{
     height: 200px;
    width: 100%;
    background-image: url('https://i.imgur.com/0v6OPXZ.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: none;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 1s
}




   
  

.card:hover {
   
    background-size: 100% 100%;
   
}

.text1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center
}

.text1 h1 {
    color: #000;
    font-size: 40px;
    font-weight: 600;
    font-family: 'Shippori Mincho B1', serif
}

.text2 {
    text-align: center;
    color: #5e94c1
}

.form-control {
    height: 50px;
    width: 400px;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    position: relative
}

.btn1 {
    align-items: center;
    position: absolute;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    background-color: #4898a1;
    border: none
}

.input-field {
    position: relative
}

.input-field button {
    position: absolute;
    top: 3px;
    right: 3px;
    color: #fff;
    font-size: 14px;
    cursor: pointer
}

.card .icons {
    position: absolute;
    bottom: -340px;
    left: 40%;
    transition: all 0.5s
}

.card:hover .icons {
    bottom: 40px
}

.card .icons span {
    font-size: 23px;
    color: white
}
 /**search */

@media screen and (max-width: 575px) {
  .image {
    height: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
  }
}
</style>
