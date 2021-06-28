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
          <input type="text" class="form-control" v-model="title" />
        </div>
        <!--input 2-->
        <div class="form-group">
          <label>image:</label>
          <input type="text" class="form-control" v-model="imageUrl" />
        </div>
        <!--input 3-->

        <div class="form-group">
          <label>Description:</label>
          <textarea class="form-control" v-model="description"></textarea>
        </div>

         <!--input 4-->

        <div class="form-group">
          <label>price:</label>
          <input type="number" class="form-control" v-model="price">
        </div>
        <!--input 5-->
        <div class="form-group">
          <label>Tel:</label>
          <input type="text" class="form-control" v-model="tel" />
        </div>
        <!--input 6-->
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <!--input 7-->

        <div class="form-group">
          <label>Adresse du bien:</label>
          <input type="text" class="form-control" v-model="address" />
        </div>
        <!--input 8-->
        <div class="form-group">
          <label>code Postal:</label>
          <input type="number" class="form-control" v-model="cp" />
        </div>
        <!--input 9-->
        <div class="form-group">
          <label>Ville:</label>
          <input type="text" class="form-control" v-model="ville" />
        </div>
        <!--button de validation-->

        <div class="form-group text-center flex m-5" id="bouton">
          <button type="submit" class="btn">valider</button>
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

