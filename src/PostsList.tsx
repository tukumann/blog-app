import PostItem from "./PostItem";
import {useState} from "react";
import './PostsList.css';

export const PostsList = () => {

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

    // const posts: any[] = [];

    // const addPostHandler = (myText:any) => {
    //     posts.push("My text is " + myText)
    // }

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
      
    return (
        <>
            {posts.map((p) => {
              return(
                <PostItem post={p} postRemover={postRemover} likesHandler={likesHandler} toggleHandler={toggleHandler} />
              )            
              })}
        </>
    )
}