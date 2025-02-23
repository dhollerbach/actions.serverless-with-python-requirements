import { getChangeResourceRecordSetsPlugin, getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ChangeResourceRecordSetsCommand, se_ChangeResourceRecordSetsCommand } from "../protocols/Aws_restXml";
export { $Command };
export class ChangeResourceRecordSetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getChangeResourceRecordSetsPlugin(config),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "ChangeResourceRecordSets", {})
    .n("Route53Client", "ChangeResourceRecordSetsCommand")
    .f(void 0, void 0)
    .ser(se_ChangeResourceRecordSetsCommand)
    .de(de_ChangeResourceRecordSetsCommand)
    .build() {
}
