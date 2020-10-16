import { Products } from '../models/Products';
import { connect } from '../config';
import { Categories } from '../models/Categories';
import { Request, Response } from 'express';


export const create = (async (request: Request, response: Response) => {

    const { name, image, description, category_id, price } = request.body;

    try {
        const connection = await connect();

        const repo = connection.getRepository(Products);

        const product = new Products();
        product.name = name;
        product.image = image;
        product.category_id = category_id;
        product.description = description;
        product.price = price;

        const saved = await repo.save(product);

        response.send(saved);

    } catch (error) {
        response.send(error)
    }

});

export const gets = (async (request: Request, response: Response) => {

    const connection = await connect();
    const products = connection.getRepository(Products);
    const allProducts = await products.find({ relations: ["category"] });
    response.send(allProducts);

});

export const createCategory = (async (request: Request, response: Response) => {

    const { name } = request.body;

    try {
        const connection = await connect();

        const repo = connection.getRepository(Categories);

        const product = new Categories();
        product.name = name;
        const saved = await repo.save(product);

        response.send(saved);

    } catch (error) {
        response.send(error)
    }

});