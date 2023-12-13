 import TwitterPost from "../../components/Tweet/TwitterPost"
const Twitter = () => {
  return (
      <div>
          <TwitterPost
              name={"John Doe"}
              handle={"johndoe"}
              message={"Just made my first Twitter post mockup in HTML and CSS! #coding #html #css"}
              avatar={"https://i.pravatar.cc/300"}
              image={"https://picsum.photos/800/800?id=65456"} />
      </div>
  )
}

export default Twitter