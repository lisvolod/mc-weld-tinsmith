import { GraduationCap, BookOpen, Building2, Briefcase, Award } from 'lucide-react';
import './Qualification.scss';

const Qualification = () => {
  const qualificationPlaces = [
    {
      icon: Building2,
      title: 'Львівський навчально-науковий центр професійної освіти',
      description: 'Відокремлений структурний підрозділ Національного педагогічного університету імені М.П. Драгоманова',
      type: 'institutional',
    },
    {
      icon: BookOpen,
      title: 'Підвищення кваліфікації у формі самоосвіти',
      description: 'Розробка підручників та посібників, які отримали Гриф МОНУ і видані за державні кошти та кошти країн Європейського союзу',
      type: 'self-education',
      books: [
        'Види з\'єднань',
        'Технологія механоскладальних робіт',
        'Технологія бляхарних робіт',
      ],
    },
    {
      icon: GraduationCap,
      title: 'НМЦ ПТО у Тернопільській області',
      description: 'Науково-методичний центр професійно-технічної освіти',
      type: 'institutional',
    },
    {
      icon: Award,
      title: 'Стажування на кафедрі "Зварювання" ТНТУ',
      description: 'Практичне стажування на базі Тернопільського національного технічного університету',
      type: 'internship',
    },
    {
      icon: Briefcase,
      title: 'ТОВ "Фроніус Україна"',
      description: 'Підвищення кваліфікації на виробничій базі, м. Стрий, Львівська область',
      type: 'industrial',
    },
  ];

  return (
    <div className="qualification-page">
      <div className="container">
        <section className="page-header">
          <h1>Підвищення кваліфікації</h1>
          <p className="subtitle">
            Постійний професійний розвиток викладачів та майстрів виробничого навчання
          </p>
        </section>

        <section className="intro-section">
          <div className="intro-card">
            <p>
              Члени методичної комісії систематично проходять підвищення кваліфікації на провідних 
              базах професійної освіти, у виробничих підприємствах та через активну самоосвіту.
            </p>
          </div>
        </section>

        <section className="places-section">
          <h2>Бази підвищення кваліфікації</h2>
          <div className="places-grid">
            {qualificationPlaces.map((place, index) => {
              const Icon = place.icon;
              return (
                <div key={index} className={`place-card ${place.type}`}>
                  <div className="place-icon">
                    <Icon size={40} />
                  </div>
                  <div className="place-content">
                    <h3>{place.title}</h3>
                    <p>{place.description}</p>
                    {place.books && (
                      <div className="books-list">
                        <strong>Розроблені підручники та посібники:</strong>
                        <ul>
                          {place.books.map((book, idx) => (
                            <li key={idx}>{book}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Переваги безперервного навчання</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-number">01</div>
              <h4>Сучасні методики</h4>
              <p>Впровадження новітніх педагогічних технологій у навчальний процес</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">02</div>
              <h4>Практичний досвід</h4>
              <p>Стажування на виробництві та обмін досвідом з професіоналами галузі</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">03</div>
              <h4>Методичні матеріали</h4>
              <p>Створення якісних підручників та посібників для студентів</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">04</div>
              <h4>Високий рівень</h4>
              <p>Підтримання професійної компетентності на найвищому рівні</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Qualification;