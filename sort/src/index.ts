import { CharactersCollection } from './CharactersCollection'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'
import { LinkedList } from './LinkedList'

// const numbersCollection = new NumbersCollection([1,4,10,-1,5, -10])
// numbersCollection.sort()
// console.log(numbersCollection.data)

// const charSorter = new CharactersCollection('asStASx')
// charSorter.sort()
// console.log(charSorter.data)

const linkedList = new LinkedList()
linkedList.add(3)
linkedList.add(-10)
linkedList.add(4)
linkedList.add(100)

linkedList.print()

linkedList.sort()

linkedList.print()


