<template>
  <div class="padding container d-flex justify-content-center">
    <div class="col-md-10 col-md-offset-1">
      <div class="alert alert-alert-success" v-if="isSuccess">
        Bien ajouté avec succè! merci pour la confiance
      </div>
      <form @submit.prevent="onCreatePost" class="form">
        <h2 class="text-center p-20">Ajouter votre bien</h2>

        <hr />
        <!--input 1-->
        <div class="form-group">
          <label>titre:</label>
          <input type="text" class="form-control" v-model="form.title" />
        </div>
        <!--input 2-->
        <div class="form-group">
          <label>image:</label>
          <input type="text" class="form-control" v-model="form.imageUrl" />
        </div>
        <!--input 3-->

        <div class="form-group">
          <label>Description:</label>
          <textarea class="form-control" v-model="form.description"></textarea>
        </div>

         <!--input 4-->

        <div class="form-group">
          <label>price:</label>
          <input type="number" class="form-control" v-model="form.price">
        </div>
        <!--input 5-->
        <div class="form-group">
          <label>Tel:</label>
          <input type="text" class="form-control" v-model="form.contact" />
        </div>
        <!--input 6-->
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="form.email" />
        </div>
        <!--input 7-->

        <div class="form-group">
          <label>Adresse du bien:</label>
          <input type="text" class="form-control" v-model="form.address" />
        </div>
        <!--input 8-->
        <div class="form-group">
          <label>code Postal:</label>
          <input type="number" class="form-control" v-model="form.cp" />
        </div>
        <!--input 9-->
        <div class="form-group">
          <label>Ville:</label>
          <input type="text" class="form-control" v-model="form.ville" />
        </div>
        <!--button de validation-->

        <div class="form-group text-center flex m-5" id="bouton">
          <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold text-sm" type="button" v-on:click="submit()">ENVOYER</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
#bouton {
  justify-content: space-around;
 
}
.btn{
     background-color: #4898a1;
     color:#FFFF
}
</style>
<script>
    import axios from "axios";
    const BaseUrl = 'http://localhost:4000/api/stuff';
    export default {
        name: "Update",
        data() {
            return {
                form: {
                    title: '',
                    description:'',
                    imageUrl:'',
                    price:'',
                    contact:'',
                    email:'',
                    address:'',
                    cp:'',
                    ville:''
                }
            }
        },
        mounted(){
            var self = this;
            //Lire données Api
            let id = this.$route.params.id;
              axios
                .get('http://localhost:4000/api/stuff/' + id)
                .then(function (response) {
                    self.form = response.data
                     console.log(response.data)
                })
        },
         methods: {
            submit: function (id) {
                id = this.$route.params.id;
               
                
                axios.put( BaseUrl + 'Accueil/' + id, this.form)
                    // eslint-disable-next-line no-unused-vars
                    .then(function( response ){
                        // Handle success
                    }.bind(this))
                this.$router.push({ name: 'Accueil' })
            }
        }
    }
</script>