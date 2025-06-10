import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
        <div className="">
        <NavLink
        to="/"
        className={({isActive}) =>
            isActive ? "text-amber-100" : "text-amber-200"
        }
        >Home </NavLink>
        </div>
    </>
  )
}
