// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path ? 'font-bold text-black' : 'text-gray-700';

    return (
        <div className="w-60 h-screen bg-gradient-to-b from-yellow-400 to-teal-600 text-white p-4 shadow-lg">
        <h1 className="text-xl font-bold mb-6">Menu</h1>
        <ul className="space-y-4">
            <li>
            <Link to="/" className={isActive('/')}>Dashboard</Link>
            </li>
            <li>
            <Link to="/search" className={isActive('/search')}>Search Scores</Link>
            </li>
            <li>
            <Link to="/reports" className={isActive('/reports')}>Reports</Link> {/* ← THÊM DÒNG NÀY */}
            </li>
            <li>
            <Link to="/settings" className={isActive('/settings')}>Settings</Link>
            </li>
        </ul>
        </div>
    );
}

export default Sidebar;
