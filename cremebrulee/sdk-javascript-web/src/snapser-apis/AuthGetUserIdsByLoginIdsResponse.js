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
 * The AuthGetUserIdsByLoginIdsResponse model module.
 * @module snapser-apis/AuthGetUserIdsByLoginIdsResponse
 * @version cremebrulee: v1 SDK
 */
class AuthGetUserIdsByLoginIdsResponse {
    /**
     * Constructs a new <code>AuthGetUserIdsByLoginIdsResponse</code>.
     * @alias module:snapser-apis/AuthGetUserIdsByLoginIdsResponse
     */
    constructor() { 
        
        AuthGetUserIdsByLoginIdsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthGetUserIdsByLoginIdsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthGetUserIdsByLoginIdsResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthGetUserIdsByLoginIdsResponse} The populated <code>AuthGetUserIdsByLoginIdsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthGetUserIdsByLoginIdsResponse();

            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthGetUserIdsByLoginIdsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthGetUserIdsByLoginIdsResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, String>} user_ids
 */
AuthGetUserIdsByLoginIdsResponse.prototype['user_ids'] = undefined;






export default AuthGetUserIdsByLoginIdsResponse;

