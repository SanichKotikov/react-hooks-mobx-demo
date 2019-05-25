import client from '../../../client';
import { IUser } from '../../types';

const fetchUser = (): Promise<IUser> => client.get('/users/2');

export default { fetchUser };
