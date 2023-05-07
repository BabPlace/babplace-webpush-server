import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';
import { AddressInfo } from 'net';
import { corsOptions } from './config/options';
import 'dotenv/config'

const app = express();
const port = 6003;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', router);

const listener = app.listen(port, () => {
  const address = listener?.address() as AddressInfo;
  console.log(`Listening on port ${address.port}`);
});
