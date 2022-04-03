import type { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget{
    print(report: string): void {
        const html = `
        <main>
            <h1>Output Report</h1>
            <p>${report}</p>
        </main>
        `
        fs.writeFileSync('report.html', html);
    }
}