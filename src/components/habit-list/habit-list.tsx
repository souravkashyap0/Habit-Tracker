import { useHabit } from "../../hooks/useHabit";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function HabitList() {
  const { habits, deleteHabit } = useHabit();
  console.log("THE HABIT LIST", habits);

  const handleDelete = (id: string) => {
    deleteHabit(id);
  };

  const rows = habits.map((habit) => (
    <tr
      key={habit.id}
      style={{ borderBottom: "1px solid red", textAlign: "center" }}
    >
      <td>{habit.name}</td>
      <td>
        <button onClick={() => handleDelete(habit.id)}>
          <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="habit-list">
      <table style={{ width: "100%", border: "1px solid white" }}>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

//   return (
//     <div className="habit-list">
//       <table style={{ width: "100%", border: "1px solid white" }}>
//         <tr style={{ textAlign: "center" }}>
//           <th>Name</th>
//           <th>Actions</th>
//         </tr>
//         {habits?.map((val, key) => {
//           return (
//             <>
//               <tr style={{ borderBottom: "1px solid red" }} key={key}>
//                 <td>{val.name}</td>
//                 <td>
//                   <button>
//                     <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
//                   </button>
//                 </td>
//               </tr>
//             </>
//           );
//         })}
//       </table>
//     </div>
//   );
//}

export default HabitList;
