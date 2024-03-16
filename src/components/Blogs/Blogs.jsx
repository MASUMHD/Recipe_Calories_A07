import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';



const blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }) 
    return (
        
        <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-10   '>
           
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blog.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default blogs;