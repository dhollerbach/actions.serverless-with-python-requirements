import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ChangePasswordRequestFilterSensitiveLog, } from "../models/models_0";
import { de_ChangePasswordCommand, se_ChangePasswordCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ChangePasswordCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ChangePassword", {})
    .n("CognitoIdentityProviderClient", "ChangePasswordCommand")
    .f(ChangePasswordRequestFilterSensitiveLog, void 0)
    .ser(se_ChangePasswordCommand)
    .de(de_ChangePasswordCommand)
    .build() {
}
