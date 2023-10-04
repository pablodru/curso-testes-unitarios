import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => ({
  v4: () => "uuid do Pablo"
}))

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });
  it("should return protocol", async () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const boolean = faker.datatype.boolean()
    const response = generateProtocolForPacient(firstName, lastName, boolean);
    console.log(response.protocol)
    expect(response).toEqual({
        priority: boolean,
        date: new Date(),
        pacient: `${firstName} ${lastName}`,
        protocol: 'uuid do Pablo'
    })
  })
});