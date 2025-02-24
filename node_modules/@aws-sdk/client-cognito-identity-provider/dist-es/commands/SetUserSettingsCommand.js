import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetUserSettingsRequestFilterSensitiveLog, } from "../models/models_1";
import { de_SetUserSettingsCommand, se_SetUserSettingsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SetUserSettingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "SetUserSettings", {})
    .n("CognitoIdentityProviderClient", "SetUserSettingsCommand")
    .f(SetUserSettingsRequestFilterSensitiveLog, void 0)
    .ser(se_SetUserSettingsCommand)
    .de(de_SetUserSettingsCommand)
    .build() {
}
