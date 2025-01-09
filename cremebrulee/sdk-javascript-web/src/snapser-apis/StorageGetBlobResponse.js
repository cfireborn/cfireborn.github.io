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

/**
 * The StorageGetBlobResponse model module.
 * @module snapser-apis/StorageGetBlobResponse
 * @version cremebrulee: v1 SDK
 */
class StorageGetBlobResponse {
    /**
     * Constructs a new <code>StorageGetBlobResponse</code>.
     * @alias module:snapser-apis/StorageGetBlobResponse
     */
    constructor() { 
        
        StorageGetBlobResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageGetBlobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageGetBlobResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageGetBlobResponse} The populated <code>StorageGetBlobResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageGetBlobResponse();

            if (data.hasOwnProperty('cas')) {
                obj['cas'] = ApiClient.convertToType(data['cas'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageGetBlobResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageGetBlobResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cas'] && !(typeof data['cas'] === 'string' || data['cas'] instanceof String)) {
            throw new Error("Expected the field `cas` to be a primitive type in the JSON string but got " + data['cas']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * CAS value used for future operations
 * @member {String} cas
 */
StorageGetBlobResponse.prototype['cas'] = undefined;

/**
 * Blob value
 * @member {String} value
 */
StorageGetBlobResponse.prototype['value'] = undefined;






export default StorageGetBlobResponse;

