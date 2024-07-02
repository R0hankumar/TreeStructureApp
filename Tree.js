// components/Tree.js
import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ tree }) => {
  return (
    <div>
      {tree.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default Tree;
