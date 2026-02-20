import { useState } from 'react';

export default function Login() {               // 1. สร้างที่เก็บข้อมูลที่พิมพ์ในช่องกรอก
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {            // 2. ฟังก์ชันนี้จะทำงานตอนกดปุ่ม "เข้าสู่ระบบ"
    e.preventDefault();                         // ป้องกันไม่ให้เว็บรีเฟรชตอนกด Submit

    try {
      const response = await fetch('http://localhost:3000/auth/login', {        // 3. ยิงข้อมูลไปหา Backend ที่เราทำไว้
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {            // 4. เช็คว่า Backend ตอบกลับมาว่าสำเร็จไหม
        const data = await response.json();
        
        localStorage.setItem('access_token', data.access_token);    // 🎉 สำเร็จ! เอา "คีย์การ์ด" (Token) ไปเก็บไว้ในกระเป๋าตังค์ (localStorage)
        
        alert('เข้าสู่ระบบสำเร็จ!');        // ตรงนี้เดี๋ยวเราค่อยเขียนโค้ดสั่งให้เด้งไปหน้า Profile หรือหน้าแรก
        
      } else {
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (error) {
      console.error('ระบบมีปัญหา:', error);
      alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
    }
  };

  // หน้าตา UI ของฟอร์ม Login
  return (
    <div style={{ padding: '50px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>เข้าสู่ระบบ Born2Code</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label>อีเมล:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>รหัสผ่าน:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          เข้าสู่ระบบ
        </button>

      </form>
    </div>
  );
}