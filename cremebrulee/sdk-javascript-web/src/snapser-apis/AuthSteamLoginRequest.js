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
 * The AuthSteamLoginRequest model module.
 * @module snapser-apis/AuthSteamLoginRequest
 * @version cremebrulee: v1 SDK
 */
class AuthSteamLoginRequest {
    /**
     * Constructs a new <code>AuthSteamLoginRequest</code>.
     * @alias module:snapser-apis/AuthSteamLoginRequest
     * @param openidParameters {Object.<String, String>} Key value pairs of the openid parameters
     */
    constructor(openidParameters) { 
        
        AuthSteamLoginRequest.initialize(this, openidParameters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, openidParameters) { 
        obj['openid_parameters'] = openidParameters;
    }

    /**
     * Constructs a <code>AuthSteamLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthSteamLoginRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthSteamLoginRequest} The populated <code>AuthSteamLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthSteamLoginRequest();

            if (data.hasOwnProperty('create_user')) {
                obj['create_user'] = ApiClient.convertToType(data['create_user'], 'Boolean');
            }
            if (data.hasOwnProperty('openid_parameters')) {
                obj['openid_parameters'] = ApiClient.convertToType(data['openid_parameters'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthSteamLoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthSteamLoginRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthSteamLoginRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

AuthSteamLoginRequest.RequiredProperties = ["openid_parameters"];

/**
 * Whether to create a user, if it does not exist
 * @member {Boolean} create_user
 */
AuthSteamLoginRequest.prototype['create_user'] = undefined;

/**
 * Key value pairs of the openid parameters
 * @member {Object.<String, String>} openid_parameters
 */
AuthSteamLoginRequest.prototype['openid_parameters'] = undefined;






export default AuthSteamLoginRequest;
