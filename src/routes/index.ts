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
  USER_LIST: '/admin/list-user',
  USER_UPDATE: `/admin/update-user/${RouteParams.Id}`,
  USER_DELETE: `/admin/delete-user/${RouteParams.Id}`,
  PRODUCT_CREATE: '/admin/create-product',
  PRODUCT_LIST: '/admin/list-product',
  PRODUCT_UPDATE: `/admin/update-product/${RouteParams.Id}`,
  PRODUCT_DELETE: `/admin/delete-product/${RouteParams.Id}`,
  PRODUCT_INVENTORIES_CREATE: '/admin/create-product-inventories',
  PRODUCT_INVENTORIES_LIST: '/admin/list-product-inventories',
  PRODUCT_INVENTORIES_UPDATE: `/admin/update-product-inventories/${RouteParams.Id}`,
  PRODUCT_INVENTORIES_DELETE: `/admin/delete-product-inventories/${RouteParams.Id}`,
  CATEGORY_CREATE: '/admin/create-category',
  CATEGORY_LIST: '/admin/list-category',
  CATEGORY_UPDATE: `/admin/update-category/${RouteParams.Id}`,
  CATEGORY_DELETE: `/admin/delete-category/${RouteParams.Id}`
}