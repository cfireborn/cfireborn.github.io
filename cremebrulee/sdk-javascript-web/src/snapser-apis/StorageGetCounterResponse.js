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
 * The StorageGetCounterResponse model module.
 * @module snapser-apis/StorageGetCounterResponse
 * @version cremebrulee: v1 SDK
 */
class StorageGetCounterResponse {
    /**
     * Constructs a new <code>StorageGetCounterResponse</code>.
     * @alias module:snapser-apis/StorageGetCounterResponse
     * @param count {Number} Value of the counter
     */
    constructor(count) { 
        
        StorageGetCounterResponse.initialize(this, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count) { 
        obj['count'] = count;
    }

    /**
     * Constructs a <code>StorageGetCounterResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/StorageGetCounterResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/StorageGetCounterResponse} The populated <code>StorageGetCounterResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageGetCounterResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageGetCounterResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageGetCounterResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StorageGetCounterResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

StorageGetCounterResponse.RequiredProperties = ["count"];

/**
 * Value of the counter
 * @member {Number} count
 */
StorageGetCounterResponse.prototype['count'] = undefined;






export default StorageGetCounterResponse;

