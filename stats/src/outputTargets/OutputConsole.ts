import type { OutputTarget } from "../Summary";

export class OutputConsole implements OutputTarget{
    print(report: string): void {
        console.log(report);
    }
}