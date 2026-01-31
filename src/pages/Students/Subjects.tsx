import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import './Subjects.scss';

interface Subject {
  title: string;
  url: string;
  category: 'specialized' | 'safety';
}

const Subjects = () => {
  const subjects: Subject[] = [
    {
      title: 'Обладнання та технології зварювальних робіт',
      url: 'https://eguru1.tk.te.ua/course/view.php?id=686',
      category: 'specialized',
    },
    {
      title: 'Технологія бляхарних робіт',
      url: 'https://eguru1.tk.te.ua/course/view.php?id=703',
      category: 'specialized',
    },
    {
      title: 'Основи зварювання плавленням та термічного різання металів',
      url: 'https://eguru1.tk.te.ua/course/view.php?id=686',
      category: 'specialized',
    },
    {
      title: 'Контроль та забезпечення якості зварювальних робіт',
      url: 'https://eguru1.tk.te.ua/course/view.php?id=709',
      category: 'specialized',
    },
    {
      title: 'Ручне дугове зварювання покритим електродом (Е1)',
      url: 'https://eguru1.tk.te.ua/course/view.php?id=686',
      category: 'specialized',
    },
    {
      title: 'Механізоване дугове зварювання плавким металевим електродом (Е2)',
      url: 'https://eguru1.tk.te.ua/course/view.php?id=686',
      category: 'specialized',
    },
    {
      title: 'Охорона праці',
      url: 'https://eguru1.tk.te.ua/enrol/index.php?id=885',
      category: 'safety',
    },
    {
      title: 'Охорона праці та основи енергоефективності',
      url: 'https://eguru1.tk.te.ua/enrol/index.php?id=1449',
      category: 'safety',
    },
  ];

  const specializedSubjects = subjects.filter((s) => s.category === 'specialized');
  const safetySubjects = subjects.filter((s) => s.category === 'safety');

  return (
    <div className="subjects-page">
      <div className="container">
        <section className="page-header">
          <h1>Навчальні дисципліни</h1>
          <p className="subtitle">
            Комплексна програма професійної підготовки майбутніх фахівців
          </p>
        </section>

        <section className="intro-section">
          <div className="intro-grid">
            <div className="intro-card">
              <GraduationCap size={48} className="intro-icon" />
              <h3>Що вивчають студенти?</h3>
              <p>
                Навчальна програма включає теоретичну і практичну підготовку з основних напрямків 
                зварювальних та слюсарних технологій. Студенти опановують сучасні методи зварювання, 
                вивчають обладнання, технології обробки металів та контроль якості робіт.
              </p>
            </div>

            <div className="intro-card">
              <BookOpen size={48} className="intro-icon" />
              <h3>Дистанційне навчання</h3>
              <p>
                Всі навчальні матеріали, методичні вказівки та завдання доступні на платформі 
                дистанційного навчання <strong>eGuru</strong>. Студенти мають цілодобовий доступ 
                до лекцій, тестів та додаткових матеріалів для самостійного опрацювання.
              </p>
            </div>
          </div>
        </section>

        <section className="subjects-section">
          <h2>Спеціалізовані дисципліни</h2>
          <p className="section-description">
            Професійна підготовка з технологій зварювання та обробки металів
          </p>

          <div className="subjects-list">
            {specializedSubjects.map((subject, index) => (
              <a
                key={index}
                href={subject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="subject-card specialized"
              >
                <div className="subject-content">
                  <h3>{subject.title}</h3>
                  <span className="subject-platform">Платформа eGuru</span>
                </div>
                <ExternalLink size={24} className="subject-icon" />
              </a>
            ))}
          </div>
        </section>

        <section className="subjects-section">
          <h2>Охорона праці та безпека</h2>
          <p className="section-description">
            Дисципліни з безпеки праці та енергоефективності
          </p>

          <div className="subjects-list">
            {safetySubjects.map((subject, index) => (
              <a
                key={index}
                href={subject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="subject-card safety"
              >
                <div className="subject-content">
                  <h3>{subject.title}</h3>
                  <span className="subject-platform">Платформа eGuru</span>
                </div>
                <ExternalLink size={24} className="subject-icon" />
              </a>
            ))}
          </div>
        </section>

        <section className="platform-info">
          <div className="platform-card">
            <h3>Про платформу eGuru</h3>
            <p>
              <strong>eGuru</strong> — це система дистанційного навчання на базі Moodle, 
              яка забезпечує студентам доступ до навчальних матеріалів, можливість виконання 
              завдань онлайн, проходження тестування та комунікацію з викладачами.
            </p>
            <div className="platform-features">
              <div className="feature">✓ Лекційні матеріали та презентації</div>
              <div className="feature">✓ Інтерактивні тести та завдання</div>
              <div className="feature">✓ Методичні вказівки та посібники</div>
              <div className="feature">✓ Зворотний зв'язок з викладачами</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Subjects;