import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"

const TodoItem =({id, index, post, image, text, tags}) => {

const {deleteTodo} = useContext(TodoListContext)

const deleteHandler = () => deleteTodo(id)

return (
    <div class="card mb-3 w-55" >
    <li className="list-group-item">
    
        <span>
            {index + 1}. {post}
            
            <div className="row g-0">
    <div class="col-md-2 mt-2">
            <img src={image} width={110} height={150} className="img-fluid rounded-start" alt="img" />   
            </div>
            <div className="col-md-9">
      <div class="card-body">
            <div>{text}</div>
            <div>#{tags}</div>
            </div>
            </div>
            </div>
        </span>
        <div>
            <button onClick={deleteHandler} type="button"
             className="btn btn-danger">Delete Post</button>
        </div>   
    </li>
    </div>
)

}

export default TodoItem


