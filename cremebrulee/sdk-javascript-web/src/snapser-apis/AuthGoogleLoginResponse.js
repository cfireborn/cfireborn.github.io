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
 * The AuthGoogleLoginResponse model module.
 * @module snapser-apis/AuthGoogleLoginResponse
 * @version cremebrulee: v1 SDK
 */
class AuthGoogleLoginResponse {
    /**
     * Constructs a new <code>AuthGoogleLoginResponse</code>.
     * @alias module:snapser-apis/AuthGoogleLoginResponse
     */
    constructor() { 
        
        AuthGoogleLoginResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthGoogleLoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthGoogleLoginResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthGoogleLoginResponse} The populated <code>AuthGoogleLoginResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthGoogleLoginResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = AuthUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthGoogleLoginResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthGoogleLoginResponse</code>.
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
AuthGoogleLoginResponse.prototype['user'] = undefined;






export default AuthGoogleLoginResponse;

