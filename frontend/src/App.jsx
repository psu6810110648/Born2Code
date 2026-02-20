import { useState } from 'react';
import logo from './assets/logo.png';

export default function App() {
  // สร้าง State เพื่อจำว่าตอนนี้อยู่หน้าไหน ('login', 'register', 'forgot')
  const [currentView, setCurrentView] = useState('login');

  // --- สไตล์พื้นฐาน (CSS) ---
  const styles = {
    page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' },
    header: { backgroundColor: '#0A1C39', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    footer: { backgroundColor: '#0A1C39', padding: '30px', color: 'white', fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginTop: 'auto' },
    main: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
    card: { backgroundColor: 'white', padding: '40px', borderRadius: '15px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
    title: { textAlign: 'center', marginBottom: '20px', color: '#333' },
    input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #A8A8A8', boxSizing: 'border-box' },
    buttonPrimary: { width: '100%', padding: '12px', backgroundColor: '#0A1C39', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    buttonGoogle: { width: '100%', padding: '12px', backgroundColor: 'white', color: '#333', border: '1px solid #A8A8A8', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' ,display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'},
    link: { color: '#0A1C39', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' },
    row: { display: 'flex', gap: '10px' },
    flexBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', marginBottom: '15px' }
  };

  // --- ส่วนประกอบ: แถบด้านบน (Header) ---
  const Header = () => (
    <div style={{
      backgroundColor: '#0a192f', 
      padding: '10px 30px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }}>
      {/* ฝั่งซ้าย: โลโก้ และ ชื่อ Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}> {/* เพิ่ม gap ให้ห่างกันนิดนึง */}
        <img 
          src={logo} 
          alt="Born2Code Logo" 
          style={{ height: '50px', objectFit: 'contain' }} 
        />
        {/* เพิ่มชื่อตรงนี้ครับ */}
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Born2Code</h2>
      </div>
      
      {/* ฝั่งขวา: เมนูไอคอน (เหมือนเดิม) */}
      <div style={{ display: 'flex', gap: '20px', fontSize: '18px', cursor: 'pointer' }}>
        <span>🔍</span>
        <span>🛒</span>
        <span>☰</span>
        <span>👤</span>
      </div>
    </div>
  );

  // --- ส่วนประกอบ: แถบด้านล่าง (Footer) ---
  const Footer = () => (
    <div style={{
      backgroundColor: '#0a192f', // สีพื้นหลังน้ำเงินเข้มตามรูป
      color: 'white',
      padding: '30px 50px',
      fontSize: '14px',
      marginTop: 'auto'
    }}>
      {/* ส่วนบน: โลโก้และสโลแกน */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#a5f3fc' }}>Born2Code</h2>
        <span style={{ fontSize: '16px' }}>“Born2Code ตัวช่วยที่จะทำให้คุณประสบความสำเร็จทางด้านคอมพิวเตอร์”</span>
      </div>

      {/* ส่วนล่าง: ข้อมูลติดต่อและเวลาทำการ */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', paddingLeft: '20px' }}>
        
        {/* คอลัมน์ซ้าย: ที่อยู่ และ เวลาเปิดทำการ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>ที่อยู่</p>
            <p style={{ margin: '0 0 2px 0', paddingLeft: '15px' }}>สถาบันบอร์นทูโค้ด เลขที่ 15 ถ.กาญจนวณิชย์</p>
            <p style={{ margin: 0, paddingLeft: '15px' }}>อ.หาดใหญ่ จ.สงขลา 90110</p>
          </div>
          <div>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>เวลาเปิดทำการ</p>
            <p style={{ margin: '0 0 2px 0', paddingLeft: '15px' }}>จ.-ศ. 16.00 - 21.00</p>
            <p style={{ margin: 0, paddingLeft: '15px' }}>ส.-อา. 8.00 - 21.00</p>
          </div>
        </div>

        {/* คอลัมน์ขวา: ช่องทางการติดต่อ */}
        <div style={{ minWidth: '250px' }}>
          <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>ช่องทางการติดต่อ</p>
          <p style={{ margin: '0 0 2px 0', paddingLeft: '15px' }}>เบอร์โทรศัพท์ 03 3333 3333</p>
          <p style={{ margin: 0, paddingLeft: '15px' }}>อีเมล Born2Code@coe.co.th</p>
        </div>

      </div>
    </div>
  );

  // --- หน้า 1: เข้าสู่ระบบ (Login) ---
  const LoginView = () => {
    // 1. สร้าง State เพื่อเก็บข้อมูลที่พิมพ์ในช่องอีเมลและรหัสผ่าน
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 2. ฟังก์ชันตรวจสอบการล็อกอิน (จะทำงานตอนกดปุ่ม)
    const handleLogin = async (e) => {
      e.preventDefault(); // ป้องกันเว็บโหลดใหม่ตอนกดเข้าสู่ระบบ

      try {
        // ยิงข้อมูลไปให้ Backend ตรวจสอบ
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          
          // 🎉 สำเร็จ! แอบเก็บ "คีย์การ์ด" (Token) ไว้ใน Browser
          localStorage.setItem('access_token', data.access_token);
          
          alert('✅ เข้าสู่ระบบสำเร็จ! (ได้ Token มาแล้ว)');
          
          // *หมายเหตุ: เดี๋ยวพอเราทำหน้า Profile เสร็จ เราจะสั่งให้มันเด้งไปหน้า Profile ตรงนี้นะครับ
          
        } else {
          alert('❌ อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ กรุณาเช็คว่า Backend รันอยู่หรือไม่');
      }
    };

    // 3. เปลี่ยน <div> เป็น <form> และผูกค่ากับ State
    return (
      <form onSubmit={handleLogin} style={styles.card}>
        <h2 style={styles.title}>เข้าสู่ระบบ</h2>
        
        {/* ผูกค่า value กับ onChange */}
        <input 
          type="email" 
          placeholder="อีเมล" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="รหัสผ่าน" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input} 
        />
        
        <div style={styles.flexBetween}>
          <label><input type="checkbox" /> จดจำฉันไว้</label>
          <span style={styles.link} onClick={() => setCurrentView('forgot')}>ลืมรหัสผ่าน?</span>
        </div>

        {/* ปุ่มนี้ต้องเป็น type="submit" */}
        <button type="submit" style={styles.buttonPrimary}>เข้าสู่ระบบ</button>
        
        <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '12px', color: '#888' }}>— หรือ —</div>
        
        {/* ⚠️ ปุ่ม Google ต้องใส่ type="button" เพื่อไม่ให้มันเผลอกด Submit ฟอร์ม */}
        <button type="button" style={styles.buttonGoogle}>
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          เข้าสู่ระบบด้วย Google
        </button>
        
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          ยังไม่มีบัญชีใช่ไหม? <span style={styles.link} onClick={() => setCurrentView('register')}>สมัครสมาชิก</span>
        </div>
      </form>
    );
  };

  // --- หน้า 2: สมัครสมาชิก (Register) ---
  const RegisterView = () => {
    // 1. สร้าง State ไว้เก็บข้อมูลที่ผู้ใช้พิมพ์ในช่องต่างๆ
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 2. ฟังก์ชันนี้จะทำงานตอนกดปุ่ม "สมัครสมาชิก"
    const handleRegister = async (e) => {
      e.preventDefault(); // ป้องกันไม่ให้เว็บรีเฟรชตัวเองตอนกด Submit

      // เช็คก่อนว่ารหัสผ่าน 2 ช่องตรงกันไหม
      if (password !== confirmPassword) {
        alert('รหัสผ่านไม่ตรงกันครับ กรุณาตรวจสอบอีกครั้ง');
        return;
      }

      try {
        // 3. ยิงข้อมูลไปหา Backend ของเรา (ระวัง: ต้องเปิด Server Backend ทิ้งไว้ด้วยนะ)
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber
          })
        });

        // 4. เช็คว่า Backend ตอบกลับมาว่าโอเคไหม
        if (response.ok) {
          alert('🎉 สมัครสมาชิกสำเร็จ! ไปหน้าเข้าสู่ระบบกันเลย');
          setCurrentView('login'); // สั่งให้หน้าเว็บเด้งกลับไปหน้า Login อัตโนมัติ
        } else {
          alert('เกิดข้อผิดพลาดในการสมัครสมาชิก (อีเมลนี้อาจมีคนใช้แล้ว)');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ กรุณาเช็คว่า Backend รันอยู่หรือไม่');
      }
    };

    // เปลี่ยน <div> เป็น <form> และใส่ onSubmit
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
        
        <div style={{ textAlign: 'center', fontSize: '12px', marginBottom: '15px' }}>
          <label><input type="checkbox" required /> ฉันยอมรับเงื่อนไขและข้อตกลงการใช้งาน</label>
        </div>

        {/* เปลี่ยน type ปุ่มเป็น submit */}
        <button type="submit" style={styles.buttonPrimary}>สมัครสมาชิก</button>
        
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          มีบัญชีอยู่แล้ว? <span style={styles.link} onClick={() => setCurrentView('login')}>เข้าสู่ระบบ</span>
        </div>
      </form>
    );
  };

  // --- ประกอบร่างทุกอย่างเข้าด้วยกัน ---
  return (
    <div style={styles.page}>
      <Header />
      
      <div style={styles.main}>
        {/* เช็คว่า currentView เป็นอะไร ก็ให้โชว์หน้านั้น */}
        {currentView === 'login' && <LoginView />}
        {currentView === 'register' && <RegisterView />}
        
        {/* สร้างหน้าลืมรหัสผ่านหลอกๆ ไว้ก่อน */}
        {currentView === 'forgot' && (
          <div style={styles.card}>
            <h2 style={styles.title}>ลืมรหัสผ่าน?</h2>
            <p style={{textAlign: 'center', fontSize: '14px'}}>กรุณากรอกอีเมลเพื่อรับลิงก์รีเซ็ตรหัสผ่าน</p>
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