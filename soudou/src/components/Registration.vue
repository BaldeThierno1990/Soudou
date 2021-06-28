<template>
  <div class="connexion">
    <hr />
    <form>
      <div class="social-media">
      

        <p>Se connecter avec google</p>
      </div>
      <p class="choose-email">ou utiliser mon adresse e-mail :</p>

      <div class="inputs">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <input type="email" placeholder="Confirmation Adress e-mail" />

        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="confirmation password" />
      </div>

      <p class="inscription">J'ai deja un compte.<router-link to="/login">Je me connecte.</router-link></p>
      <div align="center">
        <button type="submit">S'inscrire</button>
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
input[type="password"] {
  padding: 15px;
  border-radius: 15px;
  background-color: #f5f5f5;
  margin-bottom: 15px;
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
