import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Fragment>
      <div>Oops</div>
      <div>{isRouteErrorResponse(error) ? 'This page does not exist.' : "An unexpected error."}</div>
    </Fragment>
  );
};

export default ErrorPage;
