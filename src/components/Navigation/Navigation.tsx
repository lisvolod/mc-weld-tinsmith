import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo_white.svg';
import './Navigation.scss';

interface DropdownItem {
  title: string;
  path: string;
}

interface NavItem {
  title: string;
  path?: string;
  dropdown?: DropdownItem[];
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      title: 'Про комісію',
      dropdown: [
        { title: 'Склад МК', path: '/about/team' },
        { title: 'Професії', path: '/about/professions' },
        { title: 'Матеріально-технічна база', path: '/about/facilities' },
        { title: 'Підвищення кваліфікації', path: '/about/qualification' },
      ],
    },
    {
      title: 'Учню',
      dropdown: [
        { title: 'Предмети', path: '/students/subjects' },
        { title: 'Методичні рекомендації до ДР', path: '/students/thesis' },
        // { title: 'Професійно-практична підготовка', path: '/students/practice' },
      ],
    },
    {
      title: 'Наші досягнення',
      path: '/achievements',
    },
    {
      title: 'Контакти',
      path: '/contacts',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="navigation">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="МК Зварювальних та слюсарних технологій" />
          <span className="logo-text">Зварювальні та слюсарні технології</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <li
              key={item.title}
              className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
            >
              {item.dropdown ? (
                <>
                  <span className="nav-link">{item.title}</span>
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.path} className="dropdown-item">
                        <NavLink
                          to={dropdownItem.path}
                          className={({ isActive }) =>
                            isActive ? 'dropdown-link active' : 'dropdown-link'
                          }
                        >
                          {dropdownItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path!}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {item.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu-mobile">
            {navItems.map((item) => (
              <li key={item.title} className="nav-item-mobile">
                {item.dropdown ? (
                  <>
                    <button
                      className={`nav-link-mobile ${
                        activeDropdown === item.title ? 'active' : ''
                      }`}
                      onClick={() => handleDropdownToggle(item.title)}
                    >
                      {item.title}
                      <span className="dropdown-arrow">▼</span>
                    </button>
                    <ul
                      className={`dropdown-menu-mobile ${
                        activeDropdown === item.title ? 'open' : ''
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.path}>
                          <NavLink
                            to={dropdownItem.path}
                            className="dropdown-link-mobile"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path!}
                    className="nav-link-mobile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
