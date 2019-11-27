import { connect, useDispatch, useSelector } from 'react-redux';
import { Reducer, Action, ReducersMapObject, Dispatch } from 'redux';
import { createLogger } from 'redux-logger';
// @ts-ignore
import createLoading from 'dva-loading';

const { create } = require("dva-core");

let app: any, store: any, dispatch;

export { connect, useDispatch, useSelector };
export interface Options {
  models: Model<any>[];
  extraReducers?: any;
  initialState?: any;
  onError?: (e: any) => void;
  onAction?: any[];
}

export function createApp(options: Options) {
  // redux 日志
  options.onAction = [createLogger()];
  app = create(options);
  app.use(createLoading({}));

  // @ts-ignore
  if (!global.registered) {
    options.models.forEach(model => app.model(model));
  }
  // @ts-ignore
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export interface EffectsCommandMap {
  put: <A extends Action>(action: A) => any;
  call: Function;
  select: Function;
  take: Function;
  cancel: Function;
  [key: string]: any;
}
export interface EffectsMapObject {
  [key: string]: Effect | EffectWithType;
}
export interface ReducerEnhancer {
  (reducer: Reducer<any>): void;
}
export interface SubscriptionAPI {
  dispatch: Dispatch<any>;
}
export type ActionWithPayload = {action: Action, payload: any};
export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
export type EffectWithType = [Effect, { type: EffectType }];
export type Effect = (action: ActionWithPayload, effects: EffectsCommandMap) => void;
export type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer];
export type Subscription = (api: SubscriptionAPI, done: Function) => void;
export interface SubscriptionsMapObject {
  [key: string]: Subscription;
}
export interface Model<T> {
  namespace: string;
  state: T;
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}