import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppStateType } from 'store/store';

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = () => useDispatch();
