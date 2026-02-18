import { Container, Grid, Box, Typography } from '@mui/material';
import './Hero.css';
import profileImage from './assets/Gemini_Generated_Image_n5wl6en5wl6en5wl.png';
import snowLogo from './assets/snow-logo.avif';

export default function Hero() {
    return (
        <Box className="hero-container">
            <Container maxWidth="lg" sx={{ height: '100%' }}>
                <Grid container spacing={4} sx={{ height: '100%', alignItems: 'center' }}>
                    {/* Left Column - 70% */}
                    {/*Adjusted the grid item to take up 70% of the width by adding size={8.4} this will take 8.4 out of 12 columns which is 70% of the width*/}
                    <Grid item xs={12} md={8.4} lg={8.4} size={8.4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: 'monospace', fontSize: '3.5rem' }}>
                            Hi There 👋, <br></br>
                            I'm Bhavani Shankar
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 0 }}>
                            <img src={snowLogo} alt="ServiceNow Logo" style={{ height: '2.5rem', width: 'auto', marginTop: '-5px' }} /> Developer and Implementation specialist.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'monospace' }}>
                            Amateur technical blogger and content creator.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'monospace' }}>
                            Find more about me below 👇
                        </Typography>
                    </Grid>
                    {/* Right Column - 30% */}
                    <Grid item xs={12} md={3.6} size={3.6} lg={3.6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={profileImage}
                            alt="Profile"
                            sx={{
                                width: '100%',
                                maxWidth: '300px',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}