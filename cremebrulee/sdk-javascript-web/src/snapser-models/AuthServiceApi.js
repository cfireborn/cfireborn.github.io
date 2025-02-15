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
import ApiHttpBody from '../snapser-apis/ApiHttpBody.js';
import AuthAnonLoginRequest from '../snapser-apis/AuthAnonLoginRequest.js';
import AuthAnonLoginResponse from '../snapser-apis/AuthAnonLoginResponse.js';
import AuthAppleLoginRequest from '../snapser-apis/AuthAppleLoginRequest.js';
import AuthAppleLoginResponse from '../snapser-apis/AuthAppleLoginResponse.js';
import AuthAssociateLoginsRequest from '../snapser-apis/AuthAssociateLoginsRequest.js';
import AuthEmailLoginRequest from '../snapser-apis/AuthEmailLoginRequest.js';
import AuthEmailLoginResponse from '../snapser-apis/AuthEmailLoginResponse.js';
import AuthEpicLoginRequest from '../snapser-apis/AuthEpicLoginRequest.js';
import AuthEpicLoginResponse from '../snapser-apis/AuthEpicLoginResponse.js';
import AuthFacebookLoginRequest from '../snapser-apis/AuthFacebookLoginRequest.js';
import AuthFacebookLoginResponse from '../snapser-apis/AuthFacebookLoginResponse.js';
import AuthGetUserIdsByLoginIdsResponse from '../snapser-apis/AuthGetUserIdsByLoginIdsResponse.js';
import AuthGoogleLoginRequest from '../snapser-apis/AuthGoogleLoginRequest.js';
import AuthGoogleLoginResponse from '../snapser-apis/AuthGoogleLoginResponse.js';
import AuthOtpRequest from '../snapser-apis/AuthOtpRequest.js';
import AuthRefreshRequest from '../snapser-apis/AuthRefreshRequest.js';
import AuthRefreshResponse from '../snapser-apis/AuthRefreshResponse.js';
import AuthSteamLoginRequest from '../snapser-apis/AuthSteamLoginRequest.js';
import AuthSteamLoginResponse from '../snapser-apis/AuthSteamLoginResponse.js';
import AuthSteamOpenIdLoginRequest from '../snapser-apis/AuthSteamOpenIdLoginRequest.js';
import AuthSteamSessionTicketLoginRequest from '../snapser-apis/AuthSteamSessionTicketLoginRequest.js';
import AuthValidateAppKeyRequest from '../snapser-apis/AuthValidateAppKeyRequest.js';
import AuthValidateRequest from '../snapser-apis/AuthValidateRequest.js';
import AuthValidateResponse from '../snapser-apis/AuthValidateResponse.js';
import AuthXboxLoginRequest from '../snapser-apis/AuthXboxLoginRequest.js';
import AuthXboxLoginResponse from '../snapser-apis/AuthXboxLoginResponse.js';

/**
* AuthService service.
* @module snapser-models/AuthServiceApi
* @version cremebrulee: v1 SDK
*/
export default class AuthServiceApi {

    /**
    * Constructs a new AuthServiceApi. 
    * @alias module:snapser-models/AuthServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the anonLogin operation.
     * @callback module:snapser-models/AuthServiceApi~anonLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthAnonLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Anonymous Login
     * Logs in the user with an arbitrary identifier specified and returns a session
     * @param {module:snapser-apis/AuthAnonLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~anonLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthAnonLoginResponse}
     */
    anonLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling anonLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthAnonLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/anon', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appVerify operation.
     * @callback module:snapser-models/AuthServiceApi~appVerifyCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/ApiHttpBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Token
     * Verifies the session token and returns appropriate response based on the type
     * @param {String} type Type of app trying to verify the session token. Only acceptable value is 'photon'
     * @param {Object} opts Optional parameters
     * @param {String} [sessionToken] Session token of the user
     * @param {String} [clientSecret] Shared secret used to verify the request
     * @param {module:snapser-models/AuthServiceApi~appVerifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/ApiHttpBody}
     */
    appVerify(type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling appVerify");
      }

      let pathParams = {
        'type': type
      };
      let queryParams = {
        'session_token': opts['sessionToken'],
        'client_secret': opts['clientSecret']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiHttpBody;
      return this.apiClient.callApi(
        '/v1/auth/app-verify/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appleLogin operation.
     * @callback module:snapser-models/AuthServiceApi~appleLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthAppleLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apple Login
     * Logs in the user based on the apple credential token specified and returns a session
     * @param {module:snapser-apis/AuthAppleLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~appleLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthAppleLoginResponse}
     */
    appleLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appleLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthAppleLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/apple', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the associateLogins operation.
     * @callback module:snapser-models/AuthServiceApi~associateLoginsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associate Multiple Logins
     * Associates two logins based on their session tokens
     * @param {module:snapser-apis/AuthAssociateLoginsRequest} body 
     * @param {module:snapser-models/AuthServiceApi~associateLoginsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    associateLogins(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling associateLogins");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/auth/associate-logins', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailLogin operation.
     * @callback module:snapser-models/AuthServiceApi~emailLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthEmailLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Email Login
     * Logs in the user based on the email and OTP specified and returns a session
     * @param {module:snapser-apis/AuthEmailLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~emailLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthEmailLoginResponse}
     */
    emailLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling emailLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthEmailLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/email', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the epicLogin operation.
     * @callback module:snapser-models/AuthServiceApi~epicLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthEpicLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Epic Login
     * Logs in the user based on the epic credentials specified and returns a session
     * @param {module:snapser-apis/AuthEpicLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~epicLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthEpicLoginResponse}
     */
    epicLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling epicLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthEpicLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/epic', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the facebookLogin operation.
     * @callback module:snapser-models/AuthServiceApi~facebookLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthFacebookLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Facebook Login
     * Logs in the user based on the facebook credential token specified and returns a session
     * @param {module:snapser-apis/AuthFacebookLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~facebookLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthFacebookLoginResponse}
     */
    facebookLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling facebookLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthFacebookLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/facebook', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserIdsByLoginIds operation.
     * @callback module:snapser-models/AuthServiceApi~getUserIdsByLoginIdsCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthGetUserIdsByLoginIdsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Ids (App Auth)
     * Get UserIDs by login IDs and login types
     * @param {String} loginIds Comma separated login IDs of the user to be retrieved
     * @param {String} loginType Login type to search by. Values must be one of 'email', 'anon', 'apple', 'facebook', 'google', 'steam', 'xbox', 'epic'
     * @param {String} token Logged in user's session token
     * @param {module:snapser-models/AuthServiceApi~getUserIdsByLoginIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthGetUserIdsByLoginIdsResponse}
     */
    getUserIdsByLoginIds(loginIds, loginType, token, callback) {
      let postBody = null;
      // verify the required parameter 'loginIds' is set
      if (loginIds === undefined || loginIds === null) {
        throw new Error("Missing the required parameter 'loginIds' when calling getUserIdsByLoginIds");
      }
      // verify the required parameter 'loginType' is set
      if (loginType === undefined || loginType === null) {
        throw new Error("Missing the required parameter 'loginType' when calling getUserIdsByLoginIds");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getUserIdsByLoginIds");
      }

      let pathParams = {
      };
      let queryParams = {
        'login_ids': loginIds,
        'login_type': loginType
      };
      let headerParams = {
        'Token': token
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AuthGetUserIdsByLoginIdsResponse;
      return this.apiClient.callApi(
        '/v1/auth/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the googleLogin operation.
     * @callback module:snapser-models/AuthServiceApi~googleLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthGoogleLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Google Login
     * Logs in the user based on the google credential token specified and returns a session
     * @param {module:snapser-apis/AuthGoogleLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~googleLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthGoogleLoginResponse}
     */
    googleLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling googleLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthGoogleLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/google', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:snapser-models/AuthServiceApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout User
     * Ends the current session of the user
     * @param {String} token Session token to logout
     * @param {String} token2 Logged in user's session token
     * @param {module:snapser-models/AuthServiceApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    logout(token, token2, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling logout");
      }
      // verify the required parameter 'token2' is set
      if (token2 === undefined || token2 === null) {
        throw new Error("Missing the required parameter 'token2' when calling logout");
      }

      let pathParams = {
        'token': token
      };
      let queryParams = {
      };
      let headerParams = {
        'Token': token2
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/auth/logout/{token}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the otp operation.
     * @callback module:snapser-models/AuthServiceApi~otpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Email Login
     * Generates an OTP and sends it to the email for logging in
     * @param {module:snapser-apis/AuthOtpRequest} body 
     * @param {module:snapser-models/AuthServiceApi~otpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    otp(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling otp");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/auth/otp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refresh operation.
     * @callback module:snapser-models/AuthServiceApi~refreshCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthRefreshResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Token
     * Refreshes the session and returns a new session token with refreshed validity
     * @param {String} token Logged in user's session token
     * @param {module:snapser-apis/AuthRefreshRequest} body 
     * @param {module:snapser-models/AuthServiceApi~refreshCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthRefreshResponse}
     */
    refresh(token, body, callback) {
      let postBody = body;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling refresh");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling refresh");
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
      let returnType = AuthRefreshResponse;
      return this.apiClient.callApi(
        '/v1/auth/refresh', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the steamLogin operation.
     * @callback module:snapser-models/AuthServiceApi~steamLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthSteamLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Steam Login
     * Logs in the user based on the steam token specified and returns a session
     * @param {module:snapser-apis/AuthSteamLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~steamLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthSteamLoginResponse}
     */
    steamLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling steamLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthSteamLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/steam', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the steamOpenIdLogin operation.
     * @callback module:snapser-models/AuthServiceApi~steamOpenIdLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthSteamLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Steam Login
     * Logs in the user based on the steam open ID token specified and returns a session
     * @param {module:snapser-apis/AuthSteamOpenIdLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~steamOpenIdLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthSteamLoginResponse}
     */
    steamOpenIdLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling steamOpenIdLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthSteamLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/steam/openid/login', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the steamSessionTicketLogin operation.
     * @callback module:snapser-models/AuthServiceApi~steamSessionTicketLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthSteamLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Steam Login
     * Logs in the user based on the steam session ticket specified and returns a session
     * @param {module:snapser-apis/AuthSteamSessionTicketLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~steamSessionTicketLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthSteamLoginResponse}
     */
    steamSessionTicketLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling steamSessionTicketLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthSteamLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/steam/session-ticket/login', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validate operation.
     * @callback module:snapser-models/AuthServiceApi~validateCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthValidateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Token
     * Validates the session of the user and returns the user info
     * @param {module:snapser-apis/AuthValidateRequest} body 
     * @param {module:snapser-models/AuthServiceApi~validateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthValidateResponse}
     */
    validate(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthValidateResponse;
      return this.apiClient.callApi(
        '/v1/auth/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validateAppKey operation.
     * @callback module:snapser-models/AuthServiceApi~validateAppKeyCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * App Key
     * Validate an app key
     * @param {module:snapser-apis/AuthValidateAppKeyRequest} body 
     * @param {module:snapser-models/AuthServiceApi~validateAppKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    validateAppKey(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validateAppKey");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/auth/validate/app-key', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the xboxLogin operation.
     * @callback module:snapser-models/AuthServiceApi~xboxLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:snapser-apis/AuthXboxLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Xbox Login
     * Logs in the user based on the xbox token specified and returns a session
     * @param {module:snapser-apis/AuthXboxLoginRequest} body 
     * @param {module:snapser-models/AuthServiceApi~xboxLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:snapser-apis/AuthXboxLoginResponse}
     */
    xboxLogin(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling xboxLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthXboxLoginResponse;
      return this.apiClient.callApi(
        '/v1/auth/login/xbox', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
