import React from 'react'

// eslint-disable-next-line react/prop-types
const Message = ({ variant, children }) => {
  let backgroundColor = ''
  switch (variant) {
    case 'info':
      backgroundColor = '#edc339'
      break
    case 'success':
      backgroundColor = 'lightgreen'
      break
    case 'warning':
      backgroundColor = 'yellow'
      break
    case 'error':
      backgroundColor = 'lightcoral'
      break
    default:
      backgroundColor = '#edc339'
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '80vh',
        backgroundColor: backgroundColor,
        fontWeight: 'bold',
      }}
    >
      {children}
    </div>
  )
}

export default Message
