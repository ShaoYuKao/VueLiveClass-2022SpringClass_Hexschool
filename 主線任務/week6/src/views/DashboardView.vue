<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="nav-link" to="/admin">後台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >優惠劵</router-link
            >
          </li>
        </ul>
      </div>
      <a href="#" @click.prevent="signout">登出</a>
    </div>
  </nav>
  <router-view v-if="checkSuccess" />
</template>

<script>
export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(api, { api_token: token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            alert(err.data.message);
            this.$router.push('/login');
          });
      } else {
        alert('您尚未登入');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/login');
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
