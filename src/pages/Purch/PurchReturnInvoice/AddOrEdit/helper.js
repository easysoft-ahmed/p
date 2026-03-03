export const calcNetTotal = (myState)=>{
    console.log(myState.DiscountP);
    console.log(myState.DiscountValue);
    console.log(myState.TaxRate);
    console.log(myState.TaxTSP);
    
    let firstStep = Number(myState.DiscountP * myState.SumTotal / 100);
    let secondStep = Number(myState.DiscountValue);
    let thirdStep = Number(myState.SumTotal * myState.TaxRate / 100)
    let fourthStep = Number(myState.SumTotal * myState.TaxTSP / 100)
    return Number(myState.SumTotal - (secondStep + firstStep) + thirdStep - fourthStep) 
}