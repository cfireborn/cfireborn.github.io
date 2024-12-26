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
 * The AuthValidateAppKeyRequest model module.
 * @module snapser-apis/AuthValidateAppKeyRequest
 * @version cremebrulee: v1 SDK
 */
class AuthValidateAppKeyRequest {
    /**
     * Constructs a new <code>AuthValidateAppKeyRequest</code>.
     * @alias module:snapser-apis/AuthValidateAppKeyRequest
     */
    constructor() { 
        
        AuthValidateAppKeyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthValidateAppKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthValidateAppKeyRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthValidateAppKeyRequest} The populated <code>AuthValidateAppKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthValidateAppKeyRequest();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthValidateAppKeyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthValidateAppKeyRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
AuthValidateAppKeyRequest.prototype['key'] = undefined;






export default AuthValidateAppKeyRequest;
