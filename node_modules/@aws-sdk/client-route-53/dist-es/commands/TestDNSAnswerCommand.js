import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_TestDNSAnswerCommand, se_TestDNSAnswerCommand } from "../protocols/Aws_restXml";
export { $Command };
export class TestDNSAnswerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "TestDNSAnswer", {})
    .n("Route53Client", "TestDNSAnswerCommand")
    .f(void 0, void 0)
    .ser(se_TestDNSAnswerCommand)
    .de(de_TestDNSAnswerCommand)
    .build() {
}
