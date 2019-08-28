import React, { Component } from 'react';

import sites from '../assets/images/sites.jpg';
import analytics from '../assets/images/analytics.jpg';
import sync from '../assets/images/sync.jpg';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="hero">
          <h1 className="jumbo">Event Farm &times; Nike</h1>
        </div>

        <section className="intro">
          <h2>Event Farm is experience marketing.</h2>
          <p>
            Event Farm is an experiential marketing platform used by organizations to execute events, increase attendee engagement and drive business outcomes.  We combine our expertise and suite of event technologies - including registration, wearable tech and engagement and experiential applications  to make your events and experiential marketing efforts innovative and successful.
          </p>

          <p>
            We are a passionate group of well seasoned event pros and experiential technologists who proudly make products in our Los Angeles, CA and Washington, DC offices.
          </p>
        </section>

        <div className="row">
          <div className="row__element row__element--content-centered">
            <span className="icon icon--reg"></span>
            <h5>Registration</h5>
          </div>
          <div className="row__element row__element--content-centered">
            <span className="icon icon--engage"></span>
            <h5>Engagement</h5>
          </div>
          <div className="row__element row__element--content-centered">
            <span className="icon icon--exp"></span>
            <h5>Experiential</h5>
          </div>
          <div className="row__element row__element--content-centered">
            <span className="icon icon--ana"></span>
            <h5>Analytics</h5>
          </div>
        </div>

        <section className="registration">
          <h3>Registration that's rock solid &amp; packed with features</h3>
          <p>Event Farm's registration platform includes our best-in-class free check-in solution, of course, but it also includes dozens of other features to make your event planning life easier.</p>
        </section>

        <div className="cards">

          <div className="card">
            <img src={sites} alt="Responsive website builder" />

            <figure className="caption">
              <h5>Site design</h5>
              <h4>Build a beautiful responsive registration site with just a few clicks in Event Farm Canvas. <strong>No code required, beautiful brand-supporting templates included.</strong></h4>
            </figure>
          </div>

          <div className="card">
            <img src={analytics} alt="Understand why your event strategy is working" />

            <figure className="caption">
              <h5>Analytics</h5>
              <h4>Building an event strategy is the first step. Growing that strategy comes next. <strong>Simple analytics</strong> help you understand the <strong>return on your investment</strong>, so you know <strong>what to grow, and why.</strong></h4>
            </figure>
          </div>

          <div className="card">
            <img src={sync} alt="Sync data from Event Farm to all your other tools" />

            <figure className="caption">
              <h5>Sync data</h5>
              <h4>Push check-in alerts to Slack. Automatically send attendee surveys through SurveyMonkey. Create event walk-ins as new leads in Marketo. Leverage a robust Salesforce integration to understand event impact on your bottom line — and more. <strong>Event Farm works with over 1,000 apps</strong> to help you seamlessly run smarter event campaigns.</h4>
            </figure>
          </div>

        </div>

      </div>
    )
  }
}

export default Home
