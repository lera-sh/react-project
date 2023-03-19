import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About</NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">&copy;lera-sh Rolling-Scopes school 2023</footer>
    </>
  );
};

export default Layout;
