import { green, red } from "chalk";
import { exec } from "child_process";
import * as fs from "fs";

const logFile: string = "linkcheck.log";
const localUrl: string = "http://localhost:3000";
const excludeDomains: string = "googletagmanager.com";
const cmd: string = `wget --spider -r -nd -nv -H -l 1 --exclude-domains ${excludeDomains} -o ${logFile}  ${localUrl}`;

console.log(`Crawling ${localUrl} recursively...`);

exec(cmd, (error, stdout, stderr) => {
  const crawlingLogs: string = fs.readFileSync(logFile, "utf8");
  const idx: number = crawlingLogs.search(/Found \d+ broken link[s]?\./g);
  if (idx != -1) {
    console.log(red("error ") + crawlingLogs.substring(idx));
    process.exitCode = 1;
    return;
  }

  console.log(green("success ") + "No broken links found.");
});
