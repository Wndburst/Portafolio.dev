import React from "react"

function Profile(){

    return(
        <section className="profile">
            <h1>Hola!, soy Thomas Riffo 🐺</h1>
            <p>Estudiante de último semestre de Ingeniería Civil Informática en
            la Universidad Católica del Maule. Con una sólida formación
            académica en desarrollo de software, bases de datos y trabajo en equipo, busco iniciar mi práctica profesional
            para aplicar y expandir mis conocimientos en un entorno
            laboral real. Mi motivación principal es adquirir experiencia
            práctica y contribuir activamente a proyectos desafiantes en
            el ámbito de la ingeniería informática</p>
            <div className='contact'>
                <a target="_blank" rel="noopener noreferrer" href="mailto: t.riffoaraya@gmail.com">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>
                 Contacto
                </a>    
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thomas-riffo-324344283/">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                Linkedin
                </a>    
            </div>
        </section>
        
    )

}

export default Profile