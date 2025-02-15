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
import StorageReplaceBlobRequest from './StorageReplaceBlobRequest.js';

/**
 * The StorageBatchReplaceBlobRequest model module.
 * @module snapser-apis/StorageBatchReplaceBlobRequest
 * @version cremebrulee: v1 SDK
 */
class StorageBatchReplaceBlobRequest {
    /**
     * Constructs a new <code>StorageBatchReplaceBlobRequest</code>.
     * @alias module:snapser-apis/StorageBatchReplaceBlobRequest
     */
    constructor() { 
        
        StorageBatchReplaceBlobRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageBatchReplaceBlobRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageBatchReplaceBlobRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageBatchReplaceBlobRequest} The populated <code>StorageBatchReplaceBlobRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBatchReplaceBlobRequest();

            if (data.hasOwnProperty('blobs')) {
                obj['blobs'] = ApiClient.convertToType(data['blobs'], [StorageReplaceBlobRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageBatchReplaceBlobRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageBatchReplaceBlobRequest</code>.
     */
    static validateJSON(data) {
        if (data['blobs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['blobs'])) {
                throw new Error("Expected the field `blobs` to be an array in the JSON data but got " + data['blobs']);
            }
            // validate the optional field `blobs` (array)
            for (const item of data['blobs']) {
                StorageReplaceBlobRequest.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:snapser-apis/StorageReplaceBlobRequest>} blobs
 */
StorageBatchReplaceBlobRequest.prototype['blobs'] = undefined;






export default StorageBatchReplaceBlobRequest;

