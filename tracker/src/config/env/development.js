require('dotenv').config();

const devConfig = {
    "dbUrl": process.env.DB_URL,

    "port": process.env.PORT,

    "mongoDebug": true
}

export default devConfig;