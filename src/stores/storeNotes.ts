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

  const newNote = ref('');

  const resetNote=()=>{
    newNote.value='';
  }

  const getNoteContnt=(id:string) : string =>{
    let result="";

    if (notes.value.find((item)=>item.id===id)){
      const findNote=notes.value.filter(note=>{
        return note.id === id;
      })
      result=findNote[0].content;
    }
    return result;
  }

  const updateNote=(id:string,content:string)=>{
    const index=notes.value.findIndex((item)=>item.id===id);
    notes.value[index].content=content;
  }

  const notesDetails=()=>{
    const numberOfNotes = notes.value.length;
    const allCharactureList= notes.value.map((item)=>{
      return item.content.length;
    })
    const totalCharacterCount=allCharactureList.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0);

    return {numberOfNotes,totalCharacterCount};
  }

  return { notes, addNote, deleteNote, newNote, resetNote, getNoteContnt,
    updateNote, notesDetails }
})
