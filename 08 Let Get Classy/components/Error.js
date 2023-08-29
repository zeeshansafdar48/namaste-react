import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oooops!!! </h1>
      <h2>Something went wrong!!! </h2>
      <h3>
        {error?.status}: {error?.statusText}
      </h3>
      <h4>{error?.data}</h4>
    </div>
  );
};

export default Error;
