const groupsAnagram = function (strings) {
  const sorted = strings.map((string) => string.split("").sort().join(""));
  const ht = {};
  for (let i = 0; i < strings.length; i++) {
    if (!ht[sorted[i]]) ht[sorted[i]] = [strings[i]];
    else ht[sorted[i]].push(strings[i]);
  }

  return Object.values(ht);
};

console.log(groupsAnagram(["abc", "cba", "ate", "aet", "adc"]));
