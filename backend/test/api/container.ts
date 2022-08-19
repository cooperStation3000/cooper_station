import { Global } from '../../src/plugins/db';

Global.initDocker();
Global.docker.container.list().then(list => {
  list.forEach(e => {
    console.log(`[ e.data ]===>`, JSON.stringify(e.data, null, 2));
  });
});
