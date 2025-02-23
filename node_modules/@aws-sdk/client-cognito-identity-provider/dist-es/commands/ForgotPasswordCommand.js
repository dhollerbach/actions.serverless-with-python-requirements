import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ForgotPasswordRequestFilterSensitiveLog, } from "../models/models_0";
import { de_ForgotPasswordCommand, se_ForgotPasswordCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ForgotPasswordCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ForgotPassword", {})
    .n("CognitoIdentityProviderClient", "ForgotPasswordCommand")
    .f(ForgotPasswordRequestFilterSensitiveLog, void 0)
    .ser(se_ForgotPasswordCommand)
    .de(de_ForgotPasswordCommand)
    .build() {
}
