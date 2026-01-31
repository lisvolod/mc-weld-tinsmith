import { Mail, GraduationCap, Award } from 'lucide-react';
import gumenyukPhoto from '../../assets/contacts/contact-01.jpg';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="container">
        <section className="page-header">
          <h1>Контакти</h1>
          <p className="subtitle">
            Зв'яжіться з головою методичної комісії зварювальних та слюсарних технологій
          </p>
        </section>

        {/* Main Contact Card */}
        <section className="contact-main">
          <div className="contact-card">
            <div className="contact-avatar">
              <img src={gumenyukPhoto} alt="Гуменюк Ігор Всеволодович" />
            </div>
            
            <div className="contact-info">
              <h2>Гуменюк Ігор Всеволодович</h2>
              <p className="contact-position">
                <GraduationCap size={20} className="inline-icon" />
                Голова методичної комісії зварювальних та слюсарних технологій
              </p>
              <p className="contact-title">
                <Award size={20} className="inline-icon" />
                Заслужений працівник освіти України
              </p>
            </div>

            <div className="contact-email">
              <Mail size={32} className="email-icon" />
              <div>
                <span className="email-label">Електронна пошта:</span>
                <a href="mailto:igor_gumenuik@ukr.net" className="email-link">
                  igor_gumenuik@ukr.net
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <h3>З питань навчання</h3>
              <p>
                Навчальні програми, предмети, дистанційне навчання, методичні матеріали
              </p>
            </div>
            <div className="info-card">
              <h3>З питань вступу</h3>
              <p>
                Умови вступу, професії, кваліфікації, документи
              </p>
            </div>
            <div className="info-card">
              <h3>Співпраця</h3>
              <p>
                Партнерство з підприємствами, стажування, практика студентів
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-card">
            <h3>Маєте питання?</h3>
            <p>
              Напишіть нам електронною поштою, і ми з радістю відповімо на всі ваші запитання
            </p>
            <a href="mailto:igor_gumenuik@ukr.net" className="btn btn-primary">
              <Mail size={20} />
              Написати листа
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;