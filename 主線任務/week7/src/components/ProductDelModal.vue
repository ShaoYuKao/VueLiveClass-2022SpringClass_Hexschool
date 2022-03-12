<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import emitter from '@/libs/emitter';

const httpMethod = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

export default {
  props: ['temp-product', 'current-page'],
  methods: {
    delProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;

      emitter.emit('Loading', true);

      this.$http[httpMethod.delete](url).then((res) => {
        emitter.emit('push-message', {
          style: 'success',
          title: '刪除狀態',
          content: res.data.message,
        });
        this.closeModal();
        emitter.emit('changePagesHandler', this.currentPage);
      }).catch((err) => {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: err.data.message,
        });
      }).finally(() => {
        emitter.emit('Loading', false);
      });
    },
    openModal() {
      this.delProductModal.show();
    },
    closeModal() {
      this.delProductModal.hide();
    },
  },
  mounted() {
    this.delProductModal = new Modal(this.$refs.delProductModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
