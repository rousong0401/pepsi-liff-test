import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';

const app = createApp({
  data() {
    return {
      nowLoginWay: 'modernQRcode',
      loginWay: [
        {
          name: '上傳電子發票',
          nameEn: 'modernQRcode'
        },
        {
          name: '電子發票/載具',
          nameEn: 'modernvehicle'
        },
      ],
      modal: false,
    }
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  }
});
app.mount('#app');