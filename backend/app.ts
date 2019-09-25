import app from './src/server/server';
import env from './src/config/local';

app.listen(parseInt(env.BACK_END_PORT), env.HOSTNAME, () => {
  console.log(`Server runing on http://${env.HOSTNAME}:${env.BACK_END_PORT}`);
});
