import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminInitiateAuthRequestFilterSensitiveLog, AdminInitiateAuthResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AdminInitiateAuthCommand, se_AdminInitiateAuthCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminInitiateAuthCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminInitiateAuth", {})
    .n("CognitoIdentityProviderClient", "AdminInitiateAuthCommand")
    .f(AdminInitiateAuthRequestFilterSensitiveLog, AdminInitiateAuthResponseFilterSensitiveLog)
    .ser(se_AdminInitiateAuthCommand)
    .de(de_AdminInitiateAuthCommand)
    .build() {
}
