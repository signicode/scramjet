///<reference path="../node_modules/@types/node/index.d.ts"/>
import {Readable, Writable, Transform, PassThrough, WritableOptions} from "stream";

import {EventEmitter} from "events";

type AsyncGeneratorFunction<T=any> = (...args: any[]) => {[Symbol.asyncIterator]: {next(): Promise<{value: T, done: boolean}>}}
type AsyncFunction = (...args: any[]) => Promise<any>;
