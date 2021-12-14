export class CharactersCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const dataArr = this.data.split("")

    const leftHand = dataArr[leftIndex];
    dataArr[leftIndex] = dataArr[rightIndex];
    dataArr[rightIndex] = leftHand;

    this.data = dataArr.join('');
  }
}
