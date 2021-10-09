import Cookies from 'js-cookie';
import { useEffect, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ListProductService from 'services/backend/product/list-product';
import DeleteProductService from 'services/backend/product/delete-product';
import { Table } from 'components';
import { ADMINROUTES } from 'routes';
const ListProductPage = () => {
  const history = useHistory();
  const [data, setData] = useState<any>([]);
  const headers = [
    {
      key: 'id',
      name: 'Id',
    },
    {
      key: 'name',
      name: 'Product Name',
    },
    {
      key: 'price',
      name: 'Price',
    },
    {
      key: 'action',
      name: 'Action',
    },
  ];

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const listProductService = new ListProductService();
      const result: any = await listProductService.get(
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
                  to={`/admin/update-product/${val.id}`}
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
        const deleteProductService = new DeleteProductService();
        const result: any = await deleteProductService.delete(id, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(result);
        if (result.status === 'success') {
          history.push(ADMINROUTES.PRODUCT_LIST);
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
      <h1>List Product</h1>
      <div className="card">
        <div className="card-body">
          <a
            href="/admin/create-product"
            className="editor-create float-right btn btn-primary"
          >
            <span>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-light-400"></i>
            </span>
            Create new Product
          </a>
          <Table headers={headers} rows={data} />
        </div>
      </div>
    </div>
  );
};

export default ListProductPage;
