// utils/generateTree.js
export const generateTree = (depth, value = 1) => {
  const createNode = (currentDepth) => {
    if (currentDepth === depth) return { value };
    return {
      value,
      children: [createNode(currentDepth + 1), createNode(currentDepth + 1)],
    };
  };
  return createNode(1);
};
