import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')
reader.read()

let manWins = 0;

enum MatchResult{
  HomeWins = 'H',
  AwayWins = 'A',
  Draw = 'D',
  }

for (let match of reader.data) {
  if (match[1] == 'Man United' && match[5] == MatchResult.HomeWins ){

  manWins++;
  }else if (match[2] == 'Man United' && match[5] == MatchResult.AwayWins) manWins++
}
console.log(`Manchester United now ${manWins} times`)