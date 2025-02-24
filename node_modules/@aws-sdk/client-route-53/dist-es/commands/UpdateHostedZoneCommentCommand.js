import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateHostedZoneCommentCommand, se_UpdateHostedZoneCommentCommand } from "../protocols/Aws_restXml";
export { $Command };
export class UpdateHostedZoneCommentCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getIdNormalizerPlugin(config),
    ];
})
    .s("AWSDnsV20130401", "UpdateHostedZoneComment", {})
    .n("Route53Client", "UpdateHostedZoneCommentCommand")
    .f(void 0, void 0)
    .ser(se_UpdateHostedZoneCommentCommand)
    .de(de_UpdateHostedZoneCommentCommand)
    .build() {
}
