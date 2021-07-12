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



    const toggleHandler = (name: string) => {
      let postsChanged: any = [...posts];
      const el = postsChanged.find((el: any) => el.name === name);
      el.isOpen = !el.isOpen;
      setPosts(postsChanged);
    };

    const likesHandler = (name: string) => {
      let postsChanged: any = [...posts];
      const el = postsChanged.find((el: any) => el.name === name);
      el.likes++;
      setPosts(postsChanged);
    };

    const postRemover = (i: number) => {
      let postsChanged: any = [...posts];
      postsChanged.splice(i, 1); 
      setPosts(postsChanged);
    };

    

//    !massive[0].isOpen

    console.log("Rendering");

    return (
    <>
      {"Количество постов: " + posts.length}
      {posts.map((post, i) => (
      <div className="post" key={ post.name }>
        <button className="post__remover" onClick={() => postRemover(i)}>X</button>
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
