<template>
  <div class="home">
    <el-menu theme="dark" :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/login" class="link">
          Login
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/signup" class="link">
          Signup
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/protected" class="link">
          Protected
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/public" class="link">
          Public
        </router-link>
      </el-menu-item>
    </el-menu>
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin-bottom: 60px;
  border-radius: 0px;
}

.navbar .link {
  text-decoration: none;
}
</style>
