const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user
test("should add new user if user is 18 or older", () => {
    const scooterApp = new ScooterApp();
    const user = scooterApp.registerUser("user1", "password", 18);
    expect(scooterApp.registeredUsers).toHaveProperty("user1");
    expect(scooterApp.registeredUsers["user1"]).toBe(user);
  });
  
  test("should throw an error if user is already registered", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("user1", "password", 18);
    expect(() => scooterApp.registerUser("user1", "password", 18))
      .toThrowError("User already registered");
  });
  
  test("registerUser should throw an error if user is less than 18 years old", () => {
    const scooterApp = new ScooterApp();
    expect(() => scooterApp.registerUser("user1", "password", 17))
      .toThrowError("User must be 18 years or older to register");
  });
  
  // Log in
  test("loginUser should log the user in and return the user", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("user1", "password", 18);
    const loggedInUser = scooterApp.loginUser("user1", "password");
    expect(loggedInUser.loggedIn).toBe(true);
  });
  
  test("should throw an error if username or password is incorrect", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("user1", "password", 18);
    expect(() => scooterApp.loginUser("user2", "password"))
      .toThrowError("Username or password is incorrect");
    expect(() => scooterApp.loginUser("user1", "incorrectPassword"))
      .toThrowError("Username or password is incorrect");
  });
  
  // Log out
  test("should log the user out and return the user", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("user1", "password", 18);
    const loggedInUser = scooterApp.loginUser("user1", "password");
    const loggedOutUser = scooterApp.logoutUser("user1");
    expect(loggedOutUser.loggedIn).toBe(false);
  });
  
  test("should throw an error if the user is not logged in", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("user1", "password", 18);
    expect(() => scooterApp.logoutUser("user1"))
      .toThrowError("No such user is logged in");
  });
  
  // Rent scooter
  test("should rent a scooter to the user and then return the scooter", () => {
    const scooter = scooterApp.rentScooter("station1");
    expect(scooterApp.stations["station1"][0]).toEqual(scooter);
    expect(scooterApp.stations["station1"].length).toBe(1);
  });
  test("should throw an error if the station does not exist", () => {
    expect(() => {
      scooterApp.rentScooter(undefined);
    }).toThrowError("No such station");
  });
// dock scooter
dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station error");
    }
  
    let scooters = this.stations[station];
    if (scooters.indexOf(scooter) > -1) {
      throw new Error("Scooter already at station error");
    }
  
    scooters.push(scooter);
    scooter.dock();
    console.log("Scooter is docked at station");
  
}
  