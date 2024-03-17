import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { GiLoveHowl } from "react-icons/gi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = ({ blog,handleAddToBookmark }) => {
  // console.log(blog);
  const {description,image, recipe_name,ingredients,preparing_time,calories,} = blog;

  return (
    <div className="">
      <div className=" flex-1 col-span-2 sm:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-16 ml-4 md:ml-0">
        {/* card 1 */} 
        <div className="card w-[380px]  bg-base-100 shadow-xl ">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{recipe_name}</h2>
            <p className="text-[#878787] mt-3">
              {description}
            </p>
            <hr className="mt-3 mb-6" />
            <div>
              <h3 className="text-xl font-bold">Ingredients: 6</h3>
              <ul className="ml-5 mt-3 text-[#878787] list-disc">
                
                <li>{
                    ingredients.map((ing, index) => <li key={index}>{ing}</li>)
                    }</li>
              </ul>
            </div>
            <hr className="mt-3 mb-6" />
            <div className="flex mb-5">
              <p className="flex items-center text-xl">
                <span className="text-3xl">
                  <IoMdTime />
                </span>{" "}
                <span className="ml-4 mr-1">{preparing_time} </span> minutes
              </p>
              <p className="flex items-center text-xl">
                <span className="text-3xl">
                  <GiLoveHowl />
                </span>{" "}
                <span className="ml-4 mr-1">{calories} </span> calories
              </p>
            </div>
            <div className="card-actions ">
              <button 
              onClick={() =>handleAddToBookmark(blog)} 
              className="btn  rounded-full bg-[#0BE58A]">
                Want to Cook
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.func
};

export default Blog;
