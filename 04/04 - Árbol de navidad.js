export default function createXmasTree(height) {
  let chars = height + (height - 1);
  if (chars < 0) return "#\n#\n";
  let tree = '';
  let unders = 0;
  for (let x = 0; x < height; x++) {
    let lvl = "_".repeat(unders) + "*".repeat(chars) + "_".repeat(unders) + '\n';
    tree = tree + lvl;
    unders++;
    chars -= 2;
  }
  let arrtree = tree.split('\n').reverse();
  arrtree.shift()
  arrtree.push(arrtree[0].replace("*", "#"));
  arrtree.push(arrtree[0].replace("*", "#"));
  tree = arrtree.join('\n')
  return tree;
}
