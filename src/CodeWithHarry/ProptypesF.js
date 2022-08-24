import React from 'react'
import PropTypes from 'prop-types'

export default function ProptypesF(props) {
    const {title, about, home} = props
  return (<>
    <div>ProptypesF</div>
    <div>{title}</div>
    <div> {about}</div>
    <div> {home}</div>
    </>)
}

ProptypesF.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.number
}

ProptypesF.defaultProps = {
    title: 'TextUtils',
    about: 'About',
    home: 'Home'
  };




