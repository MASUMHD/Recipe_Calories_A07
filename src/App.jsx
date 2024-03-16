
import './App.css'
import Header from './components/Header/header'
import Banar from './components/Banar/banar'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Our from './components/Our/Our'



function App() {
  

  const [bookmarks, setBookmarks] = useState([]);

  
  const handleAddToBookmark = (blog) => {
    
    const isAlreadyBookmarked = bookmarks.some(item => item.recipe_id == blog.recipe_id);

    if (isAlreadyBookmarked) {
        
      toast('🙌 Already Exist');
    } else {
       
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }
  }

  return (
    <>
    <Header></Header> 
    <Our></Our>
    <Banar></Banar>
    
    
    
    <div className="container mx-auto md:flex mt-10 gap-1 md:gap-20 mr-2 md:mr-0 pl-0 md:pl-20 pr-0 md:pr-20">
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    
    </>
  )
}

export default App
