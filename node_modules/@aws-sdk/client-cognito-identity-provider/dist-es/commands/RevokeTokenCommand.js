import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeTokenRequestFilterSensitiveLog } from "../models/models_1";
import { de_RevokeTokenCommand, se_RevokeTokenCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class RevokeTokenCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "RevokeToken", {})
    .n("CognitoIdentityProviderClient", "RevokeTokenCommand")
    .f(RevokeTokenRequestFilterSensitiveLog, void 0)
    .ser(se_RevokeTokenCommand)
    .de(de_RevokeTokenCommand)
    .build() {
}
