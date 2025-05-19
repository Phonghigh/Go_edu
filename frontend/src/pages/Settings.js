import React, { useState } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
        // TODO: Apply theme switch logic here
        alert(`Theme changed to: ${e.target.value}`);
    };

    const handleChangePassword = () => {
        // TODO: Integrate with backend to change password
        alert(`Password changed from "${password}" to "${newPassword}"`);
        setPassword('');
        setNewPassword('');
    };

    return (
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>

        <div className="mb-6">
            <label className="block font-medium mb-1">Theme</label>
            <select
            value={theme}
            onChange={handleThemeChange}
            className="p-2 border rounded"
            >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            </select>
        </div>

        <div>
            <label className="block font-medium mb-1">Current Password</label>
            <input
            type="password"
            className="p-2 border rounded w-full mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <label className="block font-medium mb-1">New Password</label>
            <input
            type="password"
            className="p-2 border rounded w-full mb-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
            onClick={handleChangePassword}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
            Change Password
            </button>
        </div>
        </div>
    );
};

export default Settings;
