import { messages } from 'elasticio-node';
import axios from 'axios';

export async function processAction(msg: any, cfg: any) {
  this.logger.info(`"webhook-test" trigger started, msg: ${JSON.stringify(msg)}, cfg: ${JSON.stringify(cfg)}`);

  this.logger.info('"webhook-test" trigger is done, emitting...');
  return messages.newMessageWithBody({});
}

export async function startup(cfg) {
  this.logger.info('startup hook');
  if (cfg.url) await axios.get(cfg.url);
}

export async function shutdown(cfg) {
  this.logger.info('shutdown hook');
  if (cfg.url) await axios.get(cfg.url);
}

module.exports.process = processAction;
module.exports.startup = startup;
module.exports.shutdown = shutdown;
