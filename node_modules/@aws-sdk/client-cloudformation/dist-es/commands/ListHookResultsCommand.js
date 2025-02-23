import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListHookResultsCommand, se_ListHookResultsCommand } from "../protocols/Aws_query";
export { $Command };
export class ListHookResultsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("CloudFormation", "ListHookResults", {})
    .n("CloudFormationClient", "ListHookResultsCommand")
    .f(void 0, void 0)
    .ser(se_ListHookResultsCommand)
    .de(de_ListHookResultsCommand)
    .build() {
}
