import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminDisableUserRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminDisableUserCommand, se_AdminDisableUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminDisableUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminDisableUser", {})
    .n("CognitoIdentityProviderClient", "AdminDisableUserCommand")
    .f(AdminDisableUserRequestFilterSensitiveLog, void 0)
    .ser(se_AdminDisableUserCommand)
    .de(de_AdminDisableUserCommand)
    .build() {
}
