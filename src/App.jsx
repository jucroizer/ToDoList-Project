import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem"

function App() {
 
  const [toDoList, setToDoList] = useState([
    {
      id: nanoid(4),
      content: "item 1"
    },
    {
      id: nanoid(4),
      content: "item 2"
    },
    {
      id: nanoid(4),
      content: "item 3"
    }
  ])
  const [toDo, setToDo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function deleteToDo(id){
    setToDoList(toDoList.filter(todo => todo.id !== id))
  }


  function handleSubmit(e){
    e.preventDefault()

    if(toDo === ""){
      setShowValidation(true)
      return
    }

    setToDoList([...toDoList, {id: nanoid(4), content: toDo}])
    setToDo("")
    setShowValidation(false)
  }

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">To-do List</h1>
      
        <form onSubmit={handleSubmit} className="mb-10"> 
          <label htmlFor="todo-item"
          className="text-slate-50">
            Ajouter une tâche
          </label>
          <input
          value={toDo}
          onChange={e => setToDo(e.target.value)}
          type="text"
          className="mt-1 block w-full rounded"
          />
          {showValidation && (
            <p className="text-red-200">
              Ajoutez d'abord du contenu à votre tâche
            </p>
          )}

          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>

        <ul>
          {toDoList.length === 0 && (
            <li className="text-slate-50 text-md">
              Pas d'items à afficher...
            </li>
          )}
          {toDoList.length > 0 && toDoList.map(item => (
            <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default App
