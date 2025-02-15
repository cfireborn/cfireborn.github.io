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
 * The StatisticsGetUserStatisticsRequest model module.
 * @module snapser-apis/StatisticsGetUserStatisticsRequest
 * @version cremebrulee: v1 SDK
 */
class StatisticsGetUserStatisticsRequest {
    /**
     * Constructs a new <code>StatisticsGetUserStatisticsRequest</code>.
     * @alias module:snapser-apis/StatisticsGetUserStatisticsRequest
     * @param userId {String} User ID of the user
     */
    constructor(userId) { 
        
        StatisticsGetUserStatisticsRequest.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>StatisticsGetUserStatisticsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StatisticsGetUserStatisticsRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/StatisticsGetUserStatisticsRequest} The populated <code>StatisticsGetUserStatisticsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatisticsGetUserStatisticsRequest();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatisticsGetUserStatisticsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatisticsGetUserStatisticsRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StatisticsGetUserStatisticsRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

StatisticsGetUserStatisticsRequest.RequiredProperties = ["user_id"];

/**
 * User ID of the user
 * @member {String} user_id
 */
StatisticsGetUserStatisticsRequest.prototype['user_id'] = undefined;






export default StatisticsGetUserStatisticsRequest;

