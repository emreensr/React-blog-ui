import "./topbar.css"

export default function TopBar() {
  return (
        <div className="top">
        <div className="topLeft">
            <i class="topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-twitter-square"></i>
            <i class="topIcon fab fa-pinterest-square"></i>
            <i class="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="toplist">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
        <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
        </div>
  )
}
