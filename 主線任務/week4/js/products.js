let productModal = null;
let delProductModal = null;
const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = '202201-vue-shaoyu';
const httpMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
}

const app = Vue.createApp({
    data() {
        return {
            tempProduct: {},
            state: "",
            stateMode: {
                add: "add",
                edit: "edit",
                delete: "delete"
            },
            isLoading: false,
            products: [],
            pagination: {}
        }
    },
    methods: {
        checkAdminUser() {
            const url = `${apiUrl}/api/user/check`;

            this.isLoading = true;

            axios[httpMethod.post](url)
                .then(() => {
                    this.getData();
                })
                .catch((err) => {
                    console.error("checkAdminUser err", err);
                    alert(err.data.message);
                    window.location = 'index.html';
                })
        },
        getData(page = 1) {
            this.isLoading = true;

            const url = `${apiUrl}/api/${apiPath}/admin/products?page=${page}`;
            axios[httpMethod.get](url).then((response) => {
                const { products, pagination } = response.data;

                this.products = products;
                this.pagination = pagination;
            }).catch((err) => {
                console.error("getData err", err);
                alert(err.data.message);
            }).finally(() => {
                this.isLoading = false;
            })
        },
        openModal(state, item) {
            this.state = state;

            if (state === this.stateMode.add) {
                this.tempProduct = {
                    imagesUrl: [],
                };
                productModal.show();
            } else if (state === this.stateMode.edit) {
                this.tempProduct = JSON.parse(JSON.stringify(item));
                productModal.show();
            } else if (state === this.stateMode.delete) {
                this.tempProduct = { ...item };
                delProductModal.show();
            }
        },
        logout() {
            this.isLoading = true;

            const url = `${this.apiUrl}/api/logout`;
            axios.post(url)
                .then((res) => { })
                .catch((err) => {
                    console.error("err", err);
                })
                .finally(() => {
                    document.cookie = "hexToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    this.isLoading = false;
                    window.location = 'index.html';
                })

        },
        onLoading(isLoading) {
            this.isLoading = isLoading;
        }
    },
    mounted() {
        // ?????? Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;

        this.checkAdminUser()
    }
});

// ????????????
app.component('pagination', {
    template: '#pagination',
    props: ['pages'],
    methods: {
        changePages(item) {
            this.$emit('changePagesHandler', item);
        },
    },
});

// ??????/??????????????????
app.component('productModal', {
    props: ['state', 'state-mode', 'temp-product', 'current-page'],
    data() {
        return {
            productFieldInfo: {
                title: '??????',
                category: '??????',
                unit: '??????',
                origin_price: '??????',
                price: '??????'
            },
        }
    },
    template: '#productModal',
    methods: {
        createImages() {
            if (this.tempProduct.imageUrl && 0 < this.tempProduct.imageUrl.length) {
                if (!this.tempProduct.imagesUrl) {
                    this.tempProduct.imagesUrl = [''];
                } else {
                    this.tempProduct.imagesUrl.push('');
                }
            } else {
                alert("?????????????????????????????????");
            }
        },
        isDisabledAddImg() {
            let isDisabled = false;

            if (this.tempProduct && this.tempProduct.imagesUrl && 0 < this.tempProduct.imagesUrl.length) {
                if (0 >= this.tempProduct.imagesUrl[this.tempProduct.imagesUrl.length - 1].length) {
                    isDisabled = true;
                }
            }

            return isDisabled;
        },
        updateProduct() {
            let url = '';
            let http = '';

            if (this.state === this.stateMode.add) {
                url = `${apiUrl}/api/${apiPath}/admin/product`;
                http = httpMethod.post;
            } else if (this.state === this.stateMode.edit) {
                url = `${apiUrl}/api/${apiPath}/admin/product/${this.tempProduct.id}`;
                http = httpMethod.put;
            }

            if (!url || !http) {
                return;
            }

            if (!this.tempProduct.title) {
                alert(`?????????${this.productFieldInfo.title}`);
                return;
            }
            if (!this.tempProduct.category) {
                alert(`?????????${this.productFieldInfo.category}`);
                return;
            }
            if (!this.tempProduct.unit) {
                alert(`?????????${this.productFieldInfo.unit}`);
                return;
            }
            if (!this.tempProduct.origin_price) {
                alert(`?????????${this.productFieldInfo.origin_price}`);
                return;
            }
            if (!this.tempProduct.price) {
                alert(`?????????${this.productFieldInfo.price}`);
                return;
            }

            if (!this.tempProduct.is_enabled) {
                this.tempProduct.is_enabled = false;
            }

            this.$emit("loadingHandler", true);

            if (this.tempProduct.imagesUrl && 0 < this.tempProduct.imagesUrl.length) {
                const imagesUrlList = this.tempProduct.imagesUrl;
                imagesUrlList.forEach((element, index) => {
                    if (0 >= element.length) {
                        imagesUrlList.splice(index, 1);
                    }
                });
            }

            axios[http](url, { data: this.tempProduct }).then((response) => {
                alert(response.data.message);
                productModal.hide();
                this.$emit("getDataHandler", this.currentPage);
            }).catch((err) => {
                console.error("updateProduct err", err);
                alert(err.data.message);
            }).finally(() => {
                this.$emit("loadingHandler", false);
            })
        },
    },
    mounted() {
        productModal = new bootstrap.Modal(document.getElementById('productModal'), {
            keyboard: false,
            backdrop: 'static'
        });
    }
});

// ??????????????????
app.component('delProductModal', {
    props: ['temp-product', 'current-page'],
    template: '#delProductModal',
    methods: {
        delProduct() {
            const url = `${apiUrl}/api/${apiPath}/admin/product/${this.tempProduct.id}`;

            this.$emit("loadingHandler", true);

            axios[httpMethod.delete](url).then((response) => {
                alert(response.data.message);
                delProductModal.hide();
                this.$emit("getDataHandler", this.currentPage);
            }).catch((err) => {
                console.error("delProduct err", err);
                alert(err.data.message);
            }).finally(() => {
                this.$emit("loadingHandler", false);
            })
        },
    },
    mounted() {
        delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
            keyboard: false,
            backdrop: 'static'
        });
    }
});

app.use(VueLoading.Plugin).component('loading', VueLoading).mount('#app');