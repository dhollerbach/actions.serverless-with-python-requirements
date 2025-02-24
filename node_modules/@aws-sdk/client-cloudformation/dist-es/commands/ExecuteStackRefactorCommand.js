import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ExecuteStackRefactorCommand, se_ExecuteStackRefactorCommand } from "../protocols/Aws_query";
export { $Command };
export class ExecuteStackRefactorCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("CloudFormation", "ExecuteStackRefactor", {})
    .n("CloudFormationClient", "ExecuteStackRefactorCommand")
    .f(void 0, void 0)
    .ser(se_ExecuteStackRefactorCommand)
    .de(de_ExecuteStackRefactorCommand)
    .build() {
}
