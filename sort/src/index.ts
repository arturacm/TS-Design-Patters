import { CharactersCollection } from './CharactersCollection'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'
import { LinkedList } from './LinkedList'
// const numbersCollection = new NumbersCollection([1,4,10,-1,5, -10])

// const charSorter = new CharactersCollection('asStASx')
// sorter.sort()
// console.log(sorter.collection)

const linkedList = new LinkedList()
linkedList.add(3)
linkedList.add(-10)
linkedList.add(4)
linkedList.add(100)

linkedList.print()
const sorter = new Sorter(linkedList)
sorter.sort()

linkedList.print()


