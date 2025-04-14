<template>
    <div v-if="pending">
        <p>Loading...</p>
    </div>
    <div v-else-if="error">
        <p>Error Code: {{ error.statusCode }}</p>
        <p>Error Message: {{ error.message }}</p>
    </div>
    <div v-else class="grid grid-cols-5 gap-44">
        <NuxtLink
        v-for="product in products.data"
        class="flex flex-col shadow-md bg p-6 rounded-md"
        :to="`/products/${product.id}`">
            <img class="w-[75px] h-auto self-center" :src="product.image" alt="">
            <h2 class="text-black mt-auto text-sm">{{ product.title }}</h2>
        </NuxtLink>
    </div>
</template>

<script setup>
    //if using an array
    // const {pending, data: products} = useFetch('https://fakestoreapi.com/products', 
    //     {
    //         lazy: false,
    //         transform: (products) => {
    //             return products.map((product) => ({
    //                 id: product.id,
    //                 title: product.title,
    //                 image: product.image
    //             }))
    //         }
    //     }
    // )

    // const {pending, data: productInfo, error} = useAsyncData("productInfo", async() => {
    //     const [products, categories] = await Promise.all([
    //         $fetch('https://fakestoreapi.com/products'),
    //         $fetch('https://fakestoreapi.com/products/categories'),

    //     ]);

    //     return {products, categories}
    // },{
    //     lazy: false
    // })

    const {pending, data: products, error} = await useFetch("/api/products")

</script>

<style lang="scss" scoped>

</style>