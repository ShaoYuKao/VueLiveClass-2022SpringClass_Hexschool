const apiUrl = "https://vue3-course-api.hexschool.io/v2";
const apiPath = "202201-vue-shaoyu";

const { defineRule, Form, Field, ErrorMessage, configure } = VeeValidate;
const { required, email, min, max } = VeeValidateRules;
const { localize, loadLocaleFromURL } = VeeValidateI18n;

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

loadLocaleFromURL(
  "https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json"
);

configure({
  generateMessage: localize("zh_TW"),
});

const app = Vue.createApp({
  data() {
    return {
      cartData: {}, // 購物車列表
      products: [], // 產品列表
      productId: "",
      isLoadingItem: [],
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage,
  },
  methods: {
    getProducts() {
      axios.get(`${apiUrl}/api/${apiPath}/products/all`).then((res) => {
        this.products = res.data.products;
      });
    },
    openProductModal(id) {
      this.productId = id;
      this.$refs.productModal.openModal();
    },
    getCart() {
      axios.get(`${apiUrl}/api/${apiPath}/cart`).then((res) => {
        this.cartData = res.data.data;
      });
    },
    addToCart(id, qty = 1) {
      this.isLoadingItem = [id];
      const data = {
        product_id: id,
        qty,
      };
      axios.post(`${apiUrl}/api/${apiPath}/cart`, { data }).then((res) => {
        this.getCart();
        this.$refs.productModal.closeModal();
        this.isLoadingItem = [];
      });
    },
    removeCartItem(id) {
      this.isLoadingItem = [id];
      axios.delete(`${apiUrl}/api/${apiPath}/cart/${id}`).then((res) => {
        this.getCart();
        this.isLoadingItem = [];
      });
    },
    updateCartItem(item) {
      const pid = item.id;
      this.isLoadingItem = [pid];
      const data = {
        product_id: pid,
        qty: item.qty,
      };
      axios
        .put(`${apiUrl}/api/${apiPath}/cart/${pid}`, { data })
        .then((res) => {
          this.getCart();
          this.isLoadingItem = [];
        });
    },
    clearCart() {
      const pids = [];
      this.cartData.carts.forEach((item) => {
        pids.push(item.id);
      });
      if (0 >= pids.length) {
        return;
      }
      this.isLoadingItem = [...pids];
      axios.delete(`${apiUrl}/api/${apiPath}/carts`).then((res) => {
        this.isLoadingItem = [];
        this.getCart();
      });
    },
    createOrder() {
      const data = this.form;
      axios
        .post(`${apiUrl}/api/${apiPath}/order`, { data })
        .then((res) => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.getCart();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
});

app.component("product-modal", {
  props: ["id"],
  template: "#userProductModal",
  data() {
    return {
      modal: {},
      product: {},
      qty: 1,
      isLoading: false,
    };
  },
  watch: {
    id() {
      this.getProduct();
    },
  },
  methods: {
    openModal() {
      this.product = {};
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    getProduct() {
      this.isLoading = true;
      axios.get(`${apiUrl}/api/${apiPath}/product/${this.id}`).then((res) => {
        this.product = res.data.product;
        this.isLoading = false;
      });
    },
    addToCart() {
      this.isLoading = true;
      this.$emit("add-cart", this.product.id, this.qty);
    },
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal);
  },
});

app.mount("#app");
