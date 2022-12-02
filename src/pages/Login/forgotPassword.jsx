import { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockResetIcon from '@mui/icons-material/LockReset';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify'
import { Copyright } from '../../components/LayoutComponents/Copyright';
import { AuthContext } from '../../contexts/auth'
import { Loading } from '../../components/LayoutComponents/Loading';


const theme = createTheme();


export default function ForgotPassword() {

    const { resetPasswod, loadRegister } = useContext(AuthContext)
    
    const [email, setEmail] = useState('')
    


    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === '' ) {
            toast.error("Informe seu e-mail")
            return;
        }

        const data = {
           
            email,
           
        }
        //console.log(data)
        resetPasswod(data)



    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(http://localhost:3000/static/media/logo.c348e004ed178a7c2b62.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                             t.palette.grey[900],                        
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockResetIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Recuperar Senha
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                           

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                           

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                ENVIAR
                            </Button>

                            {!loadRegister &&
                            <Loading />}

                            <Grid container>
                                
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        {"Fazer Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}