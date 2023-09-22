import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import "./App.css";


const App = () => (
    <div className="App">
        <TodoInput />
        <div className="todo-wrapper">
            <Todos />
        </div>
    </div>
)

export default App;