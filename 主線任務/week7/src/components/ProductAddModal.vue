<template>
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1"
    aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="state === stateMode.add">新增產品</span>
            <span v-if="state === stateMode.edit">編輯產品</span>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
              aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <p class="text-center text-danger">
              <span class="fs-4">*</span>
              符號為必填欄位
            </p>
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入主圖片網址</label>
                  <input v-model="tempProduct.imageUrl" type="text"
                    class="form-control mb-2" placeholder="請輸入圖片連結">
                  <img class="img-fluid"
                    v-if="tempProduct.imageUrl && tempProduct.imageUrl.length > 0"
                    :src="tempProduct.imageUrl" alt="主要圖片">
                </div>
                <hr />
                <h3 class="mb-3">新增其他圖片</h3>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div class="mb-1" v-for="(image, index) in tempProduct.imagesUrl" :key="index">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input v-model="tempProduct.imagesUrl[index]" type="text"
                        class="form-control" placeholder="請輸入圖片連結">
                    </div>
                    <img class="img-fluid" :src="image" alt="新增其他圖片">
                    <button class="btn btn-outline-danger btn-sm d-block w-100 mt-1"
                      @click="tempProduct.imagesUrl.splice(index, 1)">
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="createImages()" :disabled="isDisabledAddImg()">
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <!-- 標題 -->
                <label for="title" class="form-label">
                  <span class="text-danger fs-4">*</span>
                  {{productFieldInfo.title}}
                </label>
                <input id="title" type="text" class="form-control"
                  :placeholder="`請輸入${productFieldInfo.title}`" v-model="tempProduct.title">
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <!-- 分類 -->
                  <label for="category" class="form-label">
                    <span  class="text-danger fs-4">*</span>
                    {{productFieldInfo.category}}
                  </label>
                  <input id="category" type="text" class="form-control"
                      :placeholder="`請輸入${productFieldInfo.category}`"
                      v-model="tempProduct.category">
                </div>
                <div class="mb-3 col-md-6">
                  <!-- 單位 -->
                  <label for="price" class="form-label">
                    <span class="text-danger fs-4">*</span>
                    {{productFieldInfo.unit}}
                  </label>
                  <input id="unit" type="text" class="form-control"
                    :placeholder="`請輸入${productFieldInfo.unit}`" v-model="tempProduct.unit">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <!-- 原價 -->
                  <label for="origin_price" class="form-label">
                    <span class="text-danger fs-4">*</span>
                    {{productFieldInfo.origin_price}}
                  </label>
                  <input id="origin_price" type="number" min="0" class="form-control"
                      :placeholder="`請輸入${productFieldInfo.origin_price}`"
                      v-model.number="tempProduct.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                    <!-- 售價 -->
                    <label for="price" class="form-label"><span
                            class="text-danger fs-4">*</span>{{productFieldInfo.price}}</label>
                    <input id="price" type="number" min="0" class="form-control"
                        :placeholder="`請輸入${productFieldInfo.price}`"
                        v-model.number="tempProduct.price">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述"
                  v-model="tempProduct.description">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容"
                  v-model="tempProduct.content">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1"
                    :false-value="0" v-model="tempProduct.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
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
  props: ['state', 'state-mode', 'temp-product', 'current-page'],
  data() {
    return {
      productFieldInfo: {
        title: '標題',
        category: '分類',
        unit: '單位',
        origin_price: '原價',
        price: '售價',
      },
    };
  },
  template: '#productModal',
  methods: {
    createImages() {
      if (this.tempProduct.imageUrl && this.tempProduct.imageUrl.length > 0) {
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [''];
        } else {
          this.tempProduct.imagesUrl.push('');
        }
      } else {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: '請先輸入輸入主圖片網址',
        });
      }
    },
    isDisabledAddImg() {
      let isDisabled = false;
      if (this.tempProduct && this.tempProduct.imagesUrl && this.tempProduct.imagesUrl.length > 0) {
        if (this.tempProduct.imagesUrl[this.tempProduct.imagesUrl.length - 1].length <= 0) {
          isDisabled = true;
        }
      }
      return isDisabled;
    },
    updateProduct() {
      let url = '';
      let http = '';

      if (this.state === this.stateMode.add) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
        http = httpMethod.post;
      } else if (this.state === this.stateMode.edit) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        http = httpMethod.put;
      }

      if (!url || !http) {
        return;
      }

      if (!this.tempProduct.title) {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: `請輸入${this.productFieldInfo.title}`,
        });
        return;
      }
      if (!this.tempProduct.category) {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: `請輸入${this.productFieldInfo.category}`,
        });
        return;
      }
      if (!this.tempProduct.unit) {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: `請輸入${this.productFieldInfo.unit}`,
        });
        return;
      }
      if (!this.tempProduct.origin_price) {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: `請輸入${this.productFieldInfo.origin_price}`,
        });
        return;
      }
      if (!this.tempProduct.price) {
        emitter.emit('push-message', {
          style: 'danger',
          title: '錯誤訊息',
          content: `請輸入${this.productFieldInfo.price}`,
        });
        return;
      }

      if (!this.tempProduct.is_enabled) {
        this.tempProduct.is_enabled = false;
      }

      emitter.emit('Loading', true);

      if (this.tempProduct.imagesUrl && this.tempProduct.imagesUrl.length > 0) {
        const imagesUrlList = this.tempProduct.imagesUrl;
        imagesUrlList.forEach((element, index) => {
          if (element.length <= 0) {
            imagesUrlList.splice(index, 1);
          }
        });
      }

      this.$http[http](url, { data: this.tempProduct }).then((response) => {
        emitter.emit('push-message', {
          style: 'danger',
          title: '更新成功',
          content: response.data.message,
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
      this.productModal.show();
    },
    closeModal() {
      this.productModal.hide();
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
