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
/**
 * Query error
 * @export
 * @interface OpmetResponseErrorDTO
 */
export interface OpmetResponseErrorDTO {
    /**
     * 
     * @type {number}
     * @memberof OpmetResponseErrorDTO
     */
    code: number;
    /**
     * 
     * @type {any}
     * @memberof OpmetResponseErrorDTO
     */
    data: any | null;
    /**
     * 
     * @type {string}
     * @memberof OpmetResponseErrorDTO
     */
    message: string;
}

/**
 * Check if a given object implements the OpmetResponseErrorDTO interface.
 */
export function instanceOfOpmetResponseErrorDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function OpmetResponseErrorDTOFromJSON(json: any): OpmetResponseErrorDTO {
    return OpmetResponseErrorDTOFromJSONTyped(json, false);
}

export function OpmetResponseErrorDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpmetResponseErrorDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'data': json['data'],
        'message': json['message'],
    };
}

export function OpmetResponseErrorDTOToJSON(value?: OpmetResponseErrorDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'data': value.data,
        'message': value.message,
    };
}
