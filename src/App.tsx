import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ReduxTutorial } from "./pages/redux-tutorial";

function App() {
    return (
        <Routes>
            <Route path="/redux" element={<ReduxTutorial />} />
        </Routes>
    );
}

export default App;
