import React, { useState, useEffect } from 'react';

function AdminUsers() {
  const [role, setRole] = useState('student');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/admin/users?role=${role}`)
      .then(res => res.json())
      .then(setUsers);
  }, [role]);

  return (
    <div>
      <h1 style={{color: '#1e293b', marginBottom: '20px'}}>👥 จัดการผู้ใช้งาน</h1>
      <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
        <button className={`tab-btn student ${role === 'student' ? 'active' : ''}`} onClick={() => setRole('student')}>นักเรียน</button>
        <button className={`tab-btn teacher ${role === 'teacher' ? 'active' : ''}`} onClick={() => setRole('teacher')}>อาจารย์</button>
      </div>

      <div className="card-table">
        <table>
          <thead>
            <tr>
              <th>รหัสประจำตัว</th>
              <th>ชื่อ - นามสกุล</th>
              <th style={{textAlign: 'right'}}>การจัดการ</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td style={{textAlign: 'right'}}>
                  <button style={{background: '#d32f2f', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer'}}>ลบรายชื่อ</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;