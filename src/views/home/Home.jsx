import React from 'react'
import coverImg from '../../assets/images/logo.jpg'
const styles={
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}
const Home = () => {
  return (
    <div>
      <img src={coverImg} className="img-responsive img-rounded img-thumbnail" style={styles}></img>
    </div>
  )
}

export default Home