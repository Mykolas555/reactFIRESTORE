// Works.js
import { useNavigate } from "react-router-dom";
import WorksTable from '../worksTable/WorksTable';
import { useState, useEffect } from "react";
import * as service from "../../services/TimesCrudServices";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    service.getAllWorks((works) => {
        console.log(works);
        setWorks(works);
    });
  }, []);

  const navigate = useNavigate();
  const addNewWork = () => {
    navigate('/AddWork');
  };

  return (
    <>
      <div className="container">
        <h1>Works</h1>
        <button type="submit" onClick={addNewWork} className="btn btn-primary">
          Prideti darba
        </button>
      </div>
      <WorksTable works={works} />
    </>
  );
};

export default Works;
