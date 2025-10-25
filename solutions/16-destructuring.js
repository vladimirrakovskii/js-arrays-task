const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
import { getTheNearestLocation } from '../solutions/16-destructuring.js';

export function getTheNearestLocation(locations, point) {
  if (locations.length === 0) {
    return null;
  }
  
  const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
    return Math.sqrt(xs ** 2 + ys ** 2);
  };
  
  let closestLocation = null;
  let minDistance = Infinity;
  
  for (const [name, coords] of locations) {
    const distance = getDistance(coords, point);
    if (distance < minDistance) {
      minDistance = distance;
      closestLocation = [name, coords];
    }
  }
  
  return closestLocation;
}
// END
