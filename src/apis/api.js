// import axios from 'axios'

import axios from "axios"

export default {
    getPrices: (productId, quantity = 50) => {
        console.error('called axios')
        return axios.get(`http://localhost:8080/product/priceEngine?productId=${productId}&quantity=${quantity}`).then(result => {
            console.log('result', result)
            return result
        })
    },
    calculatePrices: (productId,selectedType,selectedQty) => {
        console.error('called axios')
         console.error(productId )
        return axios.get(`http://localhost:8080/product/priceCalculator?productId=${productId}&unitType=${selectedType}&quantity=${selectedQty}`).then(result => {
            console.log('result', result)
            return result
        })
    }
}