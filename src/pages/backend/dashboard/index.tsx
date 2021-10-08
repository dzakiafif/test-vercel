import { Footer, Navbar, Sidebar } from "components";
const DashboardPage = () => {
  return (
    <>
      <div id="page-top">
        <Navbar />

        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper">
            <div className="container-fluid">
              <h1>Dashboard</h1>
              <p className="text-muted">Ini bagian dashboard</p>

              <p>ini isi dashboard</p>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
