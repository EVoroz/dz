import TodoList from "./TodoList/TodoList";
import Form from './Form/Form';
const Main = () => {


	return (
		<>
		<div className="d-flex mt-3 justify-content-evenly">
         <img src="./img/recip2.jpg"  width={450} height={300} alt="picc" /> 
         <img src="./img/recip1.jpg" width={450} height={300} alt="picc" />   
       </div>
	   <hr />

	   <div className="d-flex mt-4 justify-content-evenly">

<Form />

<hr />

<TodoList />

</div>

		</>

	)

	
}

export default Main