import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetQueryLoggingConfigCommand, se_GetQueryLoggingConfigCommand } from "../protocols/Aws_restXml";
export { $Command };
export class GetQueryLoggingConfigCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "GetQueryLoggingConfig", {})
    .n("Route53Client", "GetQueryLoggingConfigCommand")
    .f(void 0, void 0)
    .ser(se_GetQueryLoggingConfigCommand)
    .de(de_GetQueryLoggingConfigCommand)
    .build() {
}
