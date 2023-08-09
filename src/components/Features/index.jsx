import React from 'react';
import featuresData from '../../data/sections/features.json';

const Feats = () => {
  return (
    <section className="sipm-feat section-padding">
      <div className="container">
        <div className="row">
          {
            featuresData.map((feature, index) => (
              <div className="col-lg-4" key={feature.id}>
                <div className={`item ${index !== featuresData.length - 1 ? 'md-mb50':''}`}>
                  <div>
                    <span className={`icon ${feature.icon}`}></span>
                  </div>
                  <div className="text">
                    <h6>{ feature.title }</h6>
                    <p>
                      { feature.details }
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Feats