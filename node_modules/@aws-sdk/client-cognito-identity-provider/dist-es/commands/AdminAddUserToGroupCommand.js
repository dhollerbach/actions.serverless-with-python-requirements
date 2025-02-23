import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminAddUserToGroupRequestFilterSensitiveLog } from "../models/models_0";
import { de_AdminAddUserToGroupCommand, se_AdminAddUserToGroupCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminAddUserToGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminAddUserToGroup", {})
    .n("CognitoIdentityProviderClient", "AdminAddUserToGroupCommand")
    .f(AdminAddUserToGroupRequestFilterSensitiveLog, void 0)
    .ser(se_AdminAddUserToGroupCommand)
    .de(de_AdminAddUserToGroupCommand)
    .build() {
}
