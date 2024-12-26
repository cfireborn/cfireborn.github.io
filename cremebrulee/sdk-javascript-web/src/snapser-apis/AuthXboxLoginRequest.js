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
 * The AuthXboxLoginRequest model module.
 * @module snapser-apis/AuthXboxLoginRequest
 * @version cremebrulee: v1 SDK
 */
class AuthXboxLoginRequest {
    /**
     * Constructs a new <code>AuthXboxLoginRequest</code>.
     * @alias module:snapser-apis/AuthXboxLoginRequest
     * @param code {String} code generated on the client
     * @param redirectUrl {String} redirect url for client
     */
    constructor(code, redirectUrl) { 
        
        AuthXboxLoginRequest.initialize(this, code, redirectUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, redirectUrl) { 
        obj['code'] = code;
        obj['redirect_url'] = redirectUrl;
    }

    /**
     * Constructs a <code>AuthXboxLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthXboxLoginRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthXboxLoginRequest} The populated <code>AuthXboxLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthXboxLoginRequest();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('create_user')) {
                obj['create_user'] = ApiClient.convertToType(data['create_user'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthXboxLoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthXboxLoginRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthXboxLoginRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['redirect_url'] && !(typeof data['redirect_url'] === 'string' || data['redirect_url'] instanceof String)) {
            throw new Error("Expected the field `redirect_url` to be a primitive type in the JSON string but got " + data['redirect_url']);
        }

        return true;
    }


}

AuthXboxLoginRequest.RequiredProperties = ["code", "redirect_url"];

/**
 * code generated on the client
 * @member {String} code
 */
AuthXboxLoginRequest.prototype['code'] = undefined;

/**
 * Whether to create a user, if it does not exist
 * @member {Boolean} create_user
 */
AuthXboxLoginRequest.prototype['create_user'] = undefined;

/**
 * redirect url for client
 * @member {String} redirect_url
 */
AuthXboxLoginRequest.prototype['redirect_url'] = undefined;






export default AuthXboxLoginRequest;

