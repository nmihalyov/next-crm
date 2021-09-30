export enum AppActionTypes {
  SHOW_LOADER = 'SHOW_LOADER',
  HIDE_LOADER = 'HIDE_LOADER'
};

type ShowLoaderAppAction = {
  type: AppActionTypes.SHOW_LOADER,
};

type HideLoaderAppAction = {
  type: AppActionTypes.HIDE_LOADER
};

export type AppAction = ShowLoaderAppAction | HideLoaderAppAction;