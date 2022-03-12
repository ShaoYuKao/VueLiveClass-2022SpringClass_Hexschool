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
  <div class="text-end" id="bill">
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

  <div class="container">
    <div class="row justify-content-center">
        <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button
              type="submit"
              class="btn btn-danger"
              :disabled="Object.keys(errors).length > 0 || cartData.carts?.length === 0"
            >送出訂單</button>
          </div>
        </Form>
      </div>
  </div>

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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
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
    createOrder() {
      const data = this.form;
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data })
        .then((res) => {
          emitter.emit('push-message', {
            style: 'success',
            title: '送出訂單成功',
            content: res.data.message,
          });
          this.$refs.form.resetForm();
          this.getCart();
        })
        .catch((err) => {
          emitter.emit('push-message', {
            style: 'danger',
            title: '錯誤訊息',
            content: err.data.message,
          });
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
