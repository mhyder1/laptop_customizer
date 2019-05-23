import React from "react"

const Total = (props) => {
    const total = Object.keys(props.selected)
          .reduce((acc, curr) => acc + props.selected[curr].cost, 0); 

    return  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    .format(total) ;
}

export default Total