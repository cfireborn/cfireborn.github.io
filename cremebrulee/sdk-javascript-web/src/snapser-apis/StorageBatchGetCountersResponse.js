/**
 * cremebrulee
 * Your custom SDK
 *
 * The version of the OpenAPI document: cremebrulee: v1 SDK
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient.js';
import StorageBatchGetCountersSingleResponse from './StorageBatchGetCountersSingleResponse.js';
import StorageUserCounterResponse from './StorageUserCounterResponse.js';

/**
 * The StorageBatchGetCountersResponse model module.
 * @module snapser-apis/StorageBatchGetCountersResponse
 * @version cremebrulee: v1 SDK
 */
class StorageBatchGetCountersResponse {
    /**
     * Constructs a new <code>StorageBatchGetCountersResponse</code>.
     * @alias module:snapser-apis/StorageBatchGetCountersResponse
     */
    constructor() { 
        
        StorageBatchGetCountersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageBatchGetCountersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageBatchGetCountersResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageBatchGetCountersResponse} The populated <code>StorageBatchGetCountersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBatchGetCountersResponse();

            if (data.hasOwnProperty('counters')) {
                obj['counters'] = ApiClient.convertToType(data['counters'], [StorageUserCounterResponse]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [StorageBatchGetCountersSingleResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageBatchGetCountersResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageBatchGetCountersResponse</code>.
     */
    static validateJSON(data) {
        if (data['counters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['counters'])) {
                throw new Error("Expected the field `counters` to be an array in the JSON data but got " + data['counters']);
            }
            // validate the optional field `counters` (array)
            for (const item of data['counters']) {
                StorageUserCounterResponse.validateJSON(item);
            };
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                StorageBatchGetCountersSingleResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:snapser-apis/StorageUserCounterResponse>} counters
 */
StorageBatchGetCountersResponse.prototype['counters'] = undefined;

/**
 * @member {Array.<module:snapser-apis/StorageBatchGetCountersSingleResponse>} results
 */
StorageBatchGetCountersResponse.prototype['results'] = undefined;






export default StorageBatchGetCountersResponse;

