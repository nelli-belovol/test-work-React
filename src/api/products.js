import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/';

axios.defaults.baseURL = BASE_URL;

export default class FetchProducts {
  async fetchProducts() {
    const params = `products`;
    const { data } = await axios.get(params);
    return data;
  }

  async fetchProductsDetails(productId) {
    const params = `products/${productId}`;
    const { data } = await axios.get(params);
    return data;
  }
}
