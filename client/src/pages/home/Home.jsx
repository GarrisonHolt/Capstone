import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router"
import axios from "axios"
import NavBar from '../../components/NavBar'
import Posts from '../../components/Posts'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    };
    fetchPosts();
  }, [search])

  return (
    <div>
      <NavBar />
      <Posts posts={posts} />
    </div>
  );
}

export default Home
