// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Capture extends APIResource {
  /**
   * Capture an event
   */
  create(body: CaptureCreateParams, options?: RequestOptions): APIPromise<CaptureCreateResponse> {
    return this._client.post('/capture', { body, ...options });
  }
}

export interface CaptureCreateResponse {
  success: boolean;
}

export interface CaptureCreateParams {
  name: string;

  data?: { [key: string]: unknown };

  timestamp?: string;

  user_id?: string;
}

export declare namespace Capture {
  export {
    type CaptureCreateResponse as CaptureCreateResponse,
    type CaptureCreateParams as CaptureCreateParams,
  };
}
