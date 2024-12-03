import React from 'react'

function Background() {
    const squares = Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="square"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
           
          }}
        />
      ));
  return (
    <div className="background">
      {squares}
    </div>
  )
}

export default Background


