import React, { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChart2Line,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import PlatoUno from "./assets/plato-uno.png";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menú mobile */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed bottom-0 w-full left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-6">
          {/* header */}
          <header className="">
            {/* Título & Search */}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">15/01/2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between border-b mb-6 md:justify-start md:gap-24">
              <a
                href="#"
                className="py-2 relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className="">
                Cold Dishes
              </a>
              <a href="#" className="">
                Soups
              </a>
              <a href="#" className="">
                Grill
              </a>
              <a href="#" className="">
                Gourmet
              </a>
            </nav>
          </header>
          {/* Title Content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-6 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* Contenido */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Cards */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src={PlatoUno}
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$10.000</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* Cards */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src={PlatoUno}
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$10.000</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* Cards */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src={PlatoUno}
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$10.000</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* Cards */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src={PlatoUno}
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$10.000</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* Cards */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src={PlatoUno}
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$10.000</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* Cards */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src={PlatoUno}
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$10.000</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
          {/* Orders */}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute text-white box-content bg-[#262837] p-2 rounded-full left-4 top-4 text-xl"/>
            <h1 className="text-2xl mt-4 my-4">Orders #15141</h1>
            <div className="flex items-center gap-2 flex-wrap">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine In</button>
              <button className="border border-gray-500 text-[#ec7c6a] py-2 px-4 rounded-xl">Dine In</button>
              <button className="border border-gray-500 text-[#ec7c6a] py-2 px-4 rounded-xl">Dine In</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
