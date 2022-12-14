import { navBar, healthGoal } from "../assets/Constant";

export const Navegation = () => {
  return (
    <nav className="navBar">
      <ul className="nav-items">
        <li className="nav-list li">
          Health Goal
          <ul className="dropdown-nav">
            {healthGoal.map(function (items) {
              return <li className="dropdown-list">{items}</li>;
            })}
          </ul>
        </li>
        {navBar.map(function (items) {
          return <li className="li">{items}</li>;
        })}
      </ul>
    </nav>
  );
};
