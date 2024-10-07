import { useEffect, useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('');

  // Función para actualizar la sección activa
  const handleScroll = () => {
    const sections = document.querySelectorAll('section'); // Suponiendo que tus secciones tienen la etiqueta <section>
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 200, // Ajusta este valor para tener más o menos espacio arriba
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li>
          <a 
            href="/#perfil" 
            className={activeSection === 'perfil' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#perfil')}
          >
            Contacto
          </a>
        </li>
        <li>
          <a 
            href="/#experiencia" 
            className={activeSection === 'experiencia' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#experiencia')}
          >
            Experiencia
          </a>
        </li>
        <li>
          <a 
            href="/#proyectos" 
            className={activeSection === 'proyectos' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#proyectos')}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a 
            href="/#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#about')}
          >
            Sobre mí
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Header;
