import React from 'react';

function Sidebar({ setCurrentPage, currentPage }) {
  const menuItems = [
    { id: 'dashboard', label: '📊 แผงควบคุม' },
    { id: 'users', label: '👥 จัดการสมาชิก' },
    { id: 'courses', label: '📚 คอร์สเรียน' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2 style={{color: '#3b82f6', marginBottom: '30px', textAlign: 'center'}}>Born2Code</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.id)}
            style={{
              padding: '15px 20px',
              cursor: 'pointer',
              borderRadius: '10px',
              marginBottom: '5px',
              transition: '0.3s'
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;