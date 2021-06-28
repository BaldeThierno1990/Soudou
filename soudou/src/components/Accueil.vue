<template>
  <div class="container-fluid px-4 py-5 mx-auto">
    <!--search-->
    <div class="container">
    <div class="cards">
      
       
        <div class=" d-flex justify-content-center mt-5">
            <div class="input-field"> <input placeholder="search" class="form-control" /> <button class="btn btn1"><i class="fa fa-search"></i></button> </div>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-5 gap-4 icons"> <span><i class="fa fa-google"></i></span> <span><i class="fa fa-facebook"></i></span> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-instagram"></i></span> </div>
    </div>
</div>

    <!--fin search-->
    <div class="row d-flex justify-content-center">
      <div class="card border-0" v-for="post of posts" :key="post">
        <div class="row set-p justify-content-center">
          <div class="col-sm-4 px-0">
            <img class="image" src="https://i.imgur.com/QNqiaSz.jpg" />
          </div>
          <div class="col-sm-8">
            <div class="row px-3 mt-4 mb-3">
              <p class="rating mb-0 px-2 mr-3"><strong>8.0</strong></p>
              <p class="text-primary mb-0 mr-2 grade">
                <strong>Very Good</strong>
              </p>
              <p class="text-secondary mb-0 mr-2">&middot;</p>
              <p class="text-secondary mb-0">14K review</p>
            </div>
            <div class="row px-3">
              <h3 class="font-weight-bold">{{ post.title }}</h3>
            </div>

            <div class="row px-3">
              <p class="mb-1">{{ post.description }}</p>
            </div>
            <div class="row px-3"></div>
            <div class="line"></div>
            <div class="row px-3 mt-3">
              <h5 class="text-secondary mb-1">Prix</h5>
            </div>
            <div class="row px-3">
              <h2 class="text-success mb-1 font-weight-bold">$288</h2>
            </div>
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
      posts: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(`http://localhost:4000/api/stuff`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
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
  box-shadow: 0px 4px 8px 0px #aa00ff;
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
    background-color: #3252D1;
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
