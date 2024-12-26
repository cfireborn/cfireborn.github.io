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
 * The IncrementScoreRequest model module.
 * @module snapser-apis/IncrementScoreRequest
 * @version cremebrulee: v1 SDK
 */
class IncrementScoreRequest {
    /**
     * Constructs a new <code>IncrementScoreRequest</code>.
     * @alias module:snapser-apis/IncrementScoreRequest
     * @param delta {Number} The delta of the score to increment
     */
    constructor(delta) { 
        
        IncrementScoreRequest.initialize(this, delta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, delta) { 
        obj['delta'] = delta;
    }

    /**
     * Constructs a <code>IncrementScoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/IncrementScoreRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/IncrementScoreRequest} The populated <code>IncrementScoreRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncrementScoreRequest();

            if (data.hasOwnProperty('delta')) {
                obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
            }
            if (data.hasOwnProperty('tier_name')) {
                obj['tier_name'] = ApiClient.convertToType(data['tier_name'], 'String');
            }
            if (data.hasOwnProperty('user_metadata')) {
                obj['user_metadata'] = ApiClient.convertToType(data['user_metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IncrementScoreRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IncrementScoreRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IncrementScoreRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tier_name'] && !(typeof data['tier_name'] === 'string' || data['tier_name'] instanceof String)) {
            throw new Error("Expected the field `tier_name` to be a primitive type in the JSON string but got " + data['tier_name']);
        }

        return true;
    }


}

IncrementScoreRequest.RequiredProperties = ["delta"];

/**
 * The delta of the score to increment
 * @member {Number} delta
 */
IncrementScoreRequest.prototype['delta'] = undefined;

/**
 * Name of the tier
 * @member {String} tier_name
 */
IncrementScoreRequest.prototype['tier_name'] = undefined;

/**
 * Metadata to be stored with the user
 * @member {Object} user_metadata
 */
IncrementScoreRequest.prototype['user_metadata'] = undefined;






export default IncrementScoreRequest;
