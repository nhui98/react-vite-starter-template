import { subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand/react";

type State = {
  theme: "light" | "dark";
};

const INITIAL_STATE: State = {
  theme: "dark",
};

type Action = {
  setTheme: (theme: State["theme"]) => void;
  reset: () => void;
};

export const useAppStore = create<State & Action>()(
  subscribeWithSelector(
    immer((set) => ({
      ...INITIAL_STATE,
      setTheme: (theme) => {
        set((state) => {
          state.theme = theme;
        });
      },
      reset: () => {
        set((state) => {
          Object.assign(state, INITIAL_STATE);
        });
      },
    })),
  ),
);
