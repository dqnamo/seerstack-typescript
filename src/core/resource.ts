// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Seerstack } from '../client';

export abstract class APIResource {
  protected _client: Seerstack;

  constructor(client: Seerstack) {
    this._client = client;
  }
}
