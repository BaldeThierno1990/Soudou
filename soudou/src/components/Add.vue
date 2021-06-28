<template>
  <div class="padding container d-flex justify-content-center">
    <div class="col-md-10 col-md-offset-1">
      <form @submit="onSubmit" class="form">
        <h2 class="text-center p-20">Ajouter votre bien</h2>

        <hr />
        <div class="form-group">
          <label class="col-form-label">titre:</label>
          <input type="text" class="form-control" v-model="title" />
        </div>
        <div class="form-group">
          <label class="col-form-label">image:</label>
          <input
           type="input"
            class="form-control" v-model="imageUrl"
          />
        </div>

        <div class="form-group">
          <label class="col-form-label">Description:</label>
          <textarea class="form-control" rows="5" cols="33" v-model="description"></textarea>
        </div>
        <div class="form-group">
          <label class="col-form-label">Tel:</label>
          <input type="text" class="form-control" v-model="tel"/>
        </div>
        <div class="form-group">
          <label class="col-form-label">Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>

        <div class="form-group">
          <label class="col-form-label">Adresse du bien:</label>
          <input type="text" class="form-control" v-model="address"/>
        </div>
        <div class="form-group">
          <label class="col-form-label">code Postal:</label>
          <input type="number" class="form-control" v-model="cp" />
        </div>
        <div class="form-group">
          <label class="col-form-label">Ville:</label>
          <input type="text" class="form-control" v-model="ville" />
        </div>

        <div class="form-group text-center flex" id="bouton">
          <button type="submit" class="btn btn-danger">Annuler</button>
          <button type="submit" class="btn btn-success">valider</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
#bouton {
  justify-content: space-around;
}
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      imageUrl:'',
      description:'',
      tel:'',
      email:'',
      address:'',
      cp:'',
      ville:'',



      errors: []
    }
  },

  methods: {
    // Pushes posts to the server when called.
    onsubmit() {
      axios.post(`http://localhost:4000/api/stuff`, {
        title: this.title,imageUrl: this.imageUrl,description:this.description,tel:this.tel,email:this.email,address:this.address,cp:this.cp,ville:this.ville
      })
       .then(response => {
            console.log('Response', response.data)
      
      })
    }
  }
}
</script>
