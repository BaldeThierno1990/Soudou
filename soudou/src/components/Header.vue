<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="@/assets/img/logo.png" alt="logo" width="90"></a>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbarColor01" style="">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/">Accueil
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
      
             <router-link class="nav-link" to="/add">Ajout</router-link>
        </li>
         <li class="nav-item">
      
             <router-link class="nav-link" to="/registration">Inscription</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/view">Connexion</router-link>
        </li>
          
      </ul>
     
    </div>
  </div>
</nav>
</template>
<style scoped>
.nav-item{
    margin-left: 200px;
    line-height: 40px;
    margin-right: 1rem;
}
.navbar{
  background-color: #4898a1;
  
  
}
.nav-links {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;
}
.nav-item:hover:after {
  width: 100%;
  background: #ffdd40;
}
.nav-item:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.5s ease;
}
/** .nav-item .active {
  color: #ffdd40;
  border: 1px solid #ffdd40;
}
*/


</style>