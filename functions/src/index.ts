import { RuntimeOptions, runWith } from 'firebase-functions';
import { rest } from './rest';

const express = rest();
const settings: RuntimeOptions = {
    timeoutSeconds: 30,
    memory: '128MB'
};
export const api = runWith(settings).https.onRequest(express);
