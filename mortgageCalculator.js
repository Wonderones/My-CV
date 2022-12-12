//text input
const purchasePriceInput = document.querySelector(".purchase-price");
const loanMarginInput = document.querySelector(".loan-margin");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");
const downPaymentInput = document.querySelector(".down-payment-input");


//Swich input
//const spaLegalInput = document.querySelector("#customSwitch1");
const spaLegalInput = 0;
const spaDisbursementInput = 0;
const motInput = 0;
const loanLegalInput = 0;
const loanDisbursementInput = 0;
const loanStampDutyInput = 0;
const valuationFeeInput = 0;
const motLegalInput = 0;

//Text result ouput
const loanEMIValue = document.querySelector(".loan-emi");
const totalLoanPrincipalValue = document.querySelector(".total-principal");
const totalInterestValue = document.querySelector(".total-interest");
const totalAmountValue = document.querySelector(".total-amount");
const spaLegalFeeValue = document.querySelector(".spa-legal");
const spaDisbursementValue = document.querySelector(".spa-disbursement");
const motValue = document.querySelector(".spa-mot");
const loanLegalFeeValue = document.querySelector(".loan-legal");
const loanDisbursementValue = document.querySelector(".loan-disbursement");
const loanStampDutyValue = document.querySelector(".loan-stamp-duty");
const valuationFeeValue = document.querySelector(".valuation-fee");
const motLegalFeeValue = document.querySelector(".mot-legal");
const downPaymentValue = document.querySelector(".down-payment");
const totalCashValue = document.querySelector(".total-cash");
const stage1AmountValue = document.querySelector(".stage1-amount");
const stage2aAmountValue = document.querySelector(".stage2a-amount");
const stage2bAmountValue = document.querySelector(".stage2b-amount");
const stage2cAmountValue = document.querySelector(".stage2c-amount");
const stage2dAmountValue = document.querySelector(".stage2d-amount");
const stage2eAmountValue = document.querySelector(".stage2e-amount");
const stage2fAmountValue = document.querySelector(".stage2f-amount");
const stage2gAmountValue = document.querySelector(".stage2g-amount");
const stage2hAmountValue = document.querySelector(".stage2h-amount");
const stage3to5AmountValue = document.querySelector(".stage3to5-amount");
const stage1TotalInterestValue = document.querySelector(".stage1-total-interest");
const stage2aTotalInterestValue = document.querySelector(".stage2a-total-interest");
const stage2bTotalInterestValue = document.querySelector(".stage2b-total-interest");
const stage2cTotalInterestValue = document.querySelector(".stage2c-total-interest");
const stage2dTotalInterestValue = document.querySelector(".stage2d-total-interest");
const stage2eTotalInterestValue = document.querySelector(".stage2e-total-interest");
const stage2fTotalInterestValue = document.querySelector(".stage2f-total-interest");
const stage2gTotalInterestValue = document.querySelector(".stage2g-total-interest");
const stage2hTotalInterestValue = document.querySelector(".stage2h-total-interest");
const stage3to5TotalInterest = document.querySelector(".stage3to5-total-interest");

const calculateBtn = document.querySelector("#calculate-btn");
const resetBtn = document.querySelector("#reset-btn");
const toggleBtn = document.querySelector("#customSwitch1");

//create variables
let purchasePrice = parseFloat(purchasePriceInput.value.replace(/,/g, ''));
let loanMarginAmount = parseFloat(loanMarginInput.value);
let loanMarginPercentage = loanMarginAmount / 100;
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);
let interest = interestRate / 12 / 100;
let loanTenureMonths = loanTenure *12;
let downPayment = parseFloat(downPaymentInput.value.replace(/,/g, ''));
let loanAmount = parseFloat((purchasePrice * loanMarginPercentage) - downPayment);
let spaLegalFee = parseFloat(spaLegalInput.value);
let spaDisbursement = 0;
let mot = parseFloat(motInput.value);
let loanLegalFee = parseFloat(loanLegalInput.value);
let loanDisbursement = 0;
let loanStampDuty = parseFloat(loanStampDutyInput.value);
let loanValuationFee = parseFloat(valuationFeeInput.value);
let totalCashRequired = 0;
let totalLoanPrincipal = 0;
let progressive = parseFloat(purchasePrice * loanMarginPercentage);
let stage1Amount = parseFloat(progressive * 0.1);
let stage2aAmount = parseFloat(progressive * 0.1);
let stage2bAmount = parseFloat(progressive * 0.15);
let stage2cAmount = parseFloat(progressive * 0.1);
let stage2dAmount = parseFloat(progressive * 0.1);
let stage2eAmount = parseFloat(progressive * 0.1);
let stage2fAmount = parseFloat(progressive * 0.05);
let stage2gAmount = parseFloat(progressive * 0.025);
let stage2hAmount = parseFloat(progressive * 0.025);
let stage3to5Amount = parseFloat(progressive * 0.25);
let stage1Interest = parseFloat((stage1Amount * interest)*0);
let stage2aInterest = parseFloat((stage2aAmount * interest)+ stage1Interest);
let stage2bInterest = parseFloat((stage2bAmount * interest)+ stage2aInterest);
let stage2cInterest = parseFloat((stage2cAmount * interest) + stage2bInterest);
let stage2dInterest = parseFloat((stage2dAmount * interest)+ stage2cInterest);
let stage2eInterest = parseFloat((stage2eAmount * interest)+stage2dInterest);
let stage2fInterest = parseFloat((stage2fAmount * interest)+stage2eInterest);
let stage2gInterest = parseFloat((stage2gAmount * interest)+stage2fInterest);
let stage2hInterest = parseFloat((stage2hAmount * interest)+stage2gInterest);
let stage3to5Interest = parseFloat((stage3to5Amount * interest)+stage2hInterest);




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

//spa Disbursement logic
const calculateSpaDisbursement = () => {
  let disbursementSpa = 0;
  if(purchasePrice >= 1) {
    disbursementSpa = 2300;
  }
  else if(purchasePrice == 0){
    disbursementSpa = 0;
}
  return disbursementSpa;
};

//loan Disbursement logic
const calculateLoanDisbursement = () => {
  let disbursementloan = 0;
  if(purchasePrice >= 1) {
    disbursementloan = 2300;
  }
  else if(purchasePrice == 0){
    disbursementloan = 0;
}
  return disbursementloan;
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

  let totalLoanPrincipalPayable = Math.round(loanAmount);
  totalLoanPrincipalValue.innerHTML = thousands_separators(totalLoanPrincipalPayable);

  let totalInterestPayable = Math.round(totalAmount - loanAmount);
  totalInterestValue.innerHTML = thousands_separators(totalInterestPayable);

  let spaLegalPayable = Math.round(calculateSpaLegal());
  spaLegalFeeValue.innerHTML = thousands_separators(spaLegalPayable);

  let spaDisbursementPayable = calculateSpaDisbursement();
  spaDisbursementValue.innerHTML = thousands_separators(spaDisbursementPayable);

  let motPayable = Math.round(calculateMot());
  motValue.innerHTML = thousands_separators(motPayable);

  let loanLegalPayable = Math.round(calculateLoanLegal());
  loanLegalFeeValue.innerHTML = thousands_separators(loanLegalPayable);

  let loanDisbursementPayable = calculateLoanDisbursement();
  loanDisbursementValue.innerHTML = thousands_separators(loanDisbursementPayable);

  let loanStampDutyPayable = Math.round(loanAmount * 0.005);
  loanStampDutyValue.innerHTML = thousands_separators(loanStampDutyPayable);

  let valuationFeePayable = Math.round(calculateValuationFee());
  valuationFeeValue.innerHTML = thousands_separators(valuationFeePayable)

  let downPaymentPayable = Math.round(downPayment);
  downPaymentValue.innerHTML = thousands_separators(downPaymentPayable);

  let totalCashPayable = Math.round(spaLegalPayable + spaDisbursementPayable + motPayable + loanLegalPayable + loanDisbursementPayable + loanStampDutyPayable + valuationFeePayable + downPaymentPayable);
  totalCashValue.innerHTML = thousands_separators(totalCashPayable);

  let totalstage1AmountPayable = Math.round(stage1Amount);
  stage1AmountValue.innerHTML = thousands_separators(totalstage1AmountPayable);

  let totalstage2aAmountPayable = Math.round(stage2aAmount);
  stage2aAmountValue.innerHTML = thousands_separators(totalstage2aAmountPayable);

  let totalstage2bAmountPayable = Math.round(stage2bAmount);
  stage2bAmountValue.innerHTML = thousands_separators(totalstage2bAmountPayable);

  let totalstage2cAmountPayable = Math.round(stage2cAmount);
  stage2cAmountValue.innerHTML = thousands_separators(totalstage2cAmountPayable);

  let totalstage2dAmountPayable = Math.round(stage2dAmount);
  stage2dAmountValue.innerHTML = thousands_separators(totalstage2dAmountPayable);

  let totalstage2eAmountPayable = Math.round(stage2eAmount);
  stage2eAmountValue.innerHTML = thousands_separators(totalstage2eAmountPayable);

  let totalstage2fAmountPayable = Math.round(stage2fAmount);
  stage2fAmountValue.innerHTML = thousands_separators(totalstage2fAmountPayable);

  let totalstage2gAmountPayable = Math.round(stage2gAmount);
  stage2gAmountValue.innerHTML = thousands_separators(totalstage2gAmountPayable);

  let totalstage2hAmountPayable = Math.round(stage2hAmount);
  stage2hAmountValue.innerHTML = thousands_separators(totalstage2hAmountPayable);

  let totalstage3to5AmountPayable = Math.round(stage3to5Amount);
  stage3to5AmountValue.innerHTML = thousands_separators(totalstage3to5AmountPayable);

  let stage1TotalInterestPayable = Math.round(stage1Interest);
  stage1TotalInterestValue.innerHTML = thousands_separators(stage1TotalInterestPayable);

  let stage2aTotalInterestPayable = Math.round(stage2aInterest);
  stage2aTotalInterestValue.innerHTML = thousands_separators(stage2aTotalInterestPayable);

  let stage2bTotalInterestPayable = Math.round(stage2bInterest);
  stage2bTotalInterestValue.innerHTML = thousands_separators(stage2bTotalInterestPayable);

  let stage2cTotalInterestPayable = Math.round(stage2cInterest);
  stage2cTotalInterestValue.innerHTML = thousands_separators(stage2cTotalInterestPayable);

  let stage2dTotalInterestPayable = Math.round(stage2dInterest);
  stage2dTotalInterestValue.innerHTML = thousands_separators(stage2dTotalInterestPayable);

  let stage2eTotalInterestPayable = Math.round(stage2eInterest);
  stage2eTotalInterestValue.innerHTML = thousands_separators(stage2eTotalInterestPayable);

  let stage2fTotalInterestPayable = Math.round(stage2fInterest);
  stage2fTotalInterestValue.innerHTML = thousands_separators(stage2fTotalInterestPayable);

  let stage2gTotalInterestPayable = Math.round(stage2gInterest);
  stage2gTotalInterestValue.innerHTML = thousands_separators(stage2gTotalInterestPayable);

  let stage2hTotalInterestPayable = Math.round(stage2hInterest);
  stage2hTotalInterestValue.innerHTML = thousands_separators(stage2hTotalInterestPayable);

  let stage3to5TTotalInterestPayable = Math.round(stage3to5Interest);
  stage3to5TotalInterest.innerHTML = thousands_separators(stage3to5TTotalInterestPayable);


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
//  purchasePrice = parseFloat(purchasePriceInput.value);
  purchasePrice = parseFloat(purchasePriceInput.value.replace(/,/g, ''));
  loanMarginAmount = parseFloat(loanMarginInput.value);
  loanMarginPercentage = loanMarginAmount / 100;
  interestRate = parseFloat(interestRateInput.value);
  loanTenure = parseFloat(loanTenureInput.value);
  interest = interestRate / 12 / 100;
  loanTenureMonths = loanTenure *12;
  downPayment = parseFloat(downPaymentInput.value.replace(/,/g, ''));
  loanAmount = parseFloat((purchasePrice * loanMarginPercentage) - downPayment);
  spaLegalFee = parseFloat(spaLegalInput.value);
  spaDisbursement = 0;
  mot = parseFloat(motInput.value);
  loanLegalFee = parseFloat(loanLegalInput.value);
  loanDisbursement = 0;
  loanValuationFee = parseFloat(valuationFeeInput.value);
  totalLoanPrincipal = 0;
  progressive = parseFloat(purchasePrice * loanMarginPercentage);
  stage1Amount = parseFloat(progressive * 0.1);
  stage2aAmount = parseFloat(progressive * 0.1);
  stage2bAmount = parseFloat(progressive * 0.15);
  stage2cAmount = parseFloat(progressive * 0.1);
  stage2dAmount = parseFloat(progressive * 0.1);
  stage2eAmount = parseFloat(progressive * 0.1);
  stage2fAmount = parseFloat(progressive * 0.05);
  stage2gAmount = parseFloat(progressive * 0.025);
  stage2hAmount = parseFloat(progressive * 0.025);
  stage3to5Amount = parseFloat(progressive * 0.25);
  stage1Interest = parseFloat((stage1Amount * interest)*0);
  stage2aInterest = parseFloat((stage2aAmount * interest)+ stage1Interest);
  stage2bInterest = parseFloat((stage2bAmount * interest)+ stage2aInterest);
  stage2cInterest = parseFloat((stage2cAmount * interest) + stage2bInterest);
  stage2dInterest = parseFloat((stage2dAmount * interest)+ stage2cInterest);
  stage2eInterest = parseFloat((stage2eAmount * interest)+stage2dInterest);
  stage2fInterest = parseFloat((stage2fAmount * interest)+stage2eInterest);
  stage2gInterest = parseFloat((stage2gAmount * interest)+stage2fInterest);
  stage2hInterest = parseFloat((stage2hAmount * interest)+stage2gInterest);
  stage3to5Interest = parseFloat((stage3to5Amount * interest)+stage2hInterest);
};



//calculate button. refresh value and calculate again
calculateBtn.addEventListener("click", () => {
  validateBlankInput()
  refreshInputValues();
  let emi = calculateEMI();
  updateData(emi);

});


//reset button, refresh all getValue
resetBtn.addEventListener("click", () => {
  document.getElementById("form-mortgage").reset();
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

//Function to validate button Press. incomplete need to add function to stop and need to built
const validateBlankInput = () => {

var form = document.getElementById("purchase-price").value;

if (form === '') {
  alert("Please fill in your '4 Digit PIN' in the box.");
return false;

} else {

}

};


// insert commas as thousands separators for purchase Price input
function addCommas(n){
  var rx=  /(\d+)(\d{3})/;
  return String(n).replace(/^\d+/, function(w){
    while(rx.test(w)){
      w= w.replace(rx, '$1,$2');
    }
    return w;
  });
};

// return integers and decimal numbers from input
// optionally truncates decimals- does not 'round' input

function validDigits(n, dec){
  n= n.replace(/[^\d\.]+/g, '');
  var ax1= n.indexOf('.'), ax2= -1;
  if(ax1!= -1){
    ++ax1;
    ax2= n.indexOf('.', ax1);
    if(ax2> ax1) n= n.substring(0, ax2);
    if(typeof dec=== 'number') n= n.substring(0, ax1+dec);
  }
  return n;
};

window.onload= function(){
  var n1= document.getElementById('purchase-price'),
  n2= document.getElementById('down-payment');
  n1.value='20,000';
  n2.value='0';

  n1.onkeyup= n1.onchange=n2.onkeyup=n2.onchange= function(e){
    e=e|| window.event;
    var who=e.target || e.srcElement,temp;
    if(who.id==='purchase-price')  temp= validDigits(who.value,2);
    else temp= validDigits(who.value);
    who.value= addCommas(temp);
  }
  n1.onblur= n2.onblur= function(){
    var temp=parseFloat(validDigits(n1.value)),
    temp2=parseFloat(validDigits(n2.value));
    if(temp)n1.value=addCommas(temp);
  }
};




function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}



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
