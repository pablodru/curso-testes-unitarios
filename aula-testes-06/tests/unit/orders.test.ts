import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    // TODO
    const date = new Date().getTime().toString()

    jest.spyOn(orderRepository, "create").mockImplementationOnce(() :any => {
      return {
        protocol: date,
        status: 'IN_PREPARATION'
      }
    })
    const response = await createOrder({client: faker.person.fullName(), description: faker.commerce.productName()})
    expect(response.protocol).toBe(date);
    expect(response.status).toBe('IN_PREPARATION')
  });

  it("should return an order based on the protocol", async () => {
    // TODO
    const date = new Date().getTime().toString()

    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce(() :any => {
      return {
        protocol: date,
        status: 'IN_PREPARATION'
      }
    })
    const response = await getOrderByProtocol(date)
    expect(response.protocol).toBe(date);
    expect(response.status).toBe('IN_PREPARATION')
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // TODO
    const date = new Date().getTime().toString()
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce(() :any => {
      return {
        protocol: date,
        status: 'INVALID'
      }
    })
    const response = await getOrderByProtocol(date)
    expect(response.protocol).toBe(date);
    expect(response.status).toBe('INVALID')
  });
});