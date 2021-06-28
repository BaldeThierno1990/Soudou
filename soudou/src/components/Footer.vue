<template>
  <div class="footer">
   
   <h1>Nous suivres</h1>
    <div class="social-media flex">
      <p><i class="fab fa-google"></i></p>
      <p><i class="fab fa-youtube"></i></p>
      <p><i class="fab fa-facebook-f"></i></p>
      <p><i class="fab fa-twitter"></i></p>
    </div>
   
    <div class="flex">

         
      <div class="flex-1">
        <h1>A propos</h1>
        <a href="#" class="block py-1 text-gray-600 hover:underline"
          >Connexion</a
        >
        <a href="#" class="block py-1 text-gray-600 hover:underline">Contact</a>
        <a href="#" class="block py-1 text-gray-600 hover:underline"
          >Deconnexion</a
        >
      </div>
      <div class="flex-1">
        <h1>Les liens Utiles</h1>

        <a href="#" class="block py-1 text-gray-600 hover:underline"
          >Connexion</a
        >
        <a href="#" class="block py-1 text-gray-600 hover:underline">Contact</a>
        <a href="#" class="block py-1 text-gray-600 hover:underline"
          >Deconnexion</a
        >
      </div>
      <div class="flex-1">
        <h1>Articles</h1>
        <a href="#" class="block py-1 text-gray-600 hover:underline"
          >Connexion</a
        >
        <a href="#" class="block py-1 text-gray-600 hover:underline">Contact</a>
        <a href="#" class="block py-1 text-gray-600 hover:underline"
          >Deconnexion</a
        >
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.footer {
  
  margin-top: 12px;
  background-color:rgba(236, 239, 246, 1);
;
  height: 200px;
  text-align: center;
}
h1{
  text-align: center;
  color: rgba(0, 74, 173, 1);
  font-size: 20px;
}
a{
    text-align: center;
}
 .social-media{
     margin-right: 20px;
     cursor: pointer;
 }
@media screen and (min-width: 200px) and (max-width: 640px) {
  .flex {
  flex-direction: column;
  
    
   
  }
  .footer{
    height: 500px;
  }
}
.social-media{
  margin-left:50%;
}
</style>
