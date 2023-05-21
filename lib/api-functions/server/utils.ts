import { Response } from 'express';

const checkPermissions = (
  user: Record<string, any>,
  API: string,
  permission: string,
) => {
  // console.log('user', user, 'api', API);
  const permissions = user[`${API}/user_authorization`]?.permissions;
  // console.log('permissions', permissions, 'permission', permission);
  return permissions?.includes?.(permission);
};

const checkRole = (user: Record<string, any>, API: string, role: string) => {
  console.log(user, API, role);
  const roles = user[`${API}/roles`];
  console.log('roles', roles, `${API}/roles`);
  return roles?.includes?.(role);
};

const handleUnauthorisedAPICall = (res: Response) => {
  return res.status(401).end('Unauthorised');
};

export { checkPermissions, handleUnauthorisedAPICall, checkRole };
