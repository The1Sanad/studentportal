import React, { useState } from 'react';
import axios from 'axios';
import '../css/GetItemById.css'; // Import the CSS file

const GetItemById = () => {
  const [student, setUser] = useState({ id: '', name: '' });
  const [formData, setFormData] = useState({ studentExamNumber: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const getItemsById = (e) => {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/${formData.studentExamNumber}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg('Error retrieving data');
      });
  };

  return (
    <div>
      <form onSubmit={getItemsById}>
        <div>
          <label htmlFor="studentExamNumber">Student Exam Number</label>
          <input
            type="text"
            id="studentExamNumber"
            value={formData.studentExamNumber}
            onChange={(e) => setFormData({ ...formData, studentExamNumber: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Get Student Grades</button>
        </div>
      </form>
      {student.id && 
        <div>
          <h3>Student ID: {student.id}</h3>
          <h3>Student Name: {student.name}</h3>
          <h4>Grades:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4>Grade Breakdown:</h4>
            <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
              {student.grades.map((grade, index) => (
                <li key={index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <span style={{ fontWeight: 'bold' }}>{Object.keys(grade)[0]}:</span>
                  <span>{Object.values(grade)[0]}</span>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
      }
      
      {errorMsg && <h3 className="error">{errorMsg}</h3>}
    </div>
  );
};

export default GetItemById;