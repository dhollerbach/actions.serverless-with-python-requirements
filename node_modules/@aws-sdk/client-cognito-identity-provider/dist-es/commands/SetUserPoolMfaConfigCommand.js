import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_SetUserPoolMfaConfigCommand, se_SetUserPoolMfaConfigCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SetUserPoolMfaConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "SetUserPoolMfaConfig", {})
    .n("CognitoIdentityProviderClient", "SetUserPoolMfaConfigCommand")
    .f(void 0, void 0)
    .ser(se_SetUserPoolMfaConfigCommand)
    .de(de_SetUserPoolMfaConfigCommand)
    .build() {
}
