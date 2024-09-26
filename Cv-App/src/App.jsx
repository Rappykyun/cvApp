import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkInfo from "./components/WorkInfo";
import generatePDF from "./lib/generatePdf";
import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState({});
  const [workInfo, setWorkInfo] = useState({});

  const handleExportPDF = () => {
    generatePDF(generalInfo, educationalInfo, workInfo);
  };

  return (
    <div className="App">
      <h1 className="text-4xl mb-3">Simple Cv Generator</h1>
      <GeneralInfo setGeneralInfo={setGeneralInfo} />
      <EducationalInfo setEducationalInfo={setEducationalInfo} />
      <WorkInfo setWorkInfo={setWorkInfo} />
      <div className="flex justify-center w-full">
        <div className="w-[670.4px] flex justify-end">
          <Button onClick={handleExportPDF} className="m-2">
            Generate PDF
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
