import Cookies from 'js-cookie';
import { useEffect, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ADMINROUTES } from 'routes';
import { Table } from 'components';
import ListUserService from 'services/backend/user/list-user';
import DeleteUserService from 'services/backend/user/delete-user';

const ListUserPage = () => {
  const history = useHistory();
  const [data, setData] = useState<any>([]);
  const headers = [
    {
      key: 'id',
      name: 'Id',
    },
    {
      key: 'fullname',
      name: 'Fullname',
    },
    {
      key: 'address',
      name: 'Address',
    },
    {
      key: 'phone_number',
      name: 'Phone Number',
    },
    {
      key: 'action',
      name: 'Action',
    },
  ];

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const listUserService = new ListUserService();
      const result: any = await listUserService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      const listData = result.data.map((val: any) => {
        return {
          ...val,
          action: (
            <>
              <Link
                to={`/admin/update-user/${val.id}`}
                className="btn btn-primary btn-circle btn-sm"
              >
                <i className="fas fa-edit"></i>
              </Link>
              <Link
                to="/admin"
                onClick={() => deleteData(val.id)}
                className="btn btn-danger btn-circle btn-sm"
              >
                <i className="fas fa-trash"></i>
              </Link>
            </>
          ),
        };
      });
      setData(listData);
    } else {
      history.push(ADMINROUTES.LOGIN);
    }

    const deleteData = async (id: string) => {
      const token = Cookies.get('access_token_admin');
      if (token !== undefined) {
        const deleteUserService = new DeleteUserService();
        const result: any = await deleteUserService.delete(id, {
          headers: { authorization: `Bearer ${token}` },
        });
        if (result.status === 'success') {
          history.push(ADMINROUTES.USER_LIST);
        }
      } else {
        history.push(ADMINROUTES.LOGIN);
      }
    };
  }, [history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  return (
    <div className="container">
      <h1>List User</h1>
      <div className="card">
        <div className="card-body">
        <a
              href="/admin/create-user"
              className="editor-create float-right btn btn-primary"
            >
              <span>
                <i className="fas fa-user fa-sm fa-fw mr-2 text-light-400"></i>
              </span>
              Create new user
            </a>
          <Table headers={headers} rows={data} />
        </div>
      </div>
    </div>
  );
};

export default ListUserPage;
