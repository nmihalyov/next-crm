import { AppActionTypes } from '../../types/app';

export const showLoader = () => ({
  type: AppActionTypes.SHOW_LOADER
});

export const hideLoader = () => ({
  type: AppActionTypes.HIDE_LOADER
});