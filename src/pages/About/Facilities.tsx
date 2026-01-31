import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Building2, Wrench, Globe } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Facilities.scss';

const Facilities = () => {
  // Генеруємо масиви для імпорту зображень
  const [cabinetImages, setCabinetImages] = useState<string[]>([]);
  const [workshopImages, setWorkshopImages] = useState<string[]>([]);

  useEffect(() => {
    // Динамічний імпорт фото кабінету (10 фото)
    const loadCabinetImages = async () => {
      const images = [];
      for (let i = 1; i <= 10; i++) {
        try {
          const num = i.toString().padStart(2, '0');
          const img = await import(`../../assets/facilities/cabinet/cabinet-${num}.jpg`);
          images.push(img.default);
        } catch (error) {
          console.log(`Cabinet image ${i} not found`);
        }
      }
      setCabinetImages(images);
    };

    // Динамічний імпорт фото майстерні (12 фото)
    const loadWorkshopImages = async () => {
      const images = [];
      for (let i = 1; i <= 12; i++) {
        try {
          const num = i.toString().padStart(2, '0');
          const img = await import(`../../assets/facilities/workshop/workshop-${num}.jpg`);
          images.push(img.default);
        } catch (error) {
          console.log(`Workshop image ${i} not found`);
        }
      }
      setWorkshopImages(images);
    };

    loadCabinetImages();
    loadWorkshopImages();
  }, []);

  // Рандомна затримка для autoplay (3-7 секунд)
  const getRandomDelay = () => Math.floor(Math.random() * (7000 - 3000) + 3000);

  return (
    <div className="facilities-page">
      <div className="container">
        {/* Header Section */}
        <section className="page-header">
          <h1>Матеріально-технічна база</h1>
          <p className="subtitle">
            Сучасне обладнання та простір для професійної підготовки
          </p>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <div className="intro-card">
            <p>
              Матеріально-технічна база включає <strong>професійно-теоретичну</strong> і{' '}
              <strong>професійно-практичну підготовку</strong>, яка проводиться у кабінеті 
              технології зварювальних робіт та бляхарних виробів і зварювальній та бляхарній 
              майстернях.
            </p>
          </div>
        </section>

        {/* Cabinet Slider Section */}
        <section className="facility-section">
          <div className="section-header">
            <Building2 size={40} className="section-icon" />
            <div>
              <h2>Кабінет технології зварювальних робіт та бляхарних виробів</h2>
              <p>Сучасний навчальний простір для теоретичної підготовки</p>
            </div>
          </div>

          <div className="slider-container">
            {cabinetImages.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: getRandomDelay(),
                  disableOnInteraction: false,
                }}
                loop={true}
                className="facilities-swiper"
              >
                {cabinetImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-wrapper">
                      <img src={image} alt={`Кабінет ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="placeholder">
                <p>Завантажте фото кабінету в <code>src/assets/facilities/cabinet/</code></p>
                <p>Назви файлів: cabinet-01.jpg, cabinet-02.jpg ... cabinet-10.jpg</p>
              </div>
            )}
          </div>
        </section>

        {/* Workshop Slider Section */}
        <section className="facility-section">
          <div className="section-header">
            <Wrench size={40} className="section-icon" />
            <div>
              <h2>Зварювальна та бляхарна майстерні</h2>
              <p>Практичний простір з професійним обладнанням</p>
            </div>
          </div>

          <div className="slider-container">
            {workshopImages.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: getRandomDelay(),
                  disableOnInteraction: false,
                }}
                loop={true}
                className="facilities-swiper"
              >
                {workshopImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-wrapper">
                      <img src={image} alt={`Майстерня ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="placeholder">
                <p>Завантажте фото майстерні в <code>src/assets/facilities/workshop/</code></p>
                <p>Назви файлів: workshop-01.jpg, workshop-02.jpg ... workshop-12.jpg</p>
              </div>
            )}
          </div>
        </section>

        {/* 3D Tour Section */}
        <section className="tour-section">
          <div className="section-header">
            <Globe size={40} className="section-icon" />
            <div>
              <h2>3D-тур нашим коледжем</h2>
              <p>Віртуальна екскурсія простором навчального закладу</p>
            </div>
          </div>

          <div className="tour-container">
            <iframe
              src="https://tour.panoee.net/vsp-tfk-tntu/"
              width="100%"
              height="600"
              allowFullScreen
              title="3D тур Тернопільський фаховий коледж ТНТУ"
              className="tour-iframe"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
