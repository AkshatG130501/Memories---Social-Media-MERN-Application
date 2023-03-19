import axios from 'axios'; // to make api calls

const url = "http://localhost:5000/posts";  // returns all current posts into database

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);

