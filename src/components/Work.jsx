import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';

function Work(){

    return(
        <section id="experiencia" className="work">
            <h2>Experiencia laboral</h2>
            <div className='timeline-work'>
            <Timeline position="right">
                <TimelineItem>
                    <TimelineOppositeContent sx={{ flex: 0 }} />
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="inherit">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent 
                        sx={{ 
                            py: '12px', 
                            px: 2, 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' }, 
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            gap: '1rem',
                        }}
                    >
                        <div>
                            <Typography fontWeight={'bold'} color='rgb(152, 123, 233)' variant="h6" component="span">
                                Desarrollo autónomo
                            </Typography>
                            <Typography color='gray' >Actualidad</Typography>
                        </div>
                        
                        <Typography 
                            sx={{
                                textAlign: 'justify', 
                                marginTop: { xs: '8px', sm: 0 }, // Se agrega un margen en pantallas pequeñas
                            }}
                        >
                            He desarrollado distintas aplicaciones webs y móviles, 
                            siempre con un <b className="markyellow">enfoque en la resolución de problemas</b>.
                            <br/>Actualmente, estoy <b className="markyellow">aprendiendo AWS</b> para implementar soluciones en 
                            la nube que optimicen la escalabilidad y el rendimiento de mis proyectos.



                        </Typography>
                    </TimelineContent>
                    

                </TimelineItem>
            </Timeline>

            </div>
        </section>
    )
}

export default Work