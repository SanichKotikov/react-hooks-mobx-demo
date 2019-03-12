import React from 'react';
import { IUser } from '../types';

export default React.createContext<IUser | null>(null);
