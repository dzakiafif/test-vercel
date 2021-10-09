import Cookies from 'js-cookie';
import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import CreateProductService from 'services/backend/product/create-product';
import ListCategoryService from 'services/backend/category/list-category';
import ListUserService from 'services/backend/user/list-user';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';

const CreateProductPage = () => {
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [dataUser, setDataUser] = useState<any>([]);
  const [dataCategory, setDataCategory] = useState<any>([]);
  const [description, setDescription] = useState<string>('');

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const listCategoryService = new ListCategoryService();
      const listUserService = new ListUserService();

      const resultCategory: any = await listCategoryService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      if (resultCategory.status === 'success') {
        setDataCategory(resultCategory.data);
      }

      const resultUser: any = await listUserService.get(
        {},
        { authorization: `Bearer ${token}` }
      );
      if (resultUser.status === 'success') {
        setDataUser(resultUser.data);
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
    if (token !== undefined) {
      const createProductService = new CreateProductService();
      const result: any = await createProductService.post(
        { name, price, description, userId, category },
        { headers: { authorization: `Bearer ${token}` } }
      );
      if(result.status === 'success') {
          history.push(ADMINROUTES.PRODUCT_LIST);
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
            <label htmlFor="">User</label>
            <select
              value={userId}
              className="form-control"
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setUserId(event.target.value)
              }
            >
              <option value="">-- Choose User --</option>
              {dataUser.map((val: any) => (
                <option key={val.id} value={val.id}>
                  {val.fullname}
                </option>
              ))}
            </select>
          </div>
          <div className="form-floating mb-3">
            <Input
              type="text"
              className="form-control"
              onChange={(value) => setName(value)}
              value={name}
              id="inputName"
            />
            <label htmlFor="inputName">Product Name</label>
          </div>

          <div className="form-floating mb-3">
            <Input
              type="number"
              className="form-control"
              onChange={(value) => setPrice(value)}
              value={price}
              id="inputPrice"
            />
            <label htmlFor="inputPrice">Price</label>
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="">Category</label>
            <select
              value={category}
              className="form-control"
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setCategory(event.target.value)
              }
            >
              <option value="">-- Choose Category --</option>
              {dataCategory.map((val: any) => (
                <option key={val.id} value={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              rows={10}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(event.target.value)
              }
              value={description}
              id="inputDescription"
            />
            <label htmlFor="inputDescription">Description</label>
          </div>
          <div className="py-3">
            <input type="submit" className="btn btn-primary" onClick={create} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
