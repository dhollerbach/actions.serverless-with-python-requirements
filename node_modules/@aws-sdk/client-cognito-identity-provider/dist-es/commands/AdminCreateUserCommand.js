import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminCreateUserRequestFilterSensitiveLog, AdminCreateUserResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AdminCreateUserCommand, se_AdminCreateUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminCreateUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminCreateUser", {})
    .n("CognitoIdentityProviderClient", "AdminCreateUserCommand")
    .f(AdminCreateUserRequestFilterSensitiveLog, AdminCreateUserResponseFilterSensitiveLog)
    .ser(se_AdminCreateUserCommand)
    .de(de_AdminCreateUserCommand)
    .build() {
}
