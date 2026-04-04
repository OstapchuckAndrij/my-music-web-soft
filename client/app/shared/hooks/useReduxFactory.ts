import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Використовуй ці хуки замість стандартних по всьому додатку
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
