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

/**
 * The StorageDeleteAppendBlobResponse model module.
 * @module snapser-apis/StorageDeleteAppendBlobResponse
 * @version cremebrulee: v1 SDK
 */
class StorageDeleteAppendBlobResponse {
    /**
     * Constructs a new <code>StorageDeleteAppendBlobResponse</code>.
     * @alias module:snapser-apis/StorageDeleteAppendBlobResponse
     */
    constructor() { 
        
        StorageDeleteAppendBlobResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageDeleteAppendBlobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageDeleteAppendBlobResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageDeleteAppendBlobResponse} The populated <code>StorageDeleteAppendBlobResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageDeleteAppendBlobResponse();

            if (data.hasOwnProperty('cas')) {
                obj['cas'] = ApiClient.convertToType(data['cas'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageDeleteAppendBlobResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageDeleteAppendBlobResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cas'] && !(typeof data['cas'] === 'string' || data['cas'] instanceof String)) {
            throw new Error("Expected the field `cas` to be a primitive type in the JSON string but got " + data['cas']);
        }

        return true;
    }


}



/**
 * CAS value used for future operations
 * @member {String} cas
 */
StorageDeleteAppendBlobResponse.prototype['cas'] = undefined;






export default StorageDeleteAppendBlobResponse;

