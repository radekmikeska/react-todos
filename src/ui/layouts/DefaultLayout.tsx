import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const DefaultLayout = (props: PropsWithChildren<{}>) => (
  <>
    <Link to="/">
      <h1>Todos</h1>
    </Link>
    <div>{props.children}</div>
  </>
);

export default DefaultLayout;
