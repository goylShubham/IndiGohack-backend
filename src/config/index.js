const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: 8000,
    DATABASE: {
        HOST: '10.128.6.83',
        USER: 'mysql',
        PWD: 'password',
        NAME: 'sampledb',
        DIALECT: 'mysql'
    },
    APP_SECRET: 'indigohack_backend',
};
