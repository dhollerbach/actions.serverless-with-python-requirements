import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResendConfirmationCodeRequestFilterSensitiveLog, } from "../models/models_1";
import { de_ResendConfirmationCodeCommand, se_ResendConfirmationCodeCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ResendConfirmationCodeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ResendConfirmationCode", {})
    .n("CognitoIdentityProviderClient", "ResendConfirmationCodeCommand")
    .f(ResendConfirmationCodeRequestFilterSensitiveLog, void 0)
    .ser(se_ResendConfirmationCodeCommand)
    .de(de_ResendConfirmationCodeCommand)
    .build() {
}
