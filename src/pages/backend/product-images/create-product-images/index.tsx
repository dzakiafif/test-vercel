import Cookies from 'js-cookie';
import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import ListProductService from 'services/backend/product/list-product';
import CreateProductImagesService from 'services/backend/product-images/create-product-images';
import { ADMINROUTES } from 'routes';

const CreateProductImagesPage = () => {
  const history = useHistory();
  const [image, setImage] = useState<any>('');
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
      if (result.status === 'success') {
        setData(result.data);
      }
    } else {
      history.push(ADMINROUTES.LOGIN);
    }
  }, [history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const create = async () => {
    const token = Cookies.get('access_token_admin');
    try {

        if (token !== undefined) {
            const dataArray = new FormData();
            dataArray.append('productId', productId);
            dataArray.append('image', image[0]);
            const createProductImageService = new CreateProductImagesService();
            const result: any = await createProductImageService.post(dataArray, {
              headers: {
                  authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data',
              }
            });
            if(result.status === 'success') {
                history.push(ADMINROUTES.PRODUCT_IMAGES_LIST);
            }
          } else {
            history.push(ADMINROUTES.LOGIN);
          }

    } catch (err) {
        console.log(err);
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
            <input type="file" className="form-control" onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files)} />
          </div>
          <div className="py-3">
            <input type="submit" className="btn btn-primary" onClick={create} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductImagesPage;
