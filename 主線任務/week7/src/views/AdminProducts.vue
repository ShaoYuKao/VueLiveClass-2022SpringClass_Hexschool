<template>
  <h2>後台產品頁面</h2>
  <div class="container">
    <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openModal(stateMode.add)">
            建立新的產品
        </button>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="50">
                    #
                </th>
                <th width="120">
                    分類
                </th>
                <th>產品名稱</th>
                <th width="120" class="text-end">
                    原價
                </th>
                <th width="120" class="text-end">
                    售價
                </th>
                <th width="100" class="text-center">
                    是否啟用
                </th>
                <th width="120" class="text-center">
                    編輯
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in products" :key="item.id">
                <td>{{ (currentPage * 10 - 10) + index + 1 }}</td>
                <!-- 分類 -->
                <td>{{ item.category }}</td>
                <!-- 產品名稱 -->
                <td>{{ item.title }}</td>
                <!-- 原價 -->
                <td class="text-end">{{ item.origin_price }}</td>
                <!-- 售價 -->
                <td class="text-end">{{ item.price }}</td>
                <!-- 是否啟用 -->
                <td class="text-center">
                  <span class="text-success fw-bold" v-if="item.is_enabled > 0">啟用</span>
                  <span class="text-danger fw-bold"
                    v-if="item.is_enabled <= 0 || !item.is_enabled">
                    未啟用
                  </span>
                </td>
                <!-- 編輯 -->
                <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-primary btn-sm me-1"
                            @click="openModal(stateMode.edit, item)">
                            編輯
                        </button>
                        <button type="button" class="btn btn-outline-danger btn-sm"
                            @click="openModal(stateMode.delete, item)">
                            刪除
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- 分頁元件 -->
    <Pagination :pages="pagination"></Pagination>
    <!-- 新增/編輯產品 Modal -->
    <ProductAddModal
      ref="productAddModal"
      :state="state"
      :state-mode="stateMode"
      :temp-product="tempProduct"
      :current-page="pagination.current_page">
    </ProductAddModal>
    <!-- 刪除產品 Modal -->
    <ProductDelModal
      ref="productDelModal"
      :temp-product="tempProduct"
      :current-page="pagination.current_page">
    </ProductDelModal>
  </div>
</template>

<script>
import emitter from '@/libs/emitter';
import Pagination from '@/components/Pagination.vue';
import ProductAddModal from '@/components/ProductAddModal.vue';
import ProductDelModal from '@/components/ProductDelModal.vue';

export default {
  data() {
    return {
      tempProduct: {},
      state: '',
      stateMode: {
        add: 'add',
        edit: 'edit',
        delete: 'delete',
      },
      isLoading: false,
      products: [],
      pagination: {},
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    ProductAddModal,
    ProductDelModal,
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url).then((res) => {
        const { products, pagination } = res.data;
        this.products = products;
        this.pagination = pagination;
        this.currentPage = page;
      }).catch((err) => {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: err.data.message,
        });
      }).finally(() => {
        this.isLoading = false;
      });
    },
    onLoading(isLoading) {
      this.isLoading = isLoading;
    },
    openModal(state, item) {
      this.state = state;

      if (state === this.stateMode.add) {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.$refs.productAddModal.openModal();
      } else if (state === this.stateMode.edit) {
        this.tempProduct = JSON.parse(JSON.stringify(item));
        this.$refs.productAddModal.openModal();
      } else if (state === this.stateMode.delete) {
        this.tempProduct = { ...item };
        this.$refs.productDelModal.openModal();
      }
    },
  },
  watch: {
    isLoading() {
      emitter.emit('Loading', this.isLoading);
    },
  },
  mounted() {
    this.getData();
    emitter.on('changePagesHandler', (page) => {
      this.getData(page);
    });
  },
};
</script>
