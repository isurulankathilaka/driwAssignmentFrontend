<template>
  <div id="productChooseDiv">
    <table>
      <tr>
        <td><label for="product">Choose a product:</label></td>
        <td>
          <ProductList @selected-product-changed="selectedProduct">
          </ProductList>
        </td>
      </tr>
    </table>

    <h2>Price list for 50 products</h2>

    <table id="productTable">
      <thead class="thead-dark">
        <tr>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody id="priceData">
        <tr v-for="item in priceData" :key="item.quantity">
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import service from "../services/service.js";
import ProductList from "../components/ProductListComponent.vue";
export default {
  name: "Home",
  components: {
    ProductList,
  },
  data() {
    return {
      priceData: undefined,
      productId: [],
    };
  },
  watch: {
    productId() {
      console.log("selected product changed", this.selectedProduct);
      this.getPriceList();
    },
  },
  mounted() {
    this.selectedProduct();
  },

  methods: {
    async getPriceList() {
      const result = service.getPriceData(this.productId);
      console.log("data retrieved suc:", result);
      await result.then((resultSet) => {
        console.log("data ====>", resultSet.data);
        this.priceData = resultSet.data;
      });
      return result;
    },

    selectedProduct(selection = 1) {
      console.log("selection ====>", selection);
      this.productId = selection;
    },
  },
};
</script>

<style>
#productTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#productTable td,
#productTable th {
  border: 1px solid #ddd;
  padding: 8px;
}
#productTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
#productTable tr:nth-child(even) {
  background-color: #f2f2f2;
}

#productTable tr:hover {
  background-color: #ddd;
}

#productTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
#productChooseDiv body {
  font-family: Helvetica, sans-serif;
}
</style>
