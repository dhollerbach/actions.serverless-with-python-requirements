import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminConfirmSignUpRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminConfirmSignUpCommand, se_AdminConfirmSignUpCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminConfirmSignUpCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminConfirmSignUp", {})
    .n("CognitoIdentityProviderClient", "AdminConfirmSignUpCommand")
    .f(AdminConfirmSignUpRequestFilterSensitiveLog, void 0)
    .ser(se_AdminConfirmSignUpCommand)
    .de(de_AdminConfirmSignUpCommand)
    .build() {
}
