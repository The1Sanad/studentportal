import React from 'react';
import GetItemById from './components/GetItemById';
//import GetItems from './components/GetItems';
import './css/App.css'; // Import the CSS file

const App = () => {
  return (
    <div>
      <div id="logo">
        <img src="./logo.png" alt="Logo" />
      </div>
      <h2>مرحبا بكم في منصة الدرجات النهائية للصفوف المنتهية </h2>
      <hr />
      
      <h3> الرجاء ادخال الرقم الامتحاني للطالب</h3>
      <GetItemById className="form-section" />
      <hr />
    </div>
  );
};

export default App;