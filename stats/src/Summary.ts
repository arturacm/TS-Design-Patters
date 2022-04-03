import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./matchData";
import { HtmlReport } from "./outputTargets/HtmlReport";
import { OutputConsole } from "./outputTargets/OutputConsole";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  static winAnalysisHtml (team: string):Summary{
    return new Summary( new WinsAnalysis(team), new HtmlReport())
  }

  static winAnalysisConsole (team: string):Summary{
    return new Summary( new WinsAnalysis(team), new OutputConsole())
  }

  constructor(
      public analyzer: Analyzer,
      public outputTarget: OutputTarget
      ) {}

  buildAndPrintReport(matches: MatchData[]){
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output);
  }
}
