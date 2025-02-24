import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { InitiateAuthRequestFilterSensitiveLog, InitiateAuthResponseFilterSensitiveLog, } from "../models/models_1";
import { de_InitiateAuthCommand, se_InitiateAuthCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class InitiateAuthCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "InitiateAuth", {})
    .n("CognitoIdentityProviderClient", "InitiateAuthCommand")
    .f(InitiateAuthRequestFilterSensitiveLog, InitiateAuthResponseFilterSensitiveLog)
    .ser(se_InitiateAuthCommand)
    .de(de_InitiateAuthCommand)
    .build() {
}
