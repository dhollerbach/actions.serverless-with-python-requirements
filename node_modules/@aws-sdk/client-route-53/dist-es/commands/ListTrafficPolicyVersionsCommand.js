import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListTrafficPolicyVersionsCommand, se_ListTrafficPolicyVersionsCommand } from "../protocols/Aws_restXml";
export { $Command };
export class ListTrafficPolicyVersionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "ListTrafficPolicyVersions", {})
    .n("Route53Client", "ListTrafficPolicyVersionsCommand")
    .f(void 0, void 0)
    .ser(se_ListTrafficPolicyVersionsCommand)
    .de(de_ListTrafficPolicyVersionsCommand)
    .build() {
}
