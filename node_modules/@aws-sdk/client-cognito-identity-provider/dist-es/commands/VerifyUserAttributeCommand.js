import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyUserAttributeRequestFilterSensitiveLog, } from "../models/models_1";
import { de_VerifyUserAttributeCommand, se_VerifyUserAttributeCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class VerifyUserAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "VerifyUserAttribute", {})
    .n("CognitoIdentityProviderClient", "VerifyUserAttributeCommand")
    .f(VerifyUserAttributeRequestFilterSensitiveLog, void 0)
    .ser(se_VerifyUserAttributeCommand)
    .de(de_VerifyUserAttributeCommand)
    .build() {
}
