import { Request, Response, Router } from 'express';
import { gets, create } from '../controller/product';

export const routesProduct = (app: Router) => {
  
    // GET /hello
    app.get('/products', (req: Request, res: Response) => {
        // res.send('Home API!');
        gets(req, res).catch(err => console.log(err));
        return;
    });
  
    app.post('/products/create', (req: Request, res: Response) => {
        // res.send('Home API!');
        create(req, res).catch(err => console.log(err));
        return;
    });
  
};