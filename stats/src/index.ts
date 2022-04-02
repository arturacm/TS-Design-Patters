import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './matchResult';

const csvReader = new CsvFileReader('./football.csv')
const reader = new MatchReader(csvReader)
reader.load()

let manWins = 0;

for (let match of reader.matches) {
  if (match[1] == 'Man United' && match[5] == MatchResult.HomeWins ){

  manWins++;
  }else if (match[2] == 'Man United' && match[5] == MatchResult.AwayWins) manWins++
}
console.log(`Manchester United now ${manWins} times`)