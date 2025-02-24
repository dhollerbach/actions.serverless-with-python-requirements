import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListAccountAliasesCommand, se_ListAccountAliasesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListAccountAliasesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListAccountAliases", {})
    .n("IAMClient", "ListAccountAliasesCommand")
    .f(void 0, void 0)
    .ser(se_ListAccountAliasesCommand)
    .de(de_ListAccountAliasesCommand)
    .build() {
}
