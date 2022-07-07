import AddStudents from './components/addTodo';
import ListToDo from './components/listTodo';
import './assets/css/style.css';
import SearchTodo from './components/searchTodo';

function App() {
  return (
    <div className="App">
      <AddStudents/>
      <SearchTodo/>
      <ListToDo/>
    </div>
  );
}

export default App;
