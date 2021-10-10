import Cookies from 'js-cookie';
import { useEffect, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Table } from 'components';
import { ADMINROUTES } from 'routes';
import ListProductInventoriesService from 'services/backend/product-inventories/list-product-inventories';
import DeleteProductInventoriesService from 'services/backend/product-inventories/delete-product-inventories';

const ListProductInventoriesPage = () => {
  const history = useHistory();
  const [data, setData] = useState<any>([]);
  const headers = [
    {
      key: 'id',
      name: 'Id',
    },
    {
      key: 'product',
      name: 'Product',
    },
    {
      key: 'qty',
      name: 'Quantity',
    },
    {
      key: 'action',
      name: 'Action',
    },
  ];

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const listProductInventoriesService = new ListProductInventoriesService();
      const result: any = await listProductInventoriesService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      const listData = result.data.map((val: any) => {
          return {
              ...val,
              product: val.Product.name,
              action: (
                <>
                <Link
                  to={`/admin/update-product-inventories/${val.id}`}
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
              )
          }
      })

      setData(listData);
    } else {
      history.push(ADMINROUTES.LOGIN);
    }

    const deleteData = async (id: string) => {
        const token = Cookies.get('access_token_admin');
        if(token !== undefined) {
            const deleteProductInventoriesService = new DeleteProductInventoriesService();
            const result: any = await deleteProductInventoriesService.delete(id, { headers: { authorization: `Bearer ${token}` } });
            if(result.status === 'success') {
                history.push(ADMINROUTES.PRODUCT_INVENTORIES_LIST);
            }
        }else{
            history.push(ADMINROUTES.LOGIN);
        }
    }
  }, [history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  return (
    <div className="container">
      <h1>List Product Inventories</h1>
      <div className="card">
        <div className="card-body">
          <a
            href="/admin/create-product-inventories"
            className="editor-create float-right btn btn-primary mb-3"
          >
            <span>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-light-400"></i>
            </span>
            Create new Product Inventories
          </a>
          <Table headers={headers} rows={data} />
        </div>
      </div>
    </div>
  );
};

export default ListProductInventoriesPage;
