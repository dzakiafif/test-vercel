import Cookies from 'js-cookie';
import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import ListProductService from 'services/backend/product/list-product';
import CreateProductInventoriesService from 'services/backend/product-inventories/create-product-inventories';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';

const CreateProductInventoriesPage = () => {
  const history = useHistory();
  const [qty, setQty] = useState<string>('');
  const [productId, setProductId] = useState<string>('');
  const [data, setData] = useState<any>([]);

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const listProductService = new ListProductService();
      const result: any = await listProductService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      setData(result.data);
    } else {
      history.push(ADMINROUTES.LOGIN);
    }
  }, [history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const create = async () => {
      const token = Cookies.get('access_token_admin');
      if(token !== undefined) {
        const createProductInvetoriesService = new CreateProductInventoriesService();
        const result: any = await createProductInvetoriesService.post({ productId, qty }, { headers: { authorization: `Bearer ${token}` } });
        if(result.status === 'success') {
            history.push(ADMINROUTES.PRODUCT_INVENTORIES_LIST);
        }
      }else{
          history.push(ADMINROUTES.LOGIN);
      }
  }
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
          <input type="submit" className="btn btn-primary" onClick={create} />
        </div>
      </div>
    </div>
  );
};

export default CreateProductInventoriesPage;
