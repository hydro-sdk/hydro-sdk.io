import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Familiar APIs',
    png: "img/hello-world-carbon.png",
    description: (
      <>
        Use the Flutter and Dart APIs you already know and love
      </>
    ),
  },
  {
    title: 'Easy Integration',
    png: "img/run-component-carbon.png",
    description: (
      <>
        Write parts of your app, or even your entire app with Hydro-SDK. It's all widgets
      </>
    ),
  },
  {
    title: 'Tests Like Any Other',
    png: "img/test-carbon.png",
    description: (
      <>
        Build your Hydro-SDK components into standalone packages. Test them like any other widget
      </>
    ),
  },
];

function Feature({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img  src={png}  alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
