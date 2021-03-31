import React, { useEffect, useState } from 'react';

const Filter = ({ employees, employeeUpdate }) => {
    const [userInput, inputUpdate] = useState('');

    useEffect(() => {
        const filteredEmployees = userInput === '' ? employees : employees.filter(
            ({ name: { first } }) => first.toLowerCase().indexOf(userInput.toLowerCase()) >= 0
        );

        employeeUpdate(filteredEmployees);
    }, [userInput, employees]);

    return (
        <input value={userInput} onChange={event => inputUpdate(event.target.value)}></input>
    );
};

export default Filter;