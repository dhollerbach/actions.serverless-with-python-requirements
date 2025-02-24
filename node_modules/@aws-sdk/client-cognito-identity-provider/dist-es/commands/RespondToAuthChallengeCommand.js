import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RespondToAuthChallengeRequestFilterSensitiveLog, RespondToAuthChallengeResponseFilterSensitiveLog, } from "../models/models_1";
import { de_RespondToAuthChallengeCommand, se_RespondToAuthChallengeCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class RespondToAuthChallengeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "RespondToAuthChallenge", {})
    .n("CognitoIdentityProviderClient", "RespondToAuthChallengeCommand")
    .f(RespondToAuthChallengeRequestFilterSensitiveLog, RespondToAuthChallengeResponseFilterSensitiveLog)
    .ser(se_RespondToAuthChallengeCommand)
    .de(de_RespondToAuthChallengeCommand)
    .build() {
}
