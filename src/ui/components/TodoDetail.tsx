interface TodoDetailProps {
  todo: TodoEntity;
}

const TodoDetail = (props: TodoDetailProps) => {
  const { todo } = props;

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.completed ? "completed" : "not completed"}</p>
    </div>
  );
};

export default TodoDetail;
