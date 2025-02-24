import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminSetUserPasswordRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminSetUserPasswordCommand, se_AdminSetUserPasswordCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminSetUserPasswordCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminSetUserPassword", {})
    .n("CognitoIdentityProviderClient", "AdminSetUserPasswordCommand")
    .f(AdminSetUserPasswordRequestFilterSensitiveLog, void 0)
    .ser(se_AdminSetUserPasswordCommand)
    .de(de_AdminSetUserPasswordCommand)
    .build() {
}
