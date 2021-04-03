import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const EmployeeTable = ({ searchTerm }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100&nat=us')
        .then((res) => res.json())
        .then((res) => {
            setEmployees(res.results)}
        );
    }, []);

    const searchContains = (str, match) =>
      str.toLowerCase().indexOf(match.toLowerCase()) !== -1;

    const handleSearchField = ({ name, location }) =>
      !searchTerm ||
      searchContains(name.first, searchTerm) ||
      searchContains(name.last, searchTerm) ||
      searchContains(location.city, searchTerm);

    return (
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Location</th>
        <th>Photo</th>
      </tr>
    </thead>
    <tbody>
          {employees
          .filter(handleSearchField)
          .map(({ dob, name, email, location, phone, picture }, i) => (
            <EmployeeRow 
            name={name} 
            email={email} 
            location={location} 
            dob={dob} 
            phone={phone} 
            picture={picture}
            i={i} />
          ))}
    </tbody>
  </Table>
    );
  }

  const EmployeeRow = ({ name, email, location, dob, phone, picture }) => (
    <tr>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{dob.age}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <td>{location.city}, {location.state}</td>
    <td><img src={picture.thumbnail} alt='employee photos' /></td>
  </tr>
  );

  export default EmployeeTable;