import { Link, Route, Routes } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found. Error 404</h1>
      <h2>
        This page doesn&apos;t exist. Go <Link to="/">home</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
