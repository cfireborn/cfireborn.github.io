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
import StatisticsBatchSetUserStatisticsSingleResponse from './StatisticsBatchSetUserStatisticsSingleResponse';
import StatisticsUserStatistic from './StatisticsUserStatistic';

/**
 * The StatisticsBatchSetUserStatisticsResponse model module.
 * @module snapser-apis/StatisticsBatchSetUserStatisticsResponse
 * @version cremebrulee: v1 SDK
 */
class StatisticsBatchSetUserStatisticsResponse {
    /**
     * Constructs a new <code>StatisticsBatchSetUserStatisticsResponse</code>.
     * @alias module:snapser-apis/StatisticsBatchSetUserStatisticsResponse
     */
    constructor() { 
        
        StatisticsBatchSetUserStatisticsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatisticsBatchSetUserStatisticsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StatisticsBatchSetUserStatisticsResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StatisticsBatchSetUserStatisticsResponse} The populated <code>StatisticsBatchSetUserStatisticsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatisticsBatchSetUserStatisticsResponse();

            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [StatisticsBatchSetUserStatisticsSingleResponse]);
            }
            if (data.hasOwnProperty('user_statistics')) {
                obj['user_statistics'] = ApiClient.convertToType(data['user_statistics'], [StatisticsUserStatistic]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatisticsBatchSetUserStatisticsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatisticsBatchSetUserStatisticsResponse</code>.
     */
    static validateJSON(data) {
        if (data['responses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['responses'])) {
                throw new Error("Expected the field `responses` to be an array in the JSON data but got " + data['responses']);
            }
            // validate the optional field `responses` (array)
            for (const item of data['responses']) {
                StatisticsBatchSetUserStatisticsSingleResponse.validateJSON(item);
            };
        }
        if (data['user_statistics']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['user_statistics'])) {
                throw new Error("Expected the field `user_statistics` to be an array in the JSON data but got " + data['user_statistics']);
            }
            // validate the optional field `user_statistics` (array)
            for (const item of data['user_statistics']) {
                StatisticsUserStatistic.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse>} responses
 */
StatisticsBatchSetUserStatisticsResponse.prototype['responses'] = undefined;

/**
 * @member {Array.<module:snapser-apis/StatisticsUserStatistic>} user_statistics
 */
StatisticsBatchSetUserStatisticsResponse.prototype['user_statistics'] = undefined;






export default StatisticsBatchSetUserStatisticsResponse;
