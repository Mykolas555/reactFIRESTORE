// WorksTable.js
import React from 'react';
import Work from '../work/Work';

const WorksTable = (props) => {
  

  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Data</th>
            <th>Klientas</th>
            <th>Suteikta paslauga</th>
            <th>Aprasymas</th>
            <th>Nuo</th>
            <th>Iki</th>
            <th>Keisti</th>
            <th>Salinti</th>
          </tr>
        </thead>
        <tbody>
          {props.works.map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WorksTable;
