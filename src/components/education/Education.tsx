import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Box } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';

export default function Education() {
    return (
        <Fragment>
        <Box sx={{ maxWidth: 600, mt: 4, p: 2  }}>
            <Timeline position="right"> 
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: 'white' }} />
                        <TimelineConnector sx={{ bgcolor: 'white' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" sx={{ color: 'white' }}>2023</Typography>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Diplôme en Développement Web
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                            J'ai terminé mon diplôme en développement web avec une spécialisation en React et MERN stack.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: 'white' }} />
                        <TimelineConnector sx={{ bgcolor: 'white' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" sx={{ color: 'white' }}>2022</Typography>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Stage chez Super U
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                            J'ai travaillé sur la gestion des produits et le développement d'une plateforme de vente en ligne.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: 'white' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" sx={{ color: 'white' }}>2021</Typography>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Certification MERN Stack
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                            J'ai obtenu une certification en MERN Stack après avoir terminé un programme de formation intensif.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
        </Fragment>
    );
}
