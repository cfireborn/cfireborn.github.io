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
 * The LeaderboardsUserScore model module.
 * @module snapser-apis/LeaderboardsUserScore
 * @version cremebrulee: v1 SDK
 */
class LeaderboardsUserScore {
    /**
     * Constructs a new <code>LeaderboardsUserScore</code>.
     * @alias module:snapser-apis/LeaderboardsUserScore
     */
    constructor() { 
        
        LeaderboardsUserScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeaderboardsUserScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/LeaderboardsUserScore} obj Optional instance to populate.
     * @return {module:snapser-apis/LeaderboardsUserScore} The populated <code>LeaderboardsUserScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardsUserScore();

            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
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
     * Validates the JSON data with respect to <code>LeaderboardsUserScore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaderboardsUserScore</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}



/**
 * User's rank starting with 1
 * @member {Number} rank
 */
LeaderboardsUserScore.prototype['rank'] = undefined;

/**
 * User's score
 * @member {Number} score
 */
LeaderboardsUserScore.prototype['score'] = undefined;

/**
 * User ID of the user
 * @member {String} user_id
 */
LeaderboardsUserScore.prototype['user_id'] = undefined;

/**
 * User metadata
 * @member {Object} user_metadata
 */
LeaderboardsUserScore.prototype['user_metadata'] = undefined;






export default LeaderboardsUserScore;

