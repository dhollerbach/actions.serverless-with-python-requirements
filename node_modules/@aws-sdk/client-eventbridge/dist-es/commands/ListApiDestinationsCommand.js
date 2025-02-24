import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListApiDestinationsCommand, se_ListApiDestinationsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListApiDestinationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSEvents", "ListApiDestinations", {})
    .n("EventBridgeClient", "ListApiDestinationsCommand")
    .f(void 0, void 0)
    .ser(se_ListApiDestinationsCommand)
    .de(de_ListApiDestinationsCommand)
    .build() {
}
