import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUserAttributeVerificationCodeRequestFilterSensitiveLog, } from "../models/models_0";
import { de_GetUserAttributeVerificationCodeCommand, se_GetUserAttributeVerificationCodeCommand, } from "../protocols/Aws_json1_1";
export { $Command };
export class GetUserAttributeVerificationCodeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GetUserAttributeVerificationCode", {})
    .n("CognitoIdentityProviderClient", "GetUserAttributeVerificationCodeCommand")
    .f(GetUserAttributeVerificationCodeRequestFilterSensitiveLog, void 0)
    .ser(se_GetUserAttributeVerificationCodeCommand)
    .de(de_GetUserAttributeVerificationCodeCommand)
    .build() {
}
