import logo from './images/microsoft-logo.png';
import './header.css';
import Hamburger from '../hamburger/Hamburger';
import loginImg from './images/login.png';
import reward from './images/trophy.png';

const Header = () => {
  const menus = [
    'Maps',
    'Translate',
    'News',
    'Travel',
    'MSN',
    'Start.gg',
    'Takelessons',
    'Health',
    'Office',
  ];
  return (
    <>
      <div className="header-wrap">
        <div className="header-part-1">
          <div className="logo">
            <img alt="any" src={logo} />
            <h5>Microsoft Bing</h5>
          </div>
          <div className="menus-wrap">
            <ul>
              <li>Images</li>
              <li className="video">Videos</li>
            </ul>
            <div className="dropdown">
              <button
                type="button"
                className="dropbtn"
                style={{ fontSize: '20px', marginBottom: '10px' }}
              >
                &#8230;
              </button>
              <div className="dropdown-content">
                {menus.map(menu => (
                  <a href="/">{menu}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="header-part-2">
          <div className="sign-in-wrap">
            <p style={{ color: 'white' }}>Sign in</p>
            <div className="sign-in-img">
              <img alt="any" src={loginImg} />
            </div>
          </div>

          <div className="rewards-wrap">
            <p style={{ color: 'white' }}>Rewards</p>
            <div className="rewards-img">
              <img alt="any" src={reward} />
            </div>
          </div>

          <Hamburger />
        </div>
      </div>
    </>
  );
};

export default Header;
