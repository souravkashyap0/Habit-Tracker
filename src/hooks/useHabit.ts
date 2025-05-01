import {useContext} from "react";
import {HabitContextType , HabitContext} from "../context/habit-context";

export const useHabit = (): HabitContextType => {
    const context = useContext(HabitContext);
    if (!context) {
      throw new Error("useHabit must be used within a HabitProvider");
    }
    return context;
  };