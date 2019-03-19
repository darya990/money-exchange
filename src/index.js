// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
      }
      if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
      }
      if (currency < 1){
        return  {};
      }

      result.H = Math.floor(currency/50);
      currency = currency -(result.H * 50);
      result.Q = Math.floor((currency / 25));
      currency = currency -(result.Q* 25);
      result.D = Math.floor((currency /10));
      currency = currency -(result.D * 10);
      result.N = Math.floor((currency /5));
      currency = currency -(result.N * 5);
      result.P = Math.floor((currency /1));

      for (let key in result) {
        if (result[key]===0) {
          delete result[key];
        }
      }
      return result;

        }
    
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
