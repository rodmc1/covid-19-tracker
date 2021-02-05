import React from 'react';
import { Grid } from '@material-ui/core';

import './Cards.css';
import CardDetail from './CardDetail';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return '...loading';
  }

  const cardData = {
    confirmed: {
      title: 'Infected',
      description: 'Number of active cases of COVID-19',
      value: confirmed.value,
      lastUpdate: lastUpdate
    },
    recovered: {
      title: 'Recovered',
      description: 'Number of recoveries from COVID-19',
      value: recovered.value,
      lastUpdate: lastUpdate
    },
    deaths: {
      title: 'Deaths',
      description: 'Number of deaths cause by COVID-19',
      value: deaths.value,
      lastUpdate: lastUpdate
    }
  };

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <CardDetail data={cardData.confirmed} />
        <CardDetail data={cardData.recovered} />
        <CardDetail data={cardData.deaths} />
        {/* <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths cause by COVID-19
            </Typography>
          </CardContent>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Cards;
