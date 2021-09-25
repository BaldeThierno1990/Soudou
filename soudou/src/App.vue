<template>
  <div id="app">
  <Header/>
 <!-- <Footer/>-->
  
    <router-view/>
    
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default {
  components: {
    Header,
    Footer
    
   
   
  }
}
</script>
<style>
body{
  background-color: #fff;
}
</style>




