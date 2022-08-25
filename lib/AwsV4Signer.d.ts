import { Credentials } from '@aws-sdk/types';
import Connection from './Connection';
import * as http from 'http';

interface AwsV4SignerOptions {
  credentials: Credentials;
  region: string;
}

export interface AwsV4SignerResponse {
  Connection: Connection;
  buildSignedRequestObject(request: any): http.ClientRequestArgs;
}

export default function AwsV4Signer(opts: AwsV4SignerOptions): AwsV4SignerResponse;

export {};
