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
 * The AuthSteamSessionTicketLoginRequest model module.
 * @module snapser-apis/AuthSteamSessionTicketLoginRequest
 * @version cremebrulee: v1 SDK
 */
class AuthSteamSessionTicketLoginRequest {
    /**
     * Constructs a new <code>AuthSteamSessionTicketLoginRequest</code>.
     * @alias module:snapser-apis/AuthSteamSessionTicketLoginRequest
     * @param sessionTicket {String} Session ticket generated on the client
     */
    constructor(sessionTicket) { 
        
        AuthSteamSessionTicketLoginRequest.initialize(this, sessionTicket);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sessionTicket) { 
        obj['session_ticket'] = sessionTicket;
    }

    /**
     * Constructs a <code>AuthSteamSessionTicketLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:snapser-apis/AuthSteamSessionTicketLoginRequest} obj Optional instance to populate.
     * @return {module:snapser-apis/AuthSteamSessionTicketLoginRequest} The populated <code>AuthSteamSessionTicketLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthSteamSessionTicketLoginRequest();

            if (data.hasOwnProperty('create_user')) {
                obj['create_user'] = ApiClient.convertToType(data['create_user'], 'Boolean');
            }
            if (data.hasOwnProperty('identity')) {
                obj['identity'] = ApiClient.convertToType(data['identity'], 'String');
            }
            if (data.hasOwnProperty('session_ticket')) {
                obj['session_ticket'] = ApiClient.convertToType(data['session_ticket'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthSteamSessionTicketLoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthSteamSessionTicketLoginRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthSteamSessionTicketLoginRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['identity'] && !(typeof data['identity'] === 'string' || data['identity'] instanceof String)) {
            throw new Error("Expected the field `identity` to be a primitive type in the JSON string but got " + data['identity']);
        }
        // ensure the json data is a string
        if (data['session_ticket'] && !(typeof data['session_ticket'] === 'string' || data['session_ticket'] instanceof String)) {
            throw new Error("Expected the field `session_ticket` to be a primitive type in the JSON string but got " + data['session_ticket']);
        }

        return true;
    }


}

AuthSteamSessionTicketLoginRequest.RequiredProperties = ["session_ticket"];

/**
 * Whether to create a user, if it does not exist
 * @member {Boolean} create_user
 */
AuthSteamSessionTicketLoginRequest.prototype['create_user'] = undefined;

/**
 * Identity string used to generate session ticket (if applicable)
 * @member {String} identity
 */
AuthSteamSessionTicketLoginRequest.prototype['identity'] = undefined;

/**
 * Session ticket generated on the client
 * @member {String} session_ticket
 */
AuthSteamSessionTicketLoginRequest.prototype['session_ticket'] = undefined;






export default AuthSteamSessionTicketLoginRequest;

