const sidebar = () => {
  return (
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/#">
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link " href="/#">
            <span>Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <span>Tables</span>
          </a>
        </li>
      </ul>
  );
};

export default sidebar;
