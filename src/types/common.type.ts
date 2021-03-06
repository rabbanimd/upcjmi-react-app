import {LazyExoticComponent} from 'react';
import {IReduxState} from '../reducers';

export interface IReducerAction {
  type: string;

  [key: string]: any;
}

export interface IDispatchFunction {
  (action: IReducerAction): any;
}

export interface IRoute {
  path: string;
  screen: LazyExoticComponent<any>;
  exact?: boolean;
  title?: string;
}

export interface ISidebarRoute {
  path: string;
  screen?: LazyExoticComponent<any>;
  icon: string;
  name: string;
  children?: Array<ISidebarRoute>
}

export interface ICarousel {
  image: string;
  caption: string;
}

export interface IGetStateFunction {
  (): IReduxState;
}

export interface IObject {
  [key: string]: any;
}

export type ISignInOptions = 'E' | 'G' | 'U';
