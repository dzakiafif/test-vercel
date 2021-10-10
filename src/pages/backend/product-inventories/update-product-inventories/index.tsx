import Cookies from 'js-cookie';
import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FindProductInventoriesService from 'services/backend/product-inventories/find-product-inventories';
import UpdateProductInventoriesService from 'services/backend/product-inventories/update-product-inventories';
import ListProductService from 'services/backend/product/list-product';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';

interface UpdateProductInventoriesPageProps {
  id: string;
}

const UpdateProductInventoriesPage = () => {
  const { id } = useParams<UpdateProductInventoriesPageProps>();
  const history = useHistory();
  const [productId, setProductId] = useState<string>('');
  const [qty, setQty] = useState<string>('');
  const [data, setData] = useState<any>([]);

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const findProductInventoriesService = new FindProductInventoriesService();
      const result: any = await findProductInventoriesService.getById(
        id,
        {},
        { authorization: `Bearer ${token}` }
      );
      setProductId(result.data.product_id);
      setQty(result.data.qty);

      const listProductService = new ListProductService();
      const resultProduct: any = await listProductService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      setData(resultProduct.data);
    } else {
      history.push(ADMINROUTES.LOGIN);
    }
  }, [id, history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const update = async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const updateProductInventoriesService =
        new UpdateProductInventoriesService();
      const result: any = await updateProductInventoriesService.put(
        id,
        { qty },
        { headers: { authorization: `Bearer ${token}` } }
      );
      if(result.status === 'success') {
          history.push(ADMINROUTES.PRODUCT_INVENTORIES_LIST);
      }
    } else {
      history.push(ADMINROUTES.LOGIN);
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="form-floating mb-3">
            <label htmlFor="">Product</label>
            <select
              value={productId}
              className="form-control"
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setProductId(event.target.value)
              }
            >
              <option value="">-- Choose Product --</option>
              {data.map((val: any) => (
                <option key={val.id} value={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-floating mb-3">
            <Input
              type="number"
              className="form-control"
              onChange={(value) => setQty(value)}
              value={qty}
              id="inputQty"
            />
            <label htmlFor="inputQty">Qty</label>
          </div>
        </div>
        <div className="py-3">
          <input type="submit" className="btn btn-primary" onClick={update} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProductInventoriesPage;
