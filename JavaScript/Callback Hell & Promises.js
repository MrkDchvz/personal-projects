let stocks = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Peanuts"]
    };
  
  
    is_shop_open = true;


//---------------------------------------------
//==============ASYNC & AWAIT v.2==============
//---------------------------------------------

function order(time, message) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(console.log(message))
      }, time);
  });
}

async function displayProccess() {
  const placeOrder = await order(0, "Order has been placed");
  const chopFruit = await order(2000, "Fruit has been chopped");
  const addLiquid = await order(1000, `${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
  const startMachine = await order(1000, "Machine has been started");
  const selectHolder = await order(2000, `${stocks.holder[0]} has selected`);
  const selectToppings = await order(3000,`${stocks.toppings[0]} has selected`);
  const serve = await order(2000, `Ice cream has been served`);
  

}


//---------------------------------------------
//==============ASYNC & AWAIT v.1==============
//---------------------------------------------

    function time(ms) {
        return new Promise((resolve, reject) => {
            if (is_shop_open) {
                setTimeout(resolve,ms);
            }
            else {
                reject(console.log("Error Occured!"))
            }
        })
    }
    
    async function displayProccess() {
        try {
            await time(0)
            console.log("Production has Started")
            await time(2000)
            console.log("Fruit has been chopped")
            await time(1000)
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            await time(1000)
            console.log("Machine Started")
            await time(2000)
            console.log( `${stocks.holder[0]} has selected`)
            await time(3000)
            console.log(`${stocks.toppings[0]} has selected`)
            await time(2000)
            console.log(`Ice cream has been served`)
        } catch (e) {
            console.log(error)
        }
       
    }
    
    
    displayProccess()


  


// ----------------------------------------------------
// ======================PROMISES======================
// ----------------------------------------------------
  order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work)
        }, time);
      }
    });
  }


  order(0, "Order placed")
  .then(() => {return order(2000, console.log("Fruit has been chopped"))})
  .then(() => {return order(1000, console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))})
  .then(() => {return order(1000, console.log("Machine Started"))})
  .then(() => {return order(2000, console.log( `${stocks.holder[0]} has selected`))})
  .then(() => {return order(3000, console.log(`${stocks.toppings[0]} has selected`))})
  .then(() => {return order(2000, console.log(`Ice cream has been served`))})




  









// ----------------------------------------------------
// ==================CALLBACK HELL=====================
// ----------------------------------------------------
  
  let order = (fruit_name, call_production) => {
    
    setTimeout(()=>{
      console.log(`${stocks.fruits[fruit_name]} was selected`)
      call_production();
    }, 2000)
    
  }
  
  let production = () => {
    setTimeout(() => {
      console.log("production has started");
      
      setTimeout(() => {
        console.log("fruit has been chopped");
      
        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        
          setTimeout(() => {
            console.log("Machine Started");
            
            setTimeout(() => {
              console.log(`${stocks.holder[0]} has selected`);
              
              setTimeout(() => {
                console.log(`${stocks.toppings[0]} has selected`);
                
                setTimeout(() => {
                  console.log(`Ice cream has been served`);
          }, 2000)
        }, 3000)
       }, 2000)
      }, 1000)  
     }, 1000)  
    }, 2000) 
   }, 0)
  };
  
  
  order(0, production);