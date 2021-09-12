import app from './app';
import appConfig from '../src/config/env';
import mongoConnect from '../src/config/mongoConnect';

mongoConnect();

app.listen(appConfig.port, _ => console.log(`Server On PORT ${ appConfig.port }`));