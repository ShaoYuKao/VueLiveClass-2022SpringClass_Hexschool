<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal" >
      <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
              <div class="modal-header bg-dark text-white">
                  <h5 class="modal-title" id="exampleModalLabel">
                      <span>{{ product.title }}</span>
                  </h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                      aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="row">
                      <div class="col-sm-6">
                          <img class="img-fluid" :src="product.imageUrl" alt="">
                      </div>
                      <div class="col-sm-6">
                          <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
                          <p>商品描述：{{ product.content }}</p>
                          <p>商品內容：{{ product.description }}</p>
                          <div class="h5" v-if="product.price === product.origin_price">
                            {{ product.price }} 元
                          </div>
                          <div>
                              <del class="h6">原價 {{ product.origin_price }} 元</del>
                              <div class="h5">現在只要 {{ product.price }} 元</div>
                          </div>
                          <div>
                              <div class="input-group">
                                  <input type="number" class="form-control" min="1" v-model="qty"
                                      :disabled="isLoading">
                                  <button type="button" class="btn btn-primary" @click="addToCart"
                                      :disabled="isLoading">加入購物車</button>
                              </div>
                          </div>
                      </div>
                      <!-- col-sm-6 end -->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import emitter from '@/libs/emitter';

export default {
  props: ['id'],
  data() {
    return {
      modal: {},
      product: {},
      qty: 1,
      isLoading: false,
      preId: '', // 暫存查看上一個產品的 id
    };
  },
  watch: {
    id() {
      this.getProduct();
      if (this.preId !== this.id) {
        this.preId = this.id;
        this.product = {};
      }
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    getProduct() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
        });
    },
    addToCart() {
      if (this.product && this.product.id) {
        emitter.emit('add-cart', {
          id: this.product.id,
          qty: this.qty,
        });
        this.closeModal();
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
