import { useParams } from "react-router-dom";
import TodoFromFakeApi from "../../containers/TodoFromFakeApi";
import DefaultLayout from "../../layouts/DefaultLayout";

const TodoDetailScene = () => {
  const { id } = useParams();
  const todoId = Number.parseInt(id || "0");

  if (Number.isNaN(todoId)) {
    return <h1>Todo id must be integer.</h1>;
  }

  return (
    <DefaultLayout>
      <TodoFromFakeApi todoId={todoId} />
    </DefaultLayout>
  );
};
export default TodoDetailScene;
