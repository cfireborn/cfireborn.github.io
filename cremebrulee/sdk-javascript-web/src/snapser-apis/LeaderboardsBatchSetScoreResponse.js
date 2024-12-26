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
import LeaderboardsBatchSetScoreSingleResponse from './LeaderboardsBatchSetScoreSingleResponse';
import LeaderboardsSetScoreResponse from './LeaderboardsSetScoreResponse';

/**
 * The LeaderboardsBatchSetScoreResponse model module.
 * @module snapser-apis/LeaderboardsBatchSetScoreResponse
 * @version cremebrulee: v1 SDK
 */
class LeaderboardsBatchSetScoreResponse {
    /**
     * Constructs a new <code>LeaderboardsBatchSetScoreResponse</code>.
     * @alias module:snapser-apis/LeaderboardsBatchSetScoreResponse
     */
    constructor() { 
        
        LeaderboardsBatchSetScoreResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeaderboardsBatchSetScoreResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/LeaderboardsBatchSetScoreResponse} obj Optional instance to populate.
     * @return {module:snapser-apis/LeaderboardsBatchSetScoreResponse} The populated <code>LeaderboardsBatchSetScoreResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardsBatchSetScoreResponse();

            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [LeaderboardsBatchSetScoreSingleResponse]);
            }
            if (data.hasOwnProperty('score_responses')) {
                obj['score_responses'] = ApiClient.convertToType(data['score_responses'], [LeaderboardsSetScoreResponse]);
            }
            if (data.hasOwnProperty('scores_failed')) {
                obj['scores_failed'] = ApiClient.convertToType(data['scores_failed'], 'Number');
            }
            if (data.hasOwnProperty('scores_set')) {
                obj['scores_set'] = ApiClient.convertToType(data['scores_set'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeaderboardsBatchSetScoreResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaderboardsBatchSetScoreResponse</code>.
     */
    static validateJSON(data) {
        if (data['responses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['responses'])) {
                throw new Error("Expected the field `responses` to be an array in the JSON data but got " + data['responses']);
            }
            // validate the optional field `responses` (array)
            for (const item of data['responses']) {
                LeaderboardsBatchSetScoreSingleResponse.validateJSON(item);
            };
        }
        if (data['score_responses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['score_responses'])) {
                throw new Error("Expected the field `score_responses` to be an array in the JSON data but got " + data['score_responses']);
            }
            // validate the optional field `score_responses` (array)
            for (const item of data['score_responses']) {
                LeaderboardsSetScoreResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * List of responses for each user ID
 * @member {Array.<module:snapser-apis/LeaderboardsBatchSetScoreSingleResponse>} responses
 */
LeaderboardsBatchSetScoreResponse.prototype['responses'] = undefined;

/**
 * @member {Array.<module:snapser-apis/LeaderboardsSetScoreResponse>} score_responses
 */
LeaderboardsBatchSetScoreResponse.prototype['score_responses'] = undefined;

/**
 * @member {Number} scores_failed
 */
LeaderboardsBatchSetScoreResponse.prototype['scores_failed'] = undefined;

/**
 * @member {Number} scores_set
 */
LeaderboardsBatchSetScoreResponse.prototype['scores_set'] = undefined;






export default LeaderboardsBatchSetScoreResponse;

