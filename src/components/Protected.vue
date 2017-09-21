<template>
  <div class="protected">
    <h1>{{ msg }}</h1>
    <el-button type="primary" native-type="submit" class="submit-btn">
      Log Out
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'protected',
  data() {
    return {
      msg: 'Protected Content!!!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
