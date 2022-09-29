import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img
        className="postImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=740"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem, ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim facere voluptate aperiam autem repellendus.
            Excepturi totam quis, sed aut rem a, reiciendis voluptatibus, est facere sit soluta eius maiores sunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim facere voluptate aperiam autem repellendus.
            Excepturi totam quis, sed aut rem a, reiciendis voluptatibus, est facere sit soluta eius maiores sunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim facere voluptate aperiam autem repellendus.
            Excepturi totam quis, sed aut rem a, reiciendis voluptatibus, est facere sit soluta eius maiores sunt.
        </p>
    </div>
  )
}
