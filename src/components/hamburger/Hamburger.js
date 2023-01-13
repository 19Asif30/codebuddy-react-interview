import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoSettings } from 'react-icons/io5';
import { FaLock, FaClock, FaUserCog } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiMessageFill, RiHome4Fill } from 'react-icons/ri';
import { Switch } from 'antd';
import './hamburger.css';
import { useState } from 'react';

function Hamburger() {
  const [show, setShow] = useState(true);

  return (
    <DropdownButton align="end" title="&#9776;" id="dropdown-menu-align-end">
      <Dropdown.Item eventKey="1">
        <div className="ham-wrap">
          <IoSettings />
          <p>Settings</p>
        </div>
      </Dropdown.Item>

      <Dropdown.Item eventKey="2">
        <div className="ham-wrap">
          <FaLock />
          <p>Safe Search</p>
        </div>
      </Dropdown.Item>

      <Dropdown.Item eventKey="3">
        <div className="ham-wrap">
          <FaClock />
          <p>Search history</p>
        </div>
      </Dropdown.Item>

      <Dropdown.Item eventKey="4">
        <div className="ham-wrap">
          <FaUserCog />
          <p>My bing</p>
        </div>
      </Dropdown.Item>

      <Dropdown.Item eventKey="5">
        <div className="ham-wrap">
          <RiShieldKeyholeFill />
          <p>Privacy</p>
        </div>
      </Dropdown.Item>

      <Dropdown.Item eventKey="6">
        <div className="ham-wrap">
          <RiMessageFill />
          <p>Feedback</p>
        </div>
      </Dropdown.Item>

      <Dropdown.Item eventKey="7">
        <button type="button" className="ham-wrap" onClick={() => setShow(prev => !prev)}>
          <RiHome4Fill />
          <p>Customize your home page</p>
        </button>
      </Dropdown.Item>
      {show && (
        <>
          <Dropdown.Item eventKey="8">
            <div className="ham-wrap toggle-switch">
              <p style={{ marginLeft: '40px' }}>show menu bar</p>
              <Switch size="small" defaultChecked />
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="9">
            <div className="ham-wrap toggle-switch">
              <p style={{ marginLeft: '40px' }}>show news and interests</p>
              <Switch size="small" defaultChecked />
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="10">
            <div className="ham-wrap toggle-switch">
              <p style={{ marginLeft: '40px' }}>show homepage image</p>
              <Switch size="small" defaultChecked />
            </div>
          </Dropdown.Item>
        </>
      )}
    </DropdownButton>
  );
}

export default Hamburger;
