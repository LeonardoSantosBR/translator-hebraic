import { FaBookBookmark } from "react-icons/fa6";

function Header() {
  return (
    <div className="w-full bg-[#3b5998] flex justify-start items-center p-3">
      <div className="flex ml-3 gap-4">
        <h1 className="text-2xl font-bold text-gray-100">Hebrai</h1>
        <FaBookBookmark color="#44bec7" size={30} />
      </div>
    </div>
  );
}

export default Header;
