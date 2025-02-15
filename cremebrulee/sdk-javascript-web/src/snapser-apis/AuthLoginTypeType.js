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
* Enum class AuthLoginTypeType.
* @enum {}
* @readonly
*/
export default class AuthLoginTypeType {
    
        /**
         * value: "UNSPECIFIED_LOGIN_TYPE"
         * @const
         */
        "UNSPECIFIED_LOGIN_TYPE" = "UNSPECIFIED_LOGIN_TYPE";

    
        /**
         * value: "EMAIL"
         * @const
         */
        "EMAIL" = "EMAIL";

    
        /**
         * value: "PASSWORD"
         * @const
         */
        "PASSWORD" = "PASSWORD";

    
        /**
         * value: "ANON"
         * @const
         */
        "ANON" = "ANON";

    
        /**
         * value: "FACEBOOK"
         * @const
         */
        "FACEBOOK" = "FACEBOOK";

    
        /**
         * value: "GOOGLE"
         * @const
         */
        "GOOGLE" = "GOOGLE";

    
        /**
         * value: "APPLE"
         * @const
         */
        "APPLE" = "APPLE";

    
        /**
         * value: "STEAM"
         * @const
         */
        "STEAM" = "STEAM";

    
        /**
         * value: "XBOX"
         * @const
         */
        "XBOX" = "XBOX";

    
        /**
         * value: "EPIC"
         * @const
         */
        "EPIC" = "EPIC";

    
        /**
         * value: "APP"
         * @const
         */
        "APP" = "APP";

    

    /**
    * Returns a <code>AuthLoginTypeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:snapser-apis/AuthLoginTypeType} The enum <code>AuthLoginTypeType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

