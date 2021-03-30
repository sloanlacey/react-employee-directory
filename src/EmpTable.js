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
                        <th scope='col'>Address</th>
                        <th scope='col'>Phone Number</th>
                        <th scope='col'>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EmpTable;