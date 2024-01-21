import React, { useState } from 'react';

function FAQ() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column text-center">
            <NavItem onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
              Home
            </NavItem>
            <NavItem onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
              Profile
            </NavItem>
            <NavItem onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
              Messages
            </NavItem>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content">
            <TabPane open={verticalActive === 'tab1'}>Home content</TabPane>
            <TabPane open={verticalActive === 'tab2'}>Profile content</TabPane>
            <TabPane open={verticalActive === 'tab3'}>Messages content</TabPane>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ onClick, active, children }) {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      <a href="#" className="nav-link" onClick={onClick}>
        {children}
      </a>
    </div>
  );
}

function TabPane({ open, children }) {
  return <div className={`tab-pane ${open ? 'active' : ''}`}>{children}</div>;
}

export default FAQ;
