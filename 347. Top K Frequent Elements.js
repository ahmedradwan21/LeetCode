/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const map = {};
    for (const n of nums) {
      if (map[n] == null) map[n] = 0;
      map[n]++;
    }
  
    const arr = [];
    for (const n in map) {
      arr.push({ n, count: map[n] });
    }
  
    return arr
      .sort((a, b) => b.count - a.count)
      .slice(0, k)
      .map(a => Number(a.n));
  };