const PostItem = (props: any) => {
    // return <div onClick={props.myCallback}>{props.post.name}</div>;
    // const a = props.postRemover(); //result
    // const b = () => props.postRemover(); //function thus  result = b()
    // const res = b() = (() => props.postRemover())();
    return (
        <>
          <div className="post" key={ props.post.name }>
            <button className="post__remover" onClick={props.postRemover}>X</button>
            <div className="post__header">
              <span className="post__title">{ props.post.name }</span>
              <button className="post__toggler" onClick={() => props.toggleHandler( props.post.name )}>Toggle</button>
              <button className="post__toggler" onClick={() => props.likesHandler( props.post.name )}>Like</button>
              <span>{ props.post.likes}</span>
              <span onClick={(event) => console.log("Hello Leti") }>{ }</span>
            </div>
            { props.post.isOpen ? (
            <div className="post__body"><strong>{ props.post.description }</strong></div>
            ) : null}
          </div>
          ))
        </>
        );
      };

export default PostItem;