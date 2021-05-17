var findBall = function(grid) {
  let answer = [];
  for (let i = 0; i < grid[0].length; i++) {
    ballMove(0, i);
  }
  function ballMove(rowIndex, colIndex, direction="down") {
    if (!grid[rowIndex]) {
      answer.push(colIndex);
      return;
    }
    if (!grid[rowIndex][colIndex]) {
      answer.push(-1);
      return;
    }
    if (grid[rowIndex][colIndex] === 1) {
      if (direction === "right") {
        ballMove(rowIndex + 1, colIndex, "down");
      }
      if (direction === "left") {
        answer.push(-1);
        return;
      }
      if (direction === "down") {
        ballMove(rowIndex, colIndex + 1, "right");
      }
    }
    if (grid[rowIndex][colIndex] === -1) {
      if (direction === "right") {
        answer.push(-1);
        return;
      }
      if (direction === "left") {
        ballMove(rowIndex + 1, colIndex, "down");
      }
      if (direction === "down") {
        ballMove(rowIndex, colIndex - 1, "left");
      }
    }
  }
  return answer;
}
