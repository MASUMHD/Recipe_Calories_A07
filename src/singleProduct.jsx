import { IoMdTime } from "react-icons/io";
import { GiLoveHowl } from "react-icons/gi";

const singleProduct = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/Sx99vvhQ/Rectangle-20170.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Spaghetti Bolognese</h2>
          <p className="text-[#878787] mt-3">Classic Italian pasta dish with savory meat sauce.</p>
          <hr className="mt-3 mb-6" />
          <div>
              <h3 className="text-xl font-bold">Ingredients: 6</h3>
              <ul className="ml-5 mt-3 text-[#878787]">
                  <li>1 pound spaghetti</li>
                  <li>1 pound ground beef</li>
                  <li>1 onion, chopped</li>
              </ul>
          </div>
          <hr className="mt-3 mb-6" />
          <div className="flex mb-5">

          <p className="flex items-center text-xl"><span className="text-3xl"><IoMdTime /></span>   <span className="ml-4 mr-1">30 </span> minutes</p>
          <p className="flex items-center text-xl"><span className="text-3xl"><GiLoveHowl /></span> <span className="ml-4 mr-1">600 </span> calories</p>

          </div>
          <div className="card-actions ">
            <button className="btn  rounded-full bg-[#0BE58A]">Want to Cook</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default singleProduct;