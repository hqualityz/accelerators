/* * *******************************************************************************************
 *  This file is part of the Oracle Service Cloud Accelerator Reference Integration set 
 *  published by Oracle under the Universal Permissive License (UPL), Version 1.0
 *  Copyright (c) 2017 Oracle and/or its affiliates. All rights reserved.
 ***********************************************************************************************
 *  Accelerator Package: Telephony and SMS Accelerator for Twilio
 *  link: http://www.oracle.com/technetwork/indexes/samplecode/accelerator-osvc-2525361.html
 *  OSvC release: 17D (November 2017)
 *  reference: 161212-000059
 *  date: Monday Oct 30 13:8:16 UTC 2017
 *  revision: rnw-17-11-fixes-releases
 * 
 *  SHA1: $Id: b24b8a5de8db615b696b83f5bbd22e75ea226000 $
 * *********************************************************************************************
 *  File: ctiMessages.js
 * ****************************************************************************************** */
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var CtiMessages = /** @class */ (function () {
        function CtiMessages() {
        }
        //COMMON
        CtiMessages.MESSAGE_APPENDER = ' >> ';
        CtiMessages.MESSAGE_EXCEPTION = "Exception Caught";
        //ServerEventHandler
        CtiMessages.MESSAGE_EVENT_DISPATCH = 'Dispatching Event ';
        CtiMessages.MESSAGE_WITH_DATA = ' with Data';
        //TwilioAdapter
        CtiMessages.MESSAGE_HANDLER_ADDED = 'Handler added for event ';
        CtiMessages.MESSAGE_HANDLER_REMOVED = 'Handler removed for event ';
        CtiMessages.MESSAGE_ALL_HANDLERS_REMOVED = 'Removing all event handlers..';
        //TwilioCommunicationHandler
        CtiMessages.MESSAGE_LOGIN = 'Logging in';
        CtiMessages.MESSAGE_LOGIN_ERROR_DEVICE = 'An error occurred. Unable to login. ';
        CtiMessages.MESSAGE_DEVICE_INIT_FAILURE = 'Unable to initialize device due to ';
        CtiMessages.MESSAGE_LOGIN_FAILURE = 'Login failed due to ';
        CtiMessages.MESSAGE_LOGOUT = 'Logging out..';
        CtiMessages.MESSAGE_NOT_LOGGEDIN_FOR_ACTION = 'You are not Logged-in to perform this action!';
        CtiMessages.MESSAGE_REQUEST_ACTIVITY_UPDATE = 'Requesting activity update';
        CtiMessages.MESSAGE_ACTIVITY_UPDATE_ERROR = 'Error while updating activity';
        CtiMessages.MESSAGE_CONTACT_SEARCH = 'Searching for contact ';
        CtiMessages.MESSAGE_CONTACT_SEARCH_SUCCESS = 'Contact search succeeded ';
        CtiMessages.MESSAGE_DIALING = 'Dialing ';
        CtiMessages.MESSAGE_SEARCH_AVAILABLE_AGENTS = 'Searching for available agents..';
        CtiMessages.MESSAGE_AGENT_SEARCH_SUCCESS = 'Search for available agents completed';
        CtiMessages.MESSAGE_AGENT_SEARCH_FAILURE = 'Search for available agents failed';
        CtiMessages.MESSAGE_CTI_AUTHORIZE = 'Requesting for CTI Authorization..';
        CtiMessages.MESSAGE_CTI_ENABLED = 'CTI is available to agent';
        CtiMessages.MESSAGE_CTI_DISABLED = 'CTI not available for agent';
        CtiMessages.MESSAGE_CTI_AUTHORIZATION_FAILURE = 'Unable to authorize agent for CTI';
        CtiMessages.MESSAGE_REQUEST_CALL_TRANSFER = 'Requesting for call transfer to agent';
        CtiMessages.MESSAGE_UPDATE_DEVICE = 'Updating device/worker with new token..';
        CtiMessages.MESSAGE_UPDATE_DEVICE_SUCCESS = 'Device/worker renewed successfully';
        CtiMessages.MESSAGE_TOKEN_UPDATE_FAILURE = 'Unable to renew capability token';
        CtiMessages.MESSAGE_LOG_ACTION = 'Action logged';
        CtiMessages.MESSAGE_LOG_ATION_FAILURE = 'Unable to log action';
        CtiMessages.MESSAGE_DEVICE_INITIALIZE = 'One-time initialization of Twilio Device';
        CtiMessages.MESSAGE_INCOMING_CONNECTION = 'Incoming connection from ';
        CtiMessages.MESSAGE_CONNECTION_ESTABLISHED = 'Connection established with server';
        CtiMessages.MESSAGE_CONNECTION_BROKE = 'Disconnected from server';
        CtiMessages.MESSAGE_DISPATCH_LOGIN_SUCCESS = 'Dispatching event Login Success';
        CtiMessages.MESSAGE_RESERVATION_CREATED = 'Reservation created for agent.';
        CtiMessages.MESSAGE_RESERVATION_CANCELLED = 'Reservation canceled';
        CtiMessages.MESSAGE_RESERVATION_ACCEPTED = 'Reservation accepted';
        CtiMessages.MESSAGE_RESERVATION_REJECTED = 'Reservation rejected';
        CtiMessages.MESSAGE_TOKEN_EXPIRED = 'Received Token Expired message. Requesting for renewal..';
        //CtiTelephonyAddin
        CtiMessages.MESSAGE_LOAD_EXTENSION = 'Loading extension..';
        CtiMessages.MESSAGE_OBTAINED_SDK = 'Obtained SDK..';
        CtiMessages.MESSAGE_INITIALIZE_ADDIN = 'Initializing CTI Addin- Toolbar menu..';
        CtiMessages.MESSAGE_INITIALIZE_SIDEPANEL = 'Initializing CTI Addin- SidePane menu..';
        CtiMessages.MESSAGE_REGISTER_EVENT_HANDLERS = 'Registering event handlers..';
        CtiMessages.MESSAGE_HANDLE_OUTGOING_CALL = 'Handling outbound to';
        CtiMessages.MESSAGE_INITIATE_LOGIN = 'Initiating login process..';
        CtiMessages.MESSAGE_PARTIAL_LOGOUT = 'You are not completely logged out.';
        CtiMessages.MESSAGE_ALREADY_LOGGED_IN = 'Already logged in.';
        CtiMessages.MESSAGE_UI_UPDATE_AFTER_LOGIN_SUCCESS = 'Updating UI after successful login';
        CtiMessages.MESSAGE_CLIENT_STATUS = 'Client status';
        CtiMessages.MESSAGE_SERVER_STATUS = 'Status Update from Server';
        CtiMessages.MESSAGE_HANDLE_CALL_INCOMING = 'Handling incoming call..';
        CtiMessages.MESSAGE_HANDLE_CALL_CONNECTED = 'Handling connected call..';
        CtiMessages.MESSAGE_HANDLE_CALL_DISCONNECT = 'Handling call disconnect..';
        CtiMessages.MESSAGE_HANDLE_CALL_CANCEL = 'Handling cancelled call..';
        CtiMessages.MESSAGE_HANDLE_CALL_TIMEOUT = 'Handling timed out call..';
        CtiMessages.MESSAGE_HANDLE_AGENT_SEARCH_COMPLETION = 'Handling agent search completion..';
        CtiMessages.MESSAGE_HANDLE_TOKEN_EXPIRY = 'Handling Token expiry..';
        CtiMessages.MESSAGE_OPEN_INTERACTION_WORKSPACE = 'Opening interaction workspace..';
        CtiMessages.MESSAGE_MAIL_NOT_AVAILABLE = 'Mail not available';
        CtiMessages.MESSAGE_INITIATE_AGENT_SEARCH = 'Initiating search for available agents..';
        CtiMessages.MESSAGE_INITIATE_TRANSFER = 'Initiating transfer call request..';
        CtiMessages.MESSAGE_BY_AGENT = ' by agent ';
        CtiMessages.MESSAGE_INITIATE_ACTIVITY_UPDATE = 'Initiating activity update request';
        CtiMessages.MESSAGE_CALL_SUMMARIZED = 'Call already summarized..';
        CtiMessages.MESSAGE_SUMMARIZE_CALL = 'Summarizing call..';
        CtiMessages.MESSAGE_CALL_DURATION = 'Call Duration: ';
        CtiMessages.MESSAGE_CALL_START = 'Call started at: ';
        CtiMessages.MESSAGE_CALL_END = 'Call ended at: ';
        CtiMessages.MESSAGE_CALL_TRANSFERRED_TO = 'Call transferred to ';
        CtiMessages.MESSAGE_CALL_ACCEPTED_BY_AGENT = 'Call accepted by agent ';
        CtiMessages.MESSAGE_CALL_REJECTED_BY_AGENT = 'Call rejected by agent ';
        CtiMessages.MESSAGE_WAIT_WHILE_TRANSFER = 'Please wait. Your call is being transferred..!!';
        //CtiViewHelper
        CtiMessages.MESSAGE_NO_ONLINE_AGENTS = 'No agents are available now';
        return CtiMessages;
    }());
    exports.CtiMessages = CtiMessages;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3RpTWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdGlNZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Z0dBS2dHOzs7O0lBRWhHO1FBQUE7UUF5RkEsQ0FBQztRQXZGRyxRQUFRO1FBQ00sNEJBQWdCLEdBQVcsTUFBTSxDQUFDO1FBQ2xDLDZCQUFpQixHQUFXLGtCQUFrQixDQUFDO1FBRTdELG9CQUFvQjtRQUNOLGtDQUFzQixHQUFXLG9CQUFvQixDQUFDO1FBQ3RELDZCQUFpQixHQUFXLFlBQVksQ0FBQztRQUV2RCxlQUFlO1FBQ0QsaUNBQXFCLEdBQVUsMEJBQTBCLENBQUM7UUFDMUQsbUNBQXVCLEdBQVcsNEJBQTRCLENBQUM7UUFDL0Qsd0NBQTRCLEdBQVcsK0JBQStCLENBQUM7UUFFckYsNEJBQTRCO1FBQ2QseUJBQWEsR0FBVyxZQUFZLENBQUM7UUFDckMsc0NBQTBCLEdBQVcsc0NBQXNDLENBQUM7UUFDNUUsdUNBQTJCLEdBQVcscUNBQXFDLENBQUM7UUFDNUUsaUNBQXFCLEdBQVcsc0JBQXNCLENBQUM7UUFDdkQsMEJBQWMsR0FBVyxlQUFlLENBQUM7UUFDekMsMkNBQStCLEdBQVcsK0NBQStDLENBQUM7UUFDMUYsMkNBQStCLEdBQVcsNEJBQTRCLENBQUM7UUFDdkUseUNBQTZCLEdBQVcsK0JBQStCLENBQUM7UUFDeEUsa0NBQXNCLEdBQVcsd0JBQXdCLENBQUM7UUFDMUQsMENBQThCLEdBQVcsMkJBQTJCLENBQUM7UUFDckUsMkJBQWUsR0FBVyxVQUFVLENBQUM7UUFDckMsMkNBQStCLEdBQVcsa0NBQWtDLENBQUM7UUFDN0Usd0NBQTRCLEdBQVcsdUNBQXVDLENBQUM7UUFDL0Usd0NBQTRCLEdBQVcsb0NBQW9DLENBQUM7UUFDNUUsaUNBQXFCLEdBQVcsb0NBQW9DLENBQUM7UUFDckUsK0JBQW1CLEdBQVcsMkJBQTJCLENBQUM7UUFDMUQsZ0NBQW9CLEdBQVcsNkJBQTZCLENBQUM7UUFDN0QsNkNBQWlDLEdBQVcsbUNBQW1DLENBQUM7UUFDaEYseUNBQTZCLEdBQVcsdUNBQXVDLENBQUM7UUFDaEYsaUNBQXFCLEdBQVcseUNBQXlDLENBQUM7UUFDMUUseUNBQTZCLEdBQVcsb0NBQW9DLENBQUM7UUFDN0Usd0NBQTRCLEdBQVcsa0NBQWtDLENBQUM7UUFDMUUsOEJBQWtCLEdBQVcsZUFBZSxDQUFDO1FBQzdDLHFDQUF5QixHQUFXLHNCQUFzQixDQUFDO1FBQzNELHFDQUF5QixHQUFXLDBDQUEwQyxDQUFDO1FBQy9FLHVDQUEyQixHQUFXLDJCQUEyQixDQUFDO1FBQ2xFLDBDQUE4QixHQUFXLG9DQUFvQyxDQUFDO1FBQzlFLG9DQUF3QixHQUFXLDBCQUEwQixDQUFDO1FBQzlELDBDQUE4QixHQUFXLGlDQUFpQyxDQUFDO1FBQzNFLHVDQUEyQixHQUFXLGdDQUFnQyxDQUFDO1FBQ3ZFLHlDQUE2QixHQUFXLHNCQUFzQixDQUFDO1FBQy9ELHdDQUE0QixHQUFXLHNCQUFzQixDQUFDO1FBQzlELHdDQUE0QixHQUFXLHNCQUFzQixDQUFDO1FBQzlELGlDQUFxQixHQUFXLDBEQUEwRCxDQUFDO1FBRXpHLG1CQUFtQjtRQUNMLGtDQUFzQixHQUFXLHFCQUFxQixDQUFDO1FBQ3ZELGdDQUFvQixHQUFXLGdCQUFnQixDQUFDO1FBQ2hELG9DQUF3QixHQUFXLHdDQUF3QyxDQUFDO1FBQzVFLHdDQUE0QixHQUFXLHlDQUF5QyxDQUFDO1FBQ2pGLDJDQUErQixHQUFXLDhCQUE4QixDQUFDO1FBQ3pFLHdDQUE0QixHQUFXLHNCQUFzQixDQUFDO1FBQzlELGtDQUFzQixHQUFXLDRCQUE0QixDQUFDO1FBQzlELGtDQUFzQixHQUFXLG9DQUFvQyxDQUFDO1FBQ3RFLHFDQUF5QixHQUFXLG9CQUFvQixDQUFDO1FBQ3pELGlEQUFxQyxHQUFXLG9DQUFvQyxDQUFDO1FBQ3JGLGlDQUFxQixHQUFXLGVBQWUsQ0FBQztRQUNoRCxpQ0FBcUIsR0FBVywyQkFBMkIsQ0FBQztRQUM1RCx3Q0FBNEIsR0FBVywwQkFBMEIsQ0FBQztRQUNsRSx5Q0FBNkIsR0FBVywyQkFBMkIsQ0FBQztRQUNwRSwwQ0FBOEIsR0FBVyw0QkFBNEIsQ0FBQztRQUN0RSxzQ0FBMEIsR0FBVywyQkFBMkIsQ0FBQztRQUNqRSx1Q0FBMkIsR0FBVywyQkFBMkIsQ0FBQztRQUNsRSxrREFBc0MsR0FBVyxvQ0FBb0MsQ0FBQztRQUN0Rix1Q0FBMkIsR0FBVyx5QkFBeUIsQ0FBQztRQUNoRSw4Q0FBa0MsR0FBVyxpQ0FBaUMsQ0FBQztRQUMvRSxzQ0FBMEIsR0FBVyxvQkFBb0IsQ0FBQztRQUMxRCx5Q0FBNkIsR0FBVywwQ0FBMEMsQ0FBQztRQUNuRixxQ0FBeUIsR0FBVSxvQ0FBb0MsQ0FBQztRQUN4RSw0QkFBZ0IsR0FBVyxZQUFZLENBQUM7UUFDeEMsNENBQWdDLEdBQVcsb0NBQW9DLENBQUM7UUFDaEYsbUNBQXVCLEdBQVcsMkJBQTJCLENBQUM7UUFDOUQsa0NBQXNCLEdBQVcsb0JBQW9CLENBQUM7UUFDdEQsaUNBQXFCLEdBQVcsaUJBQWlCLENBQUM7UUFDbEQsOEJBQWtCLEdBQVcsbUJBQW1CLENBQUM7UUFDakQsNEJBQWdCLEdBQVcsaUJBQWlCLENBQUM7UUFDN0MsdUNBQTJCLEdBQVcsc0JBQXNCLENBQUM7UUFDN0QsMENBQThCLEdBQVcseUJBQXlCLENBQUM7UUFDbkUsMENBQThCLEdBQVcseUJBQXlCLENBQUM7UUFDbkUsdUNBQTJCLEdBQVcsaURBQWlELENBQUM7UUFFdEcsZUFBZTtRQUNELG9DQUF3QixHQUFXLDZCQUE2QixDQUFDO1FBQ25GLGtCQUFDO0tBQUEsQUF6RkQsSUF5RkM7SUF6Rlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAkQUNDRUxFUkFUT1JfSEVBREVSX1BMQUNFX0hPTERFUiRcbiAqICBTSEExOiAkSWQ6IGIyNGI4YTVkZThkYjYxNWI2OTZiODNmNWJiZDIyZTc1ZWEyMjYwMDAgJFxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgRmlsZTogJEFDQ0VMRVJBVE9SX0hFQURFUl9GSUxFX05BTUVfUExBQ0VfSE9MREVSJFxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmV4cG9ydCBjbGFzcyBDdGlNZXNzYWdlcyB7XG5cbiAgICAvL0NPTU1PTlxuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9BUFBFTkRFUjogc3RyaW5nID0gJyA+PiAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9FWENFUFRJT046IHN0cmluZyA9IFwiRXhjZXB0aW9uIENhdWdodFwiO1xuXG4gICAgLy9TZXJ2ZXJFdmVudEhhbmRsZXJcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfRVZFTlRfRElTUEFUQ0g6IHN0cmluZyA9ICdEaXNwYXRjaGluZyBFdmVudCAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9XSVRIX0RBVEE6IHN0cmluZyA9ICcgd2l0aCBEYXRhJztcblxuICAgIC8vVHdpbGlvQWRhcHRlclxuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9IQU5ETEVSX0FEREVEOnN0cmluZyA9ICdIYW5kbGVyIGFkZGVkIGZvciBldmVudCAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9IQU5ETEVSX1JFTU9WRUQ6IHN0cmluZyA9ICdIYW5kbGVyIHJlbW92ZWQgZm9yIGV2ZW50ICc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0FMTF9IQU5ETEVSU19SRU1PVkVEOiBzdHJpbmcgPSAnUmVtb3ZpbmcgYWxsIGV2ZW50IGhhbmRsZXJzLi4nO1xuXG4gICAgLy9Ud2lsaW9Db21tdW5pY2F0aW9uSGFuZGxlclxuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9MT0dJTjogc3RyaW5nID0gJ0xvZ2dpbmcgaW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9MT0dJTl9FUlJPUl9ERVZJQ0U6IHN0cmluZyA9ICdBbiBlcnJvciBvY2N1cnJlZC4gVW5hYmxlIHRvIGxvZ2luLiAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9ERVZJQ0VfSU5JVF9GQUlMVVJFOiBzdHJpbmcgPSAnVW5hYmxlIHRvIGluaXRpYWxpemUgZGV2aWNlIGR1ZSB0byAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9MT0dJTl9GQUlMVVJFOiBzdHJpbmcgPSAnTG9naW4gZmFpbGVkIGR1ZSB0byAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9MT0dPVVQ6IHN0cmluZyA9ICdMb2dnaW5nIG91dC4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfTk9UX0xPR0dFRElOX0ZPUl9BQ1RJT046IHN0cmluZyA9ICdZb3UgYXJlIG5vdCBMb2dnZWQtaW4gdG8gcGVyZm9ybSB0aGlzIGFjdGlvbiEnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9SRVFVRVNUX0FDVElWSVRZX1VQREFURTogc3RyaW5nID0gJ1JlcXVlc3RpbmcgYWN0aXZpdHkgdXBkYXRlJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfQUNUSVZJVFlfVVBEQVRFX0VSUk9SOiBzdHJpbmcgPSAnRXJyb3Igd2hpbGUgdXBkYXRpbmcgYWN0aXZpdHknO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DT05UQUNUX1NFQVJDSDogc3RyaW5nID0gJ1NlYXJjaGluZyBmb3IgY29udGFjdCAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DT05UQUNUX1NFQVJDSF9TVUNDRVNTOiBzdHJpbmcgPSAnQ29udGFjdCBzZWFyY2ggc3VjY2VlZGVkICc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0RJQUxJTkc6IHN0cmluZyA9ICdEaWFsaW5nICc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX1NFQVJDSF9BVkFJTEFCTEVfQUdFTlRTOiBzdHJpbmcgPSAnU2VhcmNoaW5nIGZvciBhdmFpbGFibGUgYWdlbnRzLi4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9BR0VOVF9TRUFSQ0hfU1VDQ0VTUzogc3RyaW5nID0gJ1NlYXJjaCBmb3IgYXZhaWxhYmxlIGFnZW50cyBjb21wbGV0ZWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9BR0VOVF9TRUFSQ0hfRkFJTFVSRTogc3RyaW5nID0gJ1NlYXJjaCBmb3IgYXZhaWxhYmxlIGFnZW50cyBmYWlsZWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DVElfQVVUSE9SSVpFOiBzdHJpbmcgPSAnUmVxdWVzdGluZyBmb3IgQ1RJIEF1dGhvcml6YXRpb24uLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0NUSV9FTkFCTEVEOiBzdHJpbmcgPSAnQ1RJIGlzIGF2YWlsYWJsZSB0byBhZ2VudCc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0NUSV9ESVNBQkxFRDogc3RyaW5nID0gJ0NUSSBub3QgYXZhaWxhYmxlIGZvciBhZ2VudCc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0NUSV9BVVRIT1JJWkFUSU9OX0ZBSUxVUkU6IHN0cmluZyA9ICdVbmFibGUgdG8gYXV0aG9yaXplIGFnZW50IGZvciBDVEknO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9SRVFVRVNUX0NBTExfVFJBTlNGRVI6IHN0cmluZyA9ICdSZXF1ZXN0aW5nIGZvciBjYWxsIHRyYW5zZmVyIHRvIGFnZW50JztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfVVBEQVRFX0RFVklDRTogc3RyaW5nID0gJ1VwZGF0aW5nIGRldmljZS93b3JrZXIgd2l0aCBuZXcgdG9rZW4uLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX1VQREFURV9ERVZJQ0VfU1VDQ0VTUzogc3RyaW5nID0gJ0RldmljZS93b3JrZXIgcmVuZXdlZCBzdWNjZXNzZnVsbHknO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9UT0tFTl9VUERBVEVfRkFJTFVSRTogc3RyaW5nID0gJ1VuYWJsZSB0byByZW5ldyBjYXBhYmlsaXR5IHRva2VuJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfTE9HX0FDVElPTjogc3RyaW5nID0gJ0FjdGlvbiBsb2dnZWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9MT0dfQVRJT05fRkFJTFVSRTogc3RyaW5nID0gJ1VuYWJsZSB0byBsb2cgYWN0aW9uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfREVWSUNFX0lOSVRJQUxJWkU6IHN0cmluZyA9ICdPbmUtdGltZSBpbml0aWFsaXphdGlvbiBvZiBUd2lsaW8gRGV2aWNlJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfSU5DT01JTkdfQ09OTkVDVElPTjogc3RyaW5nID0gJ0luY29taW5nIGNvbm5lY3Rpb24gZnJvbSAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DT05ORUNUSU9OX0VTVEFCTElTSEVEOiBzdHJpbmcgPSAnQ29ubmVjdGlvbiBlc3RhYmxpc2hlZCB3aXRoIHNlcnZlcic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0NPTk5FQ1RJT05fQlJPS0U6IHN0cmluZyA9ICdEaXNjb25uZWN0ZWQgZnJvbSBzZXJ2ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9ESVNQQVRDSF9MT0dJTl9TVUNDRVNTOiBzdHJpbmcgPSAnRGlzcGF0Y2hpbmcgZXZlbnQgTG9naW4gU3VjY2Vzcyc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX1JFU0VSVkFUSU9OX0NSRUFURUQ6IHN0cmluZyA9ICdSZXNlcnZhdGlvbiBjcmVhdGVkIGZvciBhZ2VudC4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9SRVNFUlZBVElPTl9DQU5DRUxMRUQ6IHN0cmluZyA9ICdSZXNlcnZhdGlvbiBjYW5jZWxlZCc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX1JFU0VSVkFUSU9OX0FDQ0VQVEVEOiBzdHJpbmcgPSAnUmVzZXJ2YXRpb24gYWNjZXB0ZWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9SRVNFUlZBVElPTl9SRUpFQ1RFRDogc3RyaW5nID0gJ1Jlc2VydmF0aW9uIHJlamVjdGVkJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfVE9LRU5fRVhQSVJFRDogc3RyaW5nID0gJ1JlY2VpdmVkIFRva2VuIEV4cGlyZWQgbWVzc2FnZS4gUmVxdWVzdGluZyBmb3IgcmVuZXdhbC4uJztcblxuICAgIC8vQ3RpVGVsZXBob255QWRkaW5cbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfTE9BRF9FWFRFTlNJT046IHN0cmluZyA9ICdMb2FkaW5nIGV4dGVuc2lvbi4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfT0JUQUlORURfU0RLOiBzdHJpbmcgPSAnT2J0YWluZWQgU0RLLi4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9JTklUSUFMSVpFX0FERElOOiBzdHJpbmcgPSAnSW5pdGlhbGl6aW5nIENUSSBBZGRpbi0gVG9vbGJhciBtZW51Li4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9JTklUSUFMSVpFX1NJREVQQU5FTDogc3RyaW5nID0gJ0luaXRpYWxpemluZyBDVEkgQWRkaW4tIFNpZGVQYW5lIG1lbnUuLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX1JFR0lTVEVSX0VWRU5UX0hBTkRMRVJTOiBzdHJpbmcgPSAnUmVnaXN0ZXJpbmcgZXZlbnQgaGFuZGxlcnMuLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0hBTkRMRV9PVVRHT0lOR19DQUxMOiBzdHJpbmcgPSAnSGFuZGxpbmcgb3V0Ym91bmQgdG8nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9JTklUSUFURV9MT0dJTjogc3RyaW5nID0gJ0luaXRpYXRpbmcgbG9naW4gcHJvY2Vzcy4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfUEFSVElBTF9MT0dPVVQ6IHN0cmluZyA9ICdZb3UgYXJlIG5vdCBjb21wbGV0ZWx5IGxvZ2dlZCBvdXQuJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfQUxSRUFEWV9MT0dHRURfSU46IHN0cmluZyA9ICdBbHJlYWR5IGxvZ2dlZCBpbi4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9VSV9VUERBVEVfQUZURVJfTE9HSU5fU1VDQ0VTUzogc3RyaW5nID0gJ1VwZGF0aW5nIFVJIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DTElFTlRfU1RBVFVTOiBzdHJpbmcgPSAnQ2xpZW50IHN0YXR1cyc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX1NFUlZFUl9TVEFUVVM6IHN0cmluZyA9ICdTdGF0dXMgVXBkYXRlIGZyb20gU2VydmVyJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfSEFORExFX0NBTExfSU5DT01JTkc6IHN0cmluZyA9ICdIYW5kbGluZyBpbmNvbWluZyBjYWxsLi4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9IQU5ETEVfQ0FMTF9DT05ORUNURUQ6IHN0cmluZyA9ICdIYW5kbGluZyBjb25uZWN0ZWQgY2FsbC4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfSEFORExFX0NBTExfRElTQ09OTkVDVDogc3RyaW5nID0gJ0hhbmRsaW5nIGNhbGwgZGlzY29ubmVjdC4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfSEFORExFX0NBTExfQ0FOQ0VMOiBzdHJpbmcgPSAnSGFuZGxpbmcgY2FuY2VsbGVkIGNhbGwuLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0hBTkRMRV9DQUxMX1RJTUVPVVQ6IHN0cmluZyA9ICdIYW5kbGluZyB0aW1lZCBvdXQgY2FsbC4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfSEFORExFX0FHRU5UX1NFQVJDSF9DT01QTEVUSU9OOiBzdHJpbmcgPSAnSGFuZGxpbmcgYWdlbnQgc2VhcmNoIGNvbXBsZXRpb24uLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0hBTkRMRV9UT0tFTl9FWFBJUlk6IHN0cmluZyA9ICdIYW5kbGluZyBUb2tlbiBleHBpcnkuLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX09QRU5fSU5URVJBQ1RJT05fV09SS1NQQUNFOiBzdHJpbmcgPSAnT3BlbmluZyBpbnRlcmFjdGlvbiB3b3Jrc3BhY2UuLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX01BSUxfTk9UX0FWQUlMQUJMRTogc3RyaW5nID0gJ01haWwgbm90IGF2YWlsYWJsZSc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0lOSVRJQVRFX0FHRU5UX1NFQVJDSDogc3RyaW5nID0gJ0luaXRpYXRpbmcgc2VhcmNoIGZvciBhdmFpbGFibGUgYWdlbnRzLi4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9JTklUSUFURV9UUkFOU0ZFUjogc3RyaW5nID0nSW5pdGlhdGluZyB0cmFuc2ZlciBjYWxsIHJlcXVlc3QuLic7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0JZX0FHRU5UOiBzdHJpbmcgPSAnIGJ5IGFnZW50ICc7XG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX0lOSVRJQVRFX0FDVElWSVRZX1VQREFURTogc3RyaW5nID0gJ0luaXRpYXRpbmcgYWN0aXZpdHkgdXBkYXRlIHJlcXVlc3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DQUxMX1NVTU1BUklaRUQ6IHN0cmluZyA9ICdDYWxsIGFscmVhZHkgc3VtbWFyaXplZC4uJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfU1VNTUFSSVpFX0NBTEw6IHN0cmluZyA9ICdTdW1tYXJpemluZyBjYWxsLi4nO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DQUxMX0RVUkFUSU9OOiBzdHJpbmcgPSAnQ2FsbCBEdXJhdGlvbjogJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfQ0FMTF9TVEFSVDogc3RyaW5nID0gJ0NhbGwgc3RhcnRlZCBhdDogJztcbiAgICBwdWJsaWMgc3RhdGljIE1FU1NBR0VfQ0FMTF9FTkQ6IHN0cmluZyA9ICdDYWxsIGVuZGVkIGF0OiAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DQUxMX1RSQU5TRkVSUkVEX1RPOiBzdHJpbmcgPSAnQ2FsbCB0cmFuc2ZlcnJlZCB0byAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DQUxMX0FDQ0VQVEVEX0JZX0FHRU5UOiBzdHJpbmcgPSAnQ2FsbCBhY2NlcHRlZCBieSBhZ2VudCAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9DQUxMX1JFSkVDVEVEX0JZX0FHRU5UOiBzdHJpbmcgPSAnQ2FsbCByZWplY3RlZCBieSBhZ2VudCAnO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVTU0FHRV9XQUlUX1dISUxFX1RSQU5TRkVSOiBzdHJpbmcgPSAnUGxlYXNlIHdhaXQuIFlvdXIgY2FsbCBpcyBiZWluZyB0cmFuc2ZlcnJlZC4uISEnO1xuXG4gICAgLy9DdGlWaWV3SGVscGVyXG4gICAgcHVibGljIHN0YXRpYyBNRVNTQUdFX05PX09OTElORV9BR0VOVFM6IHN0cmluZyA9ICdObyBhZ2VudHMgYXJlIGF2YWlsYWJsZSBub3cnO1xufSJdfQ==