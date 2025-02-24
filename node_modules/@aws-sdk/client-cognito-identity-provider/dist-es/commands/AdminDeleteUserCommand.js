import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminDeleteUserRequestFilterSensitiveLog } from "../models/models_0";
import { de_AdminDeleteUserCommand, se_AdminDeleteUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminDeleteUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminDeleteUser", {})
    .n("CognitoIdentityProviderClient", "AdminDeleteUserCommand")
    .f(AdminDeleteUserRequestFilterSensitiveLog, void 0)
    .ser(se_AdminDeleteUserCommand)
    .de(de_AdminDeleteUserCommand)
    .build() {
}
