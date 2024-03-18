import React from 'react';
import './header.css'; // Import the CSS file here

const Header: React.FC = () => {
  return (
    <div className="header">
      <div>
        <select>
          <option value="world">World</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          {/* Add more types as needed */}
        </select>
      </div>
      <h1 className="appName">BrieflyBuzz</h1>
      <button>Login</button>
    </div>
  );
};

export default Header;
