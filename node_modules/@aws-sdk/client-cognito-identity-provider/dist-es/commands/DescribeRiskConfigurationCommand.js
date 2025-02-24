import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRiskConfigurationRequestFilterSensitiveLog, DescribeRiskConfigurationResponseFilterSensitiveLog, } from "../models/models_0";
import { de_DescribeRiskConfigurationCommand, se_DescribeRiskConfigurationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DescribeRiskConfigurationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DescribeRiskConfiguration", {})
    .n("CognitoIdentityProviderClient", "DescribeRiskConfigurationCommand")
    .f(DescribeRiskConfigurationRequestFilterSensitiveLog, DescribeRiskConfigurationResponseFilterSensitiveLog)
    .ser(se_DescribeRiskConfigurationCommand)
    .de(de_DescribeRiskConfigurationCommand)
    .build() {
}
