<template>
    <div>
        <div v-if="products == null">
            No Products
        </div>
        <div class="grid grid-cols-4 gap-5" v-else>
            <div v-for="p in productStore.products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>

    useHead({
        title: 'Nuxt Merch',
        meta: [
            {name: 'descriptions', content: 'Nuxt 3 Merch'}
        ]
    })

    const products = ref([{}]);
    const productStore = useProductStore()
    productStore.getProducts()

    // const GetProducts = async () =>  {
    //     const response = await habitStore.getProducts()
    //     products.value = response
    //     console.log('products', response)
    //     return response
    // }

// onMounted(async() => {
//      await GetProducts()
// })

</script>
