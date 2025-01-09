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
import StatisticsBatchGetUserStatisticsSingleResponse from './StatisticsBatchGetUserStatisticsSingleResponse.js';
import StatisticsMultiUserStatistics from './StatisticsMultiUserStatistics.js';

/**
 * The StatisticsBatchGetUserStatisticsResponse model module.
 * @module snapser-apis/StatisticsBatchGetUserStatisticsResponse
 * @version cremebrulee: v1 SDK
 */
class StatisticsBatchGetUserStatisticsResponse {
    /**
     * Constructs a new <code>StatisticsBatchGetUserStatisticsResponse</code>.
     * @alias module:snapser-apis/StatisticsBatchGetUserStatisticsResponse
     */
    constructor() { 
        
        StatisticsBatchGetUserStatisticsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatisticsBatchGetUserStatisticsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StatisticsBatchGetUserStatisticsResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StatisticsBatchGetUserStatisticsResponse} The populated <code>StatisticsBatchGetUserStatisticsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatisticsBatchGetUserStatisticsResponse();

            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [StatisticsBatchGetUserStatisticsSingleResponse]);
            }
            if (data.hasOwnProperty('users_statistics')) {
                obj['users_statistics'] = ApiClient.convertToType(data['users_statistics'], {'String': StatisticsMultiUserStatistics});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatisticsBatchGetUserStatisticsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatisticsBatchGetUserStatisticsResponse</code>.
     */
    static validateJSON(data) {
        if (data['responses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['responses'])) {
                throw new Error("Expected the field `responses` to be an array in the JSON data but got " + data['responses']);
            }
            // validate the optional field `responses` (array)
            for (const item of data['responses']) {
                StatisticsBatchGetUserStatisticsSingleResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:snapser-apis/StatisticsBatchGetUserStatisticsSingleResponse>} responses
 */
StatisticsBatchGetUserStatisticsResponse.prototype['responses'] = undefined;

/**
 * @member {Object.<String, module:snapser-apis/StatisticsMultiUserStatistics>} users_statistics
 */
StatisticsBatchGetUserStatisticsResponse.prototype['users_statistics'] = undefined;






export default StatisticsBatchGetUserStatisticsResponse;

