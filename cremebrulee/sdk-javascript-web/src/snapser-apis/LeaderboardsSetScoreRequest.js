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
 * The LeaderboardsSetScoreRequest model module.
 * @module snapser-apis/LeaderboardsSetScoreRequest
 * @version cremebrulee: v1 SDK
 */
class LeaderboardsSetScoreRequest {
    /**
     * Constructs a new <code>LeaderboardsSetScoreRequest</code>.
     * @alias module:snapser-apis/LeaderboardsSetScoreRequest
     * @param leaderboardName {String} Name of the leaderboard
     * @param score {Number} New score to be inserted
     * @param userId {String} User ID for the user who's score is being updated
     */
    constructor(leaderboardName, score, userId) { 
        
        LeaderboardsSetScoreRequest.initialize(this, leaderboardName, score, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, leaderboardName, score, userId) { 
        obj['leaderboard_name'] = leaderboardName;
        obj['score'] = score;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>LeaderboardsSetScoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/LeaderboardsSetScoreRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/LeaderboardsSetScoreRequest} The populated <code>LeaderboardsSetScoreRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardsSetScoreRequest();

            if (data.hasOwnProperty('leaderboard_name')) {
                obj['leaderboard_name'] = ApiClient.convertToType(data['leaderboard_name'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('tier_name')) {
                obj['tier_name'] = ApiClient.convertToType(data['tier_name'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('user_metadata')) {
                obj['user_metadata'] = ApiClient.convertToType(data['user_metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeaderboardsSetScoreRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaderboardsSetScoreRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LeaderboardsSetScoreRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['leaderboard_name'] && !(typeof data['leaderboard_name'] === 'string' || data['leaderboard_name'] instanceof String)) {
            throw new Error("Expected the field `leaderboard_name` to be a primitive type in the JSON string but got " + data['leaderboard_name']);
        }
        // ensure the json data is a string
        if (data['tier_name'] && !(typeof data['tier_name'] === 'string' || data['tier_name'] instanceof String)) {
            throw new Error("Expected the field `tier_name` to be a primitive type in the JSON string but got " + data['tier_name']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

LeaderboardsSetScoreRequest.RequiredProperties = ["leaderboard_name", "score", "user_id"];

/**
 * Name of the leaderboard
 * @member {String} leaderboard_name
 */
LeaderboardsSetScoreRequest.prototype['leaderboard_name'] = undefined;

/**
 * New score to be inserted
 * @member {Number} score
 */
LeaderboardsSetScoreRequest.prototype['score'] = undefined;

/**
 * Name of the tier
 * @member {String} tier_name
 */
LeaderboardsSetScoreRequest.prototype['tier_name'] = undefined;

/**
 * User ID for the user who's score is being updated
 * @member {String} user_id
 */
LeaderboardsSetScoreRequest.prototype['user_id'] = undefined;

/**
 * Metadata to be stored with the user
 * @member {Object} user_metadata
 */
LeaderboardsSetScoreRequest.prototype['user_metadata'] = undefined;






export default LeaderboardsSetScoreRequest;

