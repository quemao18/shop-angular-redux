import { Request, Response, Router } from 'express';
import { create, gets, searchByEmail } from '../controller/customer';

export const routesCustomer = (app: Router) => {
  
    // GET /hello
    app.get('/customers', (req: Request, res: Response) => {
        gets(req, res).catch(err => console.log(err));
        return;
    });
  
    app.post('/customers/create', (req: Request, res: Response) => {
        create(req, res).catch(err => console.log(err));
        return;
    });

    app.get('/customers/email/:email', (req: Request, res: Response) => {
        searchByEmail(req, res).catch(err => console.log(err));
        return;
    });
  
};