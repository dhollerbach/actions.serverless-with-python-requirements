import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteTrafficPolicyCommand, se_DeleteTrafficPolicyCommand } from "../protocols/Aws_restXml";
export { $Command };
export class DeleteTrafficPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "DeleteTrafficPolicy", {})
    .n("Route53Client", "DeleteTrafficPolicyCommand")
    .f(void 0, void 0)
    .ser(se_DeleteTrafficPolicyCommand)
    .de(de_DeleteTrafficPolicyCommand)
    .build() {
}
