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
import LeaderboardsSetScoreRequest from './LeaderboardsSetScoreRequest.js';

/**
 * The LeaderboardsBatchSetScoreRequest model module.
 * @module snapser-apis/LeaderboardsBatchSetScoreRequest
 * @version cremebrulee: v1 SDK
 */
class LeaderboardsBatchSetScoreRequest {
    /**
     * Constructs a new <code>LeaderboardsBatchSetScoreRequest</code>.
     * @alias module:snapser-apis/LeaderboardsBatchSetScoreRequest
     * @param setScoreRequests {Array.<module:snapser-apis/LeaderboardsSetScoreRequest>} List of requests with their scores to be inserted
     */
    constructor(setScoreRequests) { 
        
        LeaderboardsBatchSetScoreRequest.initialize(this, setScoreRequests);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, setScoreRequests) { 
        obj['set_score_requests'] = setScoreRequests;
    }

    /**
     * Constructs a <code>LeaderboardsBatchSetScoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/LeaderboardsBatchSetScoreRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/LeaderboardsBatchSetScoreRequest} The populated <code>LeaderboardsBatchSetScoreRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardsBatchSetScoreRequest();

            if (data.hasOwnProperty('set_score_requests')) {
                obj['set_score_requests'] = ApiClient.convertToType(data['set_score_requests'], [LeaderboardsSetScoreRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeaderboardsBatchSetScoreRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaderboardsBatchSetScoreRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LeaderboardsBatchSetScoreRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['set_score_requests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['set_score_requests'])) {
                throw new Error("Expected the field `set_score_requests` to be an array in the JSON data but got " + data['set_score_requests']);
            }
            // validate the optional field `set_score_requests` (array)
            for (const item of data['set_score_requests']) {
                LeaderboardsSetScoreRequest.validateJSON(item);
            };
        }

        return true;
    }


}

LeaderboardsBatchSetScoreRequest.RequiredProperties = ["set_score_requests"];

/**
 * List of requests with their scores to be inserted
 * @member {Array.<module:snapser-apis/LeaderboardsSetScoreRequest>} set_score_requests
 */
LeaderboardsBatchSetScoreRequest.prototype['set_score_requests'] = undefined;






export default LeaderboardsBatchSetScoreRequest;

