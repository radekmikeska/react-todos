import { memo } from "react";

type TodoItemProps = TodoEntity;

const TodoItem = (props: TodoItemProps) => {
  const { title } = props;

  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default memo(TodoItem);
