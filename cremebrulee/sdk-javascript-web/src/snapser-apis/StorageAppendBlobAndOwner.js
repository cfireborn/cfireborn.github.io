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
 * The StorageAppendBlobAndOwner model module.
 * @module snapser-apis/StorageAppendBlobAndOwner
 * @version cremebrulee: v1 SDK
 */
class StorageAppendBlobAndOwner {
    /**
     * Constructs a new <code>StorageAppendBlobAndOwner</code>.
     * @alias module:snapser-apis/StorageAppendBlobAndOwner
     */
    constructor() { 
        
        StorageAppendBlobAndOwner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageAppendBlobAndOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageAppendBlobAndOwner} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageAppendBlobAndOwner} The populated <code>StorageAppendBlobAndOwner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageAppendBlobAndOwner();

            if (data.hasOwnProperty('cas')) {
                obj['cas'] = ApiClient.convertToType(data['cas'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageAppendBlobAndOwner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageAppendBlobAndOwner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cas'] && !(typeof data['cas'] === 'string' || data['cas'] instanceof String)) {
            throw new Error("Expected the field `cas` to be a primitive type in the JSON string but got " + data['cas']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['owner_id'] && !(typeof data['owner_id'] === 'string' || data['owner_id'] instanceof String)) {
            throw new Error("Expected the field `owner_id` to be a primitive type in the JSON string but got " + data['owner_id']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {String} cas
 */
StorageAppendBlobAndOwner.prototype['cas'] = undefined;

/**
 * @member {String} key
 */
StorageAppendBlobAndOwner.prototype['key'] = undefined;

/**
 * @member {String} owner_id
 */
StorageAppendBlobAndOwner.prototype['owner_id'] = undefined;

/**
 * @member {String} value
 */
StorageAppendBlobAndOwner.prototype['value'] = undefined;






export default StorageAppendBlobAndOwner;

