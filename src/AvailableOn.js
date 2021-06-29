import React , {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Freemotion from './freemotion.png';
import Proform from './proform.png';
import Nordictrack from './nordictrack.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color:'white',
      backgroundColor: '#2e3134',
      marginBottom: theme.spacing(8),
      borderRadius: '5px',
      },
    
  }));

const AvailableOn =(props)=>{
    const classes = useStyles();
    
    return(   

<Container  className={classes.root} >
          <Grid container spacing={4}>
               <Grid item xs={12} md={3}>
                <Typography variant="h6" component="h2"   >
                    AvailableOn
                </Typography>          
        </Grid>
            <Grid item xs={12} md={3}>
                   <Link className="tabColor appLink" to="Contact">
                     <div>
                        <img src={Nordictrack} />
                     </div>
                   </Link>
        </Grid>
        <Grid item xs={12} md={3}>
                    <Link className="tabColor appLink" to="About">
                        <div>
                            <img src={Proform} />
                        </div>
                    </Link>                            
        </Grid>
        <Grid item xs={12} md={3}>
                    <Link className="tabColor appLink" to="/">
                        <div>
                            <img src={Freemotion} />
                        </div>
                    </Link>
        </Grid>
      </Grid>
</Container>   

  );
}


export default AvailableOn;
