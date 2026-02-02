import { FileText, Download, ExternalLink, Award } from 'lucide-react';
import './Thesis.scss';

const Thesis = () => {
  return (
    <div className="thesis-page">
      <div className="container">
        <section className="page-header">
          <h1>Методичні рекомендації до виконання дипломної роботи</h1>
          <p className="subtitle">
            Державна кваліфікаційна атестація випускників
          </p>
        </section>

        <section className="intro-section">
          <div className="intro-card">
            <Award size={48} className="intro-icon" />
            <div className="intro-content">
              <h2>Про державну кваліфікаційну атестацію</h2>
              <p>
                Державна кваліфікаційна атестація є завершальним етапом навчання та проводиться 
                з метою встановлення відповідності рівня професійної компетентності випускників 
                вимогам Державного стандарту професійно-технічної освіти.
              </p>
              <p>
                Атестація включає перевірку теоретичних знань та практичних умінь випускників, 
                необхідних для виконання професійних обов'язків за обраною кваліфікацією.
              </p>
            </div>
          </div>
        </section>

        <section className="documents-section">
          <h2>Методичні рекомендації</h2>
          <p className="section-description">
            Методичні рекомендації розроблені викладачами та майстрами виробничого навчання 
            методичної комісії зварювальних та слюсарних технологій відповідно до державних 
            стандартів професійно-технічної освіти. Документи містять детальні вимоги до 
            проведення атестації, критерії оцінювання та приклади екзаменаційних завдань.
          </p>

          <div className="documents-grid">
            {/* Електрогазозварник */}
            <div className="document-card">
              <div className="document-icon">
                <FileText size={48} />
              </div>
              <div className="document-content">
                <h3>Методичні рекомендації</h3>
                <p className="document-subtitle">
                  до проведення Державної кваліфікаційної атестації
                </p>
                <p className="document-profession">
                  Професія: <strong>«Електрогазозварник»</strong>
                </p>
                <p className="document-description">
                  Документ містить вимоги до виконання кваліфікаційної роботи, критерії оцінювання 
                  теоретичних знань та практичних навичок, приклади екзаменаційних білетів та 
                  практичних завдань для електрогазозварників 2-го та 3-го розрядів.
                </p>
                <a 
                  href="https://eguru1.tk.te.ua/pluginfile.php/130326/mod_resource/content/1/mnbv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  <Download size={20} />
                  Завантажити PDF
                  <ExternalLink size={16} className="external-icon" />
                </a>
                <p className="document-note">
                  <ExternalLink size={14} />
                  Документ розміщено в системі дистанційного навчання eGuru
                </p>
              </div>
            </div>

            {/* Бляхар */}
            <div className="document-card">
              <div className="document-icon">
                <FileText size={48} />
              </div>
              <div className="document-content">
                <h3>Методичні рекомендації</h3>
                <p className="document-subtitle">
                  до проведення Державної кваліфікаційної атестації
                </p>
                <p className="document-profession">
                  Професія: <strong>«Бляхар»</strong>
                </p>
                <p className="document-description">
                  Документ містить вимоги до виконання кваліфікаційної роботи, критерії оцінювання 
                  теоретичних знань та практичних навичок, приклади екзаменаційних білетів та 
                  практичних завдань для бляхарів 2-го та 3-го розрядів.
                </p>
                <a 
                  href="https://eguru1.tk.te.ua/pluginfile.php/130324/mod_resource/content/1/mnb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  <Download size={20} />
                  Завантажити PDF
                  <ExternalLink size={16} className="external-icon" />
                </a>
                <p className="document-note">
                  <ExternalLink size={14} />
                  Документ розміщено в системі дистанційного навчання eGuru
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>Важлива інформація для студентів</h3>
            <ul className="info-list">
              <li>
                <strong>Структура атестації:</strong> Державна кваліфікаційна атестація складається 
                з теоретичної та практичної частин
              </li>
              <li>
                <strong>Теоретична частина:</strong> Перевірка знань з професійно-теоретичної підготовки 
                відповідно до вимог кваліфікаційної характеристики
              </li>
              <li>
                <strong>Практична частина:</strong> Виконання кваліфікаційної пробної роботи, що відповідає 
                рівню кваліфікації, яку здобуває випускник
              </li>
              <li>
                <strong>Оцінювання:</strong> Результати атестації оцінюються за 12-бальною шкалою відповідно 
                до критеріїв, визначених у методичних рекомендаціях
              </li>
              <li>
                <strong>Документ про освіту:</strong> За результатами успішної атестації випускники отримують 
                диплом кваліфікованого робітника встановленого зразка
              </li>
            </ul>
          </div>
        </section>

        <section className="eguru-section">
          <div className="eguru-card">
            <h3>Система дистанційного навчання eGuru</h3>
            <p>
              Всі навчальні матеріали, методичні рекомендації та додаткові ресурси доступні 
              студентам через систему дистанційного навчання коледжу <strong>eGuru</strong>.
            </p>
            <a 
              href="https://eguru1.tk.te.ua"
              target="_blank"
              rel="noopener noreferrer"
              className="eguru-link"
            >
              <ExternalLink size={20} />
              Перейти до eGuru
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Thesis;