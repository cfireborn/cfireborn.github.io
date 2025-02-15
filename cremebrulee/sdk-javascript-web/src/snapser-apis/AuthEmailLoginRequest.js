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
 * The AuthEmailLoginRequest model module.
 * @module snapser-apis/AuthEmailLoginRequest
 * @version cremebrulee: v1 SDK
 */
class AuthEmailLoginRequest {
    /**
     * Constructs a new <code>AuthEmailLoginRequest</code>.
     * @alias module:snapser-apis/AuthEmailLoginRequest
     * @param email {String} Email address used as login
     * @param otp {String} OTP code received by the user
     */
    constructor(email, otp) { 
        
        AuthEmailLoginRequest.initialize(this, email, otp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, otp) { 
        obj['email'] = email;
        obj['otp'] = otp;
    }

    /**
     * Constructs a <code>AuthEmailLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthEmailLoginRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthEmailLoginRequest} The populated <code>AuthEmailLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthEmailLoginRequest();

            if (data.hasOwnProperty('create_user')) {
                obj['create_user'] = ApiClient.convertToType(data['create_user'], 'Boolean');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('otp')) {
                obj['otp'] = ApiClient.convertToType(data['otp'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthEmailLoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthEmailLoginRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthEmailLoginRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['otp'] && !(typeof data['otp'] === 'string' || data['otp'] instanceof String)) {
            throw new Error("Expected the field `otp` to be a primitive type in the JSON string but got " + data['otp']);
        }

        return true;
    }


}

AuthEmailLoginRequest.RequiredProperties = ["email", "otp"];

/**
 * Whether to create a user, if it does not exist
 * @member {Boolean} create_user
 */
AuthEmailLoginRequest.prototype['create_user'] = undefined;

/**
 * Email address used as login
 * @member {String} email
 */
AuthEmailLoginRequest.prototype['email'] = undefined;

/**
 * OTP code received by the user
 * @member {String} otp
 */
AuthEmailLoginRequest.prototype['otp'] = undefined;






export default AuthEmailLoginRequest;

