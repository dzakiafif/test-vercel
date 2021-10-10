import Cookies from 'js-cookie';
import { useState, useEffect, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ListProductImagesService from 'services/backend/product-images/list-product-images';
import DeleteProductImagesService from 'services/backend/product-images/delete-product-images';
import { Table } from 'components';
import { ADMINROUTES } from 'routes';

const ListProductImagesPage = () => {
  const history = useHistory();
  const [data, setData] = useState<any>([]);
  const headers = [
    {
      key: 'id',
      name: 'Id',
    },
    {
      key: 'product',
      name: 'Product Name',
    },
    {
      key: 'image',
      name: 'Images',
    },
    {
      key: 'action',
      name: 'Action',
    },
  ];

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const listProductImageService = new ListProductImagesService();
      const result: any = await listProductImageService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      if (result.status === 'success') {
        const listData = result.data.map((val: any) => {
          return {
            ...val,
            product: val.Product.name,
            image: (
              <img
                src={val.path}
                alt={`gambar-${val.id}`}
                height={100}
                width={100}
              />
            ),
            action: (
              <>
                <Link
                  to={`/admin/update-product-images/${val.id}`}
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
        if(token !== undefined) {
            const deleteProductImageService = new DeleteProductImagesService();
            const result: any = await deleteProductImageService.delete(id, { headers: { authorization: `Bearer ${token}` } });
            if(result.status === 'success') {
                history.push(ADMINROUTES.PRODUCT_IMAGES_LIST);
            }
        }else{
            history.push(ADMINROUTES.LOGIN);
        }
    };
  }, [history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  return (
    <div className="container">
    <h1>List Product Images</h1>
    <div className="card">
      <div className="card-body">
        <a
          href="/admin/create-product-images"
          className="editor-create float-right btn btn-primary"
        >
          <span>
            <i className="fas fa-user fa-sm fa-fw mr-2 text-light-400"></i>
          </span>
          Create new Product Images
        </a>
        <Table headers={headers} rows={data} />
      </div>
    </div>
  </div>
  );
};

export default ListProductImagesPage;
