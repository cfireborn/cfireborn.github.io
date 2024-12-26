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
import LeaderboardsIncrementScoreRequest from './LeaderboardsIncrementScoreRequest';
import LeaderboardsIncrementScoreResponse from './LeaderboardsIncrementScoreResponse';

/**
 * The LeaderboardsBatchIncrementScoreSingleResponse model module.
 * @module snapser-apis/LeaderboardsBatchIncrementScoreSingleResponse
 * @version cremebrulee: v1 SDK
 */
class LeaderboardsBatchIncrementScoreSingleResponse {
    /**
     * Constructs a new <code>LeaderboardsBatchIncrementScoreSingleResponse</code>.
     * @alias module:snapser-apis/LeaderboardsBatchIncrementScoreSingleResponse
     */
    constructor() { 
        
        LeaderboardsBatchIncrementScoreSingleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeaderboardsBatchIncrementScoreSingleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/LeaderboardsBatchIncrementScoreSingleResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/LeaderboardsBatchIncrementScoreSingleResponse} The populated <code>LeaderboardsBatchIncrementScoreSingleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardsBatchIncrementScoreSingleResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = LeaderboardsIncrementScoreRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = LeaderboardsIncrementScoreResponse.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeaderboardsBatchIncrementScoreSingleResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaderboardsBatchIncrementScoreSingleResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          LeaderboardsIncrementScoreRequest.validateJSON(data['request']);
        }
        // validate the optional field `response`
        if (data['response']) { // data not null
          LeaderboardsIncrementScoreResponse.validateJSON(data['response']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
LeaderboardsBatchIncrementScoreSingleResponse.prototype['message'] = undefined;

/**
 * @member {module:snapser-apis/LeaderboardsIncrementScoreRequest} request
 */
LeaderboardsBatchIncrementScoreSingleResponse.prototype['request'] = undefined;

/**
 * @member {module:snapser-apis/LeaderboardsIncrementScoreResponse} response
 */
LeaderboardsBatchIncrementScoreSingleResponse.prototype['response'] = undefined;

/**
 * @member {Boolean} success
 */
LeaderboardsBatchIncrementScoreSingleResponse.prototype['success'] = undefined;






export default LeaderboardsBatchIncrementScoreSingleResponse;
