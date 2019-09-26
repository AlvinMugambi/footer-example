import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Portal = (props) => {
  console.log(props);
  return ReactDOM.createPortal(
    <div
      style={{
          postion: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}
      onClick={props.onClose}
      >
      <div
        style={{
          padding: 20,
          background: "#fff",
          borderRadius: '2px',
          display: "inline-block",
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
          justifySelf: "center"
        }}>
        <h1>Modal</h1>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('portal-root')
  )

}

export default Portal
