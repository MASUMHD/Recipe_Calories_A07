
import './App.css'
import Header from './components/Header/header'
import Banar from './components/Banar/banar'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Our from './components/Our/Our'
// import Cooking from './components/Cooking/Cooking'



function App() {
  

  const [bookmarks, setBookmarks] = useState([]);
  const [cooking, setCooking] = useState([]);

  // const handleAddToCooking = (blog) => {
  //   const newCooking = [...cooking, blog];
  //   setCooking(newCooking);
  //   // console.log("blog");

  // }
  const handleAddToCooking = (blog) => {
    
    const index = cooking.findIndex(item => item.recipe_id === blog.recipe_id);
    if (index !== -1) {
      
      const newCooking = [...cooking.slice(0, index), ...cooking.slice(index + 1)];
      setCooking(newCooking);
    } else {
      
      const newCooking = [...cooking, blog];
      setCooking(newCooking);
    }
  }
  
  

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
    <Banar></Banar> 
    <Our></Our>
    
    
    
    
    <div className="container mx-auto md:flex mt-10 gap-1 md:gap-10 max-w-7xl mb-16">
      <Blogs  handleAddToBookmark={handleAddToBookmark} ></Blogs>
      <Bookmarks handleAddToCooking={handleAddToCooking} cooking={cooking} bookmarks={bookmarks}></Bookmarks>
    </div>
    
    </>
  )
}

export default App
