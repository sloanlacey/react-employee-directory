import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10&nat=us')
        .then((res) => res.json())
        .then((res) => {
            setEmployees(res.results)}
        );
    }, []);

    return (
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        {employees.map(({ name, email }) => (
        <EmployeeRow name={name} email={email} />))}
    </tbody>
  </Table>
    );
  }

  const EmployeeRow = ({ name, email }) => (
    <tr>
    <td>{name.title}</td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{email}</td>
  </tr>
  );

  export default EmployeeTable;