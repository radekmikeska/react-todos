import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../../api-calls/fake-api-todos";
import TodosList from "../components/TodosList";

const TodosFromFakeApi = () => {
  const { data, isLoading, isError } = useQuery("todos", getTodos);
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error when fetching todos...</h1>;
  }

  if (!data) {
    return <h1>Mhmmmmmm...</h1>;
  }

  const todoClicked = (todo: TodoEntity) => {
    navigate(`/${String(todo.id)}`);
  };

  return <TodosList todos={data} onTodoClick={todoClicked} />;
};

export default TodosFromFakeApi;
