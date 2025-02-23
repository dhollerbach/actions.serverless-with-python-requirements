import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUICustomizationRequestFilterSensitiveLog, GetUICustomizationResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetUICustomizationCommand, se_GetUICustomizationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class GetUICustomizationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "GetUICustomization", {})
    .n("CognitoIdentityProviderClient", "GetUICustomizationCommand")
    .f(GetUICustomizationRequestFilterSensitiveLog, GetUICustomizationResponseFilterSensitiveLog)
    .ser(se_GetUICustomizationCommand)
    .de(de_GetUICustomizationCommand)
    .build() {
}
