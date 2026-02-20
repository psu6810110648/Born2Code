import React from 'react';

function Sidebar({ setCurrentPage, currentPage }) {
  const menuItems = [
    { id: 'dashboard', label: 'แผงควบคุม', icon: '📊' },
    { id: 'users', label: 'จัดการสมาชิก', icon: '👥' },
    { id: 'courses', label: 'คอร์สเรียน', icon: '📚' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">Born2Code</div>
      <nav className="menu">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            className={`menu-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.id)} // เมื่อกด จะเปลี่ยนหน้าทันที
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;