import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetHostedZoneCountCommand, se_GetHostedZoneCountCommand } from "../protocols/Aws_restXml";
export { $Command };
export class GetHostedZoneCountCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSDnsV20130401", "GetHostedZoneCount", {})
    .n("Route53Client", "GetHostedZoneCountCommand")
    .f(void 0, void 0)
    .ser(se_GetHostedZoneCountCommand)
    .de(de_GetHostedZoneCountCommand)
    .build() {
}
