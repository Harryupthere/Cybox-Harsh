import React, { useState } from "react";

import "./styles.scss";

function TreeNode({ node }) {

  return (
    <>
      <div className="tree-node">
        <div className="node-label">
          <p>{`${node.label.toString().substring(0, 5)}.....${node.label.toString().substring(node.label.length - 5, node.label.length)}`}</p>
          <p>{`${node.userInfo.username}` + " User Name"}</p>
        </div>

        {node.children && (
          <div className="node-children">
            {node.children.map((child, index) => (
              <TreeNode key={index} node={child} />
            ))}
          </div>
        )}
      </div>
    </>
  )

}
function TreeNode1() {

  return (
    <>
      <div className="tree-nodem">
       <h1>No user Found</h1>
      </div>
    </>
  )

}

function Tree(props) {
  const { data } = props;
  const [searchItem, setSearchItem] = useState("");
  const [classes, setClasses] = useState([false, false, false, false])
  const selectId = async (e, ids) => {
    e.preventDefault();
    if(ids==0){
      setClasses([true,false,false,false])
    }else if(ids==1){
      setClasses([false,true,false,false])
    }else if(ids==2){
      setClasses([false,false,true,false])
    }else{
        setClasses([false,false,false,true])
    }
    props.SubmitId(ids);
  };

  const inputHandler = (e) => {
    setSearchItem(e.target.value);
    if (e.target.value.length <= 0) {
      props.SubmitSearch(0);
    }
  };
  const submitSearch = (e) => {
    e.preventDefault();

    props.SubmitSearch(searchItem);
  };
  return (
    <div className="">
      <div className="search-button">
        <div className="tree-buttons">
        <button
                  className={classes[0]?"enable":"disable"}
                  title="0"
                  onClick={(e) => selectId(e, 0)}
                >
                  Bronze
                </button>
                <button
                  className={classes[1]?"enable":"disable"}
                  title="1"
                  onClick={(e) => selectId(e, 1)}
                >
                  Silver
                </button>
                <button
                  className={classes[2]?"enable":"disable"}
                  title="2"
                  onClick={(e) => selectId(e, 2)}
                >
                  Gold
                </button>
                <button
                  className={classes[3]?"enable":"disable"}
                  title="3"
                  onClick={(e) => selectId(e, 3)}
                >
                  Diamond
                </button>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              inputHandler(e);
            }}
          // You can add event handlers here for functionality
          />
          <button
            onClick={(e) => {
              submitSearch(e);
            }}
          >
            Search
          </button>{" "}
        </div>
      </div>

      <div className="tree">

        {data.label == "0x0000000000000000000000000000000000000000"?<TreeNode1/>:<TreeNode node={data} />}
      </div>
    </div>
  );
}

export default Tree;
