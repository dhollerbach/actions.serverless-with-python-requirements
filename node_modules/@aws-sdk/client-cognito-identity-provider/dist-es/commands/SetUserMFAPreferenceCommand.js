import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetUserMFAPreferenceRequestFilterSensitiveLog, } from "../models/models_1";
import { de_SetUserMFAPreferenceCommand, se_SetUserMFAPreferenceCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SetUserMFAPreferenceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "SetUserMFAPreference", {})
    .n("CognitoIdentityProviderClient", "SetUserMFAPreferenceCommand")
    .f(SetUserMFAPreferenceRequestFilterSensitiveLog, void 0)
    .ser(se_SetUserMFAPreferenceCommand)
    .de(de_SetUserMFAPreferenceCommand)
    .build() {
}
