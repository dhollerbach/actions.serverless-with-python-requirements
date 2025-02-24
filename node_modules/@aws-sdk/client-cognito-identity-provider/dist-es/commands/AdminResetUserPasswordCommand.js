import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminResetUserPasswordRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminResetUserPasswordCommand, se_AdminResetUserPasswordCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminResetUserPasswordCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminResetUserPassword", {})
    .n("CognitoIdentityProviderClient", "AdminResetUserPasswordCommand")
    .f(AdminResetUserPasswordRequestFilterSensitiveLog, void 0)
    .ser(se_AdminResetUserPasswordCommand)
    .de(de_AdminResetUserPasswordCommand)
    .build() {
}
