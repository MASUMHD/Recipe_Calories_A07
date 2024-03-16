import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className=" md:w-[36%]">
      <div className=" flex-1 border-2 border-r-emerald-200 rounded-lg mt-10 md:mt-0">
        <h1 className="text-3xl font-bold text-center mt-3 ">
          Want to cook: <span>{bookmarks.length}</span>
        </h1>
        <hr className="mt-3" />

        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl ">Name</th>
                  <th className="text-xl ">Time</th>
                  <th className="text-xl ">Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookmarks.map((bookmark, index) => (
                  <tr key={bookmark.recipe_id}>
                    <th>{index + 1}</th>
                    <td className="">
                      {bookmark.recipe_name}
                    </td>
                    <td className="">
                      {bookmark.preparing_time} minutes
                    </td>
                    <td className="">
                      {bookmark.calories} calories
                    </td>
                    <td>
                      <button className="btn bg-[#0BE58A] rounded-full">
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.recipe_id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
 