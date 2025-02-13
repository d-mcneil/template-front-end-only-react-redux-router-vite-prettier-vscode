import React from 'react';

export default ({ id = '', className = '', children }) => (
    <nav
        id={id || undefined}
        className={`nav-bar${className ? ` ${className}` : ''}`}
    >
        {children}
    </nav>
);
