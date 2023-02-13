const Scooter = require('../src/Scooter');
const User = require('../src/User');

//typeof scooter === object 
describe('scooter instance integrity checks', () => {
  const scooter = new Scooter("Liverpool");
  test('instance has correct properties', () => {
    // edit this to be a real test!
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("charge");
    expect(scooter).toHaveProperty("serial");
    expect(typeof scooter.isBroken).toBe("boolean");
    expect(scooter.station).toBe("Liverpool");
  });

  test("instance static value incrementing", () =>{
  const scooter2 = new Scooter("Wirral");
  expect(scooter2.serial).toBe(scooter.serial + 1);
});
});

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
test("Scooter is charged above 20% and is not broken", ()=>{
  expect(charge).toBeGreaterThan(20);
  expect(isBroken).toBe(false);
  if(charge <= 20 && isBroken === true){
    throw new console.error("scooter needs to charge or scooter needs repairing");
  }
})
  //dock method
test("Scooter is returned to the station", ()=>{
  expect(user).toBe(null);
})
  //requestRepair method
  test("recharge", async () => {
   
    await scooter.recharge();
    
    expect(scooter.charge).toBe(100);
  });
  //charge method
  test("requestRepair", async () => {
    const scooter = new Scooter("Station 1");
    
    scooter.requestRepair();
    
    expect(scooter.isBroken).toBe(true);
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    expect(scooter.isBroken).toBe(false);
  });
})
