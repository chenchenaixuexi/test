<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to=""></router-link>
    <router-view/>
    <p>eqwee</p>
    <h1>zs提交</h1>
    <!-- <main></main> -->
    <!-- <button ></button> -->
  </div>
</template>

<script>
import { user } from "@/api/user.js";

// import servies from '@/utils/request.js'
export default {
  name: 'App',
  components:{
    //
  },
  async mounted () {
    // servies({
    //   url:'/users/info',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    //   if (res.code === 0) {
        
    //   } else {
        
    //   }
    // }).catch(err => {
      
    // })
    // 异步写法
    // console.log('请求前')
    // const userInfo = user()
    // console.log(userInfo,'userInfo');
    // userInfo.then(res=>{
    //   console.log(res,'res')
    // })
    // console.log('请求后')

    //同步写法
    console.log(user)
    try {
      let res = await user({name:'航三',age:18})
      if(res.code ===0){

      }
      
    } catch (error) {
      
    }
    console.log(userInfo);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
