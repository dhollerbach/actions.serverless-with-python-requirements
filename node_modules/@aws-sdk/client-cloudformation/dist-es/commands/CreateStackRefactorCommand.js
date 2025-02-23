import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreateStackRefactorCommand, se_CreateStackRefactorCommand } from "../protocols/Aws_query";
export { $Command };
export class CreateStackRefactorCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("CloudFormation", "CreateStackRefactor", {})
    .n("CloudFormationClient", "CreateStackRefactorCommand")
    .f(void 0, void 0)
    .ser(se_CreateStackRefactorCommand)
    .de(de_CreateStackRefactorCommand)
    .build() {
}
