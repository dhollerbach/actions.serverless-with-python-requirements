import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreateHostedZoneCommand, se_CreateHostedZoneCommand } from "../protocols/Aws_restXml";
export { $Command };
export class CreateHostedZoneCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "CreateHostedZone", {})
    .n("Route53Client", "CreateHostedZoneCommand")
    .f(void 0, void 0)
    .ser(se_CreateHostedZoneCommand)
    .de(de_CreateHostedZoneCommand)
    .build() {
}
