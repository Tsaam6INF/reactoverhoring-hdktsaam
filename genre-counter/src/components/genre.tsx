import { useState } from "react";

interface props {
  title: string;
  startLikes: number;
}

function Genre({ title, startLikes }: props) {
  const [likes, setLikes] = useState(startLikes);

  const addLike = () => {
    // let likesUpdate = likes + 1;
    // setLikes(likesUpdate);
    setLikes((likes) => likes + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>
        <a className="btn btn-info" onClick={addLike} href="#">
          {" "}
          {likes}
        </a>{" "}
      </p>
    </>
  );
}

export default Genre;
