import { Link } from 'react-router-dom';
import { Briefcase, DollarSign, TrendingUp, GraduationCap, Flame, Shield, Wrench, BookOpen, CheckCircle, Award } from 'lucide-react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="hero-title">Створюй майбутнє своїми руками</h1>
            <p className="hero-subtitle">
              Професійна підготовка за напрямом зварювальних та слюсарних технологій
            </p>
            <div className="hero-buttons">
              <Link to="/about/professions" className="btn btn-secondary">
                Наші професії
              </Link>
              <Link to="/contacts" className="btn btn-outline">
                Зв'язатися з нами
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Why This Profession Section */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title text-center">Чому варто обрати зварювання?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Briefcase size={48} />
              </div>
              <h3>Високий попит</h3>
              <p>Зварники постійно затребувані в будівництві, машинобудуванні та ремонтних галузях</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={48} />
              </div>
              <h3>Гідна зарплата</h3>
              <p>Конкурентна заробітна плата та можливості додаткового заробітку</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={48} />
              </div>
              <h3>Кар'єрне зростання</h3>
              <p>Прогрес від учня до майстра-зварника та керівника підрозділу</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <GraduationCap size={48} />
              </div>
              <h3>Якісна освіта</h3>
              <p>Навчання у досвідчених викладачів на сучасному обладнанні</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professions Preview */}
      <section className="professions-preview bg-light">
        <div className="container">
          <h2 className="section-title text-center">Наші навчальні програми</h2>
          <div className="professions-grid">
            <div className="profession-card">
              <Flame size={40} className="profession-icon" />
              <h3>Електрогазозварник</h3>
              <p className="profession-code">Код: 7212</p>
              <p>Опануйте різні техніки зварювання, включаючи ручне дугове, плазмове та газове зварювання</p>
              <Link to="/about/professions" className="btn btn-primary">
                Дізнатися більше
              </Link>
            </div>
            <div className="profession-card">
              <Wrench size={40} className="profession-icon" />
              <h3>Бляхар</h3>
              <p className="profession-code">Код: 7213</p>
              <p>Робота з листовим металом, техніки різання та формування металевих виробів</p>
              <Link to="/about/professions" className="btn btn-primary">
                Дізнатися більше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title text-center">Чого ви навчитесь</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-number">01</span>
              <h4>Техніки зварювання</h4>
              <p>Ручне дугове, газове, плазмове та автоматичне зварювання</p>
            </div>
            <div className="skill-item">
              <span className="skill-number">02</span>
              <h4>Різання металу</h4>
              <p>Кисневе та плазмове різання в різних положеннях</p>
            </div>
            <div className="skill-item">
              <span className="skill-number">03</span>
              <h4>Робота з обладнанням</h4>
              <p>Експлуатація професійного зварювального та слюсарного обладнання</p>
            </div>
            <div className="skill-item">
              <span className="skill-number">04</span>
              <h4>Технічна документація</h4>
              <p>Читання та інтерпретація технічних креслень і специфікацій</p>
            </div>
            <div className="skill-item">
              <span className="skill-number">05</span>
              <h4>Контроль якості</h4>
              <p>Перевірка та забезпечення якості зварних з'єднань</p>
            </div>
            <div className="skill-item">
              <span className="skill-number">06</span>
              <h4>Техніка безпеки</h4>
              <p>Дотримання норм безпеки праці та промислових стандартів</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Готові розпочати свою кар'єру?</h2>
          <p>Приєднуйтесь до нашої програми професійної підготовки та будуйте своє майбутнє</p>
          <Link to="/contacts" className="btn btn-secondary">
            Зв'язатися з нами
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
