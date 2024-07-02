// components/Tree.js
import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ node }) => {
  return (
    <div>
      <TreeNode node={node} />
      {node.children && node.children.length > 0 && (
        <div style={{ paddingLeft: 20 }}>
          {node.children.map((child, index) => (
            <Tree key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;
