import React from 'react'

const Feature = (props) => {

    const updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, props.selected);
        selected[feature] = newValue;
        props.update(selected)
      }

        const features = Object.keys(props.features)
              .map(key => {
                const options = props.features[key].map((item, index) => {
                  const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
                  const featureClass = 'feature__option ' + selectedClass;
                  return <li key={index} className="feature__item">
                    <div className={featureClass}
                      
                      onClick={e => updateFeature(key, item)}>
                        { item.name }
                        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                          .format(item.cost) })
                    </div>
                  </li>
                });
    
                return <div className="feature" key={key}>
                  <div className="feature__name">{key}</div>
                  <ul className="feature__list">
                    { options }
                  </ul>
                </div>
              }); 

        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        )
}

export default Feature