import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

export default function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [newTask, setNewTask] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    //Add Task
    const addTask = (e) => {
        e.preventDefault();

        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), title: newTask, due: dueDate || "Sin Fecha",done: false }]);
        setNewTask("");
        setDueDate("");
    };

    //Cambiar estado de tarea
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    //Eliminar tarea
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    //Filtrar Tareas
    const filteredTasks = tasks.filter ((t) => {
        if (filter === "pending") return !t.done;
        if (filter === "done") return t.done;
        return true;
    });

    return (
        <div className="container mt-4">
            <h1>Lista de Tareas</h1>

            <form onSubmit={addTask} className="form">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nueva Tarea"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <input
                        type="date"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Agregar
                    </button>
                </div>
            </form>

            <div className="mb-4">
                <select
                    className="form-select"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">Todas</option>
                    <option value="done">Completadas</option>
                    <option value="pending">Pendientes</option>
                  </select>
            </div>

            <p>
                Pendientes: {tasks.filter((task) => !task.done).length} | Commpletadas: {tasks.filter((task) => task.done).length}
            </p>

            {filteredTasks.length === 0 ?  (<p>No hay tareas para mostrar en la vista</p>) :
            (
            <ul>
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                ))}

            </ul>)
            }

            {/* <ul className="list-group">
                {tasks
                    .filter((task) => {
                        if (filter === "all") return true;
                        if (filter === "completed") return task.done;
                        if (filter === "pending") return !task.done;
                        return true;
                    })
                    .map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />
                    ))}
            </ul> */}

            
        </div>
    )
}

/*
 Ejercicio Cambiar de colorla descripcion de la tarea cuando supere dos dias despues de creada
 Extender el formulario para incluir fechas límite y ordenamiento temporal
 */