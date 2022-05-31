import { Route, Routes as ReactRoutes } from "react-router-dom";
import TodoDetailScene from "./scenes/TodoDetailScene";
import TodosScene from "./scenes/TodosScene";

const Routes = () => (
  <ReactRoutes>
    <Route path="/">
      <Route index element={<TodosScene />} />
      <Route path=":id" element={<TodoDetailScene />} />
    </Route>
  </ReactRoutes>
);

export default Routes;
