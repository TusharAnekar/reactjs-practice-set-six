import { useEffect, useState } from "react"
import { fakeFetchTwo } from "../api/fakeFetchTwo"

export function ToDo() {

    const [toDos, setToDos] = useState([])

    async function getToDo() {
        try {
            const { status, data: { todos } } = await fakeFetchTwo('https://example.com/api/todos')
            if (status === 200)
                setToDos(todos)
        } catch (error) {

        }
    }

    useEffect(() => {
        getToDo()
    }, [])
    return (
        <section>
            <h1>ToDo List</h1>

            {
                toDos.map((task) =>
                    <div style={{ borderBottom: "1px solid grey", marginLeft: "10px" }}>
                        <h2>{task.title} : {task.desc}</h2>
                        <ol>
                            {
                                task.todos.map((item) => <li>{item}</li>)
                            }
                        </ol>
                    </div>)
            }

        </section>
    )
}