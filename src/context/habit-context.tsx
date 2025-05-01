import React, { createContext, useEffect, useState } from "react";
import { Habits } from "../types/habits";

export interface HabitContextType {
  habits: Habits[];
  addHabit: (habit: Habits) => void;
  deleteHabit: (id: string) => void;
}

export const HabitContext = createContext<HabitContextType | undefined>(
  undefined
);

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [habits, setHabits] = useState<Habits[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      console.log("it is running after changes");
      localStorage.setItem("habits", JSON.stringify(habits));
    }
  }, [habits, initialized]);

  const addHabit = (habit: Habits) => {
    setHabits((prev) => [...prev, habit]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
