import axios from 'axios';

export abstract class BaseService {
  private readonly ROOT_URL: string;

  constructor(url: string) {
    this.ROOT_URL = url;
  }

  public get = (params?: any, headers?: any) =>
    new Promise((resolve, reject) =>
      axios
        .get(`${this.ROOT_URL}`, {
          params,
          headers
        })
        .then((response) => resolve(response.data))
        .catch((err) => reject(err))
    );

  public getById = (id: string, params?: any, headers?: any) =>
    new Promise((resolve, reject) =>
      axios
        .get(`${this.ROOT_URL}/${id}`, {
          params,
          headers
        })
        .then((response) => resolve(response.data))
        .catch((err) => reject(err))
    );

  public post = (data?: any, headers?: any) =>
    new Promise((resolve, reject) =>
      axios
        .post(this.ROOT_URL, data, headers)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err))
    );

  public put = (id: string, data?: any, headers?: any) =>
    new Promise((resolve, reject) =>
      axios
        .put(`${this.ROOT_URL}/${id}`, data, headers)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err))
    );
  
  public delete = (id: string, headers?: any) =>
    new Promise((resolve, reject) =>
      axios
        .delete(`${this.ROOT_URL}/${id}`, headers)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err))
    );
}
