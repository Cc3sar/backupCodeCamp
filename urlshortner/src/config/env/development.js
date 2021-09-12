require('dotenv').config();

const devConfig = {
    port: process.env.PORT,

    dbUrl: process.env.DB_URL,

    mongoDebug: true
};

export default devConfig;