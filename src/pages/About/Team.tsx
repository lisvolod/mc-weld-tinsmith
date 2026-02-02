import { FileText, ExternalLink, Award } from 'lucide-react';
import mcPresentationPDF from '../../assets/presentations/welding_and_metalworking_technologies_MC.pdf';
import './Team.scss';

const Team = () => {
  const teamMembers = [
    {
      name: 'Гуменюк Ігор Всеволодович',
      position: 'Голова методичної комісії, Заслужений працівник освіти України',
      category: 'Викладач вищої категорії, викладач-методист',
    },
    {
      name: 'Кутко Оксана Михайлівна',
      position: 'Викладач',
      category: 'Викладач вищої категорії, викладач-методист',
    },
    {
      name: 'Батик Микола Степанович',
      position: 'Майстер виробничого навчання',
      category: 'Перша категорія',
    },
    {
      name: 'Чайківський Володимир Павлович',
      position: 'Майстер виробничого навчання',
      category: 'Перша категорія',
    },
    {
      name: 'Гаврилюк Володимир Ярославович',
      position: 'Майстер виробничого навчання',
      category: 'Друга категорія',
    },
    {
      name: 'Баран Василь Романович',
      position: 'Майстер виробничого навчання',
      category: '',
    },
  ];

  const directions = [
    'Організація вивчення нормативних документів та інструктивних матеріалів з питань освіти',
    'Вивчення і аналіз навчально-програмної документації, внесення необхідних змін і доповнень до навчальних програм',
    'Систематичне вивчення та аналіз підручників і посібників з фаху',
    'Вивчення та використання на практиці сучасних досягнень психолого-педагогічної науки та педагогічного досвіду',
    'Вивчення та аналіз стану викладання, якості навчальних досягнень',
    'Надання практичної допомоги в оволодінні сучасними методами навчання і виховання, підвищення фахової майстерності та психолого-педагогічної підготовки педагогічних працівників',
    'Систематичне інформаційне забезпечення інженерно-педагогічних працівників з питань педагогіки, психології, фахових дисциплін',
    'Сприяння виробленню у педагогів умінь і навичок самостійної роботи з метою безперервного підвищення своєї кваліфікації та вдосконалення педагогічної майстерності',
  ];

  return (
    <div className="team-page">
      <div className="container">
        <section className="page-header">
          <h1>Склад методичної комісії</h1>
          <p className="subtitle">Зварювальні та слюсарні технології</p>
        </section>

        <section className="mission-section">
          <div className="mission-card">
            <h2>Наша місія</h2>
            <p>
              "Створення організаційно-педагогічних та психологічних умов для професійного 
              творчого зростання учасників освітнього процесу"
            </p>
          </div>
        </section>

        <section className="team-section">
          <h2>Члени комісії</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  {member.category && <p className="category">{member.category}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Presentation Section */}
        <section className="presentation-section">
          <div className="presentation-card">
            <Award size={48} className="presentation-icon" />
            <div className="presentation-content">
              <h3>Презентація методичної комісії</h3>
              <p>
                Детальна презентація про діяльність методичної комісії зварювальних 
                та слюсарних технологій, досягнення, матеріально-технічну базу та 
                результати роботи
              </p>
              <a 
                href={mcPresentationPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="presentation-link"
              >
                <FileText size={20} />
                Переглянути презентацію
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="directions-section">
          <h2>Основні напрямки роботи</h2>
          <div className="directions-list">
            {directions.map((direction, index) => (
              <div key={index} className="direction-item">
                <span className="direction-number">{index + 1}</span>
                <p>{direction}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;