import React, { useState } from "react";
import logo from './assets/logo.png';
import "./App.css";

// ลบเลข 1 ออก เพื่อให้เรียกใช้งานได้ปกติ
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
  // --- 1. ยุบรวม State นำทางให้เหลือแค่ตัวเดียว ---
  const [currentView, setCurrentView] = useState("home"); // ใช้ค่า home, admin, login, register, forgot

  // --- States ของฝั่ง Admin ---
  const [courses, setCourses] = useState(initialCourses);
  const [members, setMembers] = useState(initialMembers);
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

  // --- สไตล์พื้นฐาน (CSS) ของหน้า Login ---
  const styles = {
    page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' },
    header: { backgroundColor: '#0A1C39', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    footer: { backgroundColor: '#0A1C39', padding: '30px', color: 'white', fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginTop: 'auto' },
    main: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
    card: { backgroundColor: 'white', padding: '40px', borderRadius: '15px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
    title: { textAlign: 'center', marginBottom: '20px', color: '#333' },
    input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #A8A8A8', boxSizing: 'border-box' },
    buttonPrimary: { width: '100%', padding: '12px', backgroundColor: '#0A1C39', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    buttonGoogle: { width: '100%', padding: '12px', backgroundColor: 'white', color: '#333', border: '1px solid #A8A8A8', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' ,display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'},
    link: { color: '#0A1C39', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' },
    row: { display: 'flex', gap: '10px' },
    flexBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', marginBottom: '15px' }
  };

  // --- Components ทุกส่วน ---
  const AdminView = () => (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Born2Code Admin</h2>
        <nav>
          <button className={adminTab === "dashboard" ? "active" : ""} onClick={() => setAdminTab("dashboard")}>📊 แผงควบคุม</button>
          <button className={adminTab === "members" ? "active" : ""} onClick={() => setAdminTab("members")}>👥 จัดการสมาชิก</button>
          <button className={adminTab === "courses" ? "active" : ""} onClick={() => setAdminTab("courses")}>📚 จัดการคอร์ส</button>
        </nav>
        {/* เปลี่ยนจาก setCurrentPage เป็น setCurrentView */}
        <button className="btn-back-home" onClick={() => setCurrentView("home")}>🏠 กลับหน้าหลัก</button>
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
        <div>
           {/* เพิ่มปุ่มกดไปหน้า Login */}
           <button className="btn-admin-gate" style={{marginRight: '10px'}} onClick={() => setCurrentView("login")}>เข้าสู่ระบบ</button>
           <button className="btn-admin-gate" onClick={() => setCurrentView("admin")}>Admin Panel</button>
        </div>
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
            <label>ชื่อคอร์ส</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <label>อาจารย์</label><input value={form.instructor} onChange={e => setForm({...form, instructor: e.target.value})} />
            <label>ราคา</label><input type="number" value={form.price} onChange={e => setForm({...form, price: Number(e.target.value)})} />
            <label>URL รูปภาพ</label><input value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
            <label>รายละเอียด</label><textarea rows="3" value={form.detail} onChange={e => setForm({...form, detail: e.target.value})} />
          </div>
          <div className="modal-btns">
            <button className="btn-save" onClick={() => saveCourse(form)}>บันทึกข้อมูล</button>
            <button className="btn-cancel" onClick={closeModal}>ยกเลิก</button>
          </div>
        </div>
      </div>
    );
  };

  const Header = () => (
    <div style={{ backgroundColor: '#0a192f', padding: '10px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src={logo} alt="Born2Code Logo" style={{ height: '50px', objectFit: 'contain' }} />
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Born2Code</h2>
      </div>
      <div style={{ display: 'flex', gap: '20px', fontSize: '18px', cursor: 'pointer' }}>
        <span>🔍</span><span>🛒</span><span>☰</span><span>👤</span>
      </div>
    </div>
  );

  const Footer = () => (
    <div style={{ backgroundColor: '#0a192f', color: 'white', padding: '30px 50px', fontSize: '14px', marginTop: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#a5f3fc' }}>Born2Code</h2>
        <span style={{ fontSize: '16px' }}>“Born2Code ตัวช่วยที่จะทำให้คุณประสบความสำเร็จทางด้านคอมพิวเตอร์”</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div><p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>ที่อยู่</p><p style={{ margin: '0 0 2px 0', paddingLeft: '15px' }}>สถาบันบอร์นทูโค้ด เลขที่ 15 ถ.กาญจนวณิชย์</p><p style={{ margin: 0, paddingLeft: '15px' }}>อ.หาดใหญ่ จ.สงขลา 90110</p></div>
          <div><p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>เวลาเปิดทำการ</p><p style={{ margin: '0 0 2px 0', paddingLeft: '15px' }}>จ.-ศ. 16.00 - 21.00</p><p style={{ margin: 0, paddingLeft: '15px' }}>ส.-อา. 8.00 - 21.00</p></div>
        </div>
        <div style={{ minWidth: '250px' }}><p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>ช่องทางการติดต่อ</p><p style={{ margin: '0 0 2px 0', paddingLeft: '15px' }}>เบอร์โทรศัพท์ 03 3333 3333</p><p style={{ margin: 0, paddingLeft: '15px' }}>อีเมล Born2Code@coe.co.th</p></div>
      </div>
    </div>
  );

  const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('access_token', data.access_token);
          alert('✅ เข้าสู่ระบบสำเร็จ!');
          setCurrentView('home'); 
        } else {
          alert('❌ อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
      } catch (error) {
        console.error('Error:', error); alert('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้');
      }
    };

    return (
      <form onSubmit={handleLogin} style={styles.card}>
        <h2 style={styles.title}>เข้าสู่ระบบ</h2>
        <input type="email" placeholder="อีเมล" required value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        <input type="password" placeholder="รหัสผ่าน" required value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        <div style={styles.flexBetween}><label><input type="checkbox" /> จดจำฉันไว้</label><span style={styles.link} onClick={() => setCurrentView('forgot')}>ลืมรหัสผ่าน?</span></div>
        <button type="submit" style={styles.buttonPrimary}>เข้าสู่ระบบ</button>
        <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '12px', color: '#888' }}>— หรือ —</div>
        <button type="button" style={styles.buttonGoogle}>เข้าสู่ระบบด้วย Google</button>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>ยังไม่มีบัญชีใช่ไหม? <span style={styles.link} onClick={() => setCurrentView('register')}>สมัครสมาชิก</span></div>
      </form>
    );
  };

  const RegisterView = () => {
    const [firstName, setFirstName] = useState(''); const [lastName, setLastName] = useState(''); const [email, setEmail] = useState(''); const [phoneNumber, setPhoneNumber] = useState(''); const [password, setPassword] = useState(''); const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) { alert('รหัสผ่านไม่ตรงกันครับ'); return; }
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ firstName, lastName, email, password, phoneNumber })
        });
        if (response.ok) { alert('🎉 สมัครสมาชิกสำเร็จ!'); setCurrentView('login'); } 
        else { alert('เกิดข้อผิดพลาดในการสมัครสมาชิก'); }
      } catch (error) { console.error('Error:', error); alert('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้'); }
    };

    return (
      <form onSubmit={handleRegister} style={styles.card}>
        <h2 style={styles.title}>สร้างบัญชีใหม่</h2>
        <div style={styles.row}>
          <input type="text" placeholder="ชื่อ" required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={styles.input} />
          <input type="text" placeholder="นามสกุล" required value={lastName} onChange={(e) => setLastName(e.target.value)} style={styles.input} />
        </div>
        <input type="email" placeholder="อีเมล" required value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        <input type="tel" placeholder="เบอร์โทรศัพท์" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={styles.input} />
        <div style={styles.row}>
          <input type="password" placeholder="รหัสผ่าน" required value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
          <input type="password" placeholder="ยืนยันรหัสผ่าน" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={styles.input} />
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px', marginBottom: '15px' }}><label><input type="checkbox" required /> ฉันยอมรับเงื่อนไขและข้อตกลง</label></div>
        <button type="submit" style={styles.buttonPrimary}>สมัครสมาชิก</button>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>มีบัญชีอยู่แล้ว? <span style={styles.link} onClick={() => setCurrentView('login')}>เข้าสู่ระบบ</span></div>
      </form>
    );
  };

  // --- 2. จุดสำคัญ: รวม Return ให้เหลืออันเดียว โดยใช้ If-Else ช่วยเลือก ---
  
  // ถ้า State บอกว่าให้โชว์หน้า Login, Register หรือ Forgot ให้ใช้ Layout นี้
  if (currentView === 'login' || currentView === 'register' || currentView === 'forgot') {
    return (
      <div style={styles.page}>
        <Header />
        <div style={styles.main}>
          {currentView === 'login' && <LoginView />}
          {currentView === 'register' && <RegisterView />}
          {currentView === 'forgot' && (
            <div style={styles.card}>
              <h2 style={styles.title}>ลืมรหัสผ่าน?</h2>
              <input type="email" placeholder="อีเมล" style={styles.input} />
              <button style={styles.buttonPrimary}>รีเซ็ตรหัสผ่าน</button>
              <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
                <span style={styles.link} onClick={() => setCurrentView('login')}>กลับไปหน้าเข้าสู่ระบบ</span>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  // นอกเหนือจากนั้น (หน้า home, admin) ให้ใช้ Layout นี้
  return (
    <div className="app-main">
      {currentView === "home" && <HomeView />}
      {currentView === "admin" && <AdminView />}
      {(isAdding || editingItem) && <Modal data={editingItem} />}
    </div>
  );
}

// 3. ย้าย export มาไว้ล่างสุด
export default App;