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
          title: 'Haystack Open Source',
          price: 'Free',
          description: ['bla', 'bla', 'bla', 'bla'],
          buttonText: 'Get Started',
          buttonVariant: 'contained',
        },
        {
          title: 'Neural Search',
          subheader: 'Starter',
          price: '500€ per month',
          description: [
            '2,000 pages or 10 Documents',
            '100 requests per day',
          ],
          buttonText: 'Free Trial',
          buttonVariant: 'contained',
        },
        {
          title: 'Neural Search',
          subheader: 'Basic',
          price: '1000€ per month',
          description: [
            '20,000 pages or 100 Documents',
            '1000 requests per day',
          ],
          buttonText: 'Contact Us',
          buttonVariant: 'contained',
        },
        {
          title: 'Neural Search',
          subheader: 'Premium',
          price: '5000€ per month',
          description: [
            '400,000 pages or 2000 Documents',
            '5000 requests per day',
          ],
          buttonText: 'Contact Us',
          buttonVariant: 'contained',
        },
        {
          title: 'Neural Search',
          subheader: 'Enterprise',
          price: '1000€ per month',
          description: [
            'Custom',
          ],
          buttonText: 'Contact Us',
          buttonVariant: 'contained',
        },
      ];

  return (
      <Layout>
        <div className="pricing">
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} md={4}>
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