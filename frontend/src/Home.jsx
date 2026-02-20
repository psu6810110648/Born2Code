function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className="hero-content">
          <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>Born2Code 🚀</h1>
          <p style={{fontSize: '1.2rem', opacity: 0.8}}>แหล่งเรียนรู้ด้านการเขียนโปรแกรมที่เน้นลงมือทำจริง</p>
          <button className="start-btn" style={{marginTop: '20px', padding: '12px 30px', borderRadius: '25px', border: 'none', backgroundColor: '#4A90E2', color: 'white', fontWeight: 'bold'}}>เริ่มเรียนเลย</button>
        </div>
        <div className="hero-image">
           {/* ใช้ Emoji หรือรูปภาพตัวละครตามหน้า 8 */}
           <span style={{fontSize: '150px'}}>🧑‍💻</span>
        </div>
      </div>

      <div className="course-list-header">
        <h2>คอร์สเรียนแนะนำ</h2>
      </div>
      {/* ส่วน Course Grid ใส่ตามเดิมได้เลย */}
    </div>
  );
}