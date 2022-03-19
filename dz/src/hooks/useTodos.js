import { useEffect, useState } from "react"

const LSTodosKey = "todos";

const useTodos = () => {

    const [todos, setTodos] = useState([]);

    const createTodo = async (text, post, image, tags) => {
        const newTodo = {
            id: Date.now(), text, post, image, tags,
        }
         setTodos((prev) => [...prev, newTodo]);
    }

const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSTodosKey);

    if (dataFromLS) {
      setTodos(JSON.parse(dataFromLS));

    } else {

			fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
				.then(res => res.json())
				.then(data => data.map(({title, userId, ...rest}) => ({...rest, text: title})))
				.then(setTodos)
		}
  }, []);

  useEffect(() => {
    localStorage.setItem(LSTodosKey, JSON.stringify(todos));
  }, [todos]);


	return ({
		todos,
		createTodo,
		deleteTodo,
		clearAllTodos,
	})
};

export default useTodos 
 
