<template>
     <div>
         <select name="product" id="product" v-model="selectedProduct">
              <option value="1"> Penguin-ears </option>
              <option value="2"> Horseshoe </option>
         </select>
     </div>
     </template>

<script>
export default {
  name: 'ProductList',
  data () {
       return {
               selectedProduct:[]
       } 
  },
    watch: {
          selectedProduct () {
               this.$emit('selected-product-changed', this.selectedProduct )
          }
     }
}
</script>

