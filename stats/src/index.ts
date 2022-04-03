import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { OutputConsole } from './outputTargets/OutputConsole'
import { Summary } from './Summary'
import { HtmlReport } from './outputTargets/HtmlReport'

const csvReader = new CsvFileReader('./football.csv')
const reader = new MatchReader(csvReader)
reader.load()

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
    )

summary.buildAndPrintReport(reader.matches)