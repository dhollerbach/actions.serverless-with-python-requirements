import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreateCidrCollectionCommand, se_CreateCidrCollectionCommand } from "../protocols/Aws_restXml";
export { $Command };
export class CreateCidrCollectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSDnsV20130401", "CreateCidrCollection", {})
    .n("Route53Client", "CreateCidrCollectionCommand")
    .f(void 0, void 0)
    .ser(se_CreateCidrCollectionCommand)
    .de(de_CreateCidrCollectionCommand)
    .build() {
}
