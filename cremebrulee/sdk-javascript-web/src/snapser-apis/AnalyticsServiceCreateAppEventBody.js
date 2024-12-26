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
 * The AnalyticsServiceCreateAppEventBody model module.
 * @module snapser-apis/AnalyticsServiceCreateAppEventBody
 * @version cremebrulee: v1 SDK
 */
class AnalyticsServiceCreateAppEventBody {
    /**
     * Constructs a new <code>AnalyticsServiceCreateAppEventBody</code>.
     * @alias module:snapser-apis/AnalyticsServiceCreateAppEventBody
     */
    constructor() { 
        
        AnalyticsServiceCreateAppEventBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalyticsServiceCreateAppEventBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AnalyticsServiceCreateAppEventBody} obj Optional instance to populate.
     * @return {module:snapser-apis/AnalyticsServiceCreateAppEventBody} The populated <code>AnalyticsServiceCreateAppEventBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsServiceCreateAppEventBody();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
            }
            if (data.hasOwnProperty('time_offset')) {
                obj['time_offset'] = ApiClient.convertToType(data['time_offset'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyticsServiceCreateAppEventBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyticsServiceCreateAppEventBody</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Epoch timestamp of event in seconds, if this and offset are not provided, it will be the request time
 * @member {Number} created_at
 */
AnalyticsServiceCreateAppEventBody.prototype['created_at'] = undefined;

/**
 * Key value pairs of the properties
 * @member {Object.<String, String>} properties
 */
AnalyticsServiceCreateAppEventBody.prototype['properties'] = undefined;

/**
 * Time offset in seconds with server time
 * @member {Number} time_offset
 */
AnalyticsServiceCreateAppEventBody.prototype['time_offset'] = undefined;






export default AnalyticsServiceCreateAppEventBody;

