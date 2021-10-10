import Cookies from 'js-cookie';
import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ListProductService from 'services/backend/product/list-product';
import FindProductImagesService from 'services/backend/product-images/find-product-images';
import UpdateProductImagesService from 'services/backend/product-images/update-product-images';
import { ADMINROUTES } from 'routes';

interface UpdateProductImagesPageProps {
  id: string;
}

const UpdateProductImagesPage = () => {
  const { id } = useParams<UpdateProductImagesPageProps>();
  const history = useHistory();
  const [image, setImage] = useState<any>('');
  const [productId, setProductId] = useState<string>('');
  const [data, setData] = useState<any>([]);

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const findProductImagesService = new FindProductImagesService();
      const result: any = await findProductImagesService.getById(
        id,
        {},
        { authorization: `Bearer ${token}` }
      );
      if (result.status === 'success') {
        setProductId(result.data.product_id);
      }

      const listProductService = new ListProductService();
      const resultProduct: any = await listProductService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      if (resultProduct.status === 'success') {
        setData(resultProduct.data);
      }
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
      const dataArray = new FormData();
      dataArray.append('productId', productId);
      dataArray.append('image', image[0]);
      dataArray.append('id', id);

      const updateProductImagesService = new UpdateProductImagesService();
      const result: any = await updateProductImagesService.post(dataArray, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if(result.status === 'success') {
          history.push(ADMINROUTES.PRODUCT_IMAGES_LIST);
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
            <input
              type="file"
              className="form-control"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.files)
              }
            />
          </div>
          <div className="py-3">
            <input type="submit" className="btn btn-primary" onClick={update} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductImagesPage;
