import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

function Work(){

    return(
        <section className="work">
            <h2>Experiencia laboral</h2>
            <div className='timeline-work'>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="inherit">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        2024
                    </Typography>
                    <Typography>Desarrollo autonomo</Typography>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>

                <div>
                    <p>Holaa </p>
                </div>
            </div>
        </section>
    )
}

export default Work