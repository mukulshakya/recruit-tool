import React, { useEffect, useState } from "react";
import CandidateTable from "./components/candidatesTable";
import Navbar from "./components/navbar";
import CreateCandidateDialog from "./components/createCandidateDialog";
import api from "./services/api";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [candidates, setCandidates] = useState([]);

  const updateCandidateStatus = (id, status) => {
    let isUpdated = false;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].id === id) {
        candidates[i].status = status;
        isUpdated = true;
        break;
      }
    }
    if (isUpdated) setCandidates([...candidates]);
  };

  useEffect(() => {
    api.getCandidates().then((data) => {
      if (data.error) {
        return alert("Fetch candidates error: " + JSON.stringify(data.error));
      }
      setCandidates(data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar onAddCandidate={() => {}} setIsDialogOpen={setIsDialogOpen} />
      <CandidateTable
        candidates={candidates}
        updateCandidateStatus={updateCandidateStatus}
      />
      {isDialogOpen && (
        <CreateCandidateDialog setIsDialogOpen={setIsDialogOpen} />
      )}
    </div>
  );
}

export default App;
