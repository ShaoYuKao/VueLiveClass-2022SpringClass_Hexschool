const app = Vue.createApp({
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    login() {
      const usernameRequir = (this.userInfo.username === '') ? true : false;
      const passwordRequir = (this.userInfo.password === '') ? true : false;
      if (usernameRequir || passwordRequir) {
        this.alert("需填入帳號和密碼資料，登入失敗", "danger");
        return;
      }

      this.isLoading = true;

      const reqData = {
        username: this.userInfo.username,
        password: this.userInfo.password
      }
      axios.post('https://vue3-course-api.hexschool.io/v2/admin/signin', reqData)
        .then((res) => {
          if (200 === res.status) {
            const { expired, token, uid } = res.data;

            // 寫入 cookie token
            // expires 設置有效時間
            document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
            window.location = 'products.html';
          } else {
            this.alert("帳號密碼錯誤，登入失敗", "danger");
          }
        })
        .catch((err) => {
          console.error("err", err);
          this.alert("帳號密碼錯誤，登入失敗", "danger");
        })
        .finally(() => {
          this.isLoading = false;
        })
    },
    alert(message, type) {
      const alertPlaceholder = document.getElementById('loginResult')
      const wrapper = document.createElement('div')
      wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert"> 
          ${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
      alertPlaceholder.append(wrapper);
      setTimeout(() => {
        const alertNode = document.querySelector('.alert');
        const bsAlert = new bootstrap.Alert(alertNode);
        if (alertNode && bsAlert) {
          bsAlert.close();
        }
      }, 3000);
    }
  }
});

app.use(VueLoading.Plugin).component('loading', VueLoading).mount('#app');