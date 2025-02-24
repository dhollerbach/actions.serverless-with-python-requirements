import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetUICustomizationRequestFilterSensitiveLog, SetUICustomizationResponseFilterSensitiveLog, } from "../models/models_1";
import { de_SetUICustomizationCommand, se_SetUICustomizationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SetUICustomizationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "SetUICustomization", {})
    .n("CognitoIdentityProviderClient", "SetUICustomizationCommand")
    .f(SetUICustomizationRequestFilterSensitiveLog, SetUICustomizationResponseFilterSensitiveLog)
    .ser(se_SetUICustomizationCommand)
    .de(de_SetUICustomizationCommand)
    .build() {
}
