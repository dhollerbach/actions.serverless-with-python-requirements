import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GlobalSignOutRequestFilterSensitiveLog, } from "../models/models_1";
import { de_GlobalSignOutCommand, se_GlobalSignOutCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class GlobalSignOutCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GlobalSignOut", {})
    .n("CognitoIdentityProviderClient", "GlobalSignOutCommand")
    .f(GlobalSignOutRequestFilterSensitiveLog, void 0)
    .ser(se_GlobalSignOutCommand)
    .de(de_GlobalSignOutCommand)
    .build() {
}
