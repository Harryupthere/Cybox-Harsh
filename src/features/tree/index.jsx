import React, { useState } from 'react';
import './styles.scss';

function TreeNode({ node }) {
  return (
    <div className="tree-node">
      <div className="node-label">{node.label}</div>
      {node.children && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function Tree({ data }) {
  return (
    <div className=''>
      <div className="search-button">
        <div className='tree-buttons'>
        <button className='enable'>Enable</button>
        <button className='disable'>Disable</button>
        <button className='disable'>Disable</button>
        <button className='disable'>Disable</button>
        </div>
        <div className='search'>
        <input
          type="text"
          placeholder="Search"
          // You can add event handlers here for functionality
        />
        <button>
          Search
        </button>
        </div>
      </div>
    
    <div className="tree">
      <TreeNode node={data} />
    </div>
    </div>
  );
}

export default Tree;
