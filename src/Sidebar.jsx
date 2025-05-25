import ComingSoon from "./assets/icons/commingSoon.svg";
import Favourite from "./assets/icons/favourite.svg";
import NewRelease from "./assets/icons/newRelease.svg";
import Trending from "./assets/icons/trending.svg";
import watchLater from "./assets/icons/watchLater.svg";

const Sidebar = () => {
  return (
    <aside>
      <ul class="space-y-2">
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-[#00D991] text-black"
            href="#"
          >
            <img src={Trending} width="24" height="24" alt="" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={NewRelease} width="24" height="24" alt="" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={ComingSoon} width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Favourite} width="24" height="24" alt="" />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={watchLater} width="24" height="24" alt="" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
