import { ConnectionOptions, Connection, createConnection, getConnection } from 'typeorm';

// Will be true on deployed functions
export const prod = process.env.NODE_ENV === 'production';

export const config: ConnectionOptions = {
    name: 'mspos',
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root', // review
    password: 'admin', // review
    database: 'mpos_shop',
    synchronize: true,
    logging: false,
    entities: [
       'lib/models/**/*.js'
    ],

    // Production Mode
    ...(prod && {
        database: 'decasta3_mpos_shop',
        username: 'decasta3_mpos_shop',
        password: '0+.8Ppx!~,}_',
        host: 'decasta.com.ve',
        logging: false
        // synchronize: false,
        // extra: {
        //     socketPath: '/cloudsql/YOUR_CONNECTION_NAME' // change
        // },
    })
 }

 export const connect = async () => {

    let connection: Connection;

    try {
        connection = getConnection(config.name)
        // console.log(connection)
    } catch(err) {
        connection = await createConnection(config);
    }

    return connection;
}