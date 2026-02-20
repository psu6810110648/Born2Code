import React, { useState, useEffect } from 'react';

function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const loadData = () => {
    fetch('http://localhost:5000/api/admin/courses')
      .then(res => res.json())
      .then(setCourses)
      .catch(err => console.error("Error loading courses:", err));
  };

  useEffect(() => { loadData(); }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/admin/courses/${editItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editItem)
    })
    .then(res => res.json())
    .then(() => {
      setEditItem(null); // ปิดหน้าต่าง Modal
      loadData(); // โหลดตารางใหม่
      alert('บันทึกข้อมูลเรียบร้อยแล้ว');
    });
  };

  return (
    <div className="admin-page">
      <h1 className="page-title">📚 จัดการคอร์สเรียน</h1>
      <div className="card-table">
        <table>
          <thead>
            <tr>
              <th>ชื่อคอร์ส</th>
              <th>อาจารย์</th>
              <th>ราคา</th>
              <th style={{ textAlign: 'right' }}>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(c => (
              <tr key={c.id}>
                <td><strong>{c.name}</strong></td>
                <td>{c.instructor || '-'}</td>
                <td>{c.price ? `฿${Number(c.price).toLocaleString()}` : '-'}</td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn-edit" onClick={() => setEditItem(c)}>แก้ไขรายละเอียด</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal หน้าต่างแก้ไขข้อมูล */}
      {editItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>แก้ไขข้อมูลคอร์ส</h3>
            <form onSubmit={handleUpdate}>
              <label>ชื่อคอร์ส:</label>
              <input type="text" value={editItem.name} onChange={e => setEditItem({...editItem, name: e.target.value})} />
              
              <label>ชื่ออาจารย์:</label>
              <input type="text" value={editItem.instructor} onChange={e => setEditItem({...editItem, instructor: e.target.value})} />

              <label>ราคา (บาท):</label>
              <input type="number" value={editItem.price} onChange={e => setEditItem({...editItem, price: e.target.value})} />

              <label>รายละเอียด:</label>
              <textarea rows="4" value={editItem.detail} onChange={e => setEditItem({...editItem, detail: e.target.value})} />

              <div className="modal-buttons">
                <button type="submit" className="btn-save">บันทึกข้อมูล</button>
                <button type="button" className="btn-cancel" onClick={() => setEditItem(null)}>ยกเลิก</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCourses;