import Cookies from 'js-cookie';
import { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FindCategoryService from 'services/backend/category/find-category';
import UpdateCategoryService from 'services/backend/category/update-category';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';

interface UpdateCategoryPageProps {
  id: string;
}

const UpdateCategoryPage = () => {
  const { id } = useParams<UpdateCategoryPageProps>();
  const [name, setName] = useState<string>('');
  const history = useHistory();

  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const findCategoryService = new FindCategoryService();
      const result: any = await findCategoryService.getById(
        id,
        {},
        { authorization: `Bearer ${token}` }
      );
      if (result.status === 'success') {
        setName(result.data.name);
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
      try {
        const updateCategoryService = new UpdateCategoryService();
        const result: any = await updateCategoryService.put(
            id,
            { name },
            { headers: { authorization: `Bearer ${token}` } }
        );
        if(result.status === 'success') {
            history.push(ADMINROUTES.CATEGORY_LIST);
        }
      } catch (err) {
          console.log(err);
      }
    }else{
        history.push(ADMINROUTES.LOGIN);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Create User</h1>
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
        </div>
        <div className="card-footer py-3">
          <div className="small">
            <input type="submit" className="btn btn-primary" onClick={update} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryPage;
