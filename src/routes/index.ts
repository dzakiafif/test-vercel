export enum RouteParams {
  Id = ':id',
}

export const USERROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  HOMEPAGE: '/homepage',
};

export const ADMINROUTES = {
  LOGIN: '/admin/login',
  DASHBOARD : '/admin/dashboard',
  USER_CREATE: '/admin/create-user',
  USER_LIST: '/admin/list-user'
}