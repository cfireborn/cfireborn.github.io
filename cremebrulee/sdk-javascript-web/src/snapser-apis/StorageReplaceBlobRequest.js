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
 * The StorageReplaceBlobRequest model module.
 * @module snapser-apis/StorageReplaceBlobRequest
 * @version cremebrulee: v1 SDK
 */
class StorageReplaceBlobRequest {
    /**
     * Constructs a new <code>StorageReplaceBlobRequest</code>.
     * @alias module:snapser-apis/StorageReplaceBlobRequest
     * @param accessType {module:snapser-apis/StorageReplaceBlobRequest.AccessTypeEnum} Access to the blob. (public/protected/private)
     * @param key {String} Blob key
     * @param ownerId {String} Blob owner's user ID
     * @param value {String} Blob value to be inserted
     */
    constructor(accessType, key, ownerId, value) { 
        
        StorageReplaceBlobRequest.initialize(this, accessType, key, ownerId, value);
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
     * Constructs a <code>StorageReplaceBlobRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageReplaceBlobRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageReplaceBlobRequest} The populated <code>StorageReplaceBlobRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageReplaceBlobRequest();

            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
            }
            if (data.hasOwnProperty('cas')) {
                obj['cas'] = ApiClient.convertToType(data['cas'], 'String');
            }
            if (data.hasOwnProperty('create')) {
                obj['create'] = ApiClient.convertToType(data['create'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
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
     * Validates the JSON data with respect to <code>StorageReplaceBlobRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageReplaceBlobRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StorageReplaceBlobRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['access_type'] && !(typeof data['access_type'] === 'string' || data['access_type'] instanceof String)) {
            throw new Error("Expected the field `access_type` to be a primitive type in the JSON string but got " + data['access_type']);
        }
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

StorageReplaceBlobRequest.RequiredProperties = ["access_type", "key", "owner_id", "value"];

/**
 * Access to the blob. (public/protected/private)
 * @member {module:snapser-apis/StorageReplaceBlobRequest.AccessTypeEnum} access_type
 */
StorageReplaceBlobRequest.prototype['access_type'] = undefined;

/**
 * CAS value retrieved from the last operation
 * @member {String} cas
 */
StorageReplaceBlobRequest.prototype['cas'] = undefined;

/**
 * Whether the blob should be created if it doesn't exist
 * @member {Boolean} create
 */
StorageReplaceBlobRequest.prototype['create'] = undefined;

/**
 * Blob key
 * @member {String} key
 */
StorageReplaceBlobRequest.prototype['key'] = undefined;

/**
 * Blob owner's user ID
 * @member {String} owner_id
 */
StorageReplaceBlobRequest.prototype['owner_id'] = undefined;

/**
 * Optional TTL for the blob
 * @member {Number} ttl
 */
StorageReplaceBlobRequest.prototype['ttl'] = undefined;

/**
 * Blob value to be inserted
 * @member {String} value
 */
StorageReplaceBlobRequest.prototype['value'] = undefined;





/**
 * Allowed values for the <code>access_type</code> property.
 * @enum {String}
 * @readonly
 */
StorageReplaceBlobRequest['AccessTypeEnum'] = {

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



export default StorageReplaceBlobRequest;

