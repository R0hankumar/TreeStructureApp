// components/TreeNode.js
import React, { useState } from 'react';

const TreeNode = ({ node }) => {
  const [value, setValue] = useState(node.value);

  const handleClick = () => {
    const newValue = prompt('Enter new value:', value);
    if (newValue !== null) {
      setValue(newValue);
      node.value = newValue; // Update the node value
    }
  };

  return (
    <div onClick={handleClick}>
      Node Value: {value}
    </div>
  );
};

export default TreeNode;
