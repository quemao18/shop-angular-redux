import { Request, Response, NextFunction } from 'express';
import { routesCustomer } from './routes/customer';
import { routesOrder } from './routes/order';
import { routesProduct } from './routes/product';

export const rest = (): any => {

    const express = require('express');
    const bodyParser = require('body-parser');
    const app: any = express();
    const API_PREFIX = 'api';
    const cors  = require('cors');

    // Strip API from the request URI
    app.use((req: Request, res: Response, next: NextFunction) => {
        if (req.url.indexOf(`/${API_PREFIX}/`) === 0) {
            req.url = req.url.substring(API_PREFIX.length + 1);
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });

    //cors 
    app.use(cors());

    // Parse Query String
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    // Parse posted JSON body
    app.use(bodyParser.json());     

    // Handle API endpoint routes
    routesCustomer(app);
    routesProduct(app);
    routesOrder(app);
    // Done! 
    return app;

};