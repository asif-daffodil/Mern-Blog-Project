import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="container mx-auto py-4 flex items-center justify-between flex-wrap md:flex-nowrap px-5 md:px-0">
            <Link to="/" className="text-2xl md:text-4xl text-blue-600 font-bold">Logo</Link>
            <label className="md:hidden cursor-pointer peer ml-auto" htmlFor="menu-toggle">
                <FontAwesomeIcon icon={faBars} />
                <input type="checkbox" className="hidden" id="menu-toggle" />
            </label>
            <ul className="w-full md:w-max hidden peer-has-checked:flex md:flex flex-col md:flex-row gap-2 mt-4 md:mt-0 md:gap-6 *:*:text-blue-600 *:*:hover:underline *:*:hover:underline-offset-8 *:*:[&.active]:font-bold">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;