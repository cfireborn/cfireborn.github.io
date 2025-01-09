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
import StorageBlobAndOwner from './StorageBlobAndOwner.js';
import StorageReplaceBlobRequest from './StorageReplaceBlobRequest.js';

/**
 * The StorageBatchSingleReplaceBlobResponse model module.
 * @module snapser-apis/StorageBatchSingleReplaceBlobResponse
 * @version cremebrulee: v1 SDK
 */
class StorageBatchSingleReplaceBlobResponse {
    /**
     * Constructs a new <code>StorageBatchSingleReplaceBlobResponse</code>.
     * @alias module:snapser-apis/StorageBatchSingleReplaceBlobResponse
     */
    constructor() { 
        
        StorageBatchSingleReplaceBlobResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageBatchSingleReplaceBlobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageBatchSingleReplaceBlobResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageBatchSingleReplaceBlobResponse} The populated <code>StorageBatchSingleReplaceBlobResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBatchSingleReplaceBlobResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = StorageReplaceBlobRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = StorageBlobAndOwner.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageBatchSingleReplaceBlobResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageBatchSingleReplaceBlobResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          StorageReplaceBlobRequest.validateJSON(data['request']);
        }
        // validate the optional field `response`
        if (data['response']) { // data not null
          StorageBlobAndOwner.validateJSON(data['response']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
StorageBatchSingleReplaceBlobResponse.prototype['message'] = undefined;

/**
 * @member {module:snapser-apis/StorageReplaceBlobRequest} request
 */
StorageBatchSingleReplaceBlobResponse.prototype['request'] = undefined;

/**
 * @member {module:snapser-apis/StorageBlobAndOwner} response
 */
StorageBatchSingleReplaceBlobResponse.prototype['response'] = undefined;

/**
 * @member {Boolean} success
 */
StorageBatchSingleReplaceBlobResponse.prototype['success'] = undefined;






export default StorageBatchSingleReplaceBlobResponse;

