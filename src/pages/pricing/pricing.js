import React from 'react';
import Layout from '../../components/layout/layout';

import './pricing.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Products from "../../components/landing-page/products";
import Button from "../../components/landing-page/button";

const PricingPage = () => {

    const tiers = [
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
          buttonText: 'Free Trial',
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
          buttonText: 'Free Trial',
          buttonVariant: 'contained',
        }
      ];

  return (
      <Layout>
        <div className="pricing-products">
        <Products />
        </div>
        <div className="pricing">
        <h2>Haystack Hub Pricing</h2>
        <Container component="main" maxWidth="xl">
            <Grid container spacing={5}>
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} md={4}>
                    <Card className="card-item">
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
                            {tier.price}
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
                      <CardActions className="card-action">
                        <Button className="item-button" label={tier.buttonText} to={tier.to}/>
                      </CardActions>
                    </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <div className="product-enterprise">
            <div>
              <h2>Neural Search Enterprise</h2>
              <h4>If the options above do not fit to your business needs, feel free to contact us</h4>
            </div>
            <Button className="item-button" label="Contanct Us" />
          </div>
          </div>
      </Layout>
  );

};
  

export default PricingPage