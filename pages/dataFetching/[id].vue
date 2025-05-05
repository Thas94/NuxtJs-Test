<template>
    <div>
        <Head>
            <Title>Nuxt | {{ productStore.product.title }}</Title>
            <Meta name="descriptions" :content="productStore.product.description"></Meta>
        </Head>

        <ProductDetails :product="productStore.product"/>
    </div>
</template>

<script setup>
     const param = ref(useRoute().params.id)

    //const {id} = toRefs(useRoute().params)

    const product = ref({})

    const productStore = useProductStore()
    productStore.getProductById(param.value)

    // const GetProductById = async() => {
    //     const response = await $fetch(`/api/dataFetch/${param.value}`)
    //     console.log('product', response)
    //     product.value = response
    // }

    // onMounted(async() => {
    //     await GetProductById()
    // })
</script>
