import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('noteStore', () => {
  const notes = ref([
    {
      id: '1',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas et quidem magnam officia, eius facere pariatur explicabo, atque quod nemo accusamus perspiciatis saepe rem. Optio numquam tempore culpa nisi voluptatibus.'
    },
    {
      id: '2',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas et quidem magnam officia, eius facere pariatur explicabo, atque quod nemo accusamus perspiciatis saepe rem. Optio numquam tempore culpa nisi voluptatibus.'
    },
    {
      id: '3',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas et quidem magnam officia, eius facere pariatur explicabo, atque quod nemo accusamus perspiciatis saepe rem. Optio numquam tempore culpa nisi voluptatibus.'
    }
  ])

  const addNote = (newNote: string) => {
    const currentDate = new Date().getTime()
    const note = {
      id: currentDate.toString(),
      content: newNote
    }
    notes.value.unshift(note)
  }

  const deleteNote = (id: string) => {
    
    notes.value = notes.value.filter((item) => item.id !== id)
  }

  return { notes, addNote, deleteNote }
})
