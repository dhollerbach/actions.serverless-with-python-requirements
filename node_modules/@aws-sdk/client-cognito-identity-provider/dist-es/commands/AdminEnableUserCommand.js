import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminEnableUserRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminEnableUserCommand, se_AdminEnableUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminEnableUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminEnableUser", {})
    .n("CognitoIdentityProviderClient", "AdminEnableUserCommand")
    .f(AdminEnableUserRequestFilterSensitiveLog, void 0)
    .ser(se_AdminEnableUserCommand)
    .de(de_AdminEnableUserCommand)
    .build() {
}
