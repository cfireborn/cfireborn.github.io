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


import ApiClient from "../ApiClient.js";
import StatisticsBatchGetUserStatisticsResponse from '../snapser-apis/StatisticsBatchGetUserStatisticsResponse.js';
import StatisticsBatchSetUserStatisticsRequest from '../snapser-apis/StatisticsBatchSetUserStatisticsRequest.js';
import StatisticsBatchSetUserStatisticsResponse from '../snapser-apis/StatisticsBatchSetUserStatisticsResponse.js';
import StatisticsBatchUpdateUserStatisticsResponse from '../snapser-apis/StatisticsBatchUpdateUserStatisticsResponse.js';
import StatisticsGetUserStatisticsResponse from '../snapser-apis/StatisticsGetUserStatisticsResponse.js';
import StatisticsIsUserInSegmentResponse from '../snapser-apis/StatisticsIsUserInSegmentResponse.js';
import StatisticsServiceBatchUpdateUserStatisticsBody from '../snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody.js';
import StatisticsServiceIncrementUserStatisticBody from '../snapser-apis/StatisticsServiceIncrementUserStatisticBody.js';
import StatisticsServiceSetUserStatisticBody from '../snapser-apis/StatisticsServiceSetUserStatisticBody.js';
import StatisticsUserStatistic from '../snapser-apis/StatisticsUserStatistic.js';

/**
* StatisticsService service.
* @module snapser-models/StatisticsServiceApi
* @version cremebrulee: v1 SDK
*/
export default class StatisticsServiceApi {

    /**
    * Constructs a new StatisticsServiceApi. 
    * @alias module:snapser-models/StatisticsServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the batchGetUserStatistics operation.
     * @callback module:snapser-models/StatisticsServiceApi~batchGetUserStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsBatchGetUserStatisticsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistics (App Auth)
     * Fetches user statistics for multiple users
     * @param {Array.<String>} userId ID(s) of the user(s) to get statistics for
     * @param {String} token (app auth only)
     * @param {module:snapser-models/StatisticsServiceApi~batchGetUserStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsBatchGetUserStatisticsResponse}
     */
    batchGetUserStatistics(userId, token, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling batchGetUserStatistics");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling batchGetUserStatistics");
      }

      let pathParams = {
      };
      let queryParams = {
        'user_id': this.apiClient.buildCollectionParam(userId, 'multi')
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatisticsBatchGetUserStatisticsResponse;
      return this.apiClient.callApi(
        '/v1/statistics/user-stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the batchSetUserStatistics operation.
     * @callback module:snapser-models/StatisticsServiceApi~batchSetUserStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsBatchSetUserStatisticsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistics (App Auth)
     * Sets user statistics in bulk for multiple users
     * @param {String} token (app auth only)
     * @param {module:snapser-apis/StatisticsBatchSetUserStatisticsRequest} body 
     * @param {module:snapser-models/StatisticsServiceApi~batchSetUserStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsBatchSetUserStatisticsResponse}
     */
    batchSetUserStatistics(token, body, callback) {
      let postBody = body;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling batchSetUserStatistics");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling batchSetUserStatistics");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StatisticsBatchSetUserStatisticsResponse;
      return this.apiClient.callApi(
        '/v1/statistics/user-stats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the batchUpdateUserStatistics operation.
     * @callback module:snapser-models/StatisticsServiceApi~batchUpdateUserStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsBatchUpdateUserStatisticsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistics
     * Updates user statistics in bulk
     * @param {String} userId User ID of the user for whom the stats are being updated
     * @param {String} token User session token
     * @param {module:snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody} body 
     * @param {module:snapser-models/StatisticsServiceApi~batchUpdateUserStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsBatchUpdateUserStatisticsResponse}
     */
    batchUpdateUserStatistics(userId, token, body, callback) {
      let postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling batchUpdateUserStatistics");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling batchUpdateUserStatistics");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling batchUpdateUserStatistics");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StatisticsBatchUpdateUserStatisticsResponse;
      return this.apiClient.callApi(
        '/v1/statistics/user-stats/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserStatistic operation.
     * @callback module:snapser-models/StatisticsServiceApi~getUserStatisticCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsUserStatistic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistic
     * Gets a specific user statistic by user id and stat key
     * @param {String} userId User ID of the user
     * @param {String} key Name of the user statistic
     * @param {String} token User session token
     * @param {module:snapser-models/StatisticsServiceApi~getUserStatisticCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsUserStatistic}
     */
    getUserStatistic(userId, key, token, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserStatistic");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getUserStatistic");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getUserStatistic");
      }

      let pathParams = {
        'user_id': userId,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatisticsUserStatistic;
      return this.apiClient.callApi(
        '/v1/statistics/user-stats/{user_id}/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserStatistics operation.
     * @callback module:snapser-models/StatisticsServiceApi~getUserStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsGetUserStatisticsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistics
     * Get all user statistics for user or stat
     * @param {String} userId User ID of the user
     * @param {String} token User session token
     * @param {module:snapser-models/StatisticsServiceApi~getUserStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsGetUserStatisticsResponse}
     */
    getUserStatistics(userId, token, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserStatistics");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getUserStatistics");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatisticsGetUserStatisticsResponse;
      return this.apiClient.callApi(
        '/v1/statistics/settings/user-stats/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the incrementUserStatistic operation.
     * @callback module:snapser-models/StatisticsServiceApi~incrementUserStatisticCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsUserStatistic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistic
     * Increments a user statistic
     * @param {String} userId User ID of the user who's stats are being requested
     * @param {String} key Name of the user statistic
     * @param {String} token User session token
     * @param {module:snapser-apis/StatisticsServiceIncrementUserStatisticBody} body 
     * @param {module:snapser-models/StatisticsServiceApi~incrementUserStatisticCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsUserStatistic}
     */
    incrementUserStatistic(userId, key, token, body, callback) {
      let postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling incrementUserStatistic");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling incrementUserStatistic");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling incrementUserStatistic");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling incrementUserStatistic");
      }

      let pathParams = {
        'user_id': userId,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StatisticsUserStatistic;
      return this.apiClient.callApi(
        '/v1/statistics/user-stats/{user_id}/{key}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the isUserInSegment operation.
     * @callback module:snapser-models/StatisticsServiceApi~isUserInSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsIsUserInSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Segment
     * Checks if user is in segment or not
     * @param {String} name Name of the segment
     * @param {String} userId User ID of the user
     * @param {String} token User session token
     * @param {module:snapser-models/StatisticsServiceApi~isUserInSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsIsUserInSegmentResponse}
     */
    isUserInSegment(name, userId, token, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling isUserInSegment");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling isUserInSegment");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling isUserInSegment");
      }

      let pathParams = {
        'name': name,
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatisticsIsUserInSegmentResponse;
      return this.apiClient.callApi(
        '/v1/statistics/segments/{name}/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserStatistic operation.
     * @callback module:snapser-models/StatisticsServiceApi~setUserStatisticCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/StatisticsUserStatistic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Statistic
     * Sets a user statistic
     * @param {String} userId User ID of the user who's stats are being requested
     * @param {String} key Name of the user statistic
     * @param {String} token User session token
     * @param {module:snapser-apis/StatisticsServiceSetUserStatisticBody} body 
     * @param {module:snapser-models/StatisticsServiceApi~setUserStatisticCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/StatisticsUserStatistic}
     */
    setUserStatistic(userId, key, token, body, callback) {
      let postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserStatistic");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling setUserStatistic");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling setUserStatistic");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setUserStatistic");
      }

      let pathParams = {
        'user_id': userId,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StatisticsUserStatistic;
      return this.apiClient.callApi(
        '/v1/statistics/user-stats/{user_id}/{key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
