import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ChangeTagsForResourceCommand, se_ChangeTagsForResourceCommand } from "../protocols/Aws_restXml";
export { $Command };
export class ChangeTagsForResourceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSDnsV20130401", "ChangeTagsForResource", {})
    .n("Route53Client", "ChangeTagsForResourceCommand")
    .f(void 0, void 0)
    .ser(se_ChangeTagsForResourceCommand)
    .de(de_ChangeTagsForResourceCommand)
    .build() {
}
