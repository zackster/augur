pragma solidity 0.4.24;

import 'reporting/IInitialReporter.sol';
import 'reporting/IMarket.sol';


contract MockInitialReporterFactory {
    IInitialReporter private initialReporter;

    function setInitialReporter(IInitialReporter _initialReporter) public returns (bool) {
        initialReporter = _initialReporter;
    }

    function createInitialReporter(IAugur _augur, IMarket _market, address _designatedReporter) public returns (IInitialReporter) {
        initialReporter.initialize(_market, _designatedReporter);
        return initialReporter;
    }
}
