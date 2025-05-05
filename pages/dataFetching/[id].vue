<template>
    <div>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
     const param = ref(useRoute().params.id)

    //const {id} = toRefs(useRoute().params)

    const product = ref({})

    const GetProductById = async() => {
        const response = await $fetch(`/api/dataFetch/${param.value}`)
        console.log('product', response)
        product.value = response
    }

    onMounted(async() => {
        await GetProductById()
    })
</script>
