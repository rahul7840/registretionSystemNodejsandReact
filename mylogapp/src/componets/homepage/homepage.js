import React from 'react'
import { Table } from 'react-bootstrap';
import './homepage.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
//  const Homepage = ({ setLoginUser }) =>{
//     return(
//         <div className="homepage">
//         <div>thisi is home page</div>
//         <div className='button' onClick={()=>setLoginUser({})}>LOGOUT</div>
//         </div>
//     )
//  }
function EntryTable({ setLoginUser }) {
    const entries = [
      { name: 'John', date: '2022-02-28', role: 'Developer', status: 'Active' },
      { name: 'Jane', date: '2022-02-27', role: 'Designer', status: 'Inactive' },
      { name: 'Bob', date: '2022-02-26', role: 'Manager', status: 'Active' },
      { name: 'Alice', date: '2022-02-25', role: 'Marketing', status: 'Inactive' },
      { name: 'Chris', date: '2022-02-24', role: 'Writer', status: 'Active' },
    ];
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.date}</td>
              <td>{entry.role}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
        <br/>
        <button className="btn btn-success" onClick={()=>setLoginUser({})} >Log-Out</button>
      </Table>
      
      
    );
  }
//  export default Homepage
export default EntryTable;
