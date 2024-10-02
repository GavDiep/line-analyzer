// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)
function getLength(x1, y1, x2, y2) {
  let lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  lineLength = lineLength.toFixed(2);
  return lineLength;
}

function getSlope(x1, y1, x2, y2) {
  let lineSlope = (y2 - y1) / (x2 - x1);
  lineSlope = lineSlope.toFixed(2);
  return lineSlope;
}

function getDescription(x1, y1, x2, y2) {
  let lineSlope = getSlope(x1, y1, x2, y2);
  lineSlope = Math.sign(lineSlope);

  if (x1 == x2) {
    return "vertical";
  } else if (y1 == y2) {
    return "horizontal";
  } else if (Math.sign(lineSlope) == 1) {
    return "increasing";
  } else if (Math.sign(lineSlope) == -1) {
    return "decreasing";
  }
}

function getPointLocation(x, y) {
  if (x == 0 && y == 0) {
    return "origin (0, 0)";
  } else if (y == 0) {
    return `x-axis (${x}, ${y})`;
  } else if (x == 0) {
    return `y-axis (${x}, ${y})`;
  } else if (Math.sign(x) == 1 && Math.sign(y) == 1) {
    return `quadrant 1 (${x}, ${y})`;
  } else if (Math.sign(x) == -1 && Math.sign(y) == 1) {
    return `quadrant 2 (${x}, ${y})`;
  } else if (Math.sign(x) == -1 && Math.sign(y) == -1) {
    return `quadrant 3 (${x}, ${y})`;
  } else if (Math.sign(x) == 1 && Math.sign(y) == -1) {
    return `quadrant 4 (${x}, ${y})`;
  }
}

function getPointSlope(x1, y1, x2, y2) {
  // y - y1 = m(x - x1)

  let slope = getSlope(x1, y1, x2, y2);
  if (Math.sign(x1) == 1 && Math.sign(y1) == 1) {
    let pointEquation = `Y - ${y1} = ${slope}(X - ${x1})`;
    return pointEquation;
  } else if (Math.sign(x1) == -1 && Math.sign(y1) == -1) {
    x1 = x1 * -1;
    y1 = y1 * -1;
    let pointEquation = `Y + ${y1} = ${slope}(X + ${x1})`;
    return pointEquation;
  } else if (Math.sign(x1) == 1 && Math.sign(y1) == -1) {
    y1 = y1 * -1;
    let pointEquation = `Y + ${y1} = ${slope}(X - ${x1})`;
    return pointEquation;
  } else if (Math.sign(x1) == -1 && Math.sign(y1) == 1) {
    x1 = x1 * -1;
    let pointEquation = `Y - ${y1} = ${slope}(X + ${x1})`;
    return pointEquation;
  }
}

function getEquation(x1, y1, x2, y2) {
  // y = mx + b

  let slope = getSlope(x1, y1, x2, y2);
  let yIntercept = y1 - slope * x1;
  console.log(yIntercept);
  let interceptEquation = `Y = ${slope}X + ${yIntercept}`;
  console.log(interceptEquation);

  if (getDescription(x1, x1, x2, y2) == "horizontal") {
    return "y = 0";
  } else if (getDescription(x1, y1, x2, y2) == "vertical") {
    return `y = ${y1}`;
  } else if (slope == 0) {
    return `y = ${yIntercept}`;
  } else if (Math.sign(yIntercept) == 1) {
    return `Y = ${slope}(${x1}) + ${yIntercept}`;
  } else if (Math.sign(yIntercept) == -1) {
    yIntercept = yIntercept * -1;
    yIntercept = yIntercept.toFixed(2);
    return `Y = ${slope}(${x1}) + ${yIntercept}`;
  }
}
