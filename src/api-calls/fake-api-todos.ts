import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getTodos = async (): Promise<TodoEntity[]> =>
  await (
    await axios.get<TodoEntity[]>(`${URL}/todos/`)
  ).data;

export const getTodo = async (id: number): Promise<TodoEntity | undefined> => {
  try {
    return (await axios.get<TodoEntity | undefined>(`${URL}/todos/${id}`)).data;
  } catch (error: any) {
    if (!error || !error.response || error.response.status !== 404) {
      throw error;
    }

    return;
  }
};
