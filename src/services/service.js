import apiService from '../apis/api.js'

export default {
    getPriceData: (productId) => {
        console.log('inside service')
        return apiService.getPrices(productId)
    },
    
    getCalculatedPriceData: (productId,selectedType,selectedQty) => {
        console.log('inside service')
        console.log(productId)
        return apiService.calculatePrices(productId,selectedType,selectedQty)
    }
}