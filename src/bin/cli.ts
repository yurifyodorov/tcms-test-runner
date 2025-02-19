import runTests from "../testRunner";
import saveBrowserDetails from "../browserInfo";
import saveSystemInfo from "../systemInfo";
import saveResults from "../resultsParser";
import sendSlackReport from "../slackNotifier";

runTests();
saveBrowserDetails();
saveSystemInfo();
saveResults();
sendSlackReport();
