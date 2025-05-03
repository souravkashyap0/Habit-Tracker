import { useHabit } from "../../hooks/useHabit";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../checkbox/checkbox";
import { CheckedTypes } from "../../types/checkbox";

function HabitList() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const { habits, deleteHabit, deleteAllHabits } = useHabit();

  const handleDelete = (id: string) => {
    deleteHabit(id);
  };

  const handleDeleteAll = () => {
    deleteAllHabits();
  };

  const handleRowSelect = (id: string) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const allRowSelected =
    habits.length > 0 && selectedIds.size === habits.length;
  const someRowSelected =
    selectedIds.size > 0 && selectedIds.size < habits.length;

  const selectAllState = allRowSelected
    ? CheckedTypes.Checked
    : someRowSelected
    ? CheckedTypes.Indeterminate
    : CheckedTypes.Empty;

  const handleSelectAllToggle = () => {
    if (allRowSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(habits.map((habit) => habit.id)));
    }
  };

  const rows = habits.map((habit) => (
    <tr
      key={habit.id}
      style={{ borderBottom: "1px solid red", textAlign: "center" }}
    >
      <td>
        <Checkbox
          label=""
          value={
            selectedIds.has(habit.id)
              ? CheckedTypes.Checked
              : CheckedTypes.Empty
          }
          onChange={() => handleRowSelect(habit.id)}
        />
      </td>
      <td>{habit.name}</td>
      <td>
        <button
          onClick={() => handleDelete(habit.id)}
          disabled={!selectedIds.has(habit.id)}
        >
          <FontAwesomeIcon
            icon={faTrash}
            style={{ color: !selectedIds.has(habit.id) ? "grey" : "red" }}
          />
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="habit-list">
        <table style={{ width: "100%", border: "1px solid white" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>
                <Checkbox
                  label=""
                  value={selectAllState}
                  onChange={handleSelectAllToggle}
                />
              </th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
      <button onClick={handleDeleteAll} disabled={!allRowSelected}>
        Delete All
      </button>
    </div>
  );
}
export default HabitList;
