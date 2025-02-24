import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSoftwareTokenRequestFilterSensitiveLog, AssociateSoftwareTokenResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AssociateSoftwareTokenCommand, se_AssociateSoftwareTokenCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AssociateSoftwareTokenCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AssociateSoftwareToken", {})
    .n("CognitoIdentityProviderClient", "AssociateSoftwareTokenCommand")
    .f(AssociateSoftwareTokenRequestFilterSensitiveLog, AssociateSoftwareTokenResponseFilterSensitiveLog)
    .ser(se_AssociateSoftwareTokenCommand)
    .de(de_AssociateSoftwareTokenCommand)
    .build() {
}
