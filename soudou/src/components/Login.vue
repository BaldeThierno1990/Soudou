<template>
    <div class="connexion">
        <hr>
     <form  @submit.prevent="handleLogin">
     
   
    
    <div class="social-media">
       
     
     
         <p>Se connecter avec google </p>
    </div>
    <p class="choose-email">ou utiliser mon adresse e-mail :</p>
    
    <div class="inputs">
      <input type="email" placeholder="Email"  v-model="email"/>
      <input type="password" placeholder="Mot de passe" v-model="password">
    </div>
    <input type="checkbox" 
         checked>
  <label for="mdp">Afficher le mot de passe</label>
    
    <p class="inscription">Je n'ai pas de compte.<router-link to="/registration">Je m'en crée un.</router-link></p>
    <div align="center">
      <button type="submit">Se connecter</button>
    </div>
  </form>
    </div>
  
</template> 
<style scoped>
.connexion{
  display: flex;
  justify-content:center;
  flex-direction: columns;
  align-items: center;
 
  font-family: 'Roboto', sans-serif;
}
form {
  margin-top: 20px;
  background-color: #fff;
  padding: 40px 60px;
  border-radius: 30px;
  min-width: 300px;
  
  box-shadow: 10px 5px 5p;
}
form h1{
  color: #eb7371;
  text-align:center;
}
form .social-media{
  margin-top: -10px;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
}
form .social-media p{
  padding: 5px;
  margin-bottom: 2px;
 
  margin-left: 2px;
  border-radius: 100%;
  
  text-align: center;
  cursor:pointer;
  color: #545454;
}
form p.choose-email{
  text-align:center;
}
form .inputs {
  display: flex;
  flex-direction: column;
}
form .inputs input[type='email'], input[type='password']{
  padding: 15px;
  border-radius: 15px;
  background-color:#f5f5f5;
  margin-bottom: 15px;
}
form p.inscription{
  font-size: 14px;
  margin-bottom: 20px;
  color: #878787;
}
form p.inscription span{
  color: #eb7371;
}
form button{
  padding: 15px 25px;
  border-radius: 5px;
  border:none;
  font-size: 15px;
  color: #fff;
 background-color: #4898a1;
  outline:none;
  cursor:pointer;
}
h1{
    text-decoration: underline;
}
 
</style>
<script>
    
    export default {
      
        data: () => {
            return {
                formData: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
         
        }
    }
</script>

