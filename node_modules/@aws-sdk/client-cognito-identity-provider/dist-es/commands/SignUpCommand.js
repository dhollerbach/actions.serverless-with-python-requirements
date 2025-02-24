import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SignUpRequestFilterSensitiveLog, SignUpResponseFilterSensitiveLog, } from "../models/models_1";
import { de_SignUpCommand, se_SignUpCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SignUpCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "SignUp", {})
    .n("CognitoIdentityProviderClient", "SignUpCommand")
    .f(SignUpRequestFilterSensitiveLog, SignUpResponseFilterSensitiveLog)
    .ser(se_SignUpCommand)
    .de(de_SignUpCommand)
    .build() {
}
