import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(r => {
  const todo = r.data as Todo

  const id = todo.id
  const title = todo.title as string
  const finished = todo.completed as boolean

  logTodo(id, title, finished)
})

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${finished}
  `)
}