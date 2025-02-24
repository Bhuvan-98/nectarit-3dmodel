"use client";

export default function SideBar() {
  return (
    <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">nectarit_3D Viewer</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
            onClick={() => { }}
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
      </div>

    </div>

  );
}
