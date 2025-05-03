import React, { useState } from "react";
import { useHabit } from "../../hooks/useHabit";

function HabitForm() {
  const [title, setTitle] = useState<string>("");
  const { addHabit } = useHabit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title?.trim()) return;
    addHabit({ id: self.crypto.randomUUID(), name: title });
    setTitle("");
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold mb-4">Habit Tracker</div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter habit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default HabitForm;
