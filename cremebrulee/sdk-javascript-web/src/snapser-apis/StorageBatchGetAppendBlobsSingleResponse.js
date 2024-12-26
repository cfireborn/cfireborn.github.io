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

import ApiClient from '../ApiClient';
import StorageGetAppendBlobRequest from './StorageGetAppendBlobRequest';
import StorageUserAppendBlobResponse from './StorageUserAppendBlobResponse';

/**
 * The StorageBatchGetAppendBlobsSingleResponse model module.
 * @module snapser-apis/StorageBatchGetAppendBlobsSingleResponse
 * @version cremebrulee: v1 SDK
 */
class StorageBatchGetAppendBlobsSingleResponse {
    /**
     * Constructs a new <code>StorageBatchGetAppendBlobsSingleResponse</code>.
     * @alias module:snapser-apis/StorageBatchGetAppendBlobsSingleResponse
     */
    constructor() { 
        
        StorageBatchGetAppendBlobsSingleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageBatchGetAppendBlobsSingleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageBatchGetAppendBlobsSingleResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageBatchGetAppendBlobsSingleResponse} The populated <code>StorageBatchGetAppendBlobsSingleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBatchGetAppendBlobsSingleResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = StorageGetAppendBlobRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = StorageUserAppendBlobResponse.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageBatchGetAppendBlobsSingleResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageBatchGetAppendBlobsSingleResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          StorageGetAppendBlobRequest.validateJSON(data['request']);
        }
        // validate the optional field `response`
        if (data['response']) { // data not null
          StorageUserAppendBlobResponse.validateJSON(data['response']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
StorageBatchGetAppendBlobsSingleResponse.prototype['message'] = undefined;

/**
 * @member {module:snapser-apis/StorageGetAppendBlobRequest} request
 */
StorageBatchGetAppendBlobsSingleResponse.prototype['request'] = undefined;

/**
 * @member {module:snapser-apis/StorageUserAppendBlobResponse} response
 */
StorageBatchGetAppendBlobsSingleResponse.prototype['response'] = undefined;

/**
 * @member {Boolean} success
 */
StorageBatchGetAppendBlobsSingleResponse.prototype['success'] = undefined;






export default StorageBatchGetAppendBlobsSingleResponse;

