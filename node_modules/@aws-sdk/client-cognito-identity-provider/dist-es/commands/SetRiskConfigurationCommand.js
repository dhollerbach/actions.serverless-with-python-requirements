import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetRiskConfigurationRequestFilterSensitiveLog, SetRiskConfigurationResponseFilterSensitiveLog, } from "../models/models_1";
import { de_SetRiskConfigurationCommand, se_SetRiskConfigurationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SetRiskConfigurationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "SetRiskConfiguration", {})
    .n("CognitoIdentityProviderClient", "SetRiskConfigurationCommand")
    .f(SetRiskConfigurationRequestFilterSensitiveLog, SetRiskConfigurationResponseFilterSensitiveLog)
    .ser(se_SetRiskConfigurationCommand)
    .de(de_SetRiskConfigurationCommand)
    .build() {
}
