import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminSetUserMFAPreferenceRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminSetUserMFAPreferenceCommand, se_AdminSetUserMFAPreferenceCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminSetUserMFAPreferenceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminSetUserMFAPreference", {})
    .n("CognitoIdentityProviderClient", "AdminSetUserMFAPreferenceCommand")
    .f(AdminSetUserMFAPreferenceRequestFilterSensitiveLog, void 0)
    .ser(se_AdminSetUserMFAPreferenceCommand)
    .de(de_AdminSetUserMFAPreferenceCommand)
    .build() {
}
