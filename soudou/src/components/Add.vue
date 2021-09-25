<template>
 
    
  <div class="connexion">
    
    
    
    <form  @submit.prevent="onCreatePost">
       <div class="alert alert-alert-success" v-if="isSuccess">
        Bien ajouté avec succè! merci pour la confiance
     </div>
      

      <div class="inputs">
        <input type="text" placeholder="image" v-model="image" />
          <input type="text" placeholder="name" v-model="name"/>
         <input type="text" placeholder="statut" v-model="statut"/>
          <input type="text" placeholder="description" v-model="description" />
          <input type="text" placeholder="pays" v-model="pays" />
        <input type="text" placeholder="ville" v-model="ville" />
        <input type="text" placeholder="phone"  v-model="phone"/>
       
        <input type="text" placeholder="mail" v-model="mail" />
      </div>
      <div align="center">
        <button type="submit">valider</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.connexion {
  display: flex;
  justify-content: center;
  flex-direction: columns;
  align-items: center;
 
  font-family: "Roboto", sans-serif;
}
form {
  margin-top: 20px;
  background-color: #fff;
  padding: 40px 60px;
  border-radius: 30px;
  min-width: 300px;
 
  box-shadow: 10px 5px 5p;
}
form h1 {
  color: #eb7371;
  text-align: center;
}
form .social-media {
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
form .social-media p {
  padding: 5px;
  margin-bottom: 2px;
  margin-left: 2px;
  border-radius: 100%;
  text-align: center;
  cursor: pointer;
  color: #545454;
}
form p.choose-email {
  text-align: center;
}
form .inputs {
  display: flex;
  flex-direction: column;
}
form .inputs input[type="text"],
input[type="email"],
input[type="password"],input[type="file"] {
  padding: 15px;
  border-radius: 15px;
  background-color: #f5f5f5;
  margin-bottom: 15px;
}
textarea{
   padding: 15px;
  border-radius: 15px;
   background-color: #f5f5f5;
   margin: 15px;

}
form p.inscription {
  font-size: 14px;
  margin-bottom: 20px;
  color: #878787;
}
form p.inscription span {
  color: #eb7371;
}
form button {
  padding: 15px 25px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  color: #fff;
  background-color: #4898a1;
  outline: none;
  cursor: pointer;
}
h1 {
  text-decoration: underline;
}
</style>



<script>
import axios from 'axios'


export default {
  data() {
    return {
    
      image: '',
      name: '',
      statut:'',
      description: '',
      pays: '',
      ville: '',
      phone: '',
      mail: '',
      isSuccess: false,
    };
  },
  methods: {
    onCreatePost() {
      axios
        .post(`http://localhost:4000/api/stuff`, {
          
          image: this.image,
          name: this.name,
          statut:this.statut,
          description: this.description,
          pays: this.pays,
          ville: this.ville,
          phone: this.phone,
          mail: this.mail,
        })
        .then((response) => {
          this.isSuccess = true;
          console.log(response);
        });
    },
  },
  
 
}

</script>

