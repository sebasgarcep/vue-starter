<template>
  <div class="signup">
    <el-card class="box-card">
      <form v-on:submit="signup">
        <el-input
          placeholder="Email"
          class="form-field"
          v-model="email">
        </el-input>
        <el-input
          placeholder="Password"
          class="form-field"
          v-model="password"
          type="password">
        </el-input>
        <el-button type="primary" native-type="submit" class="submit-btn">
          Signup
        </el-button>
      </form>
    </el-card>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signup(evt) {
      evt.preventDefault();
      const { email, password } = this.$data;
      store.dispatch('signup', { email, password });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  width: 400px;
  margin: 0 auto;
  margin-top: 200px;
}

.form-field {
  margin-top: 10px;
  margin-bottom: 10px;
}

.submit-btn {
  width: 100%;
}
</style>
