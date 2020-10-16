import { Customers } from '../models/Customers';
import { connect } from '../config';
import { Request, Response } from 'express';


export const create = (async (request: Request, response: Response) => {

    const { name, id, email, address } = request.body;

    try {
        const connection = await connect();
        const repo = connection.getRepository(Customers);
        const newCustomer = new Customers();
        newCustomer.name = name;
        newCustomer.id = id;
        newCustomer.address = address;
        newCustomer.email = email;
        const saved = await repo.save(newCustomer);
        response.send(saved);

    } catch (error) {
        response.send(error)
    }

});

export const gets = (async (request: Request, response: Response) => {

    const connection = await connect();
    const customer = connection.getRepository(Customers);
    const allCustomers = await customer.find();
    response.send(allCustomers);   

});

export const searchByEmail = (async (request: Request, response: Response) => {

    const connection = await connect();
    const customer = connection.getRepository(Customers);
    const email  = request.params.email;
    const result = await customer.find({
        where: [
          { email: email }
        ]
      });
    response.send(result);
});