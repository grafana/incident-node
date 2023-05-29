import type { Json } from './utils/json';

export type ClientResponse =
  | {
      success: false;
      error: { status: number; statusText: string; message: string };
    }
  | { success: true; payload: Json };

type Client = {
  fetch: (path: string, payload: Json) => Promise<ClientResponse>;
};
export default Client;

/**
 * A client for the Grafana Incident API
 */
export class GrafanaIncidentClient implements Client {
  private readonly _instanceUrl: string;
  private readonly _serviceAccountToken: string;

  /**
   * Construct a Client that knows how to access the Grafana Incident API for a given instanceUrl.
   */
  public constructor(instanceUrl: string, serviceAccountToken: string) {
    this._instanceUrl = instanceUrl;
    this._serviceAccountToken = serviceAccountToken;
  }

  public async fetch(path: string, payload: Json): Promise<ClientResponse> {
    const url = `${this._instanceUrl}/api/plugins/grafana-incident-app/resources/api/v1/${path}`;
    let response;
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this._serviceAccountToken}`,
        },
        body: JSON.stringify(payload, null, process.env.NODE_ENV === 'development' ? 1 : undefined),
      });
    } catch (e) {
      // Fetch does throw on network errors, so we want to handle them here
      return {
        success: false,
        error: {
          status: 500,
          statusText: 'Connection',
          message: 'Failure attempting to connect to Grafana Incident API',
        },
      };
    }

    if (response.ok) {
      try {
        const js = (await response.json()) as Json;
        return { success: true, payload: js };
      } catch {
        return {
          success: false,
          error: {
            status: 400,
            statusText: 'bad json',
            message: 'Failure parsing json',
          },
        };
      }
    }

    return {
      success: false,
      error: {
        status: response.status,
        statusText: response.statusText,
        message: await response.text(),
      },
    };
  }
}
