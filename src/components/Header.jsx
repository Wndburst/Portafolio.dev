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
          >
            Contacto
          </a>
        </li>
        <li>
          <a 
            href="/#experiencia" 
            className={activeSection === 'experiencia' ? 'active' : ''}
          >
            Experiencia
          </a>
        </li>
        <li>
          <a 
            href="/#proyectos" 
            className={activeSection === 'proyectos' ? 'active' : ''}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a 
            href="/#about" 
            className={activeSection === 'about' ? 'active' : ''}
          >
            Sobre mí
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Header;
