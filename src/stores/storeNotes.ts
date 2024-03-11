import {
  collection,
  onSnapshot,
  doc,
  // setDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc,
  type Unsubscribe,
  Query,
  CollectionReference
} from 'firebase/firestore'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/ts/firebase'
import { useAuthStore } from './storeAuth'

let collectionRef:CollectionReference
let notesCollectionQuery:Query
(globalThis as any).getNotesOnSnapshot = null

export const useNotesStore = defineStore('noteStore', () => {
  // Define the type of the notes array
  type Note = { id: string; content: string; date: string }

  // Initialize notes as a ref
  const notes = ref<Note[]>([])
  const notesLoaded = ref<boolean>(false)
  let getNotesOnSnapshot: Unsubscribe | null = null

  const init = () => {
    const store=useAuthStore()
    collectionRef = collection(db, 'users', String(store.User.id), 'notes');
    notesCollectionQuery = query(collectionRef, orderBy('date', 'desc'));
    getNotesFromDB()
  }

  const getNotesFromDB = () => {
    if (getNotesOnSnapshot) getNotesOnSnapshot()
    getNotesOnSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
      // onSnapshot(collectionRef, (querySnapshot) => {
      const dbNotes: Note[] = []
      notesLoaded.value = false
      querySnapshot.forEach((doc) => {
        const note = {
          id: doc.id.toString(),
          content: doc.data().content,
          date: doc.data().date
        }
        dbNotes.push(note)
      })
      setTimeout(() => {
        notes.value = dbNotes
        notesLoaded.value = true
      }, 2000),
      
      (error: { message: any })=>{
        console.log(error.message)
      }
    })
  }

  const addNote = async (newNote: string) => {
    const currentDate = new Date().getTime()
    const date = currentDate.toString()
    
    // Add a new document with a generated id.
    await addDoc(collectionRef, {
      content: newNote,
      date
    })
  }

  const deleteNote = async (id: string) => {
    // notes.value = notes.value.filter((item) => item.id !== id)
    await deleteDoc(doc(collectionRef, id))
  }

  const newNote = ref('')

  const resetNote = () => {
    newNote.value = ''
  }

  const getNoteContnt = (id: string): string => {
    let result = ''

    if (notes.value.find((item) => item.id === id)) {
      const findNote = notes.value.filter((note) => {
        return note.id === id
      })
      result = findNote[0].content
    }
    return result
  }

  const updateNote = async (id: string, content: string) => {
    // const index = notes.value.findIndex((item) => item.id === id)
    // notes.value[index].content = content

    const washingtonRef = doc(collectionRef, id)
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      content
    })
  }

  const notesDetails = () => {
    const numberOfNotes = notes.value.length
    const allCharactureList = notes.value.map((item) => {
      return item.content.length
    })
    const totalCharacterCount = allCharactureList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    return { numberOfNotes, totalCharacterCount }
  }

  const clearNotes = () => {
    notes.value = []
    if (getNotesOnSnapshot) getNotesOnSnapshot()
  }

  return {
    notes,
    addNote,
    deleteNote,
    newNote,
    resetNote,
    getNoteContnt,
    updateNote,
    notesDetails,
    getNotesFromDB,
    notesLoaded,
    clearNotes,
    init
  }
})
