import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
// import SearchBar from './SearchBar';


const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100&nat=us')
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
        <th>Age</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Username</th>
        <th>Location</th>
        <th>Photo</th>
      </tr>
    </thead>
    <tbody>
        {employees.filter(e => e.name.first.indexOf('A') !== -1).map(({ name, email, location, login, dob, phone, picture }) => (
        <EmployeeRow name={name} email={email} location={location} login={login} dob={dob} phone={phone} picture={picture} />))}
    </tbody>
  </Table>
    );
  }

  const EmployeeRow = ({ name, email, location, login, dob, phone, picture }) => (
    <tr>
    <td>{name.title}</td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{dob.age}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <td>{login.username}</td>
    <td>{location.city}, {location.state}</td>
    <td><img src={picture.thumbnail} alt='employee photos' /></td>
  </tr>
  );

  export default EmployeeTable;