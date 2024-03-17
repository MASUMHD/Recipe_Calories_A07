import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const header = () => {
  return (
    <div className=" container mx-auto max-w-7xl">

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>

              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-base md:text-4xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>

            <li>
              <a>Search</a>
            </li>
            
          </ul>
        </div>

          <div className="navbar-end mr-4 ">
            <p className="text-2xl md:text-3xl font-bold mr-1 md:mr-2">
              <CiSearch />
            </p>
            <input
            
              type="text"
              
              placeholder="Search"
              className="input input-bordered w-full max-w-[90px] md:max-w-[200px] rounded-full"
            />
          </div>
        <div className="navbar-end bg-green-400 w-16 rounded-full text-3xl p-3">
        <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
};

export default header;
