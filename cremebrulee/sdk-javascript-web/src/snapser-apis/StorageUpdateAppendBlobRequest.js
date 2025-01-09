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
 * The StorageUpdateAppendBlobRequest model module.
 * @module snapser-apis/StorageUpdateAppendBlobRequest
 * @version cremebrulee: v1 SDK
 */
class StorageUpdateAppendBlobRequest {
    /**
     * Constructs a new <code>StorageUpdateAppendBlobRequest</code>.
     * @alias module:snapser-apis/StorageUpdateAppendBlobRequest
     * @param accessType {module:snapser-apis/StorageUpdateAppendBlobRequest.AccessTypeEnum} Access to the append-blob. (public/protected/private)
     * @param key {String} Append-blob key
     * @param ownerId {String} Append-blob owner's user ID
     * @param value {String} Value to be appended
     */
    constructor(accessType, key, ownerId, value) { 
        
        StorageUpdateAppendBlobRequest.initialize(this, accessType, key, ownerId, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessType, key, ownerId, value) { 
        obj['access_type'] = accessType;
        obj['key'] = key;
        obj['owner_id'] = ownerId;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>StorageUpdateAppendBlobRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageUpdateAppendBlobRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageUpdateAppendBlobRequest} The populated <code>StorageUpdateAppendBlobRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageUpdateAppendBlobRequest();

            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
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
     * Validates the JSON data with respect to <code>StorageUpdateAppendBlobRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageUpdateAppendBlobRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StorageUpdateAppendBlobRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['access_type'] && !(typeof data['access_type'] === 'string' || data['access_type'] instanceof String)) {
            throw new Error("Expected the field `access_type` to be a primitive type in the JSON string but got " + data['access_type']);
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

StorageUpdateAppendBlobRequest.RequiredProperties = ["access_type", "key", "owner_id", "value"];

/**
 * Access to the append-blob. (public/protected/private)
 * @member {module:snapser-apis/StorageUpdateAppendBlobRequest.AccessTypeEnum} access_type
 */
StorageUpdateAppendBlobRequest.prototype['access_type'] = undefined;

/**
 * Append-blob key
 * @member {String} key
 */
StorageUpdateAppendBlobRequest.prototype['key'] = undefined;

/**
 * Append-blob owner's user ID
 * @member {String} owner_id
 */
StorageUpdateAppendBlobRequest.prototype['owner_id'] = undefined;

/**
 * Value to be appended
 * @member {String} value
 */
StorageUpdateAppendBlobRequest.prototype['value'] = undefined;





/**
 * Allowed values for the <code>access_type</code> property.
 * @enum {String}
 * @readonly
 */
StorageUpdateAppendBlobRequest['AccessTypeEnum'] = {

    /**
     * value: "public"
     * @const
     */
    "public": "public",

    /**
     * value: "private"
     * @const
     */
    "private": "private",

    /**
     * value: "protected"
     * @const
     */
    "protected": "protected"
};



export default StorageUpdateAppendBlobRequest;

