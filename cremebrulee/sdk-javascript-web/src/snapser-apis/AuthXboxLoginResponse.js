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
import AuthUser from './AuthUser';

/**
 * The AuthXboxLoginResponse model module.
 * @module snapser-apis/AuthXboxLoginResponse
 * @version cremebrulee: v1 SDK
 */
class AuthXboxLoginResponse {
    /**
     * Constructs a new <code>AuthXboxLoginResponse</code>.
     * @alias module:snapser-apis/AuthXboxLoginResponse
     */
    constructor() { 
        
        AuthXboxLoginResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthXboxLoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthXboxLoginResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthXboxLoginResponse} The populated <code>AuthXboxLoginResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthXboxLoginResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = AuthUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthXboxLoginResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthXboxLoginResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `user`
        if (data['user']) { // data not null
          AuthUser.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * @member {module:snapser-apis/AuthUser} user
 */
AuthXboxLoginResponse.prototype['user'] = undefined;






export default AuthXboxLoginResponse;
