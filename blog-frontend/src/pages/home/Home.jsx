import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import { useStateGlobal } from "../../context/StateProvider";
import axios from "../../axios";

const Home = () => {
  const [{ user }] = useStateGlobal();
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      user && sessionStorage.setItem("user", JSON.stringify(user));
    }
    return () => {
      isMounted = false;
    };
  }, [user]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
