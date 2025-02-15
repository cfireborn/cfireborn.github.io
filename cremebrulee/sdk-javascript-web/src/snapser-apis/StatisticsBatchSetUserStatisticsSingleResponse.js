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
import StatisticsSetUserStatisticRequest from './StatisticsSetUserStatisticRequest.js';
import StatisticsUserStatistic from './StatisticsUserStatistic.js';

/**
 * The StatisticsBatchSetUserStatisticsSingleResponse model module.
 * @module snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse
 * @version cremebrulee: v1 SDK
 */
class StatisticsBatchSetUserStatisticsSingleResponse {
    /**
     * Constructs a new <code>StatisticsBatchSetUserStatisticsSingleResponse</code>.
     * @alias module:snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse
     */
    constructor() { 
        
        StatisticsBatchSetUserStatisticsSingleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatisticsBatchSetUserStatisticsSingleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse} The populated <code>StatisticsBatchSetUserStatisticsSingleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatisticsBatchSetUserStatisticsSingleResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = StatisticsSetUserStatisticRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = StatisticsUserStatistic.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatisticsBatchSetUserStatisticsSingleResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatisticsBatchSetUserStatisticsSingleResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          StatisticsSetUserStatisticRequest.validateJSON(data['request']);
        }
        // validate the optional field `response`
        if (data['response']) { // data not null
          StatisticsUserStatistic.validateJSON(data['response']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
StatisticsBatchSetUserStatisticsSingleResponse.prototype['message'] = undefined;

/**
 * @member {module:snapser-apis/StatisticsSetUserStatisticRequest} request
 */
StatisticsBatchSetUserStatisticsSingleResponse.prototype['request'] = undefined;

/**
 * @member {module:snapser-apis/StatisticsUserStatistic} response
 */
StatisticsBatchSetUserStatisticsSingleResponse.prototype['response'] = undefined;

/**
 * @member {Boolean} success
 */
StatisticsBatchSetUserStatisticsSingleResponse.prototype['success'] = undefined;






export default StatisticsBatchSetUserStatisticsSingleResponse;

