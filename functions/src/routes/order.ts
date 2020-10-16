import { Request, Response, Router } from 'express';
import { getByCustomerId, create } from '../controller/order';

export const routesOrder = (app: Router) => {
  
    app.get('/orders/customer_id/:customer_id', (req: Request, res: Response) => {
        getByCustomerId(req, res).catch(err => console.log(err));
        return;
    });
  
    app.post('/orders/create', (req: Request, res: Response) => {
        // res.send('Home API!');
        create(req, res).catch(err => console.log(err));
        return;
    });
  
};