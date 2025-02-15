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
import AnalyticsGenericEvent from './AnalyticsGenericEvent.js';

/**
 * The AnalyticsBatchCreateEventSingleResponse model module.
 * @module snapser-apis/AnalyticsBatchCreateEventSingleResponse
 * @version cremebrulee: v1 SDK
 */
class AnalyticsBatchCreateEventSingleResponse {
    /**
     * Constructs a new <code>AnalyticsBatchCreateEventSingleResponse</code>.
     * @alias module:snapser-apis/AnalyticsBatchCreateEventSingleResponse
     */
    constructor() { 
        
        AnalyticsBatchCreateEventSingleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalyticsBatchCreateEventSingleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AnalyticsBatchCreateEventSingleResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/AnalyticsBatchCreateEventSingleResponse} The populated <code>AnalyticsBatchCreateEventSingleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsBatchCreateEventSingleResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = AnalyticsGenericEvent.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyticsBatchCreateEventSingleResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyticsBatchCreateEventSingleResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          AnalyticsGenericEvent.validateJSON(data['request']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
AnalyticsBatchCreateEventSingleResponse.prototype['message'] = undefined;

/**
 * @member {module:snapser-apis/AnalyticsGenericEvent} request
 */
AnalyticsBatchCreateEventSingleResponse.prototype['request'] = undefined;

/**
 * @member {Boolean} success
 */
AnalyticsBatchCreateEventSingleResponse.prototype['success'] = undefined;






export default AnalyticsBatchCreateEventSingleResponse;

