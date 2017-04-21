import React from "react";
import ArticlePage from "../components/ArticlePage2";

import Image1 from "./MobilePayArticle-1.jpg";

export default class MobilePayArticle extends ArticlePage {
  renderContent() {
    return (
      <article className="article">
        <header className="article__header">
          <h1 className="article__title">Building a Mobile Payment Platform used by millions of users every day.</h1>
          <div className="article__divider"></div>
          <div className="article__focus">IOS / ANDROID / WINDOWS PHONE & DISTRIBUTED SYSTEMS</div>
        </header>

        <section className="article__section">
          The financial industry in the Nordic market is known for
          a strong infrastructure that all participating banks can
          benefit from. For instance the payment infrastructure is
          very well developed in the market and makes it possible
          for customers, consumers as well as companies, to
          easily exchange payments and money across accounts.
          The risk is that many financial services become commodities
          and make it difficult for banks to differentiate
          themselves in the market.

          <p>
            <img src={Image1} alt="" className="intext-image" />
          </p>
          <p>
            In order to become
            more distinct in the
            Nordic market Danske
            Bank decided to go
            solo with a mobile payment
            solution, MobilePay.
            The reason also
            being that it would be
            possible to launch a
            convenient solution fast
            and ahead of competition.
          </p>

          <p>
            The MobilePay app allows
            you to send and
            receive money via iPhone
            or Android mobile
            phones and the service is open for Danske Bank and
            non-Danske Bank customers. The user transfers the
            money by selecting the mobile number of the person,
            who is to receive the money. Without thinking about
            exchanging account or card numbers or using NemID
            (Danish sign-on procedure).
          </p>
          <p>
            Danske Bank already offers state-of-the-art mobile banking
            services for its current customers and with the newly released
            MobilePay solution, which is accessible for all customers, the
            bank is reaching out to a much broader audience.
          </p>
          <ul className="big-list">
            <li>Mobile Banking for iPad and Smartphones for Personal Banking</li>
            <li>Mobile Business for iPad and Smartphone for Business Banking</li>
            <li>Market Research and Equities iPad solution</li>
          </ul>
        </section>
        <section>
          <h2>MobilePay a huge success for Danske Bank</h2>
          <p>
            In May 2013 MobilePay was launched in Denmark. 10
            weeks after public launch the MobilePay solution was
            downloaded almost 300.000
            times. This highly rated mobile
            solution was developed as a cocreation
            project between Danske
            Bank, Trifork and In2media.
            Trifork being responsible for the
            UI implementation of the Mobile
            Apps and the technical infrastructure
            used for secure transactions.
          </p>

          <h2>Danske Bank thinks mobile first</h2>
          <p>
            Jesper Nielsen, Head of Danske Bank Business Development concludes:
            Thinking mobile first in our digital
            channels changes the way
            Danske Bank does business and
            forces us to focus on what our
            customers really want”, says Jesper Nielsen, Head of Business
            Development, Personal Banking.
          </p>
          <p>
            MobilePay is our first, but not last mobile payment solution.
            Short term, we focus on split-the-bill service, a Windows
            Phone version of MobilePay, and not least making
            MobilePay available in selected stores. Long term Danske
            Bank wants to be the leading provider of mobile banking
            and payments solution. We have to because mobile impacts
            our market logic and we have to defend our payment
            market and also create new income streams.
          </p>
          <p>
            With MobilePay we have succeeded in delivering a simple
            and innovative app that shortly after launch was rated no.
            1 in AppStore and received top ratings with 5 out of the
            5 stars.
          </p>
          <p>
            By now, two months after public launch,
            we have almost 300.000 unique users
            of which 48% are non-Danske Bank
            customers. We track all our new digital
            services to measure user satisfaction,
            adaption and utilization. By combining
            tracking data and collecting new ideas
            from our users we are able to prioritize
            our future investments in new services”,
            Jesper Nielsen concludes.
          </p>

        </section>
      </article>
    )
  }
}
