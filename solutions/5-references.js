export function getWeekends(format = 'long') {
  if (format === 'short') {
    return ['sat', 'sun'];
  } else {
    return ['saturday', 'sunday'];
  }
}
