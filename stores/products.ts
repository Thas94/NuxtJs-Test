import { defineStore } from "pinia";


export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: <any>[],
        product: <any>{}
    }),
    actions: {

        async getProducts(){
            const response = await $fetch('/api/dataFetch/products')
            this.products = response
        },

        async getProductById(id: any){
            const response = await $fetch(`/api/dataFetch/${id}`)
            this.product = response
        },
        
    }
})