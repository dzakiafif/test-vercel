import Cookies from 'js-cookie';
import { useEffect, useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ListCategoryService from 'services/backend/category/list-category';
import DeleteCategoryService from 'services/backend/category/delete-category';
import { Table } from 'components';
import { ADMINROUTES } from 'routes';

const ListCategoryPage = () => {
  const history = useHistory();
  const [data, setData] = useState<any>([]);
  const headers = [
    {
      key: 'id',
      name: 'Id',
    },
    {
      key: 'name',
      name: 'Name',
    },
    {
      key: 'action',
      name: 'Action',
    },
  ];

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    const listCategoryService = new ListCategoryService();
    if (token !== undefined) {
      const result: any = await listCategoryService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      if (result.status === 'success') {
        const listData = result.data.map((val: any) => {
          return {
            ...val,
            action: (
              <>
                <Link
                  to={`/admin/update-category/${val.id}`}
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
      }
    } else {
      history.push(ADMINROUTES.LOGIN);
    }

    const deleteData = async (id: string) => {
      const token = Cookies.get('access_token_admin');
      if (token !== undefined) {
        const deleteCategoryService = new DeleteCategoryService();
        const result: any = await deleteCategoryService.delete(id, {
          headers: { authorization: `Bearer ${token}` },
        });
        if (result.status === 'success') {
          history.push(ADMINROUTES.CATEGORY_LIST);
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
      <h1>List Category</h1>
      <div className="card">
        <div className="card-body">
          <a
            href="/admin/create-category"
            className="editor-create float-right btn btn-primary"
          >
            <span>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-light-400"></i>
            </span>
            Create new category
          </a>
          <Table headers={headers} rows={data} />
        </div>
      </div>
    </div>
  );
};

export default ListCategoryPage;
