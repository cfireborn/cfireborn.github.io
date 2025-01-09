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
 * The RemoteConfigGetAppConfigResponse model module.
 * @module snapser-apis/RemoteConfigGetAppConfigResponse
 * @version cremebrulee: v1 SDK
 */
class RemoteConfigGetAppConfigResponse {
    /**
     * Constructs a new <code>RemoteConfigGetAppConfigResponse</code>.
     * @alias module:snapser-apis/RemoteConfigGetAppConfigResponse
     */
    constructor() { 
        
        RemoteConfigGetAppConfigResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoteConfigGetAppConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/RemoteConfigGetAppConfigResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/RemoteConfigGetAppConfigResponse} The populated <code>RemoteConfigGetAppConfigResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteConfigGetAppConfigResponse();

            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RemoteConfigGetAppConfigResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RemoteConfigGetAppConfigResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Config for the app
 * @member {Object} config
 */
RemoteConfigGetAppConfigResponse.prototype['config'] = undefined;






export default RemoteConfigGetAppConfigResponse;

