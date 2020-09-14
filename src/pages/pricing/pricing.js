import React from 'react';
import Layout from '../../components/layout/layout';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PricingPage = () => {

    const tiers = [
        {
          title: 'Basic',
          price: '100',
          description: ['Lunch', 'Drinks', 'Styx music', 'Sailing'],
          buttonText: 'Let me sail',
          buttonVariant: 'outlined',
        },
        {
          title: 'Premium',
          subheader: 'Most popular',
          price: '500',
          description: [
            'Basic items',
            'Top Shelf drinks',
            'Steer the boat for 30min',
            'Enjoy priority seating',
          ],
          buttonText: 'Sail away',
          buttonVariant: 'contained',
        },
        {
          title: 'Luxury',
          price: '1000',
          description: [
            'Private boat',
            'Top shelf drinks',
            'More rock music',
            'Upgraded food',
          ],
          buttonText: 'Living my best life',
          buttonVariant: 'outlined',
        },
      ];

  return (
      <Layout>
        <div className="pricing">
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      className="cardHeader"
                    />
                    <CardContent>
                      <div className="cardPricing">
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                      </div>
                      <ul>
                        {tier.description.map(line => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
      </Layout>
  );

};
  

export default PricingPage