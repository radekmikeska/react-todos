import TodoItem from "./TodoItem";

interface TodosListProps {
  todos: TodoEntity[];
  onTodoClick: (todo: TodoEntity) => void;
}

const TodosList = (props: TodosListProps) => {
  const { todos, onTodoClick } = props;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => onTodoClick(todo)}>
          <TodoItem {...todo} />
        </div>
      ))}
    </div>
  );
};

export default TodosList;
