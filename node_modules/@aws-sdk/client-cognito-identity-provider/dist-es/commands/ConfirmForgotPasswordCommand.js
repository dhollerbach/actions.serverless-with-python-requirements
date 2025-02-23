import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmForgotPasswordRequestFilterSensitiveLog, } from "../models/models_0";
import { de_ConfirmForgotPasswordCommand, se_ConfirmForgotPasswordCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ConfirmForgotPasswordCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ConfirmForgotPassword", {})
    .n("CognitoIdentityProviderClient", "ConfirmForgotPasswordCommand")
    .f(ConfirmForgotPasswordRequestFilterSensitiveLog, void 0)
    .ser(se_ConfirmForgotPasswordCommand)
    .de(de_ConfirmForgotPasswordCommand)
    .build() {
}
