import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmSignUpRequestFilterSensitiveLog, ConfirmSignUpResponseFilterSensitiveLog, } from "../models/models_0";
import { de_ConfirmSignUpCommand, se_ConfirmSignUpCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ConfirmSignUpCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ConfirmSignUp", {})
    .n("CognitoIdentityProviderClient", "ConfirmSignUpCommand")
    .f(ConfirmSignUpRequestFilterSensitiveLog, ConfirmSignUpResponseFilterSensitiveLog)
    .ser(se_ConfirmSignUpCommand)
    .de(de_ConfirmSignUpCommand)
    .build() {
}
