import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteUserCommand, se_DeleteUserCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DeleteUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DeleteUser", {})
    .n("CognitoIdentityProviderClient", "DeleteUserCommand")
    .f(DeleteUserRequestFilterSensitiveLog, void 0)
    .ser(se_DeleteUserCommand)
    .de(de_DeleteUserCommand)
    .build() {
}
