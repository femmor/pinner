
import UserButton from "../UserButton"
import "./TopBar.css"
import useMobile from '../../hooks/useMobile'

const TopBar = () => {
  const mobile = useMobile()

  return (
    <div className="top-bar">
      {/* Search */}
      <div className="search">
        <img src="/general/search.svg" alt="search" />
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      {/* User Settings */}
      {!mobile && <div className="user">
        <UserButton />
      </div>}
    </div>
  )
}
export default TopBar