import {useState} from "react";
import './App.css';

const App = () => {
    
  let [posts, setPosts] = useState([
    {
      name: "The ____ of basic grains varied among countries. (produce)",
      isOpen: false,
      description: "production",
      likes: 0
    },
    {
      name: "My first ____ was that he was a tactful politician. (impress)",
      isOpen: false,
      description: "impression",
      likes: 0
    },
    {
      name: "Another factor is the choice of ____. (occupy)",
      isOpen: false,
      description: "occupations",
      likes: 0
    },
    {
      name: "This course covered both skill training and managerial ____. (know)",
      isOpen: false,
      description: "knowledge",
      likes: 0
    },
    {
      name: "Upon graduation, your ____ will make you highly sought after by Australian and international employers. (qualify)",
      isOpen: false,
      description: "qualification",
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
      <div className='posts__title'>{"Количество оставшихся вопросов: " + posts.length}</div>
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
        <div className="post__body"><strong>{ post.description }</strong></div>
        ) : null}
      </div>
      ))}
    </>
    );
  };

export default App;
