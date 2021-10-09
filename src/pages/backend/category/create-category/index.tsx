import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';
import CreateCategoryService from 'services/backend/category/create-category';

const CreateCategoryPage = () => {
  const history = useHistory();
  const createCategoryService = new CreateCategoryService();
  const [name, setName] = useState<any>('');

  useEffect(() => {
    const token = Cookies.get('access_token_admin');
    if (token === undefined) {
      history.push(ADMINROUTES.LOGIN);
    }
  });

  const create = async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const result: any = await createCategoryService.post(
        { name },
        { headers: { authorization: `Bearer ${token}` } }
      );
      if (result.status === 'success') {
        history.push(ADMINROUTES.CATEGORY_LIST);
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
            <Input
              type="text"
              className="form-control"
              onChange={(value) => setName(value)}
              value={name}
              id="inputName"
            />
            <label htmlFor="inputName">Category Name</label>
          </div>
          <div className="py-3">
            <input type="submit" className="btn btn-primary" onClick={create} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryPage;
