import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetDNSSECCommand, se_GetDNSSECCommand } from "../protocols/Aws_restXml";
export { $Command };
export class GetDNSSECCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "GetDNSSEC", {})
    .n("Route53Client", "GetDNSSECCommand")
    .f(void 0, void 0)
    .ser(se_GetDNSSECCommand)
    .de(de_GetDNSSECCommand)
    .build() {
}
