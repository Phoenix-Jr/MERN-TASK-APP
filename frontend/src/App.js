import TaskList from "./component/TaskList";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify";
const App = () => {
  return (
    <div className="app">
      <div className="task-container">
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
