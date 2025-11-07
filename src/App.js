import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mainrouter from "./routers";

function App() {
  return (
    <div className="App">
      <Mainrouter></Mainrouter>
      <ToastContainer
      position="top-center"
     autoClose={5000}
     hideProgressBar={true}
     newestOnTop={true}
     closeOnClickrtl={false}
     pauseOnFocusLoss
      draggable
      pauseOnHover 
      />
    </div>
  );
}

export default App;

