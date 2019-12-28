import { createContext } from 'react';
import { IUser } from 'app/types';

export default createContext<IUser | null>(null);
