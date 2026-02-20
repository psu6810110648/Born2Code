import React from 'react';

function AdminDashboard() {
  return (
    <div className="dashboard-view">
      <h2 className="page-title">🚀 แผงควบคุม (Dashboard)</h2>
      
      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-icon">$</div>
          <div className="stat-data">
            <p>รายได้รวม</p>
            <h3>฿195,000</h3>
          </div>
        </div>

        <div className="stat-card green">
          <div className="stat-icon">👥</div>
          <div className="stat-data">
            <p>นักเรียนทั้งหมด</p>
            <h3>235 คน</h3>
          </div>
        </div>

        <div className="stat-card orange">
          <div className="stat-icon">📖</div>
          <div className="stat-data">
            <p>คอร์สที่เปิดสอน</p>
            <h3>2 คอร์ส</h3>
          </div>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>รายการสั่งซื้อล่าสุด</h3>
        <div className="empty-state">ไม่มีข้อมูลการสั่งซื้อใหม่</div>
      </div>
    </div>
  );
}

export default AdminDashboard;