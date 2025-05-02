export default defineEventHandler(async (event) => {
    const products = await $fetch("https://fakestoreapi.com/products", {
        method: 'GET'
    })
    return products;
});