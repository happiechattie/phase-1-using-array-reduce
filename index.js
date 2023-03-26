const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = function(total, num){
    return total + num;
}

const totalBatteries = batteryBatches.reduce(reducer, 0);