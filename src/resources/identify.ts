// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identify extends APIResource {
  /**
   * Identify a user
   */
  create(body: IdentifyCreateParams, options?: RequestOptions): APIPromise<IdentifyCreateResponse> {
    return this._client.post('/identify', { body, ...options });
  }
}

export interface IdentifyCreateResponse {
  success: boolean;
}

export interface IdentifyCreateParams {
  user_id: string;

  attributes?: { [key: string]: unknown };

  email?: string;

  name?: string;
}

export declare namespace Identify {
  export {
    type IdentifyCreateResponse as IdentifyCreateResponse,
    type IdentifyCreateParams as IdentifyCreateParams,
  };
}
