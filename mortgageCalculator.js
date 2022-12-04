//text input
const purchasePriceInput = document.querySelector(".purchase-price");
const loanMarginInput = document.querySelector(".loan-margin");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");
const downPaymentInput = document.querySelector(".down-payment-input");


//Swich input
const spaLegalInput = document.querySelector("#customSwitch1");
const spaDisbursementInput = document.querySelector("#customSwitch2");
const motInput = document.querySelector("#customSwitch3");
const loanLegalInput = document.querySelector("#customSwitch4");
const loanDisbursementInput = document.querySelector("#customSwitch5");
const loanStampDutyInput = document.querySelector("#customSwitch6");
const valuationFeeInput = document.querySelector("#customSwitch7");
const motLegalInput = document.querySelector("#customSwitch8");

//Text result ouput
const loanEMIValue = document.querySelector(".loan-emi");
const totalInterestValue = document.querySelector(".total-interest");
const totalAmountValue = document.querySelector(".total-amount");
const spaLegalFeeValue = document.querySelector(".spa-legal");
const spaDisbursementValue = document.querySelector(".spa-legal");
const motValue = document.querySelector(".spa-mot");
const loanLegalFeeValue = document.querySelector(".loan-legal");
const loanDisubursementValue = document.querySelector(".loan-disbursement");
const loanStampDutyValue = document.querySelector(".loan-stamp-duty");
const valuationFeeValue = document.querySelector(".valuation-fee");
const motLegalFeeValue = document.querySelector(".mot-legal");
const downPaymentValue = document.querySelector(".down-payment");
const totalCashValue = document.querySelector(".total-cash");

const calculateBtn = document.querySelector("#calculate-btn");
const toggleBtn = document.querySelector("#customSwitch1");

//create variables
let purchasePrice = parseFloat(purchasePriceInput.value);
let loanMarginAmount = parseFloat(loanMarginInput.value);
let loanMarginPercentage = loanMarginAmount / 100;
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);
let loanAmount = purchasePrice * loanMarginPercentage;
let interest = interestRate / 12 / 100;
let loanTenureMonths = loanTenure *12;
let downPayment = parseFloat(downPaymentInput.value);
let spaLegalFee = parseFloat(spaLegalInput.value);
let mot = parseFloat(motInput.value);
let loanLegalFee = parseFloat(loanLegalInput.value);
let loanStampDuty = parseFloat(loanStampDutyInput.value);
let loanValuationFee = parseFloat(valuationFeeInput.value);
let totalCashRequired = 0;

//calculate SPA Legal Fee
const calculateSpaLegal = () => {
  let legalFeeSpa = 0;
  if(purchasePrice <= 500000) {   //first 500K = 1% subject min RM500
    legalFeeSpa = purchasePrice * 0.01;
  }
  else if(purchasePrice <= 1000000){   //For thr subsequent 500K: 0.8%
    legalFeeSpa = (500000 * 0.01) + ((purchasePrice - 500000) * 0.008);
  }
  else if(purchasePrice <= 3000000){  //For subsequent RM2,000,000 0.7%
    legalFeeSpa = (500000 * 0.01) + (500000 * 0.008) + ((purchasePrice - 1000000) * 0.007);
  }
  else if(purchasePrice <= 5000000){   //For the subsequent RM2mil: 0.6%
    legalFeeSpa = (500000 * 0.01) + (500000 * 0.008) + (2000000 * 0.007) + ((purchasePrice - 3000000) * 0.006);
  }
  else if(purchasePrice > 5000000){   //For the subsequent RM2mil: 0.5%
    legalFeeSpa = (500000 * 0.01) + (500000 * 0.008) + (2000000 * 0.007) + (2000000 * 0.006)+((purchasePrice - 5000000) * 0.005);
  }

return legalFeeSpa
};

//calculate MOT
const calculateMot = () => {
  let mot = 0;
  if(purchasePrice <= 100000) {   //first 100K = 1%
    mot = purchasePrice * 0.01;
  }
  else if(purchasePrice <= 500000){   //For thr subsequent 400K: 2%
    mot = (100000 * 0.01) + ((purchasePrice - 100000) * 0.02);
  }
  else if(purchasePrice <= 1000000){  //For subsequent RM500,000 3%
    mot = (100000 * 0.01) + (400000 * 0.02) + ((purchasePrice - 500000) * 0.03);
  }
  else if (purchasePrice > 1000000){   //For the subsequent RM500K: 4%
    mot = (100000 * 0.01) + (400000 * 0.02) + (500000 * 0.03) + ((purchasePrice - 1000000) * 0.04);
  }

return mot
};

//calculate Loan Legal Fee
const calculateLoanLegal = () => {
  let legalFeeloan = 0;
  if(loanAmount <= 500000) {   //first 500K = 1% subject min RM500
    legalFeeloan = loanAmount * 0.01;
  }
  else if(loanAmount <= 1000000){   //For thr subsequent 500K: 0.8%
    legalFeeloan = (500000 * 0.01) + ((loanAmount - 500000) * 0.008);
  }
  else if(loanAmount <= 3000000){  //For subsequent RM2,000,000 0.7%
    legalFeeloan = (500000 * 0.01) + (500000 * 0.008) + ((loanAmount - 1000000) * 0.007);
  }
  else if(loanAmount <= 5000000){   //For the subsequent RM2mil: 0.6%
    legalFeeloan = (500000 * 0.01) + (500000 * 0.008) + (2000000 * 0.007) + ((loanAmount - 3000000) * 0.006);
  }
  else if(loanAmount > 5000000){   //For the subsequent RM2mil: 0.5%
    legalFeeloan = (500000 * 0.01) + (500000 * 0.008) + (2000000 * 0.007) + (2000000 * 0.006)+((loanAmount - 5000000) * 0.005);
  }

return legalFeeloan
};

const calculateValuationFee = () => {
  let valuationFee = 0;
  if(purchasePrice <= 100000) {   //first 100K = 0.25%
    valuationFee = purchasePrice * 0.0025;
  }
  else if(purchasePrice <= 2100000){   //For thr subsequent 2mil: 0.20%
    valuationFee = (100000 * 0.0025) + ((purchasePrice - 100000) * 0.0020);
  }
  else if(purchasePrice <= 9100000){  //For subsequent RM7mil 0.167%
    valuationFee = (100000 * 0.0025) + (2000000 * 0.0020) + ((purchasePrice - 2100000) * 0.00167);
  }
  else if(purchasePrice <= 24100000){   //For the subsequent RM15mil: 0.125%
    valuationFee = (100000 * 0.0025) + (2000000 * 0.0020) + (7000000 * 0.00167) + ((purchasePrice - 9100000) * 0.00125);
  }
  else if(purchasePrice <= 74100000){   //For the subsequent RM50mil: 0.10%
    valuationFee = (100000 * 0.0025) + (2000000 * 0.0020) + (7000000 * 0.00167) + (15000000 * 0.00125) + ((purchasePrice - 24100000) * 0.001);
  }
  else if(purchasePrice <= 274100000){   //For the subsequent RM200mil: 0.067%
    valuationFee = (100000 * 0.0025) + (2000000 * 0.0020) + (7000000 * 0.00167) + (15000000 * 0.00125) + (50000000 * 0.0010) + ((purchasePrice - 74100000) * 0.00067);
  }
  else if(purchasePrice <= 774100000){   //For the subsequent RM500mil: 0.05%
    valuationFee = (100000 * 0.0025) + (2000000 * 0.0020) + (7000000 * 0.00167) + (15000000 * 0.00125) + (50000000 * 0.0010) + (200000000 * 0.00067) + ((purchasePrice - 274100000) * 0.0005);
  }
  else if(purchasePrice > 774100000){   //excess of RM500mil: 0.04%
    valuationFee = (100000 * 0.0025) + (2000000 * 0.0020) + (7000000 * 0.00167) + (15000000 * 0.00125) + (50000000 * 0.0010) + (200000000 * 0.00067) + (500000000 * 0.0005) + ((purchasePrice - 500000000) * 0.0004);
  }

return valuationFee


};


//calculate EMI
const calculateEMI = () => {
  let emi = (loanAmount *
            interest) *
            (Math.pow(1 + interest, loanTenureMonths) /
              (Math.pow(1 + interest, loanTenureMonths) - 1));

  return emi;
};


//update value function
const updateData = (emi) => {
  loanEMIValue.innerHTML = thousands_separators(Math.round(emi));

  let totalAmount = Math.round(loanTenureMonths * emi);
  totalAmountValue.innerHTML = thousands_separators(totalAmount);

  let totalInterestPayable = Math.round(totalAmount - loanAmount);
  totalInterestValue.innerHTML = thousands_separators(totalInterestPayable);

  let spaLegalPayable = calculateSpaLegal();
  spaLegalFeeValue.innerHTML = thousands_separators(spaLegalPayable);

  let motPayable = calculateMot();
  motValue.innerHTML = thousands_separators(motPayable);

  let loanLegalPayable = calculateLoanLegal();
  loanLegalFeeValue.innerHTML = thousands_separators(loanLegalPayable);

  let loanStampDutyPayable = Math.round(loanAmount * 0.005);
  loanStampDutyValue.innerHTML = thousands_separators(loanStampDutyPayable);

  let valuationFeePayable = calculateValuationFee();
  valuationFeeValue.innerHTML = thousands_separators(valuationFeePayable)

  let downPaymentPayable = Math.round(downPayment);
  downPaymentValue.innerHTML = thousands_separators(downPaymentPayable);

  let totalCashPayable = Math.round(2300 + 2300 + spaLegalPayable + motPayable + loanLegalPayable + loanStampDutyPayable + valuationFeePayable + downPaymentPayable);
  totalCashValue.innerHTML = thousands_separators(totalCashPayable);
};

//call the function to calculate emi
const init = () => {
  let emi = calculateEMI();
  updateData(emi);
};

init();

//thousand seperator Function
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

//refresh input getValue
const refreshInputValues = () => {
//assign value not create new value
  purchasePrice = parseFloat(purchasePriceInput.value);
  loanMarginAmount = parseFloat(loanMarginInput.value);
  loanMarginPercentage = loanMarginAmount / 100;
  interestRate = parseFloat(interestRateInput.value);
  loanTenure = parseFloat(loanTenureInput.value);
  loanAmount = purchasePrice * loanMarginPercentage;
  interest = interestRate / 12 / 100;
  loanTenureMonths = loanTenure *12;
  downPayment = parseFloat(downPaymentInput.value);
  spaLegalFee = parseFloat(spaLegalInput.value);
  mot = parseFloat(motInput.value);
  loanLegalFee = parseFloat(loanLegalInput.value);
  loanValuationFee = parseFloat(valuationFeeInput.value);
};



//calculate button. refresh value and calculate again
calculateBtn.addEventListener("click", () => {
  refreshInputValues();
  let emi = calculateEMI();
  updateData(emi);

});

//Detecting Toggle Button Press
var toogleBtnClick = document.querySelectorAll(".custom-control-input").length;

//use loops to move
for (i = 0; i < toogleBtnClick;  i++) {   //if a button got press

  document.querySelectorAll(".custom-control-input")[i].addEventListener("click", () => {

    var buttonInnerHTML = this.innerHTML;   //then check the inner HTML of button got press

    //Function that refresh the value
    //Function to calculate value
})};



//Function to set Toggle button value
const changeValueToggle = () => {

var t = document.querySelector(".custom-control-input");

if(t.value==0){
  t.value = 1;
  } else if(t.value== 1){
    t.value=0;
  }

};

//


//Change value of switch
  //$(".custom-control-input").on('change', function() {
  //if ($(this).is(':checked')) {
  //    $(this).attr('data-id', '1');
  //}
  //else {
//     $(this).attr('data-id', '0');
  //}});

//  function Buttontoggle()
//{
//  var t = document.getElementById("customSwitch1");
//  if(t.value==0){
//      t.value = 1;
//  } else if(t.value== 1){
//      t.value=0;
///  }
//}

//set value of toogle button function






  // $("#customSwitch")[0] check switch value
