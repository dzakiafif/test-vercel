import { FC, ReactNode } from 'react';
import { Footer, Navbar, Sidebar } from 'components';

interface AppBackendProps {
  children?: ReactNode;
}

export const AppBackend: FC<AppBackendProps> = ({ children }) => {
  return (
      <div id="page-top">
        <Navbar />

        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper">
            <div className="container-fluid">{children}</div>

            <Footer />
          </div>
        </div>
      </div>
  );
};
