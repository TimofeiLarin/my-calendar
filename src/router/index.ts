import React from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RoutesNames {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.LOGIN, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.EVENT, component: Event },
];
