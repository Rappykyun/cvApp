import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl mb-3">CV Generator</h1>
      <GeneralInfo />
      <EducationalInfo/>
    </div>
  );
}

export default App;
