<template>
  <div>
    <table id="selectTable">
      <tr>
        <th>Product</th>
        <th>Type</th>
        <th>Quantity</th>
      </tr>
      <tr>
        <td>
          <ProductList @selected-product-changed="selectedProduct">
          </ProductList>
        </td>
        <td>
        <QuantityTypeList @selected-type-changed="selectedQuantityType">
          </QuantityTypeList>
        </td>
        <td>
          <input
            type="text"
            id="quantity"
            name="quantity"
            v-model="selectedQty"
          />
        </td>
        <td>
          <button type="submit" v-on:click="getPriceForProduct">
            Calculate
          </button>
        </td>
      </tr>
    </table>

    <table id="productTable">
      <thead class="thead-dark">
        <tr>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody id="priceForProduct">
        <tr>
          <td>{{ priceForProduct.quantity }}</td>
          <td>{{ priceForProduct.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import service from "../services/service.js";
import ProductList from "../components/ProductListComponent.vue";
import QuantityTypeList from "../components/QuantityTypeListComponenet.vue";
export default {
  name: "Calculator",
  components: {
    ProductList, QuantityTypeList
  },
  data() {
    return {
      priceForProduct: {},
      selectedProductId: [],
      selectedType: [],
      selectedQty: [],
    };
  },
  methods: {
    async getPriceForProduct() {
      const result = service.getCalculatedPriceData(
        this.selectedProductId,
        this.selectedType,
        this.selectedQty
      );
      console.log("data retrieved suc:", result);
      await result.then((resultSet) => {
        console.log("data ====>", resultSet.data);
        this.priceForProduct = resultSet.data;
      });
      return result;
    },
      selectedProduct(selection) {
      console.log("selection ID ====>", selection);
      this.selectedProductId = selection;
    },
      selectedQuantityType(selectionType) {
      console.log("selected quantity ====>", selectionType);
      this.selectedType = selectionType;
    },
  },
};
</script>

<style scoped>
#selectTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#selectTable td {
  border: 1px solid #ddd;
  padding-left: 100pt;
}
#selectTable th {
  border: 1px solid #ddd;
  padding: 8px;
  background-color: rgb(103, 216, 196);
}
</style>