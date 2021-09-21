import React from 'react'
import { Grid,Paper,  Button } from '@material-ui/core'
import loginImage from '../Images/loginImage.svg';

const LoginPage=()=>{

    const paperStyle={align:'left',padding :50,height:450,width:350, margin:"12% 12%", backgroundcolor:"#E5E5E5"}
    const btnstyle={margin:'10px 0'}
    const gridStyle={backgroundImage: `url(${loginImage})`}
    return(
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' >
                    <h1>Write-Out</h1>
                </Grid>
                 <Grid align='justify' >
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                </Grid>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Continue with Google</Button>
            </Paper>
         </Grid>   
       
    )
}

export default LoginPage;