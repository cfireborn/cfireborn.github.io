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
 * The StorageServiceInsertBlobBody model module.
 * @module snapser-apis/StorageServiceInsertBlobBody
 * @version cremebrulee: v1 SDK
 */
class StorageServiceInsertBlobBody {
    /**
     * Constructs a new <code>StorageServiceInsertBlobBody</code>.
     * @alias module:snapser-apis/StorageServiceInsertBlobBody
     * @param value {String} Blob value to be inserted
     */
    constructor(value) { 
        
        StorageServiceInsertBlobBody.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>StorageServiceInsertBlobBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageServiceInsertBlobBody} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageServiceInsertBlobBody} The populated <code>StorageServiceInsertBlobBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageServiceInsertBlobBody();

            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageServiceInsertBlobBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageServiceInsertBlobBody</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StorageServiceInsertBlobBody.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

StorageServiceInsertBlobBody.RequiredProperties = ["value"];

/**
 * Optional TTL for the blob
 * @member {Number} ttl
 */
StorageServiceInsertBlobBody.prototype['ttl'] = undefined;

/**
 * Blob value to be inserted
 * @member {String} value
 */
StorageServiceInsertBlobBody.prototype['value'] = undefined;






export default StorageServiceInsertBlobBody;

