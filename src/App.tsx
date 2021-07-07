import {useState} from "react";
import './App.css';

const App = () => {
    
    let [posts, setPosts] = useState([
      {
        name: "First One",
        isOpen: false,
        description: "Some content #1",
        likes: 0
      },
      {
        name: "Second One",
        isOpen: false,
        description: "Some content #2",
        likes: 0
      },
      {
        name: "Third One",
        isOpen: false,
        description: "Some content #3",
        likes: 0
      }
    ]);


    // const postsChanged = [
    //   {
    //     name: "First One",
    //     isOpen: true,
    //     description: "Some content #1"
    //   },
    //   {
    //     name: "Second One",
    //     isOpen: false,
    //     description: "Some content #2"
    //   },
    //   {
    //     name: "Third One",
    //     isOpen: false,
    //     description: "Some content #3"
    //   }
    // ]

    // const postInfo = {
    //   title: "My Post Title",
    //   description: "Some info about this post"
    // };

    const toggleHandler = (name: string) => {
      // posts[0].isOpen = !posts[0].isOpen;
      // setIsOpen(isOpen);
      // console.log(isOpen);
      let postsChanged: any = [...posts];
      const el = postsChanged.find((el: any) => el.name === name);
      el.isOpen = !el.isOpen;
      console.log(el.isOpen);
      setPosts(postsChanged);
    };

    const likesHandler = (name: string) => {
      let postsChanged: any = [...posts];
      const el = postsChanged.find((el: any) => el.name === name);
      el.likes++;
      console.log(el.isOpen);
      setPosts(postsChanged);
    };

    

//    !massive[0].isOpen

    console.log("Rendering");

    return (
    <>
      {posts.map((post) => (
      <div className="post" key={ post.name }>
        <div className="post__header">
          <span className="post__title">{ post.name }</span>
          <button className="post__toggler" onClick={() => toggleHandler(post.name)}>Toggle</button>
          <button className="post__toggler" onClick={() => likesHandler(post.name)}>Like</button>
          <span>{post.likes}</span>
        </div>
        {post.isOpen ? (
        <div className="post__body">{ post.description }</div>
        ) : null}
      </div>
      ))}
    </>
    );
  };

export default App;
