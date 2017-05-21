/* eslint-disable no-console, no-shadow */
import DeepstreamServer from 'deepstream.io';
import DeepstreamAuth from './deepstream_auth';

var deepstream = new DeepstreamServer('deepstream.dev.yaml');

deepstream.set('authenticationHandler', new DeepstreamAuth);

deepstream.start();