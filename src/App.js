import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryHistoryPage from "./components/home/QueryHistoryPage";
// import QueryHistoryPage from "./components/home/QueryHistoryPage";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/query-history" element={<QueryHistoryPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
