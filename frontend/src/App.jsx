import React, { useState } from "react";
import "./App.css";

const initialCourses = [
  { id: 1, name: "Mastering Python 2026", instructor: "Somchai Dev", price: 1500, detail: "Deep dive Python", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400" },
  { id: 2, name: "UI/UX Design Master", instructor: "Somying Design", price: 3500, detail: "Figma to Web", image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400" }
];

const initialMembers = [
  { id: "T-001", name: "ดร.ศิรสิทธิ ศุภสาราจารย์", role: "teacher", email: "sirasit@email.com" },
  { id: "T-002", name: "อ.วิภาวรรณ สอนสวย", role: "teacher", email: "wipawan@email.com" },
  { id: "6810110151", name: "ธัญชนก มะลิแก้ว", role: "student", email: "thanch@email.com" },
  { id: "6810110200", name: "สมชาย เรียนดี", role: "student", email: "somchai@email.com" }
];

function App() {
  const [courses, setCourses] = useState(initialCourses);
  const [members, setMembers] = useState(initialMembers);
  const [currentPage, setCurrentPage] = useState("home");
  const [adminTab, setAdminTab] = useState("dashboard");
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const students = members.filter(m => m.role === "student");
  const teachers = members.filter(m => m.role === "teacher");

  const deleteMember = (id, name) => {
    if (window.confirm(`ลบคุณ "${name}"?`)) setMembers(members.filter(m => m.id !== id));
  };

  const saveCourse = (formData) => {
    if (editingItem) setCourses(courses.map(c => c.id === formData.id ? formData : c));
    else setCourses([...courses, { ...formData, id: Date.now() }]);
    closeModal();
  };

  const deleteCourse = (id) => {
    if (window.confirm("ลบคอร์สนี้?")) setCourses(courses.filter(c => c.id !== id));
  };

  const closeModal = () => { setEditingItem(null); setIsAdding(false); };

  const AdminView = () => (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Born2Code Admin</h2>
        <nav>
          <button className={adminTab === "dashboard" ? "active" : ""} onClick={() => setAdminTab("dashboard")}>📊 แผงควบคุม</button>
          <button className={adminTab === "members" ? "active" : ""} onClick={() => setAdminTab("members")}>👥 จัดการสมาชิก</button>
          <button className={adminTab === "courses" ? "active" : ""} onClick={() => setAdminTab("courses")}>📚 จัดการคอร์ส</button>
        </nav>
        <button className="btn-back-home" onClick={() => setCurrentPage("home")}>🏠 กลับหน้าหลัก</button>
      </aside>

      <main className="admin-main">
        {adminTab === "dashboard" && (
          <div className="admin-fade">
            <h2 className="section-title">📊 สถิติภาพรวม</h2>
            <div className="dash-grid">
              <div className="dash-card"><h3>นักเรียน</h3><p>{students.length}</p></div>
              <div className="dash-card"><h3>อาจารย์</h3><p>{teachers.length}</p></div>
              <div className="dash-card"><h3>คอร์ส</h3><p>{courses.length}</p></div>
              <div className="dash-card blue"><h3>รายได้</h3><p>฿0</p></div>
            </div>
          </div>
        )}

        {adminTab === "members" && (
          <div className="admin-fade">
            <h2 className="title-t">👨‍🏫 อาจารย์ ({teachers.length})</h2>
            <div className="card-list">
              <table>
                <thead><tr><th>รหัส</th><th>ชื่อ-นามสกุล</th><th>อีเมล</th><th>จัดการ</th></tr></thead>
                <tbody>
                  {teachers.map(m => (
                    <tr key={m.id}><td>{m.id}</td><td>{m.name}</td><td>{m.email}</td>
                    <td><button className="btn-del-mem" onClick={() => deleteMember(m.id, m.name)}>ลบออก</button></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="title-s">🎓 นักเรียน ({students.length})</h2>
            <div className="card-list">
              <table>
                <thead><tr><th>รหัส</th><th>ชื่อ-นามสกุล</th><th>อีเมล</th><th>จัดการ</th></tr></thead>
                <tbody>
                  {students.map(m => (
                    <tr key={m.id}><td>{m.id}</td><td>{m.name}</td><td>{m.email}</td>
                    <td><button className="btn-del-mem" onClick={() => deleteMember(m.id, m.name)}>ลบออก</button></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {adminTab === "courses" && (
          <div className="admin-fade">
            <div className="flex-header">
              <h2 className="section-title">📚 จัดการคอร์สเรียน</h2>
              <button className="btn-add-course" onClick={() => setIsAdding(true)}>+ เพิ่มคอร์สใหม่</button>
            </div>
            <div className="card-list">
              <table>
                <thead><tr><th>รูป</th><th>ชื่อคอร์ส</th><th>ราคา</th><th>จัดการ</th></tr></thead>
                <tbody>
                  {courses.map(c => (
                    <tr key={c.id}>
                      <td><img src={c.image} className="mini-thumb" alt="" /></td>
                      <td><strong>{c.name}</strong></td>
                      <td>฿{c.price.toLocaleString()}</td>
                      <td>
                        <button className="btn-edit-link" onClick={() => setEditingItem(c)}>แก้ไข</button>
                        <button className="btn-del-link" onClick={() => deleteCourse(c.id)}>ลบ</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );

  const HomeView = () => (
    <div className="home-wrap">
      <nav className="home-nav">
        <div className="logo">Born2Code 🚀</div>
        <button className="btn-admin-gate" onClick={() => setCurrentPage("admin")}>Admin Panel</button>
      </nav>
      <header className="hero"><h1>Born2Code</h1><p>Learn Programming with Expert</p></header>
      <div className="home-grid">
        {courses.map(c => (
          <div key={c.id} className="home-card">
            <img src={c.image} alt="" /><div className="p-20"><h3>{c.name}</h3><p>฿{c.price.toLocaleString()}</p></div>
          </div>
        ))}
      </div>
    </div>
  );

  const Modal = ({ data }) => {
    const [form, setForm] = useState(data || { name: "", instructor: "", price: 0, detail: "", image: "" });
    return (
      <div className="modal-bg">
        <div className="modal-box">
          <h2>{data ? "แก้ไขคอร์ส" : "เพิ่มคอร์ส"}</h2>
          <div className="modal-inputs">
            <label>ชื่อคอร์ส</label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <label>อาจารย์</label>
            <input value={form.instructor} onChange={e => setForm({...form, instructor: e.target.value})} />
            <label>ราคา</label>
            <input type="number" value={form.price} onChange={e => setForm({...form, price: Number(e.target.value)})} />
            <label>URL รูปภาพ</label>
            <input value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
            <label>รายละเอียด</label>
            <textarea rows="3" value={form.detail} onChange={e => setForm({...form, detail: e.target.value})} />
          </div>
          <div className="modal-btns">
            <button className="btn-save" onClick={() => saveCourse(form)}>บันทึกข้อมูล</button>
            <button className="btn-cancel" onClick={closeModal}>ยกเลิก</button>
          </div>
        </div>
      </div>
    );
  };

  return <div className="app-main">{currentPage === "home" ? <HomeView /> : <AdminView />}{(isAdding || editingItem) && <Modal data={editingItem} />}</div>;
}

export default App;