// import { createContext } from "react"
import { createContext } from 'use-context-selector';

export type State = {
    color?: string;
    backGround: string;
    update?: (data: State) => void;
}

export const ThemeContext = createContext<Partial<State>>({})