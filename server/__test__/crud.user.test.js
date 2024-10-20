const request = require("supertest");
const yup = require("yup");
const db = require("../models");
const app = require("../app");
const appRequest = request(app);

const userResponseSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    birthday: yup.date().required(),
    isMale: yup.boolean().required(),
    // avatar: yup.mixed().oneOf([null, yup.string()]),
    avatar: yup.string().nullable(),
})

const bodyResponsePostSchema = yup.object({
    data: userResponseSchema
})
const getUserDataSuccess = () => ({
  firstName: "Brad",
  lastName: "Rotitt",
  email: `rotitt_${Date.now()}@gmail.com`,
  password: "pitt_1123",
  birthday: "1973-12-18",
  isMale: true,
});

const getUserDataError = () => ({
    firstName: "",
    lastName: "Rotitt",
    email: `rotitt_${Date.now()}@gmail.com`,
    password: "pitt_1123",
    birthday: "1973-12-18",
    isMale: true,
  });

const user = getUserDataSuccess();

afterAll(()=>{
    return db.sequelize.close();
})
describe("register test", () => {
  test("user success register", async () => {
    const response = await appRequest.post("/users").send(user);
    expect(response.statusCode).toBe(201); // перевіряємо статус код
    expect(response.body.data.hasOwnProperty('password')).toBe(false); // перевірили чи немає пароля 
    expect(bodyResponsePostSchema.isValidSync(response.body)).toBe(true);
  });

  test("user repeat email 409", async () => {
    const response = await appRequest.post("/users").send(user);
    expect(response.statusCode).toBe(409); // перевіряємо статус код
  });


  test("user empty data 400", async () => {
    const response = await appRequest.post("/users").send({});
    expect(response.statusCode).toBe(400); // перевіряємо статус код
  });

  test("user empty any field 400", async () => {
    const response = await appRequest.post("/users").send(getUserDataError());
    expect(response.statusCode).toBe(400); // перевіряємо статус код
  });


  it("displays all users", async () => {
    const response = (await appRequest.get("/users"));
    expect(response.statusCode).toBe(200);
  });
  it("displays one user", async () => {
    const response = (await appRequest.get("/users/1"));
    expect(response.statusCode).toBe(200);
  });
  it("delete one user", async () => {
    const response = (await appRequest.delete("/users/1"));
    expect(response.statusCode).toBe(200);
  });
});
