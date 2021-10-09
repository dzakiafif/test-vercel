import Cookies from "js-cookie";
import { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import FindProductService from "services/backend/product/find-product";
import UpdateProductService from "services/backend/product/update-product";
import { Input } from "components";
import { ADMINROUTES } from "routes";

const UpdateProductPage = () => {

    const history = useHistory();
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [dataUser, setDataUser] = useState<any>([]);
    const [dataCategory, setDataCategory] = useState<any>([]);
    const [description, setDescription] = useState<string>('');

    return (
        <p>test</p>
    )
}

export default UpdateProductPage;
