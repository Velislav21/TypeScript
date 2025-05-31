function* rangeGenerator(start: number, end: number) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  } else {
    for (let i = start; i >= end; i--) {
      yield i;
    }
  }
}