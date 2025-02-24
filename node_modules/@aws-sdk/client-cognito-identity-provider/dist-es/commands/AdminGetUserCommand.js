import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminGetUserRequestFilterSensitiveLog, AdminGetUserResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AdminGetUserCommand, se_AdminGetUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminGetUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminGetUser", {})
    .n("CognitoIdentityProviderClient", "AdminGetUserCommand")
    .f(AdminGetUserRequestFilterSensitiveLog, AdminGetUserResponseFilterSensitiveLog)
    .ser(se_AdminGetUserCommand)
    .de(de_AdminGetUserCommand)
    .build() {
}
