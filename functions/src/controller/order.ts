import { connect } from '../config';
import { Request, Response } from 'express';
import { Orders } from '../models/Orders';


export const create = (async (request: Request, response: Response) => {

    const { customer_id, cart, id } = request.body;
    try {
        const connection = await connect();
        const repo = connection.getRepository(Orders);

        cart.forEach(async(element: any) => {
            const order = new Orders();
            order.customer = customer_id;
            order.id = id;
            order.price = element.price;
            order.qty = element.qty;
            order.product = element.product_id;
            await repo.save(order); 
        });

        response.send({id: id, msg:'order saved'});

    } catch (error) {
        response.send(error)
    }

});


export const getByCustomerId = (async (request: Request, response: Response) => {

    const connection = await connect();
    const order = connection.getRepository(Orders);
    const customer_id  = request.params.customer_id;
    const result = await order.find({
        relations: ["customer", "product"],
        where: [
          { customer: customer_id }
        ],
        order: {
            order_id: -1
        }
      });
    response.send(result);

});