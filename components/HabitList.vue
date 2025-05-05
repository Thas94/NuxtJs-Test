<template>
    <div>
        <ul class="space-y-4">
            <li v-for="habit in habitStore.habits" :key="habit.id" class="bg-white px-3 py-2 rounded-sm">

                <div class="flex items-center justify-between">
                    <p class="text-purple-500 font-bold">
                        <span :class="{'line-through': habit.completions.includes(today)}">{{ habit.name }}</span>
                    </p>
                    <button @click="deleteHabit(habit.id)" class="text-gray-800">Delete</button>
                </div>

                <div class="flex items-center">
                    <input @change="toggleCompletion(habit)" :checked="habit.completions.includes(today)" type="checkbox" class="mr-2 accent-purple-500">
                    <p class="text-sm text-gray-500">I did this today.</p>
                </div>

                <p class="text-sm text-gray-500">Current Streak: {{ habit.streak }} days.</p>

            </li>
        </ul>
    </div>
</template>

<script setup>
    // const props = defineProps({
    //     habits:Array
    // })
    import { format } from 'date-fns'

    const today = format(new Date(), 'yyyy-MM-dd')

    const habitStore = useHabitStore()
    habitStore.getHabits()

    const deleteHabit = async(id) => {
        await habitStore.deleteHabit(id)
    }

    const toggleCompletion = (habit) => {
        habitStore.toggleCompletion(habit)
    }
</script>

<style scoped>

</style>