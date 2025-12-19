import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/machinelearning.css';

export default function MachineLearning(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Continuous Machine Learning, Scalable Deep Learning - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite Machine Learning is a set of simple and efficient APIs to enable continuous learning. It relies on Ignite's multi-tier storage that bring massive scalability for machine learning and deep learning tasks."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          property="og:title"
          content="Continuous Machine Learning, Scalable Deep Learning - Apache Ignite"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite Machine Learning is a set of simple and efficient APIs to enable continuous learning. It relies on Ignite's multi-tier storage that bring massive scalability for machine learning and deep learning tasks."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">
              Machine Learning
              <br /> APIs
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Continuously train, execute and update your machine learning
              <br /> models at scale and in real time
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/ignite2/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--machine"
            src="/img/features/machinelearning/machine.svg"
            alt="Machine-hero"
          />
        </div>
      </section>

      <section className="machine1">
        <div className="container">
          <div className="machine1__block flexi">
            <div className="machine1__info">
              <h2 className="compute2__h2">Ignite Machine Learning APIs Overview</h2>
              <p className="machine1__text pt-5">
                Ignite Machine Learning (ML) is a set of simple, scalable, and efficient tools that allow building
                predictive machine learning models without costly data transfers.
              </p>
              <h3 className="machine1__title machine-top">How does Apache Ignite support ML APIs?</h3>
              <p className="machine1__text">You have two options:</p>
              <div className="machine1__options flexi">
                <div className="machine1__option">
                  <div className="machine1__number">01</div>
                  <div className="machine1__subtext">
                    Use built-in ML APIs for some of the typical ML and deep learning (DL) tasks, such as:
                  </div>
                  <div className="machine1__subtext flexi">
                    <span>— Classification</span>
                    <span>— Regression</span>
                    <span>— Clustering</span>
                    <span>— Recommendation</span>
                    <span>— Preprocessing</span>
                  </div>
                </div>
                <div className="machine1__option">
                  <div className="machine1__number">02</div>
                  <div className="machine1__subtext">
                    Use external ML and DL libraries that use Apache Ignite as scalable and high-performance distributed
                    data storage:
                  </div>
                  <div className="machine1__subtext flexi">
                    <span>— TensorFlow</span>
                    <span>— Scikit</span>
                    <span>— Spark</span>
                    <span>— And more</span>
                  </div>
                </div>
              </div>
            </div>
            <img className="machine1__image" src="/img/features/machinelearning/image.svg" alt="image" />
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <h2 className="compute2__h2">Benefits of Apache Ignite Machine Learning APIs</h2>
          <div className="machineitem machineitem1 flexi">
            <h3 className="machine__title">
              Expedite the training process
              <br />
              with horizontally scalable cluster
            </h3>
            <div className="machine__info">
              <p className="machine__text">
                You can distribute your training data set over an unlimited number of cluster nodes and train your
                models with the speed of memory.
                <br /> With built-in Ignite ML APIs, you:
              </p>
              <div className="machine__part flexi">
                <div className="compute2-points__item fz20"></div>
                <div className="machine__subtext">Avoid, or minimise ETL</div>
              </div>
              <div className="machine__part flexi">
                <div className="compute2-points__item fz20"></div>
                <div className="machine__subtext">Load all your training data sets in the same cluster</div>
              </div>
              <div className="machine__part flexi">
                <div className="compute2-points__item fz20"></div>
                <div className="machine__subtext">Minimise network utilization during the training process</div>
              </div>
            </div>
          </div>
          <div className="machineitem machineitem1 flexi">
            <h3 className="machine__title">
              Execute your ML models with in-memory speed from your application code
            </h3>
            <div className="machine__info">
              <p className="machine__text">
                Once the model is trained, deploy it on the cluster and execute it with in-memory speed. Use built-in
                Ignite APIs or 3rd party libraries.
              </p>
            </div>
          </div>
          <div className="machineitem machineitem1 flexi">
            <h3 className="machine__title">Continue updating your models with new data in real time</h3>
            <div className="machine__info">
              <p className="machine__text">
                Data and user behavior change rapidly, so you must constantly update your models. With Apache Ignite,
                you can update your already deployed ML models with new data sets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="native-bottom container">
        <div className="native-bottom__grid">
          <article className="nativebotblock">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-rocket.svg" alt="" className="nativebotblock__icon" />
              <span>Ready to Start?</span>
            </div>
            <p className="nativebotblock__text">Start coding machine learning APIs</p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/machine-learning/machine-learning"
              target="_blank"
              rel="noreferrer"
            >
              Performing Machine Learning
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Check out how Apache Ignite updates
              <br /> trained models in real time
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/machine-learning/updating-trained-models"
              target="_blank"
              rel="noreferrer"
            >
              Updating Trained Models
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
