<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to=""></router-link>
    <router-view/>
<<<<<<< HEAD
    <p>eqwee</p>
    <p>冯涛</p>
    <p>冯涛</p>
    <span>代码协作</span>
=======
    <p>陈良</p>
<<<<<<< HEAD
>>>>>>> 05a7746bebef51427077380a9249a70309717ac5
=======
    <p>伍雪雪</p>
<<<<<<< HEAD
>>>>>>> b6dafdd2ac11cd3ad87143495571cc22b0c52ca2
=======
    <p>fyg</p>
>>>>>>> 935adf46f2902fb0a55caa4726d5ccfe9bff1c8d
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
