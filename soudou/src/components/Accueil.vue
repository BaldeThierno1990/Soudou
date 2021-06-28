<template>
 <div class="container-fluid px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="card border-0" v-for="post of posts" :key="post">
            <div class="row set-p justify-content-center">
                <div class="col-sm-4 px-0"> <img class="image" src="https://i.imgur.com/QNqiaSz.jpg"> </div>
                <div class="col-sm-8">
                    <div class="row px-3 mt-4 mb-3">
                        <p class="rating mb-0 px-2 mr-3"><strong>8.0</strong></p>
                        <p class="text-primary mb-0 mr-2 grade"><strong>Very Good</strong></p>
                        <p class="text-secondary mb-0 mr-2">&middot;</p>
                        <p class="text-secondary mb-0">14K review</p>
                    </div>
                    <div class="row px-3">
                        <h3 class="font-weight-bold">{{post.title}}</h3>
                    </div>
                   
                    <div class="row px-3">
                        <p class="mb-1">{{post.description}}</p>
                    </div>
                    <div class="row px-3">
                       
                    </div>
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
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:4000/api/stuff`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
<style scoped>
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #E1BEE7;
    background-repeat: no-repeat
}

.card {
    width: 600px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px #AA00FF;
    margin-top: 50px;
    margin-bottom: 50px;
   margin: 20px;
}

.set-p {
    padding-left: 15px;
    padding-right: 15px
}

.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px
}

.rating {
    background-color: #3D5AFE;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px
}

.grade {
    font-size: 18px
}

.line {
    height: 1px;
    background-color: #E0E0E0
}

@media screen and (max-width: 575px) {
    .image {
        height: auto;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 10px
    }
}
</style>
  