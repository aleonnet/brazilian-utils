import { Ceara } from './ceara';

export class Maranhao extends Ceara {
  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '12';
  }
}
