import React from 'react'

import axios from 'axios';

import { useState, useEffect } from 'react';
  // 1. Create state variables
 

const Men = () => {
    const [posts, setPosts] = useState([]); // To store the list of posts
    const [loading, setLoading] = useState(true); // To show a loading message
    const [error, setError] = useState(null); // To show an error message
  
    // 2. Set up the useEffect hook to fetch data
    useEffect(() => {
      // This is the URL from JSONPlaceholder
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      
      // Set loading to true before we start the fetch
      setLoading(true);
      
      // 3. Use axios to fetch the data
      axios.get(apiUrl)
        .then(response => {
          // 4. Handle a successful response
          setPosts(response.data); // Save the data in our 'posts' state
          setError(null); 
          
          //
          //  Clear any previous errors
        })
        .catch(err => {
          // 5. Handle any errors
          setError(err.message); // Save the error message
          setPosts([]); // Clear any old data
        })
        .finally(() => {
          // 6. This runs after success OR error
          setLoading(false); // Hide the loading message
        });
        
    }, []); // The empty array [] means this effect runs only ONCE
    
    // 7. Render the component based on the state
    if (loading) {
      return <p className='flex align-center justify-center mt-25% ml-25% absolute'>Loading posts...</p>;
    }
  
    if (error) {
      return <p>Error fetching posts: {error}</p>;
    }
  return (
    <div className='flex flex-col items-center justify-center  '> 
        <ul className='list-none  align-center  gap-4 p-10  '>
        {/* We use .map() to loop over the posts and create an <li> for each one */}
        {posts.map(post => (
          <li className='flex gap-10 mt-5' key={post.id}>
           <p>{post.id}</p> 
           <p>{post.title}</p>
           <p>{post.body}</p> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Men