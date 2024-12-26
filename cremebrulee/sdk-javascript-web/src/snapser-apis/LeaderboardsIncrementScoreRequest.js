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
 * The LeaderboardsIncrementScoreRequest model module.
 * @module snapser-apis/LeaderboardsIncrementScoreRequest
 * @version cremebrulee: v1 SDK
 */
class LeaderboardsIncrementScoreRequest {
    /**
     * Constructs a new <code>LeaderboardsIncrementScoreRequest</code>.
     * @alias module:snapser-apis/LeaderboardsIncrementScoreRequest
     * @param delta {Number} The delta of the score to increment
     * @param leaderboardName {String} Name of the leaderboard
     * @param userId {String} User ID for the user who's score is being updated
     */
    constructor(delta, leaderboardName, userId) { 
        
        LeaderboardsIncrementScoreRequest.initialize(this, delta, leaderboardName, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, delta, leaderboardName, userId) { 
        obj['delta'] = delta;
        obj['leaderboard_name'] = leaderboardName;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>LeaderboardsIncrementScoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/LeaderboardsIncrementScoreRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/LeaderboardsIncrementScoreRequest} The populated <code>LeaderboardsIncrementScoreRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardsIncrementScoreRequest();

            if (data.hasOwnProperty('delta')) {
                obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
            }
            if (data.hasOwnProperty('leaderboard_name')) {
                obj['leaderboard_name'] = ApiClient.convertToType(data['leaderboard_name'], 'String');
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
     * Validates the JSON data with respect to <code>LeaderboardsIncrementScoreRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaderboardsIncrementScoreRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LeaderboardsIncrementScoreRequest.RequiredProperties) {
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

LeaderboardsIncrementScoreRequest.RequiredProperties = ["delta", "leaderboard_name", "user_id"];

/**
 * The delta of the score to increment
 * @member {Number} delta
 */
LeaderboardsIncrementScoreRequest.prototype['delta'] = undefined;

/**
 * Name of the leaderboard
 * @member {String} leaderboard_name
 */
LeaderboardsIncrementScoreRequest.prototype['leaderboard_name'] = undefined;

/**
 * Name of the tier
 * @member {String} tier_name
 */
LeaderboardsIncrementScoreRequest.prototype['tier_name'] = undefined;

/**
 * User ID for the user who's score is being updated
 * @member {String} user_id
 */
LeaderboardsIncrementScoreRequest.prototype['user_id'] = undefined;

/**
 * Metadata to be stored with the user
 * @member {Object} user_metadata
 */
LeaderboardsIncrementScoreRequest.prototype['user_metadata'] = undefined;






export default LeaderboardsIncrementScoreRequest;

