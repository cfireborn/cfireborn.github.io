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
import StorageBatchGetBlobsSingleResponse from './StorageBatchGetBlobsSingleResponse.js';
import StorageUserBlobResponse from './StorageUserBlobResponse.js';

/**
 * The StorageBatchGetBlobsResponse model module.
 * @module snapser-apis/StorageBatchGetBlobsResponse
 * @version cremebrulee: v1 SDK
 */
class StorageBatchGetBlobsResponse {
    /**
     * Constructs a new <code>StorageBatchGetBlobsResponse</code>.
     * @alias module:snapser-apis/StorageBatchGetBlobsResponse
     */
    constructor() { 
        
        StorageBatchGetBlobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageBatchGetBlobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageBatchGetBlobsResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageBatchGetBlobsResponse} The populated <code>StorageBatchGetBlobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBatchGetBlobsResponse();

            if (data.hasOwnProperty('blobs')) {
                obj['blobs'] = ApiClient.convertToType(data['blobs'], [StorageUserBlobResponse]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [StorageBatchGetBlobsSingleResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageBatchGetBlobsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageBatchGetBlobsResponse</code>.
     */
    static validateJSON(data) {
        if (data['blobs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['blobs'])) {
                throw new Error("Expected the field `blobs` to be an array in the JSON data but got " + data['blobs']);
            }
            // validate the optional field `blobs` (array)
            for (const item of data['blobs']) {
                StorageUserBlobResponse.validateJSON(item);
            };
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                StorageBatchGetBlobsSingleResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:snapser-apis/StorageUserBlobResponse>} blobs
 */
StorageBatchGetBlobsResponse.prototype['blobs'] = undefined;

/**
 * @member {Array.<module:snapser-apis/StorageBatchGetBlobsSingleResponse>} results
 */
StorageBatchGetBlobsResponse.prototype['results'] = undefined;






export default StorageBatchGetBlobsResponse;

