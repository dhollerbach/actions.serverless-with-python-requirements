import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListCidrCollectionsCommand, se_ListCidrCollectionsCommand } from "../protocols/Aws_restXml";
export { $Command };
export class ListCidrCollectionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSDnsV20130401", "ListCidrCollections", {})
    .n("Route53Client", "ListCidrCollectionsCommand")
    .f(void 0, void 0)
    .ser(se_ListCidrCollectionsCommand)
    .de(de_ListCidrCollectionsCommand)
    .build() {
}
