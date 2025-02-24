import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUserPoolClientRequestFilterSensitiveLog, DescribeUserPoolClientResponseFilterSensitiveLog, } from "../models/models_0";
import { de_DescribeUserPoolClientCommand, se_DescribeUserPoolClientCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DescribeUserPoolClientCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DescribeUserPoolClient", {})
    .n("CognitoIdentityProviderClient", "DescribeUserPoolClientCommand")
    .f(DescribeUserPoolClientRequestFilterSensitiveLog, DescribeUserPoolClientResponseFilterSensitiveLog)
    .ser(se_DescribeUserPoolClientCommand)
    .de(de_DescribeUserPoolClientCommand)
    .build() {
}
