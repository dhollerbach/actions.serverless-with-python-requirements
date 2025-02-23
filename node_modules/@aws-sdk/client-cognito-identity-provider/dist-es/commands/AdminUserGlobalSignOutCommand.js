import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminUserGlobalSignOutRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminUserGlobalSignOutCommand, se_AdminUserGlobalSignOutCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminUserGlobalSignOutCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminUserGlobalSignOut", {})
    .n("CognitoIdentityProviderClient", "AdminUserGlobalSignOutCommand")
    .f(AdminUserGlobalSignOutRequestFilterSensitiveLog, void 0)
    .ser(se_AdminUserGlobalSignOutCommand)
    .de(de_AdminUserGlobalSignOutCommand)
    .build() {
}
