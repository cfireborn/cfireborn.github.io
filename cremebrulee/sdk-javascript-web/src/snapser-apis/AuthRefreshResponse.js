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
 * The AuthRefreshResponse model module.
 * @module snapser-apis/AuthRefreshResponse
 * @version cremebrulee: v1 SDK
 */
class AuthRefreshResponse {
    /**
     * Constructs a new <code>AuthRefreshResponse</code>.
     * @alias module:snapser-apis/AuthRefreshResponse
     */
    constructor() { 
        
        AuthRefreshResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthRefreshResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthRefreshResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthRefreshResponse} The populated <code>AuthRefreshResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthRefreshResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = AuthUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthRefreshResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthRefreshResponse</code>.
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
AuthRefreshResponse.prototype['user'] = undefined;






export default AuthRefreshResponse;

