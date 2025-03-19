"use strict";
function calculateInvestment(data) {
    const { initialAmmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmmount < 0) {
        return "Initial investment must be more than 0.";
    }
    if (duration <= 0) {
        return "Invalid time period.";
    }
    if (expectedReturn < 0) {
        return "Expected return must be more than 0.";
    }
    let total = initialAmmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total *= 1 + expectedReturn;
        totalInterestEarned = total - totalContributions - initialAmmount;
        totalContributions += annualContribution;
        total += annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    ;
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('-------------------');
    }
}
const investmentData = {
    initialAmmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
