<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ createAt(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- loading -->
  <Loading :active="isLoading" :can-cancel="true" :is-full-page="true"></Loading>
  <!-- ToastMessages -->
  <ToastMessages></ToastMessages>
  <!-- OrderModal -->
  <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
  <!-- OrderDelModal -->
  <OrderDelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></OrderDelModal>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import emitter from '@/libs/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import OrderModal from '@/components/OrderModal.vue';
import OrderDelModal from '@/components/OrderDelModal.vue';
import utils from '@/libs/utils';

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
    };
  },
  mixins: [utils],
  components: {
    Loading,
    ToastMessages,
    OrderDelModal,
    OrderModal,
  },
  methods: {
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
        this.isLoading = false;
      }).catch((error) => {
        this.isLoading = false;
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: error.data.message,
        });
      });
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      const orderComponent = this.$refs.orderModal;
      orderComponent.openModal();
    },
    openDelOrderModal(item) {
      console.log('openDelOrderModal item', item);
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    updatePaid(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((res) => {
        this.isLoading = false;
        this.getOrders(this.currentPage);
        emitter.emit('push-message', {
          style: 'success',
          title: '更新付款狀態',
          content: res.data.message,
        });
      }).catch((error) => {
        console.log('error', error);
        this.isLoading = false;
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: error.response,
        });
      });
    },
    delOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(url).then(() => {
        this.isLoading = false;
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getOrders(this.currentPage);
      }).catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '錯誤訊息');
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
