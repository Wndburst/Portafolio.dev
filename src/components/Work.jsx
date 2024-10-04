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
                            gap: '3rem'
                        }}
                    >
                        <div>
                            <Typography color='rgb(255, 250, 180)' variant="h6" component="span">
                                Desarrollo autonomo
                            </Typography>
                            <Typography>2024</Typography>
                        </div>
                        <Typography 
                            sx={{ 
                                textAlign: 'justify', 
                                marginTop: { xs: '8px', sm: 0 } // Se agrega un margen en pantallas pequeñas
                            }}
                        >
                            Desarrollé un sistema de incidencias enfocado en una universidad utilizando el stack MERN,
                            implementando autenticación con JWT para diferentes roles ademas del diseño de un panel administrativo con gráficos 
                            interactivos para visualizar estadísticas.
                        </Typography>
                    </TimelineContent>

                </TimelineItem>
            </Timeline>

            </div>
        </section>
    )
}

export default Work