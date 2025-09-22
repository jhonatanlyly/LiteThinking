export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {task.done ? <s>{task.title}</s>: task.title} {""}
            {<small>{task.due}</small>}
            <button style={{"color":"blue"}} className="btn btn-danger btn-sm float-end" onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
}