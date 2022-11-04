import React, {useEffect, useState} from 'react'
import axios from "axios"
import NavBar from '../../components/NavBar'
import Posts from '../../components/Posts'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Posts />
    </div>
  );
}

export default Home
