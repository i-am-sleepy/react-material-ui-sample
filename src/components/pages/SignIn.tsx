import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import FormControlLabel from '@mui/material/FormControlLabel'
import CheckBox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme();

console.log(theme);


function SignIn() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8
        }}>
          <Avatar sx={{ m: 1, bgcolor:"secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant='h5'>Sign in</Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1 }}>
            <TextField
              type='email'
              name='email'
              label="Email Address"
              fullWidth
              required
              sx={{ mt:2, mb:1 }}
            />

            <TextField
              type='password'
              name='password'
              label="Password"
              fullWidth
              required
              sx={{ mt:2, mb:1 }}
            />

            <FormControlLabel
              control={<CheckBox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type='submit'
              variant='contained'
              fullWidth
              sx={{ mt: 3, mb:2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography variant='body2' color="text.secondary" align='center' sx={{ mt:8, mb: 4 }}>
          {`Copyright${' '}`}
          <Link href="#" color="inherit">Yout site</Link>
        </Typography>
      </Container>
    </ThemeProvider>
  )
}

export default SignIn