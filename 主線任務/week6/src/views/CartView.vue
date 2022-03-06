<template>
  <h2>購物車</h2>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="
              height: 100px;
              background-size: cover;
              background-position: center;
            "
          ></div>
        </td>
        <td>
          {{ product.title }}
        </td>
        <td>
          <div class="h5" v-if="product.price === product.origin_price">
            {{ product.price }} 元
          </div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="openProductModal(product.id)"
              :disabled="-1 < isLoadingItem.indexOf(product.id)"
            >
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addToCart(product.id)"
              :disabled="-1 < isLoadingItem.indexOf(product.id)"
            >
              <i
                class="fas fa-spinner fa-pulse"
                v-show="-1 < isLoadingItem.indexOf(product.id)"
              ></i>
              加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- 購物車列表 -->
  <div class="text-end">
    <button
      class="btn btn-outline-danger"
      type="button"
      @click="clearCart"
      :disabled="0 < isLoadingItem.length || 0 >= cartData.carts?.length"
    >
      清空購物車
    </button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <!-- 購物車資料是否存在 -->
      <template v-if="cartData.carts">
        <tr v-for="item in cartData.carts" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
              :disabled="-1 < isLoadingItem.indexOf(item.id)"
            >
              <i
                class="fas fa-spinner fa-pulse"
                v-show="-1 < isLoadingItem.indexOf(item.id)"
              ></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">
                    已套用優惠券
                  </div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <!-- <input min="1" type="number" class="form-control" v-model="item.qty"> -->
                <select
                  class="form-select"
                  v-model="item.qty"
                  @change="updateCartItem(item)"
                  :disabled="-1 < isLoadingItem.indexOf(item.id)"
                >
                  <option
                    :value="num"
                    v-for="num in item.qty"
                    :key="`${num}-${item.id}`"
                  >
                    {{ num }}
                  </option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{
                  item.product.unit
                }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cartData.total }}</td>
      </tr>
      <!-- <tr>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ }}</td>
            </tr> -->
    </tfoot>
  </table>
  <!-- 產品Modal -->
  <ProductModal :id="productId" ref="productModal"></ProductModal>
  <!-- 產品Modal -->
</template>

<script>
import emitter from '@/libs/emitter';
import ProductModal from '@/components/ProductModal.vue';

export default {
  data() {
    return {
      cartData: {}, // 購物車列表
      products: [], // 產品列表
      productId: '',
      isLoadingItem: [],
    };
  },
  components: {
    ProductModal,
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        });
    },
    openProductModal(id) {
      this.productId = id;
      this.$refs.productModal.openModal();
    },
    getCart() {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data;
        emitter.emit('get-cart');
      });
    },
    addToCart(id, qty = 1) {
      this.isLoadingItem.push(id);
      const data = {
        product_id: id,
        qty,
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then(() => {
          this.getCart();
          this.isLoadingItem = [];
        });
    },
    clearCart() {
      const pids = [];
      if (!this.cartData.carts) return;
      this.cartData.carts.forEach((item) => {
        pids.push(item.id);
      });
      if (pids.length <= 0) return;
      this.isLoadingItem = [...pids];
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`).then(() => {
        this.isLoadingItem = [];
        this.getCart();
      });
    },
    removeCartItem(id) {
      this.isLoadingItem = [id];
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`).then(() => {
        this.getCart();
        this.isLoadingItem = [];
      });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
    emitter.on('add-cart', (param) => {
      this.addToCart(param.id, param.qty);
    });
  },
};
</script>
