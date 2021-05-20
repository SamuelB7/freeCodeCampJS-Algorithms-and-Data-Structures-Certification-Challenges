function checkCashRegister(price, cash, cid) {
    let changeMoney = cash - price
    let cidSum = 0
    let change = []

    let changeMoneyArr = [
        ["ONE HUNDRED", 0],
        ["TWENTY", 0],
        ["TEN", 0],
        ["FIVE", 0],
        ["ONE", 0],
        ["QUARTER", 0],
        ["DIME", 0],
        ["NICKEL", 0],
        ["PENNY", 0]
    ]

    for(let i = 0; i < cid.length; i++) {
        cidSum = cidSum + cid[i][1]
    }
    console.log(cidSum, changeMoney)
    //console.log(cid[2][1])
    if(changeMoney > cidSum) {
        return {status: "INSUFFICIENT_FUNDS", change:[]}
    }

    if(changeMoney == cidSum) {
        return {status: "CLOSED", change:[...cid]}
    } else {
        while(changeMoney >= 100 && cid[8][1] >= 100) {
            changeMoneyArr[0][1] += 100
            changeMoney = changeMoney - 100
            cid[8][1] -= 100
        }
        while(changeMoney >= 20 && cid[7][1] >= 20) {
            changeMoneyArr[1][1] += 20
            changeMoney = changeMoney - 20
            cid[7][1] -= 20
        }
        while(changeMoney >= 10 && cid[6][1] >= 10) {
            changeMoneyArr[2][1] += 10
            changeMoney = changeMoney - 10
            cid[6][1] -= 10
        }
        while(changeMoney >= 5 && cid[5][1] >= 5) {
            changeMoneyArr[3][1] += 5
            changeMoney = changeMoney - 5
            cid[5][1] -= 5
        }
        while(changeMoney >= 1 && cid[4][1] >= 1) {
            changeMoneyArr[4][1] += 1
            changeMoney = changeMoney - 1
            cid[4][1] -= 1
        }
        while(changeMoney >= 0.25 && cid[3][1] >= 0.25) {
            changeMoneyArr[5][1] += 0.25
            changeMoney = changeMoney - 0.25
            cid[3][1] -= 0.25
        }
        while(changeMoney >= 0.1 && cid[2][1] >= 0.1) {
            changeMoneyArr[6][1] += 0.1
            changeMoney = changeMoney - 0.1
            cid[2][1] -= 0.1
        }
        while(changeMoney >= 0.05 && cid[1][1] >= 0.05) {
            changeMoneyArr[7][1] += 0.05
            changeMoney = changeMoney - 0.05
            cid[1][1] -= 0.05
        }
        while(changeMoney > 0 && cid[0][1] >= 0.01) {
            changeMoneyArr[8][1] += 0.01
            changeMoney = changeMoney - 0.01
            cid[0][1] -= 0.01
        }

        if(changeMoney > 0) {
            return {status: "INSUFFICIENT_FUNDS", change:[]}
        }

        changeMoneyArr.forEach(element => {
            if(element[1] > 0) {
                change.push(element)
            }
        })

        return {status: "OPEN", change}
    }
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
/* console.log(checkCashRegister(
        3.26, 
        100, 
        [
            ["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.1], 
            ["QUARTER", 4.25], 
            ["ONE", 90], 
            ["FIVE", 55], 
            ["TEN", 20], 
            ["TWENTY", 60], 
            ["ONE HUNDRED", 100]
        ]
    )
) */


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))