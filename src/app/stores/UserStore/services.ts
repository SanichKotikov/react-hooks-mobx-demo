import client from '../../../client';
import { IUser } from '../../types';

const fetchUser = () => client.get('/users/2');

export interface IUserServices {
  fetchUser: () => Promise<IUser>;
}

export default { fetchUser };
