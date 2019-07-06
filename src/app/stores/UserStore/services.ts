import * as tPromise from 'io-ts-promise';
import client from '../../../client';
import { IUser } from '../../types';

const fetchUser = async () => {
  const data = await client.get('/users/2');
  return tPromise.decode(IUser, data);
};

export default { fetchUser };
