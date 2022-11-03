import app from './app';
import config from './config';
import { sequelize } from './database';

export async function runServer() {
  try {
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
    await sequelize.authenticate();
    console.log('Connection Database has been established successfully.');
    app.listen(config.HOST_SERVER, () => {
      console.log(`server listening on ${config.HOST_SERVER}:${config.PORT_SERVER}`);
      console.log('kill server press ctrl + c');
    });
  } catch (error) {
    console.error(error);
  }
}

runServer();

process.on('uncaughtException', (error) => {
  console.error('uncaugth exception: ', error);
});
