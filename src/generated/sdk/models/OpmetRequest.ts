/* tslint:disable */
/* eslint-disable */
/**
 * IBL API
 * IBL API for weather info.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OpmetRequestParam } from './OpmetRequestParam';
import {
    OpmetRequestParamFromJSON,
    OpmetRequestParamFromJSONTyped,
    OpmetRequestParamToJSON,
} from './OpmetRequestParam';

/**
 * Request body
 * @export
 * @interface OpmetRequest
 */
export interface OpmetRequest {
    /**
     * 
     * @type {string}
     * @memberof OpmetRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OpmetRequest
     */
    method: OpmetRequestMethodEnum;
    /**
     * 
     * @type {Array<OpmetRequestParam>}
     * @memberof OpmetRequest
     */
    params: Array<OpmetRequestParam>;
}


/**
 * @export
 */
export const OpmetRequestMethodEnum = {
    Query: 'query'
} as const;
export type OpmetRequestMethodEnum = typeof OpmetRequestMethodEnum[keyof typeof OpmetRequestMethodEnum];


/**
 * Check if a given object implements the OpmetRequest interface.
 */
export function instanceOfOpmetRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function OpmetRequestFromJSON(json: any): OpmetRequest {
    return OpmetRequestFromJSONTyped(json, false);
}

export function OpmetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpmetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'method': json['method'],
        'params': ((json['params'] as Array<any>).map(OpmetRequestParamFromJSON)),
    };
}

export function OpmetRequestToJSON(value?: OpmetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'method': value.method,
        'params': ((value.params as Array<any>).map(OpmetRequestParamToJSON)),
    };
}
