import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminSetUserSettingsRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminSetUserSettingsCommand, se_AdminSetUserSettingsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminSetUserSettingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminSetUserSettings", {})
    .n("CognitoIdentityProviderClient", "AdminSetUserSettingsCommand")
    .f(AdminSetUserSettingsRequestFilterSensitiveLog, void 0)
    .ser(se_AdminSetUserSettingsCommand)
    .de(de_AdminSetUserSettingsCommand)
    .build() {
}
