const sidebar = () => {
  return (
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link">
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link " >
            <span>Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
            <span>Tables</span>
          </a>
        </li>
      </ul>
  );
};

export default sidebar;
