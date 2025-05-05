<template>
    <div>
        <form @submit.prevent="handleSubmit" class="mb-6 flex items-center gap-2">
            <input type="text" placeholder="Enter a new habit" v-model="name"
            class="w-full p-3 border border-gray-300 rounded-sm" />
            <button type="submit" class="w-full p-3 bg-purple-500 text-white-sm">Add Habit</button>
        </form>
    </div>
</template>

<script setup>

const name = ref('')
const habitStore = useHabitStore()

const handleSubmit = async() => {
    if(name.value.trim()){
        await habitStore.addHabit(name.value)
        name.value = ''
    }
}

</script>

<style scoped>

</style>