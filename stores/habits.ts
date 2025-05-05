import { defineStore } from "pinia";
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import {format, differenceInDays} from 'date-fns'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: <any>[],
        products: <any>[],
        product: <any>{}
    }),
    actions: {
        
        async getHabits(){
            const {$db} = useNuxtApp()
            const snapShot = await getDocs(collection($db, 'habits'))
            this.habits = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) //... spread syntax to spread those object properties
        },

        async addHabit(name: string){

            const {$db} = useNuxtApp()

            const habit = {
                name,
                completions: [],
                streak: 0
            }
            const docRef =  await addDoc(collection($db, 'habits'), habit )
            this.habits.push({ id: docRef, ...habit})
        },

        async deleteHabit(id: any){
            const {$db} = useNuxtApp()
            const docRef = doc($db, 'habits', id)
            await deleteDoc(docRef)
            this.habits = this.habits.filter((x: { id: any; }) => x.id !== id)
        },

        async updateHabit(id: any, updates: any){
            const {$db} = useNuxtApp()
            const docRef = doc($db, 'habits', id)
            await updateDoc(docRef, updates)
            const index = this.habits.findIndex((x: { id: any; }) => x.id === id)
            if(index !== -1){
                this.habits[index] = { ...this.habits[index], ...updates}
            }
        },

        toggleCompletion(habit: any){
            const today = format(new Date(), 'yyyy-MM-dd')

            if(habit.completions.includes(today)){
                habit.completions = habit.completions.filter((x: string) => x !== today)
            }
            else{
                habit.completions.push(today)
            }

            habit.streak = this.calculateStreak(habit.completions)

            this.updateHabit(habit.id, {
                completions: habit.completions,
                streak: habit.streak
            })
        },

        calculateStreak(completions: any[]){
            const sortedDates = completions.sort((a,b) => +new Date(b) - +new Date(a))
            let streak = 0
            let currentDate = new Date()

            for(const date of sortedDates){
                const diff = differenceInDays(currentDate, new Date(date))
                if(diff > 1){
                    break;
                }

                streak++
                currentDate = new Date(date)
            }
            return streak
        }

    }
})