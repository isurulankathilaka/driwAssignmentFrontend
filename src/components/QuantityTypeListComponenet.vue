<template>
     <div>
         <select name="type" id="type" v-model="selectedType">
               <option value="cartons"> Cartons </option>
               <option value="singleUnits"> Single Units </option>
            </select>
     </div>
     </template>

<script>
export default {
  name: 'QuantityTypeList',
   data () {
       return {
               selectedType:[]
       } 
  },
    watch: {
          selectedType () {
               this.$emit('selected-type-changed', this.selectedType )
          }
     }
}
</script>
