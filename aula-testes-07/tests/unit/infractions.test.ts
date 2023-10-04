import { getInfractionsFrom } from "infractions-service";
import * as infractionsRepository from "../../src/infractions-repository";
import * as usersRepository from "../../src/users-repository";

describe("Infractions Service Tests", () => {
    it("should get infractions from user", async () => {
        // TODO
        jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce(
            (): any => {
                return {
                    id: 1,
                    firstName: "Pablo",
                    lastName: "Drumond",
                    licenseId: "1",
                };
            }
        );
        const date = new Date();
        jest.spyOn(
            infractionsRepository,
            "getInfractionsFrom"
        ).mockImplementationOnce((): any => {
            return [
                {
                    id: "1",
                    date: date,
                    description: "description",
                    cost: 1000,
                    level: "LIGHT",
                    userId: "1",
                },
            ];
        });
        const response = await getInfractionsFrom("1");
        expect(response.id).toBe(1);
        expect(response.firstName).toBe("Pablo");
        expect(response.lastName).toBe("Drumond");
        expect(response.licenseId).toBe("1");
        expect(response.infractions).toEqual([
            {
                id: "1",
                date,
                description: "description",
                cost: 1000,
                level: "LIGHT",
                userId: "1",
            },
        ]);
    });

    it("should throw an error when driver license does not exists", async () => {
        // TODO
        jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce(
          (): any => {
              return undefined;
          }
      );
      const response = await getInfractionsFrom("1");
        expect(response).rejects.toEqual({
          type: "NOT_FOUND", message: "Driver not found." 
        })
    });
});
