import React, { useState, useEffect } from 'react';

const EmpTable = ({ employees }) => {
// return a table with data cells for employee information
    return (
        <div>
            <table className='empTable'>
                {/* Table headers with Employee info */}
                <thead>
                    <tr>
                        <th scope='col'>Employee Title</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Birthday</th>
                        <th scope='col'>City</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Phone Number</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>{first}</td>
                        <td>{last}</td>
                        <td>{email}</td>
                        <td>{dob}</td>
                        <td>{city}</td>
                        <td>{state}</td>
                        <td>{cell}</td>
                        <td>{password}</td>
                        <td>
                            <img src={thumbnail} />
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EmpTable;