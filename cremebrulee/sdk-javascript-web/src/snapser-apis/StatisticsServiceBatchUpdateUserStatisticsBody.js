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
import StatisticsBatchUpdateUserStatisticsItem from './StatisticsBatchUpdateUserStatisticsItem.js';

/**
 * The StatisticsServiceBatchUpdateUserStatisticsBody model module.
 * @module snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody
 * @version cremebrulee: v1 SDK
 */
class StatisticsServiceBatchUpdateUserStatisticsBody {
    /**
     * Constructs a new <code>StatisticsServiceBatchUpdateUserStatisticsBody</code>.
     * @alias module:snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody
     * @param data {Array.<module:snapser-apis/StatisticsBatchUpdateUserStatisticsItem>} Array of operations to be performed
     */
    constructor(data) { 
        
        StatisticsServiceBatchUpdateUserStatisticsBody.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>StatisticsServiceBatchUpdateUserStatisticsBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody} obj Optional instance to populate.
     * @return {module:snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody} The populated <code>StatisticsServiceBatchUpdateUserStatisticsBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatisticsServiceBatchUpdateUserStatisticsBody();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [StatisticsBatchUpdateUserStatisticsItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatisticsServiceBatchUpdateUserStatisticsBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatisticsServiceBatchUpdateUserStatisticsBody</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StatisticsServiceBatchUpdateUserStatisticsBody.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                StatisticsBatchUpdateUserStatisticsItem.validateJSON(item);
            };
        }

        return true;
    }


}

StatisticsServiceBatchUpdateUserStatisticsBody.RequiredProperties = ["data"];

/**
 * Array of operations to be performed
 * @member {Array.<module:snapser-apis/StatisticsBatchUpdateUserStatisticsItem>} data
 */
StatisticsServiceBatchUpdateUserStatisticsBody.prototype['data'] = undefined;






export default StatisticsServiceBatchUpdateUserStatisticsBody;

