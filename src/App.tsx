import HabitForm from './components/habit-form/habit-form.tsx';
import  HabitList  from './components/habit-list/habit-list.tsx';
import './App.css'
import {HabitProvider} from './context/habit-context.tsx';

function App() {
  return (
   <HabitProvider>
       <HabitForm/>
       <HabitList />
   </HabitProvider>
  )
}   

export default App;
