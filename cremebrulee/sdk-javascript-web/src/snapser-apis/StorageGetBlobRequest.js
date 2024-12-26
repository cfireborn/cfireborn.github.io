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
 * The StorageGetBlobRequest model module.
 * @module snapser-apis/StorageGetBlobRequest
 * @version cremebrulee: v1 SDK
 */
class StorageGetBlobRequest {
    /**
     * Constructs a new <code>StorageGetBlobRequest</code>.
     * @alias module:snapser-apis/StorageGetBlobRequest
     * @param accessType {module:snapser-apis/StorageGetBlobRequest.AccessTypeEnum} Access to the blob. (public/protected/private)
     * @param key {String} Blob key
     * @param ownerId {String} Blob owner's user ID
     */
    constructor(accessType, key, ownerId) { 
        
        StorageGetBlobRequest.initialize(this, accessType, key, ownerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessType, key, ownerId) { 
        obj['access_type'] = accessType;
        obj['key'] = key;
        obj['owner_id'] = ownerId;
    }

    /**
     * Constructs a <code>StorageGetBlobRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageGetBlobRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageGetBlobRequest} The populated <code>StorageGetBlobRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageGetBlobRequest();

            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageGetBlobRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageGetBlobRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StorageGetBlobRequest.RequiredProperties) {
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

        return true;
    }


}

StorageGetBlobRequest.RequiredProperties = ["access_type", "key", "owner_id"];

/**
 * Access to the blob. (public/protected/private)
 * @member {module:snapser-apis/StorageGetBlobRequest.AccessTypeEnum} access_type
 */
StorageGetBlobRequest.prototype['access_type'] = undefined;

/**
 * Blob key
 * @member {String} key
 */
StorageGetBlobRequest.prototype['key'] = undefined;

/**
 * Blob owner's user ID
 * @member {String} owner_id
 */
StorageGetBlobRequest.prototype['owner_id'] = undefined;





/**
 * Allowed values for the <code>access_type</code> property.
 * @enum {String}
 * @readonly
 */
StorageGetBlobRequest['AccessTypeEnum'] = {

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



export default StorageGetBlobRequest;

