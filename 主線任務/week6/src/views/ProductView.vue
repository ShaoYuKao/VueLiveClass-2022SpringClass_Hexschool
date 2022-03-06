<template>
  <h2>產品細節</h2>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <img :src="product.imageUrl" :alt="product.title">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ product.category }}</li>
        <li class="list-group-item">{{ product.content }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProducts() {
      const { id } = this.$route.params;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
