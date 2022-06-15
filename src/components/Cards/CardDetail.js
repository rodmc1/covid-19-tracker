import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const CardDetail = ({ data: { title, description, value, lastUpdate } }) => {
  const gridClass = title.toLowerCase();

  if (!lastUpdate) {
    return '';
  }

  return (
    <Grid item component={Card} xs={12} md={3} className={`card ${gridClass}`}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={3} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardDetail;
