import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title='Expense Tracker'
        variant='h5'
        subheader='Powered by speechly'
      />

      <CardContent>
        <Typography variant='h5'>Total Balance Rp. 999.999.999</Typography>
        <Typography
          variant='subtitle1'
          align='center'
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
          {/* {<InfoCard/>} */}
          Try saying: Add income of 100.000 rupiah in Category Salary for
          Tomorrow
        </Typography>

        <Divider />

        <Form />
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
