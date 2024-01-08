// Work.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import * as service from '../../services/TimesCrudServices';
import { useNavigate } from 'react-router-dom';

const Work = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  const deleteHandler = () => {
    service.deleteWork(props.id);
    navigate('/');
  };

  return (
    <tr >
      <td>{props.date}</td>
      <td>{props.company}</td>
      <td>{props.service}</td>
      <td>{props.description}</td>
      <td>{props.timeFrom}</td>
      <td>{props.timeTo}</td>
      <td><Link to={`/update-work/${props.id}`} className='btn btn-primary'>Redaguoti</Link></td>
      <td><a href={id} onClick={deleteHandler} className='btn btn-primary'>Ištrinti</a></td>
    </tr>
  );
};

export default Work;
