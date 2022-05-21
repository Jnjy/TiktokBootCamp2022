import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-slate-300">
      <div
        class="flex justify-center md:justify-start items-center w-full md:w-auto md:order-1"
        id="mobile-menu-4"
      >
        <ul class="flex flex-row space-x-8 text-md md:text-lg font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/player-screen">Player</Link>
          </li>
          <li>
            <Link to="/bot-screen">Bot</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
