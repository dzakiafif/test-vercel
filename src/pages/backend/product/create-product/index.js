import Cookies from "js-cookie";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CreateProductService from "services/backend/product/create-product";
import { ADMINROUTES } from "routes";

const CreateProductPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = Cookies.get('access_token_admin');
        if(token !== undefined) {
            history.push(ADMINROUTES.LOGIN);
        }
    })

    const create = async () => {
        
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="form-floating mb-3">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProductPage;
