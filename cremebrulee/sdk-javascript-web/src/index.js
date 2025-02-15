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


import ApiClient from './ApiClient.js';
import AnalyticsBatchCreateAppEventRequest from './snapser-apis/AnalyticsBatchCreateAppEventRequest.js';
import AnalyticsBatchCreateEventResponse from './snapser-apis/AnalyticsBatchCreateEventResponse.js';
import AnalyticsBatchCreateEventSingleResponse from './snapser-apis/AnalyticsBatchCreateEventSingleResponse.js';
import AnalyticsGenericEvent from './snapser-apis/AnalyticsGenericEvent.js';
import AnalyticsServerTime from './snapser-apis/AnalyticsServerTime.js';
import AnalyticsServiceBatchCreateUserEventsBody from './snapser-apis/AnalyticsServiceBatchCreateUserEventsBody.js';
import AnalyticsServiceCreateAppEventBody from './snapser-apis/AnalyticsServiceCreateAppEventBody.js';
import AnalyticsServiceCreateUserEventBody from './snapser-apis/AnalyticsServiceCreateUserEventBody.js';
import ApiHttpBody from './snapser-apis/ApiHttpBody.js';
import AuthAnonLoginRequest from './snapser-apis/AuthAnonLoginRequest.js';
import AuthAnonLoginResponse from './snapser-apis/AuthAnonLoginResponse.js';
import AuthAppleLoginRequest from './snapser-apis/AuthAppleLoginRequest.js';
import AuthAppleLoginResponse from './snapser-apis/AuthAppleLoginResponse.js';
import AuthAssociateLoginsRequest from './snapser-apis/AuthAssociateLoginsRequest.js';
import AuthEmailLoginRequest from './snapser-apis/AuthEmailLoginRequest.js';
import AuthEmailLoginResponse from './snapser-apis/AuthEmailLoginResponse.js';
import AuthEpicLoginRequest from './snapser-apis/AuthEpicLoginRequest.js';
import AuthEpicLoginResponse from './snapser-apis/AuthEpicLoginResponse.js';
import AuthFacebookLoginRequest from './snapser-apis/AuthFacebookLoginRequest.js';
import AuthFacebookLoginResponse from './snapser-apis/AuthFacebookLoginResponse.js';
import AuthGetUserIdsByLoginIdsResponse from './snapser-apis/AuthGetUserIdsByLoginIdsResponse.js';
import AuthGoogleLoginRequest from './snapser-apis/AuthGoogleLoginRequest.js';
import AuthGoogleLoginResponse from './snapser-apis/AuthGoogleLoginResponse.js';
import AuthLoginTypeType from './snapser-apis/AuthLoginTypeType.js';
import AuthOtpRequest from './snapser-apis/AuthOtpRequest.js';
import AuthRefreshRequest from './snapser-apis/AuthRefreshRequest.js';
import AuthRefreshResponse from './snapser-apis/AuthRefreshResponse.js';
import AuthSteamLoginRequest from './snapser-apis/AuthSteamLoginRequest.js';
import AuthSteamLoginResponse from './snapser-apis/AuthSteamLoginResponse.js';
import AuthSteamOpenIdLoginRequest from './snapser-apis/AuthSteamOpenIdLoginRequest.js';
import AuthSteamSessionTicketLoginRequest from './snapser-apis/AuthSteamSessionTicketLoginRequest.js';
import AuthUser from './snapser-apis/AuthUser.js';
import AuthValidateAppKeyRequest from './snapser-apis/AuthValidateAppKeyRequest.js';
import AuthValidateRequest from './snapser-apis/AuthValidateRequest.js';
import AuthValidateResponse from './snapser-apis/AuthValidateResponse.js';
import AuthXboxLoginRequest from './snapser-apis/AuthXboxLoginRequest.js';
import AuthXboxLoginResponse from './snapser-apis/AuthXboxLoginResponse.js';
import ExperimentsGetUserExperimentsResponse from './snapser-apis/ExperimentsGetUserExperimentsResponse.js';
import ExperimentsUserExperiment from './snapser-apis/ExperimentsUserExperiment.js';
import IncrementScoreRequest from './snapser-apis/IncrementScoreRequest.js';
import LeaderboardsBatchGetScoresResponse from './snapser-apis/LeaderboardsBatchGetScoresResponse.js';
import LeaderboardsBatchGetScoresSingleResponse from './snapser-apis/LeaderboardsBatchGetScoresSingleResponse.js';
import LeaderboardsBatchIncrementScoreRequest from './snapser-apis/LeaderboardsBatchIncrementScoreRequest.js';
import LeaderboardsBatchIncrementScoreResponse from './snapser-apis/LeaderboardsBatchIncrementScoreResponse.js';
import LeaderboardsBatchIncrementScoreSingleResponse from './snapser-apis/LeaderboardsBatchIncrementScoreSingleResponse.js';
import LeaderboardsBatchSetScoreRequest from './snapser-apis/LeaderboardsBatchSetScoreRequest.js';
import LeaderboardsBatchSetScoreResponse from './snapser-apis/LeaderboardsBatchSetScoreResponse.js';
import LeaderboardsBatchSetScoreSingleResponse from './snapser-apis/LeaderboardsBatchSetScoreSingleResponse.js';
import LeaderboardsGetScoresRequest from './snapser-apis/LeaderboardsGetScoresRequest.js';
import LeaderboardsGetScoresResponse from './snapser-apis/LeaderboardsGetScoresResponse.js';
import LeaderboardsIncrementScoreRequest from './snapser-apis/LeaderboardsIncrementScoreRequest.js';
import LeaderboardsIncrementScoreResponse from './snapser-apis/LeaderboardsIncrementScoreResponse.js';
import LeaderboardsSetScoreRequest from './snapser-apis/LeaderboardsSetScoreRequest.js';
import LeaderboardsSetScoreResponse from './snapser-apis/LeaderboardsSetScoreResponse.js';
import LeaderboardsTier from './snapser-apis/LeaderboardsTier.js';
import LeaderboardsTieredUserScore from './snapser-apis/LeaderboardsTieredUserScore.js';
import LeaderboardsUserScore from './snapser-apis/LeaderboardsUserScore.js';
import ProtobufAny from './snapser-apis/ProtobufAny.js';
import ProtobufNullValue from './snapser-apis/ProtobufNullValue.js';
import RemoteConfigGetAppConfigResponse from './snapser-apis/RemoteConfigGetAppConfigResponse.js';
import RemoteConfigGetUserConfigResponse from './snapser-apis/RemoteConfigGetUserConfigResponse.js';
import SetScoreRequest from './snapser-apis/SetScoreRequest.js';
import StatisticsBatchGetUserStatisticsResponse from './snapser-apis/StatisticsBatchGetUserStatisticsResponse.js';
import StatisticsBatchGetUserStatisticsSingleResponse from './snapser-apis/StatisticsBatchGetUserStatisticsSingleResponse.js';
import StatisticsBatchSetUserStatisticsRequest from './snapser-apis/StatisticsBatchSetUserStatisticsRequest.js';
import StatisticsBatchSetUserStatisticsResponse from './snapser-apis/StatisticsBatchSetUserStatisticsResponse.js';
import StatisticsBatchSetUserStatisticsSingleResponse from './snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse.js';
import StatisticsBatchUpdateUserStatisticsItem from './snapser-apis/StatisticsBatchUpdateUserStatisticsItem.js';
import StatisticsBatchUpdateUserStatisticsResponse from './snapser-apis/StatisticsBatchUpdateUserStatisticsResponse.js';
import StatisticsGetUserStatisticsRequest from './snapser-apis/StatisticsGetUserStatisticsRequest.js';
import StatisticsGetUserStatisticsResponse from './snapser-apis/StatisticsGetUserStatisticsResponse.js';
import StatisticsIsUserInSegmentResponse from './snapser-apis/StatisticsIsUserInSegmentResponse.js';
import StatisticsMultiUserStatistics from './snapser-apis/StatisticsMultiUserStatistics.js';
import StatisticsServiceBatchUpdateUserStatisticsBody from './snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody.js';
import StatisticsServiceIncrementUserStatisticBody from './snapser-apis/StatisticsServiceIncrementUserStatisticBody.js';
import StatisticsServiceSetUserStatisticBody from './snapser-apis/StatisticsServiceSetUserStatisticBody.js';
import StatisticsSetUserStatisticRequest from './snapser-apis/StatisticsSetUserStatisticRequest.js';
import StatisticsUserStatistic from './snapser-apis/StatisticsUserStatistic.js';
import StorageAppendBlobAndOwner from './snapser-apis/StorageAppendBlobAndOwner.js';
import StorageBatchGetAppendBlobsResponse from './snapser-apis/StorageBatchGetAppendBlobsResponse.js';
import StorageBatchGetAppendBlobsSingleResponse from './snapser-apis/StorageBatchGetAppendBlobsSingleResponse.js';
import StorageBatchGetBlobsResponse from './snapser-apis/StorageBatchGetBlobsResponse.js';
import StorageBatchGetBlobsSingleResponse from './snapser-apis/StorageBatchGetBlobsSingleResponse.js';
import StorageBatchGetCountersResponse from './snapser-apis/StorageBatchGetCountersResponse.js';
import StorageBatchGetCountersSingleResponse from './snapser-apis/StorageBatchGetCountersSingleResponse.js';
import StorageBatchIncrementCounterRequest from './snapser-apis/StorageBatchIncrementCounterRequest.js';
import StorageBatchIncrementCounterResponse from './snapser-apis/StorageBatchIncrementCounterResponse.js';
import StorageBatchInsertBlobRequest from './snapser-apis/StorageBatchInsertBlobRequest.js';
import StorageBatchInsertBlobResponse from './snapser-apis/StorageBatchInsertBlobResponse.js';
import StorageBatchReplaceBlobRequest from './snapser-apis/StorageBatchReplaceBlobRequest.js';
import StorageBatchReplaceBlobResponse from './snapser-apis/StorageBatchReplaceBlobResponse.js';
import StorageBatchSingleBlobResponse from './snapser-apis/StorageBatchSingleBlobResponse.js';
import StorageBatchSingleIncrementCounterResponse from './snapser-apis/StorageBatchSingleIncrementCounterResponse.js';
import StorageBatchSingleReplaceBlobResponse from './snapser-apis/StorageBatchSingleReplaceBlobResponse.js';
import StorageBatchSingleUpdateAppendBlobResponse from './snapser-apis/StorageBatchSingleUpdateAppendBlobResponse.js';
import StorageBatchUpdateAppendBlobRequest from './snapser-apis/StorageBatchUpdateAppendBlobRequest.js';
import StorageBatchUpdateAppendBlobResponse from './snapser-apis/StorageBatchUpdateAppendBlobResponse.js';
import StorageBlobAndOwner from './snapser-apis/StorageBlobAndOwner.js';
import StorageCounterAndOwner from './snapser-apis/StorageCounterAndOwner.js';
import StorageDeleteAppendBlobResponse from './snapser-apis/StorageDeleteAppendBlobResponse.js';
import StorageDeleteBlobResponse from './snapser-apis/StorageDeleteBlobResponse.js';
import StorageGetAppendBlobRequest from './snapser-apis/StorageGetAppendBlobRequest.js';
import StorageGetAppendBlobResponse from './snapser-apis/StorageGetAppendBlobResponse.js';
import StorageGetBlobRequest from './snapser-apis/StorageGetBlobRequest.js';
import StorageGetBlobResponse from './snapser-apis/StorageGetBlobResponse.js';
import StorageGetCasResponse from './snapser-apis/StorageGetCasResponse.js';
import StorageGetCounterRequest from './snapser-apis/StorageGetCounterRequest.js';
import StorageGetCounterResponse from './snapser-apis/StorageGetCounterResponse.js';
import StorageIncrementCounterRequest from './snapser-apis/StorageIncrementCounterRequest.js';
import StorageIncrementCounterResponse from './snapser-apis/StorageIncrementCounterResponse.js';
import StorageInsertBlobRequest from './snapser-apis/StorageInsertBlobRequest.js';
import StorageInsertBlobResponse from './snapser-apis/StorageInsertBlobResponse.js';
import StorageReplaceBlobRequest from './snapser-apis/StorageReplaceBlobRequest.js';
import StorageReplaceBlobResponse from './snapser-apis/StorageReplaceBlobResponse.js';
import StorageResetCounterResponse from './snapser-apis/StorageResetCounterResponse.js';
import StorageServiceIncrementCounterBody from './snapser-apis/StorageServiceIncrementCounterBody.js';
import StorageServiceInsertBlobBody from './snapser-apis/StorageServiceInsertBlobBody.js';
import StorageServiceReplaceBlobBody from './snapser-apis/StorageServiceReplaceBlobBody.js';
import StorageServiceUpdateAppendBlobBody from './snapser-apis/StorageServiceUpdateAppendBlobBody.js';
import StorageUpdateAppendBlobRequest from './snapser-apis/StorageUpdateAppendBlobRequest.js';
import StorageUpdateAppendBlobResponse from './snapser-apis/StorageUpdateAppendBlobResponse.js';
import StorageUserAppendBlobResponse from './snapser-apis/StorageUserAppendBlobResponse.js';
import StorageUserBlobResponse from './snapser-apis/StorageUserBlobResponse.js';
import StorageUserCounterResponse from './snapser-apis/StorageUserCounterResponse.js';
import AnalyticsServiceApi from './snapser-models/AnalyticsServiceApi.js';
import AuthServiceApi from './snapser-models/AuthServiceApi.js';
import ExperimentsServiceApi from './snapser-models/ExperimentsServiceApi.js';
import LeaderboardsServiceApi from './snapser-models/LeaderboardsServiceApi.js';
import RemoteConfigServiceApi from './snapser-models/RemoteConfigServiceApi.js';
import StatisticsServiceApi from './snapser-models/StatisticsServiceApi.js';
import StorageServiceApi from './snapser-models/StorageServiceApi.js';


/**
* Your custom SDK.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var snapser = require('index'); // See note below*.
* var xxxSvc = new snapser.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new snapser.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new snapser.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new snapser.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version cremebrulee: v1 SDK
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AnalyticsBatchCreateAppEventRequest model constructor.
     * @property {module:snapser-apis/AnalyticsBatchCreateAppEventRequest}
     */
    AnalyticsBatchCreateAppEventRequest,

    /**
     * The AnalyticsBatchCreateEventResponse model constructor.
     * @property {module:snapser-apis/AnalyticsBatchCreateEventResponse}
     */
    AnalyticsBatchCreateEventResponse,

    /**
     * The AnalyticsBatchCreateEventSingleResponse model constructor.
     * @property {module:snapser-apis/AnalyticsBatchCreateEventSingleResponse}
     */
    AnalyticsBatchCreateEventSingleResponse,

    /**
     * The AnalyticsGenericEvent model constructor.
     * @property {module:snapser-apis/AnalyticsGenericEvent}
     */
    AnalyticsGenericEvent,

    /**
     * The AnalyticsServerTime model constructor.
     * @property {module:snapser-apis/AnalyticsServerTime}
     */
    AnalyticsServerTime,

    /**
     * The AnalyticsServiceBatchCreateUserEventsBody model constructor.
     * @property {module:snapser-apis/AnalyticsServiceBatchCreateUserEventsBody}
     */
    AnalyticsServiceBatchCreateUserEventsBody,

    /**
     * The AnalyticsServiceCreateAppEventBody model constructor.
     * @property {module:snapser-apis/AnalyticsServiceCreateAppEventBody}
     */
    AnalyticsServiceCreateAppEventBody,

    /**
     * The AnalyticsServiceCreateUserEventBody model constructor.
     * @property {module:snapser-apis/AnalyticsServiceCreateUserEventBody}
     */
    AnalyticsServiceCreateUserEventBody,

    /**
     * The ApiHttpBody model constructor.
     * @property {module:snapser-apis/ApiHttpBody}
     */
    ApiHttpBody,

    /**
     * The AuthAnonLoginRequest model constructor.
     * @property {module:snapser-apis/AuthAnonLoginRequest}
     */
    AuthAnonLoginRequest,

    /**
     * The AuthAnonLoginResponse model constructor.
     * @property {module:snapser-apis/AuthAnonLoginResponse}
     */
    AuthAnonLoginResponse,

    /**
     * The AuthAppleLoginRequest model constructor.
     * @property {module:snapser-apis/AuthAppleLoginRequest}
     */
    AuthAppleLoginRequest,

    /**
     * The AuthAppleLoginResponse model constructor.
     * @property {module:snapser-apis/AuthAppleLoginResponse}
     */
    AuthAppleLoginResponse,

    /**
     * The AuthAssociateLoginsRequest model constructor.
     * @property {module:snapser-apis/AuthAssociateLoginsRequest}
     */
    AuthAssociateLoginsRequest,

    /**
     * The AuthEmailLoginRequest model constructor.
     * @property {module:snapser-apis/AuthEmailLoginRequest}
     */
    AuthEmailLoginRequest,

    /**
     * The AuthEmailLoginResponse model constructor.
     * @property {module:snapser-apis/AuthEmailLoginResponse}
     */
    AuthEmailLoginResponse,

    /**
     * The AuthEpicLoginRequest model constructor.
     * @property {module:snapser-apis/AuthEpicLoginRequest}
     */
    AuthEpicLoginRequest,

    /**
     * The AuthEpicLoginResponse model constructor.
     * @property {module:snapser-apis/AuthEpicLoginResponse}
     */
    AuthEpicLoginResponse,

    /**
     * The AuthFacebookLoginRequest model constructor.
     * @property {module:snapser-apis/AuthFacebookLoginRequest}
     */
    AuthFacebookLoginRequest,

    /**
     * The AuthFacebookLoginResponse model constructor.
     * @property {module:snapser-apis/AuthFacebookLoginResponse}
     */
    AuthFacebookLoginResponse,

    /**
     * The AuthGetUserIdsByLoginIdsResponse model constructor.
     * @property {module:snapser-apis/AuthGetUserIdsByLoginIdsResponse}
     */
    AuthGetUserIdsByLoginIdsResponse,

    /**
     * The AuthGoogleLoginRequest model constructor.
     * @property {module:snapser-apis/AuthGoogleLoginRequest}
     */
    AuthGoogleLoginRequest,

    /**
     * The AuthGoogleLoginResponse model constructor.
     * @property {module:snapser-apis/AuthGoogleLoginResponse}
     */
    AuthGoogleLoginResponse,

    /**
     * The AuthLoginTypeType model constructor.
     * @property {module:snapser-apis/AuthLoginTypeType}
     */
    AuthLoginTypeType,

    /**
     * The AuthOtpRequest model constructor.
     * @property {module:snapser-apis/AuthOtpRequest}
     */
    AuthOtpRequest,

    /**
     * The AuthRefreshRequest model constructor.
     * @property {module:snapser-apis/AuthRefreshRequest}
     */
    AuthRefreshRequest,

    /**
     * The AuthRefreshResponse model constructor.
     * @property {module:snapser-apis/AuthRefreshResponse}
     */
    AuthRefreshResponse,

    /**
     * The AuthSteamLoginRequest model constructor.
     * @property {module:snapser-apis/AuthSteamLoginRequest}
     */
    AuthSteamLoginRequest,

    /**
     * The AuthSteamLoginResponse model constructor.
     * @property {module:snapser-apis/AuthSteamLoginResponse}
     */
    AuthSteamLoginResponse,

    /**
     * The AuthSteamOpenIdLoginRequest model constructor.
     * @property {module:snapser-apis/AuthSteamOpenIdLoginRequest}
     */
    AuthSteamOpenIdLoginRequest,

    /**
     * The AuthSteamSessionTicketLoginRequest model constructor.
     * @property {module:snapser-apis/AuthSteamSessionTicketLoginRequest}
     */
    AuthSteamSessionTicketLoginRequest,

    /**
     * The AuthUser model constructor.
     * @property {module:snapser-apis/AuthUser}
     */
    AuthUser,

    /**
     * The AuthValidateAppKeyRequest model constructor.
     * @property {module:snapser-apis/AuthValidateAppKeyRequest}
     */
    AuthValidateAppKeyRequest,

    /**
     * The AuthValidateRequest model constructor.
     * @property {module:snapser-apis/AuthValidateRequest}
     */
    AuthValidateRequest,

    /**
     * The AuthValidateResponse model constructor.
     * @property {module:snapser-apis/AuthValidateResponse}
     */
    AuthValidateResponse,

    /**
     * The AuthXboxLoginRequest model constructor.
     * @property {module:snapser-apis/AuthXboxLoginRequest}
     */
    AuthXboxLoginRequest,

    /**
     * The AuthXboxLoginResponse model constructor.
     * @property {module:snapser-apis/AuthXboxLoginResponse}
     */
    AuthXboxLoginResponse,

    /**
     * The ExperimentsGetUserExperimentsResponse model constructor.
     * @property {module:snapser-apis/ExperimentsGetUserExperimentsResponse}
     */
    ExperimentsGetUserExperimentsResponse,

    /**
     * The ExperimentsUserExperiment model constructor.
     * @property {module:snapser-apis/ExperimentsUserExperiment}
     */
    ExperimentsUserExperiment,

    /**
     * The IncrementScoreRequest model constructor.
     * @property {module:snapser-apis/IncrementScoreRequest}
     */
    IncrementScoreRequest,

    /**
     * The LeaderboardsBatchGetScoresResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchGetScoresResponse}
     */
    LeaderboardsBatchGetScoresResponse,

    /**
     * The LeaderboardsBatchGetScoresSingleResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchGetScoresSingleResponse}
     */
    LeaderboardsBatchGetScoresSingleResponse,

    /**
     * The LeaderboardsBatchIncrementScoreRequest model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchIncrementScoreRequest}
     */
    LeaderboardsBatchIncrementScoreRequest,

    /**
     * The LeaderboardsBatchIncrementScoreResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchIncrementScoreResponse}
     */
    LeaderboardsBatchIncrementScoreResponse,

    /**
     * The LeaderboardsBatchIncrementScoreSingleResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchIncrementScoreSingleResponse}
     */
    LeaderboardsBatchIncrementScoreSingleResponse,

    /**
     * The LeaderboardsBatchSetScoreRequest model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchSetScoreRequest}
     */
    LeaderboardsBatchSetScoreRequest,

    /**
     * The LeaderboardsBatchSetScoreResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchSetScoreResponse}
     */
    LeaderboardsBatchSetScoreResponse,

    /**
     * The LeaderboardsBatchSetScoreSingleResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsBatchSetScoreSingleResponse}
     */
    LeaderboardsBatchSetScoreSingleResponse,

    /**
     * The LeaderboardsGetScoresRequest model constructor.
     * @property {module:snapser-apis/LeaderboardsGetScoresRequest}
     */
    LeaderboardsGetScoresRequest,

    /**
     * The LeaderboardsGetScoresResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsGetScoresResponse}
     */
    LeaderboardsGetScoresResponse,

    /**
     * The LeaderboardsIncrementScoreRequest model constructor.
     * @property {module:snapser-apis/LeaderboardsIncrementScoreRequest}
     */
    LeaderboardsIncrementScoreRequest,

    /**
     * The LeaderboardsIncrementScoreResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsIncrementScoreResponse}
     */
    LeaderboardsIncrementScoreResponse,

    /**
     * The LeaderboardsSetScoreRequest model constructor.
     * @property {module:snapser-apis/LeaderboardsSetScoreRequest}
     */
    LeaderboardsSetScoreRequest,

    /**
     * The LeaderboardsSetScoreResponse model constructor.
     * @property {module:snapser-apis/LeaderboardsSetScoreResponse}
     */
    LeaderboardsSetScoreResponse,

    /**
     * The LeaderboardsTier model constructor.
     * @property {module:snapser-apis/LeaderboardsTier}
     */
    LeaderboardsTier,

    /**
     * The LeaderboardsTieredUserScore model constructor.
     * @property {module:snapser-apis/LeaderboardsTieredUserScore}
     */
    LeaderboardsTieredUserScore,

    /**
     * The LeaderboardsUserScore model constructor.
     * @property {module:snapser-apis/LeaderboardsUserScore}
     */
    LeaderboardsUserScore,

    /**
     * The ProtobufAny model constructor.
     * @property {module:snapser-apis/ProtobufAny}
     */
    ProtobufAny,

    /**
     * The ProtobufNullValue model constructor.
     * @property {module:snapser-apis/ProtobufNullValue}
     */
    ProtobufNullValue,

    /**
     * The RemoteConfigGetAppConfigResponse model constructor.
     * @property {module:snapser-apis/RemoteConfigGetAppConfigResponse}
     */
    RemoteConfigGetAppConfigResponse,

    /**
     * The RemoteConfigGetUserConfigResponse model constructor.
     * @property {module:snapser-apis/RemoteConfigGetUserConfigResponse}
     */
    RemoteConfigGetUserConfigResponse,

    /**
     * The SetScoreRequest model constructor.
     * @property {module:snapser-apis/SetScoreRequest}
     */
    SetScoreRequest,

    /**
     * The StatisticsBatchGetUserStatisticsResponse model constructor.
     * @property {module:snapser-apis/StatisticsBatchGetUserStatisticsResponse}
     */
    StatisticsBatchGetUserStatisticsResponse,

    /**
     * The StatisticsBatchGetUserStatisticsSingleResponse model constructor.
     * @property {module:snapser-apis/StatisticsBatchGetUserStatisticsSingleResponse}
     */
    StatisticsBatchGetUserStatisticsSingleResponse,

    /**
     * The StatisticsBatchSetUserStatisticsRequest model constructor.
     * @property {module:snapser-apis/StatisticsBatchSetUserStatisticsRequest}
     */
    StatisticsBatchSetUserStatisticsRequest,

    /**
     * The StatisticsBatchSetUserStatisticsResponse model constructor.
     * @property {module:snapser-apis/StatisticsBatchSetUserStatisticsResponse}
     */
    StatisticsBatchSetUserStatisticsResponse,

    /**
     * The StatisticsBatchSetUserStatisticsSingleResponse model constructor.
     * @property {module:snapser-apis/StatisticsBatchSetUserStatisticsSingleResponse}
     */
    StatisticsBatchSetUserStatisticsSingleResponse,

    /**
     * The StatisticsBatchUpdateUserStatisticsItem model constructor.
     * @property {module:snapser-apis/StatisticsBatchUpdateUserStatisticsItem}
     */
    StatisticsBatchUpdateUserStatisticsItem,

    /**
     * The StatisticsBatchUpdateUserStatisticsResponse model constructor.
     * @property {module:snapser-apis/StatisticsBatchUpdateUserStatisticsResponse}
     */
    StatisticsBatchUpdateUserStatisticsResponse,

    /**
     * The StatisticsGetUserStatisticsRequest model constructor.
     * @property {module:snapser-apis/StatisticsGetUserStatisticsRequest}
     */
    StatisticsGetUserStatisticsRequest,

    /**
     * The StatisticsGetUserStatisticsResponse model constructor.
     * @property {module:snapser-apis/StatisticsGetUserStatisticsResponse}
     */
    StatisticsGetUserStatisticsResponse,

    /**
     * The StatisticsIsUserInSegmentResponse model constructor.
     * @property {module:snapser-apis/StatisticsIsUserInSegmentResponse}
     */
    StatisticsIsUserInSegmentResponse,

    /**
     * The StatisticsMultiUserStatistics model constructor.
     * @property {module:snapser-apis/StatisticsMultiUserStatistics}
     */
    StatisticsMultiUserStatistics,

    /**
     * The StatisticsServiceBatchUpdateUserStatisticsBody model constructor.
     * @property {module:snapser-apis/StatisticsServiceBatchUpdateUserStatisticsBody}
     */
    StatisticsServiceBatchUpdateUserStatisticsBody,

    /**
     * The StatisticsServiceIncrementUserStatisticBody model constructor.
     * @property {module:snapser-apis/StatisticsServiceIncrementUserStatisticBody}
     */
    StatisticsServiceIncrementUserStatisticBody,

    /**
     * The StatisticsServiceSetUserStatisticBody model constructor.
     * @property {module:snapser-apis/StatisticsServiceSetUserStatisticBody}
     */
    StatisticsServiceSetUserStatisticBody,

    /**
     * The StatisticsSetUserStatisticRequest model constructor.
     * @property {module:snapser-apis/StatisticsSetUserStatisticRequest}
     */
    StatisticsSetUserStatisticRequest,

    /**
     * The StatisticsUserStatistic model constructor.
     * @property {module:snapser-apis/StatisticsUserStatistic}
     */
    StatisticsUserStatistic,

    /**
     * The StorageAppendBlobAndOwner model constructor.
     * @property {module:snapser-apis/StorageAppendBlobAndOwner}
     */
    StorageAppendBlobAndOwner,

    /**
     * The StorageBatchGetAppendBlobsResponse model constructor.
     * @property {module:snapser-apis/StorageBatchGetAppendBlobsResponse}
     */
    StorageBatchGetAppendBlobsResponse,

    /**
     * The StorageBatchGetAppendBlobsSingleResponse model constructor.
     * @property {module:snapser-apis/StorageBatchGetAppendBlobsSingleResponse}
     */
    StorageBatchGetAppendBlobsSingleResponse,

    /**
     * The StorageBatchGetBlobsResponse model constructor.
     * @property {module:snapser-apis/StorageBatchGetBlobsResponse}
     */
    StorageBatchGetBlobsResponse,

    /**
     * The StorageBatchGetBlobsSingleResponse model constructor.
     * @property {module:snapser-apis/StorageBatchGetBlobsSingleResponse}
     */
    StorageBatchGetBlobsSingleResponse,

    /**
     * The StorageBatchGetCountersResponse model constructor.
     * @property {module:snapser-apis/StorageBatchGetCountersResponse}
     */
    StorageBatchGetCountersResponse,

    /**
     * The StorageBatchGetCountersSingleResponse model constructor.
     * @property {module:snapser-apis/StorageBatchGetCountersSingleResponse}
     */
    StorageBatchGetCountersSingleResponse,

    /**
     * The StorageBatchIncrementCounterRequest model constructor.
     * @property {module:snapser-apis/StorageBatchIncrementCounterRequest}
     */
    StorageBatchIncrementCounterRequest,

    /**
     * The StorageBatchIncrementCounterResponse model constructor.
     * @property {module:snapser-apis/StorageBatchIncrementCounterResponse}
     */
    StorageBatchIncrementCounterResponse,

    /**
     * The StorageBatchInsertBlobRequest model constructor.
     * @property {module:snapser-apis/StorageBatchInsertBlobRequest}
     */
    StorageBatchInsertBlobRequest,

    /**
     * The StorageBatchInsertBlobResponse model constructor.
     * @property {module:snapser-apis/StorageBatchInsertBlobResponse}
     */
    StorageBatchInsertBlobResponse,

    /**
     * The StorageBatchReplaceBlobRequest model constructor.
     * @property {module:snapser-apis/StorageBatchReplaceBlobRequest}
     */
    StorageBatchReplaceBlobRequest,

    /**
     * The StorageBatchReplaceBlobResponse model constructor.
     * @property {module:snapser-apis/StorageBatchReplaceBlobResponse}
     */
    StorageBatchReplaceBlobResponse,

    /**
     * The StorageBatchSingleBlobResponse model constructor.
     * @property {module:snapser-apis/StorageBatchSingleBlobResponse}
     */
    StorageBatchSingleBlobResponse,

    /**
     * The StorageBatchSingleIncrementCounterResponse model constructor.
     * @property {module:snapser-apis/StorageBatchSingleIncrementCounterResponse}
     */
    StorageBatchSingleIncrementCounterResponse,

    /**
     * The StorageBatchSingleReplaceBlobResponse model constructor.
     * @property {module:snapser-apis/StorageBatchSingleReplaceBlobResponse}
     */
    StorageBatchSingleReplaceBlobResponse,

    /**
     * The StorageBatchSingleUpdateAppendBlobResponse model constructor.
     * @property {module:snapser-apis/StorageBatchSingleUpdateAppendBlobResponse}
     */
    StorageBatchSingleUpdateAppendBlobResponse,

    /**
     * The StorageBatchUpdateAppendBlobRequest model constructor.
     * @property {module:snapser-apis/StorageBatchUpdateAppendBlobRequest}
     */
    StorageBatchUpdateAppendBlobRequest,

    /**
     * The StorageBatchUpdateAppendBlobResponse model constructor.
     * @property {module:snapser-apis/StorageBatchUpdateAppendBlobResponse}
     */
    StorageBatchUpdateAppendBlobResponse,

    /**
     * The StorageBlobAndOwner model constructor.
     * @property {module:snapser-apis/StorageBlobAndOwner}
     */
    StorageBlobAndOwner,

    /**
     * The StorageCounterAndOwner model constructor.
     * @property {module:snapser-apis/StorageCounterAndOwner}
     */
    StorageCounterAndOwner,

    /**
     * The StorageDeleteAppendBlobResponse model constructor.
     * @property {module:snapser-apis/StorageDeleteAppendBlobResponse}
     */
    StorageDeleteAppendBlobResponse,

    /**
     * The StorageDeleteBlobResponse model constructor.
     * @property {module:snapser-apis/StorageDeleteBlobResponse}
     */
    StorageDeleteBlobResponse,

    /**
     * The StorageGetAppendBlobRequest model constructor.
     * @property {module:snapser-apis/StorageGetAppendBlobRequest}
     */
    StorageGetAppendBlobRequest,

    /**
     * The StorageGetAppendBlobResponse model constructor.
     * @property {module:snapser-apis/StorageGetAppendBlobResponse}
     */
    StorageGetAppendBlobResponse,

    /**
     * The StorageGetBlobRequest model constructor.
     * @property {module:snapser-apis/StorageGetBlobRequest}
     */
    StorageGetBlobRequest,

    /**
     * The StorageGetBlobResponse model constructor.
     * @property {module:snapser-apis/StorageGetBlobResponse}
     */
    StorageGetBlobResponse,

    /**
     * The StorageGetCasResponse model constructor.
     * @property {module:snapser-apis/StorageGetCasResponse}
     */
    StorageGetCasResponse,

    /**
     * The StorageGetCounterRequest model constructor.
     * @property {module:snapser-apis/StorageGetCounterRequest}
     */
    StorageGetCounterRequest,

    /**
     * The StorageGetCounterResponse model constructor.
     * @property {module:snapser-apis/StorageGetCounterResponse}
     */
    StorageGetCounterResponse,

    /**
     * The StorageIncrementCounterRequest model constructor.
     * @property {module:snapser-apis/StorageIncrementCounterRequest}
     */
    StorageIncrementCounterRequest,

    /**
     * The StorageIncrementCounterResponse model constructor.
     * @property {module:snapser-apis/StorageIncrementCounterResponse}
     */
    StorageIncrementCounterResponse,

    /**
     * The StorageInsertBlobRequest model constructor.
     * @property {module:snapser-apis/StorageInsertBlobRequest}
     */
    StorageInsertBlobRequest,

    /**
     * The StorageInsertBlobResponse model constructor.
     * @property {module:snapser-apis/StorageInsertBlobResponse}
     */
    StorageInsertBlobResponse,

    /**
     * The StorageReplaceBlobRequest model constructor.
     * @property {module:snapser-apis/StorageReplaceBlobRequest}
     */
    StorageReplaceBlobRequest,

    /**
     * The StorageReplaceBlobResponse model constructor.
     * @property {module:snapser-apis/StorageReplaceBlobResponse}
     */
    StorageReplaceBlobResponse,

    /**
     * The StorageResetCounterResponse model constructor.
     * @property {module:snapser-apis/StorageResetCounterResponse}
     */
    StorageResetCounterResponse,

    /**
     * The StorageServiceIncrementCounterBody model constructor.
     * @property {module:snapser-apis/StorageServiceIncrementCounterBody}
     */
    StorageServiceIncrementCounterBody,

    /**
     * The StorageServiceInsertBlobBody model constructor.
     * @property {module:snapser-apis/StorageServiceInsertBlobBody}
     */
    StorageServiceInsertBlobBody,

    /**
     * The StorageServiceReplaceBlobBody model constructor.
     * @property {module:snapser-apis/StorageServiceReplaceBlobBody}
     */
    StorageServiceReplaceBlobBody,

    /**
     * The StorageServiceUpdateAppendBlobBody model constructor.
     * @property {module:snapser-apis/StorageServiceUpdateAppendBlobBody}
     */
    StorageServiceUpdateAppendBlobBody,

    /**
     * The StorageUpdateAppendBlobRequest model constructor.
     * @property {module:snapser-apis/StorageUpdateAppendBlobRequest}
     */
    StorageUpdateAppendBlobRequest,

    /**
     * The StorageUpdateAppendBlobResponse model constructor.
     * @property {module:snapser-apis/StorageUpdateAppendBlobResponse}
     */
    StorageUpdateAppendBlobResponse,

    /**
     * The StorageUserAppendBlobResponse model constructor.
     * @property {module:snapser-apis/StorageUserAppendBlobResponse}
     */
    StorageUserAppendBlobResponse,

    /**
     * The StorageUserBlobResponse model constructor.
     * @property {module:snapser-apis/StorageUserBlobResponse}
     */
    StorageUserBlobResponse,

    /**
     * The StorageUserCounterResponse model constructor.
     * @property {module:snapser-apis/StorageUserCounterResponse}
     */
    StorageUserCounterResponse,

    /**
    * The AnalyticsServiceApi service constructor.
    * @property {module:snapser-models/AnalyticsServiceApi}
    */
    AnalyticsServiceApi,

    /**
    * The AuthServiceApi service constructor.
    * @property {module:snapser-models/AuthServiceApi}
    */
    AuthServiceApi,

    /**
    * The ExperimentsServiceApi service constructor.
    * @property {module:snapser-models/ExperimentsServiceApi}
    */
    ExperimentsServiceApi,

    /**
    * The LeaderboardsServiceApi service constructor.
    * @property {module:snapser-models/LeaderboardsServiceApi}
    */
    LeaderboardsServiceApi,

    /**
    * The RemoteConfigServiceApi service constructor.
    * @property {module:snapser-models/RemoteConfigServiceApi}
    */
    RemoteConfigServiceApi,

    /**
    * The StatisticsServiceApi service constructor.
    * @property {module:snapser-models/StatisticsServiceApi}
    */
    StatisticsServiceApi,

    /**
    * The StorageServiceApi service constructor.
    * @property {module:snapser-models/StorageServiceApi}
    */
    StorageServiceApi
};
