import { Link } from "react-router-dom";
import { ADMINROUTES } from "routes";

const Sidebar = () => {
  return (
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <Link to={ADMINROUTES.DASHBOARD} className="nav-link"><span>Dashboard</span></Link>
        </li>
        <li className="nav-item">
          <Link to={ADMINROUTES.USER_LIST} className="nav-link"><span>User</span></Link>
        </li>
        <li className="nav-item">
          <Link to={ADMINROUTES.CATEGORY_LIST} className="nav-link"><span>Category</span></Link>
        </li>
        <li className="nav-item">
          <Link to={ADMINROUTES.PRODUCT_LIST} className="nav-link"><span>Product</span></Link>
        </li>
        <li className="nav-item">
          <Link to={ADMINROUTES.PRODUCT_INVENTORIES_LIST} className="nav-link"><span>Product Inventories</span></Link>
        </li>
        <li className="nav-item">
          <Link to={ADMINROUTES.PRODUCT_IMAGES_LIST} className="nav-link"><span>Product Images</span></Link>
        </li>
      </ul>
  );
};

export default Sidebar;
