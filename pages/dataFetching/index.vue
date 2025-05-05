<template>
    <div>
        <div v-if="products == null">
            No Products
        </div>
        <div class="grid grid-cols-4 gap-5" v-else>
            <div v-for="p in products">
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

    const GetProducts = async () =>  {
        const response = await $fetch('/api/dataFetch/products')
        products.value = response
        return response
    }

onMounted(async() => {
     await GetProducts()
})

</script>
