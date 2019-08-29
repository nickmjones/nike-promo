import React, { Component } from 'react'
import Card from '../components/Card'
import LazyLoad from 'react-lazyload'

import sites from '../assets/images/sites.jpg'
import analytics from '../assets/images/analytics.jpg'
import sync from '../assets/images/sync.jpg'
import chat from '../assets/images/chat.jpg'
import nfc from '../assets/images/nfc.jpg'

class Home extends Component {
  render() {
    return(
      <div>
        <div className="hero">
          <h1 className="jumbo">Event Farm &times; Nike</h1>
        </div>

        <section className="intro">
          <h4>Combining the best experiential marketing platform and best sports apparel brand ever&mdash;that's Event Farm and Nike.</h4>
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
          <LazyLoad>
            <Card>
              <img src={sites} alt="Responsive event websites" />
              <figure className="caption">
                <h5>Site design</h5>
                <h4>Build a beautiful responsive registration site with just a few clicks in Event Farm Canvas. <strong>No code required, beautiful brand-supporting templates included.</strong></h4>
              </figure>
            </Card>
          </LazyLoad>

          <LazyLoad>
            <Card>
              <img src={analytics} alt="Understand why your event strategy is working" />
              <figure className="caption">
                <h5>Analytics</h5>
                <h4>Building an event strategy is the first step. Growing that strategy comes next. <strong>Simple analytics</strong> help you understand the <strong>return on your investment</strong>, so you know <strong>what to grow, and why.</strong></h4>
              </figure>
            </Card>
          </LazyLoad>

          <LazyLoad>
            <Card>
              <img src={sync} alt="Sync data from Event Farm to all your other tools" />
              <figure className="caption">
                <h5>Sync data</h5>
                <h4>Push check-in alerts to Slack. Automatically send attendee surveys through SurveyMonkey. Create event walk-ins as new leads in Marketo. Leverage a robust Salesforce integration to understand event impact on your bottom line — and more. <strong>Event Farm works with over 1,000 apps</strong> to help you seamlessly run smarter event campaigns.</h4>
              </figure>
            </Card>
          </LazyLoad>

          <section className="efx">
            <h3>Create unforgettable experiences that go beyond software with Event Farm EFx</h3>
            <p>Event Farm EFx adds a layer of real-world experiences for guests, all made possible through wearable NFC technology. EFx also allows you to act on the data your guests have provided during registration, to create even more delightful experiences that go beyond software. EFx lets you touch guests and provide an experience that's almost like magic.</p>
          </section>

          <div className="cards">
            <LazyLoad>
              <Card>
                <img src={chat} alt="Text your attendees" />
                <figure className="caption">
                  <h5>Texting</h5>
                  <h4>Email is for later, texting is for now. Texting with EFx adds a new layer of interaction—from <strong>late breaking news to automatic team-building for ice breakers.</strong></h4>
                </figure>
              </Card>
            </LazyLoad>

            <LazyLoad>
              <Card>
                <img src={nfc} alt="NFC wearables for access and more" />
                <figure className="caption">
                  <h5>Wearables</h5>
                  <h4>NFC support in EFx makes amazing things possible—like <strong>access control without paper tickets, product pickup (think goodie bags, drinks and food) without asking 'what's your name?', even delivery of photos or links directly to guests phones.</strong></h4>
                </figure>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
