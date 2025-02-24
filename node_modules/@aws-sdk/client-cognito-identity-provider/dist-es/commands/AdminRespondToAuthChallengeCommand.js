import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminRespondToAuthChallengeRequestFilterSensitiveLog, AdminRespondToAuthChallengeResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AdminRespondToAuthChallengeCommand, se_AdminRespondToAuthChallengeCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminRespondToAuthChallengeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminRespondToAuthChallenge", {})
    .n("CognitoIdentityProviderClient", "AdminRespondToAuthChallengeCommand")
    .f(AdminRespondToAuthChallengeRequestFilterSensitiveLog, AdminRespondToAuthChallengeResponseFilterSensitiveLog)
    .ser(se_AdminRespondToAuthChallengeCommand)
    .de(de_AdminRespondToAuthChallengeCommand)
    .build() {
}
