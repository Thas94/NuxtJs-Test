export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const product = await $fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'GET'
    })
    return product
});