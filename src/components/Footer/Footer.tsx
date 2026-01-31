import { Link } from 'react-router-dom';
import { Building2, User } from 'lucide-react';
import logo from '../../assets/logos/logo_white.svg';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const stakeholders = [
    {
      company: 'ТОВ «Смарттехбуд»',
      director: 'Ковальчук Ярослав Олексійович',
      professions: 'Електрогазозварник, Зварник',
    },
    {
      company: 'ПП «Мрикало Володимир Миколайович»',
      director: 'Мрикало Володимир Миколайович',
      professions: 'Бляхар',
    },
  ];

  return (
    <footer className="footer">
      {/* Stakeholders Bar - Top Section */}
      <div className="stakeholders-bar">
        <div className="footer-container">
          <h4 className="stakeholders-title">
            <Building2 size={20} />
            Наші партнери-стейкхолдери
          </h4>
          <div className="stakeholders-row">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="stakeholder-card">
                <div className="stakeholder-header">
                  <Building2 size={18} />
                  <strong>{stakeholder.company}</strong>
                </div>
                <div className="stakeholder-body">
                  <div className="stakeholder-director">
                    <User size={14} />
                    <span>{stakeholder.director}</span>
                  </div>
                  <div className="stakeholder-professions">
                    {stakeholder.professions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section about">
              <img src={logo} alt="Логотип" className="footer-logo" />
              <h3>Методична комісія зварювальних та слюсарних технологій</h3>
              <p>Тернопільський фаховий коледж ТНТУ імені Івана Пулюя</p>
            </div>

            <div className="footer-section">
              <h4>Швидкі посилання</h4>
              <ul className="footer-links">
                <li><Link to="/about/team">Склад МК</Link></li>
                <li><Link to="/about/professions">Професії</Link></li>
                <li><Link to="/about/facilities">Матеріально-технічна база</Link></li>
                <li><Link to="/students/subjects">Предмети</Link></li>
                <li><Link to="/achievements">Наші досягнення</Link></li>
                <li><Link to="/contacts">Контакти</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Контакти</h4>
              <div className="contact-info">
                <p className="contact-person">
                  <strong>Голова методичної комісії:</strong><br />
                  Гуменюк Ігор Всеволодович
                </p>
                <p className="contact-title">
                  Заслужений працівник освіти України
                </p>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:igor_gumenuik@ukr.net" className="footer-email">
                    igor_gumenuik@ukr.net
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Методична комісія зварювальних та слюсарних технологій. Тернопільський фаховий коледж ТНТУ. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;