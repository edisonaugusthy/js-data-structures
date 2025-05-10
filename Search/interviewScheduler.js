const intervals = [
  { start: 9, end: 10.5 },
  { start: 9.5, end: 10 },
  { start: 10, end: 11 },
  { start: 10.5, end: 11.5 },
  { start: 13, end: 14 },
  { start: 13.5, end: 15 },
];

function mergeOverlappingIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a.start - b.start);
  const overlaps = [intervals[0]];

  for (const schedule of sortedIntervals) {
    const latestEvent = overlaps[overlaps.length - 1];
    const isOverlapping = schedule.start <= latestEvent.end;
    if (isOverlapping) {
      latestEvent.end = Math.max(latestEvent.end, schedule.end);
    } else {
      overlaps.push(schedule);
    }
  }
  return overlaps;
}

console.log(mergeOverlappingIntervals(intervals));
// [{ start: 9, end: 11.5 }, { start: 13, end: 15 }];
//https://skilled.dev/course/interview-scheduler
