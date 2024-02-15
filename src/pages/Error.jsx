import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error page </h1>
      <h2>{error.status}</h2>
      <Link to='/dashboard'>Back Home</Link>
    </div>
  );
};
export default Error;
