import { useEffect } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { ADMINROUTES } from "routes";
const DashboardPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = Cookies.get('access_token_admin');
    if(token === undefined) {
      history.push(ADMINROUTES.LOGIN);
    }
  });
  return (
    <>
      <h1>Dashboard</h1>
      <p className="text-muted">Ini bagian dashboard</p>

      <p>ini isi dashboard</p>
    </>
  );
};

export default DashboardPage;
