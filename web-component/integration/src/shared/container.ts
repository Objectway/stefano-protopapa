import 'reflect-metadata';
import {Container} from 'inversify';
import {HttpClient} from '@owui-commons/http';

const container = new Container();

container.bind<HttpClient>(HttpClient).toConstantValue(new HttpClient());

export {container};
