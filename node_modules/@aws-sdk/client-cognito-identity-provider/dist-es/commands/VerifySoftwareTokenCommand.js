import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { VerifySoftwareTokenRequestFilterSensitiveLog, VerifySoftwareTokenResponseFilterSensitiveLog, } from "../models/models_1";
import { de_VerifySoftwareTokenCommand, se_VerifySoftwareTokenCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class VerifySoftwareTokenCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "VerifySoftwareToken", {})
    .n("CognitoIdentityProviderClient", "VerifySoftwareTokenCommand")
    .f(VerifySoftwareTokenRequestFilterSensitiveLog, VerifySoftwareTokenResponseFilterSensitiveLog)
    .ser(se_VerifySoftwareTokenCommand)
    .de(de_VerifySoftwareTokenCommand)
    .build() {
}
