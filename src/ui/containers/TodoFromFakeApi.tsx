import { useQuery } from "react-query";
import { getTodo } from "../../api-calls/fake-api-todos";
import TodoDetail from "../components/TodoDetail";

interface TodoFromFakeApiProps {
  todoId: number;
}

const TodoFromFakeApi = (props: TodoFromFakeApiProps) => {
  const { todoId } = props;
  const { data, isLoading, isError } = useQuery(["todo", todoId], () =>
    getTodo(todoId)
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error when fetching todo...</h1>;
  }

  if (!data) {
    return <h1>Todo does not exist...</h1>;
  }

  return <TodoDetail todo={data} />;
};

export default TodoFromFakeApi;
